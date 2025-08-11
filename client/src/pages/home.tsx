import UploadArea from "@/components/UploadArea";
import FeatureIcons from "@/components/FeatureIcons";
import FAQSection from "@/components/FAQSection";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-gradient py-12 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Convert Images to PNG{" "}
            <span className="text-primary">for Free</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Transform JPG, JPEG, WEBP, HEIC, GIF and other formats to PNG instantly. 
            No watermarks, no registration required.
          </p>
          
          <UploadArea />
          <FeatureIcons />
        </div>
      </section>

      <FAQSection />
    </>
  );
}
