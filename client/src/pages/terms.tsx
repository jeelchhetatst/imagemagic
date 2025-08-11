export default function Terms() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Terms of Service</h1>
      
      <div className="prose prose-gray dark:prose-invert max-w-none">
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          <strong>Last updated:</strong> December 2024
        </p>
        
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Acceptance of Terms</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          By using our image conversion service, you agree to these terms of service. 
          If you disagree with any part of these terms, please do not use our service.
        </p>
        
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Service Description</h2>
        <p className="text-gray-600 mb-6">
          JPG2PNG provides free online image conversion services. We convert various image formats 
          (including JPG, JPEG, WEBP, HEIC, GIF, BMP, TIFF) to PNG format. Files are temporarily 
          stored for processing and automatically deleted within 1 hour.
        </p>
        
        <h2 className="text-xl font-semibold text-gray-900 mb-4">User Responsibilities</h2>
        <ul className="list-disc list-inside text-gray-600 mb-6">
          <li>You may only upload images you own or have permission to convert</li>
          <li>Do not upload copyrighted content without proper authorization</li>
          <li>Do not upload illegal, harmful, or inappropriate content</li>
          <li>Respect our rate limits (50 conversions per hour per IP address)</li>
          <li>Do not attempt to circumvent security measures or abuse the service</li>
          <li>Do not use automated tools to make excessive requests</li>
        </ul>
        
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Service Availability</h2>
        <p className="text-gray-600 mb-6">
          We strive to maintain high service availability but do not guarantee uninterrupted access. 
          The service may be temporarily unavailable due to maintenance, updates, or technical issues.
        </p>
        
        <h2 className="text-xl font-semibold text-gray-900 mb-4">File Processing and Storage</h2>
        <p className="text-gray-600 mb-6">
          Uploaded files are processed immediately and stored temporarily on our servers. All files 
          are automatically deleted within 1 hour of upload. We recommend downloading your converted 
          files promptly.
        </p>
        
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Limitation of Liability</h2>
        <p className="text-gray-600 mb-6">
          Our service is provided "as is" without warranties of any kind. We are not liable for:
        </p>
        <ul className="list-disc list-inside text-gray-600 mb-6">
          <li>Loss of data or files</li>
          <li>Conversion errors or quality issues</li>
          <li>Service interruptions or downtime</li>
          <li>Any damages arising from use of the service</li>
        </ul>
        
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Privacy and Data Protection</h2>
        <p className="text-gray-600 mb-6">
          Your use of this service is also governed by our Privacy Policy. We respect your privacy 
          and automatically delete all uploaded files within 1 hour.
        </p>
        
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Prohibited Uses</h2>
        <p className="text-gray-600 mb-6">
          You may not use our service for:
        </p>
        <ul className="list-disc list-inside text-gray-600 mb-6">
          <li>Any illegal or unauthorized purpose</li>
          <li>Processing copyrighted content without permission</li>
          <li>Attempting to harm or disrupt our systems</li>
          <li>Commercial use beyond reasonable personal/business needs</li>
        </ul>
        
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Changes to Terms</h2>
        <p className="text-gray-600 mb-6">
          We reserve the right to modify these terms at any time. Continued use of the service 
          after changes constitutes acceptance of the new terms.
        </p>
        
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Contact</h2>
        <p className="text-gray-600">
          For questions about these terms, please contact us at{" "}
          <a href="mailto:legal@jpg2png-clone.com" className="text-primary hover:text-blue-600">
            legal@jpg2png-clone.com
          </a>
        </p>
      </div>
    </div>
  );
}
