import { useState, useRef, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Upload, FileImage, AlertCircle } from "lucide-react";
import { useMutation } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";
import ConversionResult from "./ConversionResult";

interface ConversionResponse {
  success: boolean;
  conversionId: string;
  originalName: string;
  outputName: string;
  fileSize: number;
  downloadUrl: string;
  remaining: number;
}

export default function UploadArea() {
  const [isDragOver, setIsDragOver] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [conversionResult, setConversionResult] = useState<ConversionResponse | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const convertMutation = useMutation({
    mutationFn: async (file: File): Promise<ConversionResponse> => {
      const formData = new FormData();
      formData.append('image', file);

      const response = await fetch('/api/convert', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || 'Conversion failed');
      }

      return response.json();
    },
    onSuccess: (data) => {
      setConversionResult(data);
      setSelectedFile(null);
      toast({
        title: "Conversion Complete!",
        description: `Your image has been converted to PNG format. ${data.remaining} conversions remaining.`,
      });
    },
    onError: (error) => {
      toast({
        title: "Conversion Failed",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  const validateFile = (file: File): string | null => {
    const allowedTypes = [
      'image/jpeg',
      'image/jpg', 
      'image/png',
      'image/webp',
      'image/heic',
      'image/gif',
      'image/bmp',
      'image/tiff'
    ];

    if (!allowedTypes.includes(file.type)) {
      return `Unsupported file type: ${file.type}. Please use JPG, JPEG, PNG, WEBP, HEIC, GIF, BMP, or TIFF.`;
    }

    const maxSize = 15 * 1024 * 1024; // 15MB
    if (file.size > maxSize) {
      return `File too large: ${(file.size / 1024 / 1024).toFixed(2)}MB. Maximum size is 15MB.`;
    }

    return null;
  };

  const handleFileSelect = useCallback((file: File) => {
    const error = validateFile(file);
    if (error) {
      toast({
        title: "Invalid File",
        description: error,
        variant: "destructive",
      });
      return;
    }

    setSelectedFile(file);
  }, [toast]);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);

    const files = Array.from(e.dataTransfer.files);
    if (files.length > 0) {
      handleFileSelect(files[0]);
    }
  }, [handleFileSelect]);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  }, []);

  const handleFileInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      handleFileSelect(files[0]);
    }
  }, [handleFileSelect]);

  const handleConvert = () => {
    if (selectedFile) {
      convertMutation.mutate(selectedFile);
    }
  };

  const resetUpload = () => {
    setSelectedFile(null);
    setConversionResult(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  if (conversionResult) {
    return <ConversionResult result={conversionResult} onReset={resetUpload} />;
  }

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div
        className={`upload-area bg-white rounded-2xl shadow-lg p-8 border-2 border-dashed transition-all duration-200 ${
          isDragOver ? 'drag-over border-primary bg-blue-50' : 'border-gray-300'
        }`}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
      >
        <div className="text-center">
          {selectedFile ? (
            <div className="space-y-4">
              <FileImage className="h-16 w-16 text-primary mx-auto" />
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Ready to Convert
                </h3>
                <p className="text-gray-600 mb-2">
                  {selectedFile.name}
                </p>
                <p className="text-sm text-gray-500">
                  Size: {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
                </p>
              </div>
              
              {convertMutation.isPending && (
                <div className="space-y-2">
                  <Progress value={undefined} className="w-full" />
                  <p className="text-sm text-gray-600">Converting your image...</p>
                </div>
              )}
              
              <div className="flex gap-4 justify-center">
                <Button
                  onClick={handleConvert}
                  disabled={convertMutation.isPending}
                  className="px-8"
                >
                  {convertMutation.isPending ? "Converting..." : "Convert to PNG"}
                </Button>
                <Button
                  variant="outline"
                  onClick={resetUpload}
                  disabled={convertMutation.isPending}
                >
                  Choose Different File
                </Button>
              </div>
            </div>
          ) : (
            <>
              <Upload className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                Drop your image here
              </h3>
              <p className="text-gray-600 mb-6">
                or click to browse files
              </p>
              
              <input
                ref={fileInputRef}
                type="file"
                className="hidden"
                accept=".jpg,.jpeg,.png,.webp,.heic,.gif,.bmp,.tiff"
                onChange={handleFileInputChange}
              />
              
              <Button
                onClick={() => fileInputRef.current?.click()}
                className="px-6 py-3"
              >
                <Upload className="mr-2 h-4 w-4" />
                Select Image
              </Button>
              
              <p className="text-sm text-gray-500 mt-4">
                Supports: JPG, JPEG, WEBP, HEIC, GIF, BMP, TIFF • Max size: 15MB
              </p>
            </>
          )}
        </div>
      </div>
      
      {convertMutation.error && (
        <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3">
          <AlertCircle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
          <div>
            <h4 className="font-medium text-red-900">Conversion Error</h4>
            <p className="text-red-700 text-sm">{convertMutation.error.message}</p>
          </div>
        </div>
      )}
    </div>
  );
}
