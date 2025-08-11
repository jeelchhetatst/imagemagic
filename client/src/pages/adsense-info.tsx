export default function AdSenseInfo() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">AdSense Implementation Guide</h1>
      
      <div className="prose prose-gray dark:prose-invert max-w-none">
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
          This page provides information about Google AdSense integration and how ads are implemented on our site.
        </p>
        
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">About Our Ads</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          We use Google AdSense to display relevant advertisements that help support our free image conversion service. 
          These ads are carefully selected to be non-intrusive and relevant to our users.
        </p>
        
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Ad Placement</h2>
        <p className="text-gray-600 mb-4">Ads may appear in the following locations on our website:</p>
        <ul className="list-disc list-inside text-gray-600 mb-6">
          <li>Footer area (banner ads)</li>
          <li>Sidebar on desktop versions</li>
          <li>Between content sections on longer pages</li>
          <li>Above or below the conversion tool (non-intrusive placement)</li>
        </ul>
        
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Privacy and Advertising</h2>
        <p className="text-gray-600 mb-6">
          Google AdSense may use cookies and similar technologies to serve ads based on your browsing history 
          and interests. You can control ad personalization through your Google Ads Settings or opt out of 
          personalized advertising entirely.
        </p>
        
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Ad-Free Experience</h2>
        <p className="text-gray-600 mb-6">
          Our core image conversion functionality remains completely unaffected by advertisements. Ads never 
          interfere with the upload, conversion, or download process. We prioritize user experience while 
          maintaining a sustainable free service.
        </p>
        
        <h2 className="text-xl font-semibold text-gray-900 mb-4">For Developers: Implementation Details</h2>
        <div className="bg-gray-50 rounded-lg p-6 mb-6">
          <h3 className="font-semibold text-gray-900 mb-3">Current Implementation Status</h3>
          <p className="text-gray-600 mb-4">
            This site is prepared for Google AdSense integration. The following components are ready:
          </p>
          <ul className="list-disc list-inside text-gray-600 mb-4">
            <li>Placeholder ad containers in appropriate locations</li>
            <li>Privacy policy covering ad-related data collection</li>
            <li>Ads.txt file configuration</li>
            <li>Required legal pages (Terms, Privacy Policy)</li>
            <li>Contact information and support channels</li>
          </ul>
          
          <h3 className="font-semibold text-gray-900 mb-3">To Activate AdSense</h3>
          <ol className="list-decimal list-inside text-gray-600 mb-4">
            <li>Apply for Google AdSense approval</li>
            <li>Add your AdSense publisher ID to the ads.txt file</li>
            <li>Replace placeholder ad containers with actual AdSense code</li>
            <li>Configure ad units in your AdSense dashboard</li>
            <li>Test ad display and ensure proper functionality</li>
          </ol>
        </div>
        
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Compliance and Guidelines</h2>
        <p className="text-gray-600 mb-6">
          Our ad implementation follows Google AdSense policies and guidelines, including:
        </p>
        <ul className="list-disc list-inside text-gray-600 mb-6">
          <li>Appropriate content and user experience standards</li>
          <li>Clear privacy policy covering ad-related data collection</li>
          <li>Proper ad placement that doesn't interfere with site functionality</li>
          <li>Compliance with GDPR and other privacy regulations</li>
        </ul>
        
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Questions About Ads?</h2>
        <p className="text-gray-600">
          If you have questions about our advertising practices or would like to report an inappropriate ad, 
          please contact us at{" "}
          <a href="mailto:ads@jpg2png-clone.com" className="text-primary hover:text-blue-600">
            ads@jpg2png-clone.com
          </a>
        </p>
      </div>
    </div>
  );
}
