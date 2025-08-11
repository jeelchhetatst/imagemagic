import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Send, Shield } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const { toast } = useToast();

  const submitMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || 'Failed to send message');
      }

      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Message Sent!",
        description: "Thank you for your message. We'll get back to you soon!",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
    },
    onError: (error) => {
      toast({
        title: "Failed to Send",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all fields.",
        variant: "destructive",
      });
      return;
    }

    submitMutation.mutate(formData);
  };

  const handleInputChange = (field: keyof ContactFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">Contact Us</h1>
      
      <Card>
        <CardContent className="p-8">
          <p className="text-gray-600 dark:text-gray-300 mb-8 text-center">
            Have questions, feedback, or need support? We'd love to hear from you.
          </p>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Name
              </Label>
              <Input
                id="name"
                type="text"
                required
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                className="w-full"
                placeholder="Your full name"
              />
            </div>
            
            <div>
              <Label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className="w-full"
                placeholder="your.email@example.com"
              />
            </div>
            
            <div>
              <Label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                Subject
              </Label>
              <Select value={formData.subject} onValueChange={(value) => handleInputChange('subject', value)}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a topic" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="support">Technical Support</SelectItem>
                  <SelectItem value="feedback">Feedback</SelectItem>
                  <SelectItem value="business">Business Inquiry</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <Label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Message
              </Label>
              <Textarea
                id="message"
                required
                rows={5}
                value={formData.message}
                onChange={(e) => handleInputChange('message', e.target.value)}
                className="w-full"
                placeholder="Tell us how we can help you..."
              />
            </div>
            
            {/* CAPTCHA Placeholder */}
            <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 border-2 border-dashed border-gray-300 dark:border-gray-600">
              <p className="text-gray-600 dark:text-gray-300 text-sm text-center">
                <Shield className="inline mr-2 h-4 w-4" />
                CAPTCHA verification will appear here in production
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400 text-center mt-1">
                Add reCAPTCHA site key to environment variables
              </p>
            </div>
            
            <Button
              type="submit"
              disabled={submitMutation.isPending}
              className="w-full"
              size="lg"
            >
              <Send className="mr-2 h-5 w-5" />
              {submitMutation.isPending ? "Sending..." : "Send Message"}
            </Button>
          </form>
          
          <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700 text-center">
            <p className="text-gray-600 dark:text-gray-300 mb-2">You can also reach us directly at:</p>
            <a
              href="mailto:support@jpg2png-clone.com"
              className="text-primary hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 font-medium"
            >
              support@jpg2png-clone.com
            </a>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
