export default function Disclaimer() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Disclaimer</h1>
      
      <div className="prose prose-gray dark:prose-invert max-w-none">
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          <strong>Last updated:</strong> December 2024
        </p>
        
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">General Information</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          The information on this website is provided on an "as is" basis. To the fullest extent 
          permitted by law, this company excludes all representations, warranties, obligations, 
          and liabilities arising out of or in connection with the information and services 
          provided on this website.
        </p>
        
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Service Limitations</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          While we strive to provide accurate and reliable image conversion services, we cannot 
          guarantee:
        </p>
        <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 mb-6">
          <li>Perfect conversion quality for all image types</li>
          <li>Continuous availability of the service</li>
          <li>Compatibility with all devices and browsers</li>
          <li>Preservation of specific image metadata or color profiles</li>
          <li>Support for all image formats or edge cases</li>
        </ul>
        
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Technical Accuracy</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          We make every effort to ensure the accuracy and functionality of our image conversion 
          algorithms. However, image processing can be complex and results may vary depending on:
        </p>
        <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 mb-6">
          <li>Source image quality and format</li>
          <li>File size and compression settings</li>
          <li>Color space and bit depth variations</li>
          <li>Embedded metadata and ICC profiles</li>
        </ul>
        
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">User Responsibility</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Users are responsible for:
        </p>
        <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 mb-6">
          <li>Verifying the quality and accuracy of converted images</li>
          <li>Ensuring they have rights to convert uploaded images</li>
          <li>Backing up original files before conversion</li>
          <li>Testing converted files for their intended use</li>
          <li>Complying with copyright and intellectual property laws</li>
        </ul>
        
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Third-Party Content</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          This website may contain links to third-party websites or services. We are not 
          responsible for the content, accuracy, or availability of such external sites. 
          Links to third-party sites do not constitute an endorsement of their content or services.
        </p>
        
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Data Loss</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          While we automatically delete files after 1 hour for privacy protection, users should 
          not rely solely on our service for file storage. We are not responsible for any data 
          loss that may occur during the conversion process or due to technical failures.
        </p>
        
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Professional Use</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          This service is designed for general use and may not be suitable for professional, 
          commercial, or critical applications requiring specific quality standards or certifications. 
          Users requiring professional-grade conversion should consider dedicated software solutions.
        </p>
        
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Limitation of Liability</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          In no event shall PNGConvert, its operators, or contributors be liable for any direct, 
          indirect, incidental, special, or consequential damages arising from the use of this 
          service, including but not limited to:
        </p>
        <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 mb-6">
          <li>Loss of data or corrupted files</li>
          <li>Business interruption or lost profits</li>
          <li>Personal or commercial damages</li>
          <li>Third-party claims or legal issues</li>
        </ul>
        
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Changes to This Disclaimer</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          We reserve the right to modify this disclaimer at any time. Changes will be effective 
          immediately upon posting on this website. Your continued use of the service after any 
          changes constitutes acceptance of the updated disclaimer.
        </p>
        
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Contact Information</h2>
        <p className="text-gray-600 dark:text-gray-300">
          If you have questions about this disclaimer, please contact us at{" "}
          <a href="mailto:legal@pngconvert.com" className="text-primary hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300">
            legal@pngconvert.com
          </a>
        </p>
      </div>
    </div>
  );
}