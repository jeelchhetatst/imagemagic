import fs from 'fs/promises';
import path from 'path';
import { storage } from '../storage';

export async function cleanupExpiredFiles(): Promise<void> {
  try {
    // Get conversions older than 1 hour
    const expiredConversions = await storage.getExpiredConversions(1);
    
    console.log(`Found ${expiredConversions.length} expired conversions to clean up`);

    for (const conversion of expiredConversions) {
      try {
        // Delete the file from disk
        await fs.unlink(conversion.filePath);
        console.log(`Deleted file: ${conversion.filePath}`);
      } catch (error) {
        console.warn(`Failed to delete file ${conversion.filePath}:`, error);
      }

      // Remove from storage
      await storage.deleteConversion(conversion.id);
    }

    console.log('File cleanup completed');
  } catch (error: any) {
    console.error('Error during file cleanup:', error);
  }
}

// Run cleanup every 30 minutes
export function startFileCleanupScheduler(): void {
  console.log('Starting file cleanup scheduler (runs every 30 minutes)');
  
  // Run immediately
  cleanupExpiredFiles();
  
  // Then run every 30 minutes
  setInterval(cleanupExpiredFiles, 30 * 60 * 1000);
}

// Note: In production, consider using a proper job scheduler like:
// - node-cron for simple scheduling
// - Bull/BullMQ for Redis-based job queuing
// - External cron jobs on the server
