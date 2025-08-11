import { sql } from "drizzle-orm";
import { pgTable, text, varchar, timestamp, integer, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const conversions = pgTable("conversions", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  originalFilename: text("original_filename").notNull(),
  originalFormat: text("original_format").notNull(),
  outputFilename: text("output_filename").notNull(),
  filePath: text("file_path").notNull(),
  ipAddress: text("ip_address").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  downloaded: boolean("downloaded").default(false),
  fileSize: integer("file_size").notNull(),
});

export const rateLimits = pgTable("rate_limits", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  ipAddress: text("ip_address").notNull().unique(),
  conversionsCount: integer("conversions_count").default(0).notNull(),
  lastReset: timestamp("last_reset").defaultNow().notNull(),
});

export const contactSubmissions = pgTable("contact_submissions", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  email: text("email").notNull(),
  subject: text("subject").notNull(),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const insertConversionSchema = createInsertSchema(conversions).pick({
  originalFilename: true,
  originalFormat: true,
  outputFilename: true,
  filePath: true,
  ipAddress: true,
  fileSize: true,
});

export const insertContactSchema = createInsertSchema(contactSubmissions).pick({
  name: true,
  email: true,
  subject: true,
  message: true,
});

export type InsertConversion = z.infer<typeof insertConversionSchema>;
export type Conversion = typeof conversions.$inferSelect;
export type InsertContact = z.infer<typeof insertContactSchema>;
export type ContactSubmission = typeof contactSubmissions.$inferSelect;
export type RateLimit = typeof rateLimits.$inferSelect;
