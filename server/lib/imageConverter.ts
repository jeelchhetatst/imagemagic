import fs from 'fs/promises';
import path from 'path';
import { randomUUID } from 'crypto';

// Dynamic imports to handle optional dependencies
async function getSharp() {
  try {
    const sharp = await import('sharp');
    return sharp.default;
  } catch (error) {
    console.warn('Sharp not available, falling back to jimp');
    return null;
  }
}

async function getJimp() {
  try {
    const jimp = await import('jimp');
    return jimp as any;
  } catch (error) {
    throw new Error('Neither Sharp nor Jimp is available for image processing');
  }
}

export interface ConversionResult {
  outputPath: string;
  originalName: string;
  outputName: string;
  fileSize: number;
}

export async function convertToPng(
  inputBuffer: Buffer,
  originalName: string
): Promise<ConversionResult> {
  const uploadsDir = path.join(process.cwd(), 'uploads');
  
  // Ensure uploads directory exists
  try {
    await fs.mkdir(uploadsDir, { recursive: true });
  } catch (error) {
    // Directory might already exist
  }

  const outputName = `${path.parse(originalName).name}_${randomUUID()}.png`;
  const outputPath = path.join(uploadsDir, outputName);

  let converted = false;
  let outputBuffer: Buffer;

  // Try Sharp first
  const sharp = await getSharp();
  if (sharp && !converted) {
    try {
      outputBuffer = await sharp(inputBuffer)
        .png({ quality: 95, compressionLevel: 6 })
        .toBuffer();
      converted = true;
      console.log('Converted using Sharp');
    } catch (error) {
      console.warn('Sharp conversion failed:', error);
    }
  }

  // Fallback to Jimp
  if (!converted) {
    try {
      const Jimp = await getJimp();
      const image = await Jimp.read(inputBuffer);
      outputBuffer = await image.getBufferAsync(Jimp.MIME_PNG);
      converted = true;
      console.log('Converted using Jimp');
    } catch (error: any) {
      throw new Error(`Image conversion failed: ${error.message}`);
    }
  }

  if (!converted) {
    throw new Error('Image conversion failed with all available libraries');
  }

  // Write the converted file
  await fs.writeFile(outputPath, outputBuffer!);

  return {
    outputPath,
    originalName,
    outputName,
    fileSize: outputBuffer!.length,
  };
}

export function validateImageFile(file: Express.Multer.File): void {
  const allowedMimes = [
    'image/jpeg',
    'image/jpg',
    'image/png',
    'image/webp',
    'image/heic',
    'image/gif',
    'image/bmp',
    'image/tiff'
  ];

  if (!allowedMimes.includes(file.mimetype)) {
    throw new Error(`Unsupported file type: ${file.mimetype}. Supported formats: JPG, JPEG, PNG, WEBP, HEIC, GIF, BMP, TIFF`);
  }

  const maxSize = 15 * 1024 * 1024; // 15MB
  if (file.size > maxSize) {
    throw new Error(`File too large: ${(file.size / 1024 / 1024).toFixed(2)}MB. Maximum size: 15MB`);
  }
}
