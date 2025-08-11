# Deployment and AdSense Setup Guide

Step-by-step instructions for deploying your JPG2PNG application and preparing it for Google AdSense.

## 🚀 Deployment on Replit

### Step 1: Initial Setup
1. **Fork the Repository**
   - Fork this repository to your Replit account
   - Name it something like "jpg2png-converter"

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Configure Environment Variables**
   - Go to Secrets tab in Replit
   - Add the following secrets:
     ```
     RECAPTCHA_SITE_KEY=your_site_key_here
     RECAPTCHA_SECRET_KEY=your_secret_key_here
     GA_TRACKING_ID=G-XXXXXXXXXX
     