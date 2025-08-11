import { 
  type Conversion, 
  type InsertConversion, 
  type ContactSubmission, 
  type InsertContact,
  type RateLimit 
} from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  // Conversion methods
  createConversion(conversion: InsertConversion): Promise<Conversion>;
  getConversion(id: string): Promise<Conversion | undefined>;
  markAsDownloaded(id: string): Promise<void>;
  getExpiredConversions(hoursOld: number): Promise<Conversion[]>;
  deleteConversion(id: string): Promise<void>;
  
  // Rate limiting methods
  getRateLimit(ipAddress: string): Promise<RateLimit | undefined>;
  updateRateLimit(ipAddress: string, count: number): Promise<void>;
  resetRateLimit(ipAddress: string): Promise<void>;
  
  // Contact form methods
  createContactSubmission(contact: InsertContact): Promise<ContactSubmission>;
}

export class MemStorage implements IStorage {
  private conversions: Map<string, Conversion> = new Map();
  private rateLimits: Map<string, RateLimit> = new Map();
  private contacts: Map<string, ContactSubmission> = new Map();

  async createConversion(insertConversion: InsertConversion): Promise<Conversion> {
    const id = randomUUID();
    const conversion: Conversion = {
      ...insertConversion,
      id,
      createdAt: new Date(),
      downloaded: false,
    };
    this.conversions.set(id, conversion);
    return conversion;
  }

  async getConversion(id: string): Promise<Conversion | undefined> {
    return this.conversions.get(id);
  }

  async markAsDownloaded(id: string): Promise<void> {
    const conversion = this.conversions.get(id);
    if (conversion) {
      conversion.downloaded = true;
      this.conversions.set(id, conversion);
    }
  }

  async getExpiredConversions(hoursOld: number): Promise<Conversion[]> {
    const cutoffTime = new Date(Date.now() - hoursOld * 60 * 60 * 1000);
    return Array.from(this.conversions.values()).filter(
      conv => conv.createdAt < cutoffTime
    );
  }

  async deleteConversion(id: string): Promise<void> {
    this.conversions.delete(id);
  }

  async getRateLimit(ipAddress: string): Promise<RateLimit | undefined> {
    return this.rateLimits.get(ipAddress);
  }

  async updateRateLimit(ipAddress: string, count: number): Promise<void> {
    const existing = this.rateLimits.get(ipAddress);
    const rateLimit: RateLimit = {
      id: existing?.id || randomUUID(),
      ipAddress,
      conversionsCount: count,
      lastReset: existing?.lastReset || new Date(),
    };
    this.rateLimits.set(ipAddress, rateLimit);
  }

  async resetRateLimit(ipAddress: string): Promise<void> {
    const existing = this.rateLimits.get(ipAddress);
    if (existing) {
      existing.conversionsCount = 0;
      existing.lastReset = new Date();
      this.rateLimits.set(ipAddress, existing);
    }
  }

  async createContactSubmission(insertContact: InsertContact): Promise<ContactSubmission> {
    const id = randomUUID();
    const contact: ContactSubmission = {
      ...insertContact,
      id,
      createdAt: new Date(),
    };
    this.contacts.set(id, contact);
    return contact;
  }
}

export const storage = new MemStorage();
