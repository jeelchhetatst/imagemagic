export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">About JPG2PNG</h1>
      
      <div className="prose prose-gray dark:prose-invert max-w-none">
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
          JPG2PNG is a free, fast, and secure online image converter that helps you transform 
          various image formats to PNG with just a few clicks.
        </p>
        
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Our Mission</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          We believe that image conversion should be simple, fast, and accessible to everyone. 
          Our goal is to provide a reliable tool that respects your privacy while delivering 
          high-quality results without any cost or registration requirements.
        </p>
        
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Why Choose JPG2PNG?</h2>
        <ul className="list-disc list-inside text-gray-600 mb-6">
          <li><strong>Free Forever:</strong> No hidden fees, premium upgrades, or subscription plans</li>
          <li><strong>Privacy First:</strong> Files automatically deleted after 1 hour - we never store your images</li>
          <li><strong>High Quality:</strong> Professional-grade conversion algorithms preserve image quality</li>
          <li><strong>Fast Processing:</strong> Most conversions complete in seconds</li>
          <li><strong>No Registration:</strong> Use immediately without creating accounts or providing personal information</li>
          <li><strong>Mobile Friendly:</strong> Works seamlessly on desktop, tablet, and mobile devices</li>
          <li><strong>Secure Transfer:</strong> All uploads and downloads use encrypted HTTPS connections</li>
        </ul>
        
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Supported Formats</h2>
        <p className="text-gray-600 mb-4">
          We support conversion from a wide range of popular image formats to PNG:
        </p>
        <ul className="list-disc list-inside text-gray-600 mb-6">
          <li><strong>JPEG/JPG:</strong> The most common photo format</li>
          <li><strong>WEBP:</strong> Modern web-optimized format</li>
          <li><strong>HEIC:</strong> iPhone's default photo format</li>
          <li><strong>GIF:</strong> Animated and static images</li>
          <li><strong>BMP:</strong> Windows bitmap format</li>
          <li><strong>TIFF:</strong> High-quality image format</li>
        </ul>
        
        <h2 className="text-xl font-semibold text-gray-900 mb-4">How It Works</h2>
        <ol className="list-decimal list-inside text-gray-600 mb-6">
          <li>Upload your image by dragging and dropping or clicking to browse</li>
          <li>We validate the file format and size (max 15MB)</li>
          <li>Our servers convert your image to PNG format using professional-grade algorithms</li>
          <li>Download your converted PNG file immediately</li>
          <li>Your original and converted files are automatically deleted after 1 hour</li>
        </ol>
        
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Technology</h2>
        <p className="text-gray-600 mb-6">
          Our conversion service uses industry-leading image processing libraries to ensure 
          high-quality results. We employ both Sharp and Jimp libraries with automatic fallback 
          to guarantee reliable processing across different image types and scenarios.
        </p>
        
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Fair Usage</h2>
        <p className="text-gray-600 mb-6">
          To ensure our service remains fast and available for everyone, we implement a fair usage 
          policy of 50 conversions per hour per IP address. This limit resets every hour and is 
          sufficient for most personal and business needs.
        </p>
        
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Contact Us</h2>
        <p className="text-gray-600">
          Have questions, suggestions, or need support? We'd love to hear from you at{" "}
          <a href="mailto:hello@jpg2png-clone.com" className="text-primary hover:text-blue-600">
            hello@jpg2png-clone.com
          </a>
        </p>
      </div>
    </div>
  );
}
