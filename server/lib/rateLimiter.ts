import { storage } from '../storage';

export class RateLimiter {
  private maxConversions: number;
  private windowHours: number;

  constructor(maxConversions = 50, windowHours = 1) {
    this.maxConversions = maxConversions;
    this.windowHours = windowHours;
  }

  async checkRateLimit(ipAddress: string): Promise<{ allowed: boolean; remaining: number }> {
    const rateLimit = await storage.getRateLimit(ipAddress);
    const now = new Date();

    if (!rateLimit) {
      // First request from this IP
      await storage.updateRateLimit(ipAddress, 1);
      return { allowed: true, remaining: this.maxConversions - 1 };
    }

    // Check if we need to reset the window
    const hoursSinceReset = (now.getTime() - rateLimit.lastReset.getTime()) / (1000 * 60 * 60);
    
    if (hoursSinceReset >= this.windowHours) {
      // Reset the rate limit
      await storage.resetRateLimit(ipAddress);
      await storage.updateRateLimit(ipAddress, 1);
      return { allowed: true, remaining: this.maxConversions - 1 };
    }

    // Check if limit exceeded
    if (rateLimit.conversionsCount >= this.maxConversions) {
      return { allowed: false, remaining: 0 };
    }

    // Increment the count
    const newCount = rateLimit.conversionsCount + 1;
    await storage.updateRateLimit(ipAddress, newCount);
    
    return { 
      allowed: true, 
      remaining: this.maxConversions - newCount 
    };
  }
}

export const rateLimiter = new RateLimiter();

// Note: In production, consider using Redis for distributed rate limiting
// Example Redis implementation:
/*
import Redis from 'ioredis';

export class RedisRateLimiter {
  private redis: Redis;
  private maxConversions: number;
  private windowSeconds: number;

  constructor(redis: Redis, maxConversions = 50, windowHours = 1) {
    this.redis = redis;
    this.maxConversions = maxConversions;
    this.windowSeconds = windowHours * 3600;
  }

  async checkRateLimit(ipAddress: string): Promise<{ allowed: boolean; remaining: number }> {
    const key = `rate_limit:${ipAddress}`;
    const current = await this.redis.incr(key);
    
    if (current === 1) {
      await this.redis.expire(key, this.windowSeconds);
    }
    
    if (current > this.maxConversions) {
      return { allowed: false, remaining: 0 };
    }
    
    return { allowed: true, remaining: this.maxConversions - current };
  }
}
*/
