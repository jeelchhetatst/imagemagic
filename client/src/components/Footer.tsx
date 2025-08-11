import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <img 
                src="/logo.png" 
                alt="PNGConvert Logo" 
                className="h-6 w-6 mr-3" 
              />
              <h3 className="text-xl font-bold">PNGConvert</h3>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              Free, fast, and secure image conversion. Transform your images to PNG format 
              with professional quality and complete privacy protection.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Service</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/">
                  <span className="hover:text-white transition-colors cursor-pointer">Image Converter</span>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <span className="hover:text-white transition-colors cursor-pointer">About</span>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <span className="hover:text-white transition-colors cursor-pointer">Contact</span>
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/privacy">
                  <span className="hover:text-white transition-colors cursor-pointer">Privacy Policy</span>
                </Link>
              </li>
              <li>
                <Link href="/terms">
                  <span className="hover:text-white transition-colors cursor-pointer">Terms of Service</span>
                </Link>
              </li>
              <li>
                <Link href="/disclaimer">
                  <span className="hover:text-white transition-colors cursor-pointer">Disclaimer</span>
                </Link>
              </li>
              <li>
                <Link href="/adsense-info">
                  <span className="hover:text-white transition-colors cursor-pointer">AdSense Info</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
