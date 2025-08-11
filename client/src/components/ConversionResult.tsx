import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Download, Copy, RefreshCw } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface ConversionResponse {
  success: boolean;
  conversionId: string;
  originalName: string;
  outputName: string;
  fileSize: number;
  downloadUrl: string;
  remaining: number;
}

interface ConversionResultProps {
  result: ConversionResponse;
  onReset: () => void;
}

export default function ConversionResult({ result, onReset }: ConversionResultProps) {
  const [isDownloading, setIsDownloading] = useState(false);
  const { toast } = useToast();

  const downloadUrl = `${window.location.origin}${result.downloadUrl}`;

  const handleDownload = async () => {
    try {
      setIsDownloading(true);
      
      const response = await fetch(result.downloadUrl);
      if (!response.ok) {
        throw new Error('Download failed');
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = result.outputName;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);

      toast({
        title: "Download Started",
        description: "Your PNG file is being downloaded.",
      });
    } catch (error) {
      toast({
        title: "Download Failed",
        description: "Failed to download the converted file. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsDownloading(false);
    }
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(downloadUrl);
      toast({
        title: "Link Copied",
        description: "Download link copied to clipboard.",
      });
    } catch (error) {
      toast({
        title: "Copy Failed",
        description: "Failed to copy link. Please copy it manually.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto animate-fade-in">
      <Card className="bg-green-50 border-green-200">
        <CardContent className="pt-6">
          <div className="text-center space-y-6">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
            
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Conversion Complete!
              </h2>
              <p className="text-gray-600 mb-1">
                Your image has been successfully converted to PNG format.
              </p>
              <p className="text-sm text-gray-500">
                File size: {(result.fileSize / 1024).toFixed(1)} KB • {result.remaining} conversions remaining
              </p>
            </div>
            
            <div className="space-y-4">
              <Button
                onClick={handleDownload}
                disabled={isDownloading}
                className="w-full px-8 py-4 h-auto"
                size="lg"
              >
                <Download className="mr-2 h-5 w-5" />
                {isDownloading ? "Downloading..." : "Download PNG File"}
              </Button>
              
              <div className="flex items-center space-x-2 bg-gray-50 rounded-lg p-3">
                <Input
                  value={downloadUrl}
                  readOnly
                  className="flex-1 bg-transparent border-none text-sm text-gray-600 focus-visible:ring-0"
                />
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleCopyLink}
                  className="px-3 py-1"
                >
                  <Copy className="mr-1 h-4 w-4" />
                  Copy
                </Button>
              </div>
              
              <Button
                variant="ghost"
                onClick={onReset}
                className="text-gray-600 hover:text-gray-900"
              >
                <RefreshCw className="mr-2 h-4 w-4" />
                Convert Another Image
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
