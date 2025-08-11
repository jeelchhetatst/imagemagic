export default function Privacy() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
      
      <div className="prose prose-gray max-w-none">
        <p className="text-gray-600 mb-6">
          <strong>Last updated:</strong> December 2024
        </p>
        
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Information We Collect</h2>
        <p className="text-gray-600 mb-6">
          We collect minimal information to provide our image conversion service. When you upload an image, 
          we temporarily store it on our servers for processing. We also collect basic analytics data such as:
        </p>
        <ul className="list-disc list-inside text-gray-600 mb-6">
          <li>IP address for rate limiting purposes</li>
          <li>File type and size for processing</li>
          <li>Conversion timestamps for automatic cleanup</li>
          <li>Basic usage analytics to improve our service</li>
        </ul>
        
        <h2 className="text-xl font-semibold text-gray-900 mb-4">How We Use Your Information</h2>
        <p className="text-gray-600 mb-6">
          Your uploaded images are used solely for conversion purposes. All files are automatically 
          deleted from our servers within 1 hour of upload. We never share, sell, or distribute your images. 
          The information we collect is used to:
        </p>
        <ul className="list-disc list-inside text-gray-600 mb-6">
          <li>Process your image conversion requests</li>
          <li>Prevent abuse through rate limiting</li>
          <li>Improve our service performance and reliability</li>
          <li>Maintain security and prevent misuse</li>
        </ul>
        
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Data Security</h2>
        <p className="text-gray-600 mb-6">
          We implement industry-standard security measures to protect your data during transmission 
          and temporary storage. All file transfers use encrypted HTTPS connections. Our servers are 
          secured with appropriate access controls and monitoring.
        </p>
        
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Cookies and Tracking</h2>
        <p className="text-gray-600 mb-6">
          We use minimal cookies for essential functionality. We may use Google Analytics to understand 
          how visitors use our site, which helps us improve the service. You can opt out of analytics 
          tracking through your browser settings.
        </p>
        
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Third-Party Services</h2>
        <p className="text-gray-600 mb-6">
          Our website may include ads served by Google AdSense. Google may use cookies to serve ads 
          based on your visits to this site and other sites. You can opt out of personalized advertising 
          by visiting Google's Ads Settings.
        </p>
        
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Your Rights</h2>
        <p className="text-gray-600 mb-6">
          Since we automatically delete all uploaded files within 1 hour and collect minimal personal 
          information, there is typically no stored data to access or delete. If you have concerns about 
          your privacy, please contact us.
        </p>
        
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Changes to This Policy</h2>
        <p className="text-gray-600 mb-6">
          We may update this privacy policy from time to time. Any changes will be posted on this page 
          with an updated revision date.
        </p>
        
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Contact Us</h2>
        <p className="text-gray-600">
          If you have questions about this privacy policy, please contact us at{" "}
          <a href="mailto:privacy@jpg2png-clone.com" className="text-primary hover:text-blue-600">
            privacy@jpg2png-clone.com
          </a>
        </p>
      </div>
    </div>
  );
}
