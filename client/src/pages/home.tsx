import UploadArea from "@/components/UploadArea";
import FeatureIcons from "@/components/FeatureIcons";
import FAQSection from "@/components/FAQSection";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-gradient dark:bg-gradient-to-br dark:from-gray-900 dark:to-gray-800 py-12 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              Convert Images to PNG{" "}
              <span className="text-primary bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
                for Free
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Transform JPG, JPEG, WEBP, HEIC, GIF and other formats to PNG instantly. 
              No watermarks, no registration required.
            </p>
          </div>
          
          <div className="mb-16">
            <UploadArea />
          </div>
          
          <FeatureIcons />
        </div>
      </section>

      <FAQSection />
    </>
  );
}
