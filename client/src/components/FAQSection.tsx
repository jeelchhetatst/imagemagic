import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: "Is it free to convert images?",
    answer: "Yes, our image converter is completely free to use. You can convert up to 50 images per hour with no watermarks or hidden fees."
  },
  {
    question: "What image formats do you support?",
    answer: "We support JPG, JPEG, WEBP, HEIC, GIF, BMP, TIFF and many other common image formats. All files are converted to high-quality PNG format."
  },
  {
    question: "Are my files secure?",
    answer: "Absolutely. All uploaded files are automatically deleted from our servers after 1 hour. We don't store or share your images with anyone."
  },
  {
    question: "What's the maximum file size?",
    answer: "You can upload files up to 15MB in size. This covers most standard photos and images for personal or business use."
  },
  {
    question: "Do I need to create an account?",
    answer: "No account required! Simply upload your image and download the converted PNG file immediately. It's that simple."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about our image converter
          </p>
        </div>
        
        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <Card key={index} className="overflow-hidden">
              <CardContent className="p-0">
                <Button
                  variant="ghost"
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors h-auto"
                  onClick={() => toggleFAQ(index)}
                >
                  <h3 className="font-semibold text-gray-900 text-left">
                    {item.question}
                  </h3>
                  {openIndex === index ? (
                    <ChevronUp className="h-5 w-5 text-gray-400 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-400 flex-shrink-0" />
                  )}
                </Button>
                
                {openIndex === index && (
                  <div className="px-6 pb-4 text-gray-600 animate-slide-up">
                    {item.answer}
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
