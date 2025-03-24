const Footer = () => {
    return (
      <footer className="bg-white text-gray-700">
        <div className="max-w-7xl mx-auto px-6 py-12">
          {/* Desktop View */}
          <div className="hidden md:grid grid-cols-4 gap-8">
            {/* Affiliate Section */}
            <div>
              <h2 className="text-lg font-semibold">Affiliate</h2>
              <p className="mt-2 text-sm">
                Connecting sellers and affiliates for a seamless product promotion experience.
              </p>
              <div className="flex space-x-4 mt-4">
                {/* Social Icons */}
                <a href="#" aria-label="Facebook" className="hover:text-gray-900">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" aria-label="Twitter" className="hover:text-gray-900">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" aria-label="Instagram" className="hover:text-gray-900">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
  
            {/* Quick Links */}
            <div>
              <h2 className="text-lg font-semibold">Quick Links</h2>
              <ul className="mt-2 space-y-2">
                <li><a href="#" className="hover:text-gray-900">All Products</a></li>
                <li><a href="#" className="hover:text-gray-900">Categories</a></li>
                <li><a href="#" className="hover:text-gray-900">Sellers</a></li>
                <li><a href="#" className="hover:text-gray-900">About Us</a></li>
              </ul>
            </div>
  
            {/* Seller */}
            <div>
              <h2 className="text-lg font-semibold">Seller</h2>
              <ul className="mt-2 space-y-2">
                <li><a href="#" className="hover:text-gray-900">Become a Seller</a></li>
                <li><a href="#" className="hover:text-gray-900">Seller Dashboard</a></li>
                <li><a href="#" className="hover:text-gray-900">Seller Guides</a></li>
                <li><a href="#" className="hover:text-gray-900">Seller FAQ</a></li>
              </ul>
            </div>
  
            {/* Support */}
            <div>
              <h2 className="text-lg font-semibold">Support</h2>
              <ul className="mt-2 space-y-2">
                <li><a href="#" className="hover:text-gray-900">Help Center</a></li>
                <li><a href="#" className="hover:text-gray-900">Contact Us</a></li>
                <li><a href="#" className="hover:text-gray-900">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-gray-900">Terms of Service</a></li>
              </ul>
            </div>
          </div>
  
          {/* Mobile View */}
          <div className="md:hidden">
            <div className="space-y-6">
              {/* Affiliate Section */}
              <div>
                <h2 className="text-lg font-semibold">Lexcka</h2>
                <p className="mt-2 text-sm">
                  Connecting sellers and affiliates for a seamless product promotion experience.
                </p>
              </div>
  
              {/* Quick Links */}
              <div>
                <h2 className="text-lg font-semibold">Quick Links</h2>
                <ul className="mt-2 space-y-2">
                  <li><a href="#" className="hover:text-gray-900">All Products</a></li>
                  <li><a href="#" className="hover:text-gray-900">Categories</a></li>
                  <li><a href="#" className="hover:text-gray-900">Sellers</a></li>
                  <li><a href="#" className="hover:text-gray-900">About Us</a></li>
                </ul>
              </div>
  
              {/* Seller */}
              <div>
                <h2 className="text-lg font-semibold">Seller</h2>
                <ul className="mt-2 space-y-2">
                  <li><a href="#" className="hover:text-gray-900">Become a Seller</a></li>
                  <li><a href="#" className="hover:text-gray-900">Seller Dashboard</a></li>
                  <li><a href="#" className="hover:text-gray-900">Seller Guides</a></li>
                  <li><a href="#" className="hover:text-gray-900">Seller FAQ</a></li>
                </ul>
              </div>
  
              {/* Support */}
              <div>
                <h2 className="text-lg font-semibold">Support</h2>
                <ul className="mt-2 space-y-2">
                  <li><a href="#" className="hover:text-gray-900">Help Center</a></li>
                  <li><a href="#" className="hover:text-gray-900">Contact Us</a></li>
                  <li><a href="#" className="hover:text-gray-900">Privacy Policy</a></li>
                  <li><a href="#" className="hover:text-gray-900">Terms of Service</a></li>
                </ul>
              </div>
  
              {/* Social Icons */}
              <div className="flex space-x-4 mt-4">
                <a href="#" aria-label="Facebook" className="hover:text-gray-900">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" aria-label="Twitter" className="hover:text-gray-900">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" aria-label="Instagram" className="hover:text-gray-900">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
  
          {/* Copyright */}
          <div className="mt-12 text-center text-sm text-gray-500">
            &copy; 2025 Lexcka. All rights reserved.
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  