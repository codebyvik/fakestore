import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import googlePlayStoreLogo from "@/assets/play-store-logo.svg";
import appleAppStoreLogo from "@/assets/appstore-logo.svg";
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-semibold mb-3">ABOUT</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#">Contact Us</a>
              </li>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">FakeStore Stories</a>
              </li>
              <li>
                <a href="#">Press</a>
              </li>
            </ul>
          </div>

          {/* Help Section */}
          <div>
            <h3 className="text-lg font-semibold mb-3">HELP</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#">Payments</a>
              </li>
              <li>
                <a href="#">Shipping</a>
              </li>
              <li>
                <a href="#">Cancellation & Returns</a>
              </li>
              <li>
                <a href="#">FAQ</a>
              </li>
              <li>
                <a href="#">Report</a>
              </li>
            </ul>
          </div>

          {/* Consumer Policy */}
          <div>
            <h3 className="text-lg font-semibold mb-3">CONSUMER POLICY</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#">Cancellation & Returns</a>
              </li>
              <li>
                <a href="#">Terms Of Use</a>
              </li>
              <li>
                <a href="#">Security</a>
              </li>
              <li>
                <a href="#">Privacy</a>
              </li>
              <li>
                <a href="#">Sitemap</a>
              </li>
            </ul>
          </div>

          {/* Social Media & Download */}
          <div>
            <h3 className="text-lg font-semibold mb-3">SOCIAL</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Instagram />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Linkedin />
              </a>
            </div>
          </div>

          {/* Download App */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Download The App</h3>
            <div className="flex space-x-2">
              <img src={googlePlayStoreLogo} alt="Google Play" className="w-28 cursor-pointer" />
              <img src={appleAppStoreLogo} alt="App Store" className="w-28 cursor-pointer" />
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} Fake Store. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
