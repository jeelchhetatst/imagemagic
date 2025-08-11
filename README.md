# JPG2PNG - Free Online Image Converter

A production-ready, full-stack image conversion website that converts various image formats (JPG, JPEG, WEBP, HEIC, GIF, etc.) to PNG format. Built with React, Express, and modern web technologies.

## Features

- 🔄 **Universal Image Conversion**: Convert JPG, JPEG, WEBP, HEIC, GIF, BMP, TIFF to PNG
- 🚀 **Fast Processing**: Image conversion in seconds using Sharp/Jimp
- 🔒 **Privacy First**: Files automatically deleted after 1 hour
- 📱 **Mobile Responsive**: Works perfectly on all devices
- 🛡️ **Secure**: Rate limiting, file validation, and HTTPS
- 🆓 **Completely Free**: No watermarks, registration, or hidden fees
- ⚡ **Drag & Drop**: Easy file upload with progress indication
- 📊 **Analytics Ready**: Google Analytics and AdSense integration ready

## Tech Stack

- **Frontend**: React, TypeScript, Tailwind CSS, Wouter
- **Backend**: Express.js, Node.js
- **Image Processing**: Sharp (primary) with Jimp fallback
- **UI Components**: shadcn/ui
- **File Upload**: Multer
- **Rate Limiting**: In-memory (Redis ready for production)

## Quick Start

### Running on Replit

1. Fork this repository to Replit
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open the Replit preview to access the application

### Local Development

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd jpg2png-clone
   ```

2. Install dependencies:
   ```bash
   npm install
   