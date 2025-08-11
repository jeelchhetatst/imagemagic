# PNGConvert - Free Online Image Converter

## Overview

PNGConvert is a production-ready, full-stack image conversion web application that allows users to convert various image formats (JPG, JPEG, WEBP, HEIC, GIF, BMP, TIFF) to PNG format. The application provides a free, secure, and user-friendly service with automatic file cleanup, rate limiting, and privacy-first design principles.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript using Vite as the build tool
- **Routing**: Wouter for client-side routing (lightweight alternative to React Router)
- **Styling**: Tailwind CSS with shadcn/ui components for consistent design
- **State Management**: TanStack Query for server state and React hooks for local state
- **File Upload**: Drag-and-drop interface with progress indicators and file validation

### Backend Architecture
- **Framework**: Express.js with TypeScript for the REST API
- **Image Processing**: Dual-library approach using Sharp as primary processor with Jimp as fallback
- **File Handling**: Multer for multipart form uploads with memory storage
- **Rate Limiting**: In-memory rate limiter (50 conversions/hour per IP)
- **File Cleanup**: Automated scheduler that deletes files older than 1 hour
- **Error Handling**: Comprehensive error catching with meaningful user messages

### Data Storage Solutions
- **Database**: Drizzle ORM configured for PostgreSQL with schema for conversions, rate limits, and contact submissions
- **File Storage**: Temporary server-side storage in uploads directory with automatic cleanup
- **Session Storage**: In-memory storage for rate limiting and conversion tracking (production-ready for Redis migration)

### Authentication and Authorization
- **Rate Limiting**: IP-based request limiting to prevent abuse
- **File Validation**: Strict content-type checking and file size limits (max 15MB)
- **Security Headers**: CORS and security middleware for request validation
- **Input Sanitization**: Comprehensive input validation using Zod schemas

### External Service Integrations
- **Google Analytics**: Placeholder integration for traffic analytics
- **Google AdSense**: Ready-to-implement ad placement with required legal pages
- **reCAPTCHA**: Placeholder integration for bot prevention
- **Contact Forms**: Server-side form processing with validation

## External Dependencies

### Core Technologies
- **React 18+**: Frontend framework with hooks and functional components
- **Express.js**: Node.js web framework for API routes
- **TypeScript**: Type safety across frontend and backend
- **Vite**: Fast build tool and development server
- **Drizzle ORM**: Type-safe database toolkit for PostgreSQL

### Image Processing
- **Sharp**: Primary image processing library (Node.js native)
- **Jimp**: Fallback image processor (pure JavaScript)
- **Multer**: Middleware for handling multipart/form-data uploads

### UI and Styling
- **Tailwind CSS**: Utility-first CSS framework
- **shadcn/ui**: Pre-built component library based on Radix UI
- **Radix UI**: Accessible component primitives
- **Lucide React**: Icon library for consistent iconography

### Database and Storage
- **PostgreSQL**: Primary database (configured via Drizzle)
- **@neondatabase/serverless**: Serverless PostgreSQL driver
- **Node.js fs**: File system operations for temporary storage

### Development and Deployment
- **ESBuild**: Fast bundler for production builds
- **TSX**: TypeScript execution environment
- **Replit**: Cloud development and hosting platform integration

### Analytics and Monitoring
- **Google Analytics 4**: Website traffic and user behavior tracking
- **Server-side logging**: Request/response logging with timing
- **Error tracking**: Comprehensive error handling and logging

### Legal and Compliance
- **Privacy Policy**: GDPR and user privacy compliance
- **Terms of Service**: Usage terms and liability protection  
- **Cookie Policy**: Analytics and advertising cookie disclosure
- **Contact Forms**: User communication and feedback collection