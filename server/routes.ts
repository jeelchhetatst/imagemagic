import type { Express } from "express";
import { createServer, type Server } from "http";
import multer from "multer";
import path from "path";
import fs from "fs/promises";
import { storage } from "./storage";
import { convertToPng, validateImageFile } from "./lib/imageConverter";
import { rateLimiter } from "./lib/rateLimiter";
import { startFileCleanupScheduler } from "./lib/fileCleanup";
import { insertConversionSchema, insertContactSchema } from "@shared/schema";

// Configure multer for file uploads
const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 15 * 1024 * 1024, // 15MB
  },
  fileFilter: (req, file, cb) => {
    try {
      validateImageFile(file);
      cb(null, true);
    } catch (error: any) {
      cb(new Error(error.message));
    }
  },
});

export async function registerRoutes(app: Express): Promise<Server> {
  // Start the file cleanup scheduler
  startFileCleanupScheduler();

  // Image conversion endpoint
  app.post("/api/convert", upload.single("image"), async (req, res) => {
    try {
      if (!req.file) {
        return res.status(400).json({ 
          error: "No image file provided" 
        });
      }

      // Get client IP address
      const ipAddress = req.ip || req.connection.remoteAddress || "unknown";

      // Check rate limit
      const rateLimitResult = await rateLimiter.checkRateLimit(ipAddress);
      if (!rateLimitResult.allowed) {
        return res.status(429).json({
          error: "Rate limit exceeded. Maximum 50 conversions per hour.",
          remaining: rateLimitResult.remaining
        });
      }

      // Validate file
      validateImageFile(req.file);

      // Convert image
      const result = await convertToPng(req.file.buffer, req.file.originalname);

      // Store conversion record
      const conversion = await storage.createConversion({
        originalFilename: req.file.originalname,
        originalFormat: req.file.mimetype,
        outputFilename: result.outputName,
        filePath: result.outputPath,
        ipAddress,
        fileSize: result.fileSize,
      });

      res.json({
        success: true,
        conversionId: conversion.id,
        originalName: result.originalName,
        outputName: result.outputName,
        fileSize: result.fileSize,
        downloadUrl: `/api/download/${conversion.id}`,
        remaining: rateLimitResult.remaining
      });

    } catch (error: any) {
      console.error("Conversion error:", error);
      res.status(400).json({ 
        error: error.message || "Image conversion failed" 
      });
    }
  });

  // Download converted file
  app.get("/api/download/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const conversion = await storage.getConversion(id);

      if (!conversion) {
        return res.status(404).json({ 
          error: "File not found or has expired" 
        });
      }

      // Check if file exists on disk
      try {
        await fs.access(conversion.filePath);
      } catch {
        await storage.deleteConversion(id);
        return res.status(404).json({ 
          error: "File has been removed from server" 
        });
      }

      // Mark as downloaded
      await storage.markAsDownloaded(id);

      // Set headers for download
      res.setHeader('Content-Disposition', `attachment; filename="${conversion.outputFilename}"`);
      res.setHeader('Content-Type', 'image/png');
      res.setHeader('Cache-Control', 'public, max-age=3600'); // Cache for 1 hour

      // Stream the file
      const fileBuffer = await fs.readFile(conversion.filePath);
      res.send(fileBuffer);

    } catch (error) {
      console.error("Download error:", error);
      res.status(500).json({ 
        error: "Failed to download file" 
      });
    }
  });

  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSchema.parse(req.body);
      
      // TODO: Add CAPTCHA verification here
      // Example: await verifyCaptcha(req.body.captchaToken);
      
      const submission = await storage.createContactSubmission(validatedData);
      
      // TODO: Send email notification
      // Example: await sendEmail(validatedData);
      
      res.json({
        success: true,
        message: "Your message has been sent successfully. We'll get back to you soon!",
        id: submission.id
      });

    } catch (error: any) {
      console.error("Contact form error:", error);
      res.status(400).json({ 
        error: error.message || "Failed to submit contact form" 
      });
    }
  });

  // Health check endpoint
  app.get("/api/health", (req, res) => {
    res.json({ 
      status: "healthy", 
      timestamp: new Date().toISOString(),
      uptime: process.uptime()
    });
  });

  // Analytics endpoint (simple conversion count)
  app.get("/api/stats", async (req, res) => {
    try {
      // In a real app, you'd have proper analytics tracking
      res.json({
        message: "Analytics data would be available here",
        // conversionsToday: await getConversionsToday(),
        // totalConversions: await getTotalConversions(),
      });
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch statistics" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
