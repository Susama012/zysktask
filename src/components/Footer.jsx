import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-screen-xl mx-auto px-4">
        {/* Footer Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-8">
          {/* Column 1 */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul>
              <li>About Us</li>
              <li>Careers</li>
              <li>Contact</li>
              <li>Team</li>
              <li>Blog</li>
              <li>Partners</li>
              <li>Press</li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="font-semibold mb-4">Products</h3>
            <ul>
              <li>Features</li>
              <li>Pricing</li>
              <li>Support</li>
              <li>Integrations</li>
              <li>API</li>
              <li>App</li>
              <li>Mobile</li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul>
              <li>Docs</li>
              <li>Help Center</li>
              <li>FAQ</li>
              <li>Community</li>
              <li>Guides</li>
              <li>Webinars</li>
              <li>Articles</li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
              <li>Refund Policy</li>
              <li>Cookie Policy</li>
              <li>GDPR</li>
              <li>Security</li>
              <li>Licensing</li>
            </ul>
          </div>

          {/* Column 5 */}
          <div>
            <h3 className="font-semibold mb-4">Social</h3>
            <ul>
              <li>Facebook</li>
              <li>Twitter</li>
              <li>Instagram</li>
              <li>LinkedIn</li>
              <li>YouTube</li>
              <li>Reddit</li>
              <li>Pinterest</li>
            </ul>
          </div>
        </div>

        {/* Brand Logo and Copyright */}
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-violet-500 rounded-full"></div>
            <span className="text-lg font-bold">BrandName</span>
          </div>
          <p className="text-sm text-gray-400">© 2024 BrandName. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
