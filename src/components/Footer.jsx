import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="text-2xl font-bold text-primary-400 font-display mb-4">HeyBuddy</div>
            <p className="text-gray-300 mb-6 max-w-md">
              Bringing you the finest HeyBuddy experiences with fresh ingredients, 
              authentic flavors, and exceptional service since 2020.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors duration-300" aria-label="Facebook">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M22 12.06C22 6.503 17.523 2 12 2S2 6.503 2 12.06c0 4.99 3.657 9.128 8.438 9.94v-7.03H7.898v-2.91h2.54V9.845c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.47h-1.26c-1.242 0-1.63.774-1.63 1.568v1.883h2.773l-.443 2.91h-2.33v7.03C18.343 21.187 22 17.05 22 12.06Z"/></svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors duration-300" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm10 2H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3Zm-5 3.5A5.5 5.5 0 1 1 6.5 13 5.5 5.5 0 0 1 12 7.5Zm0 2A3.5 3.5 0 1 0 15.5 13 3.5 3.5 0 0 0 12 9.5Zm5.75-2.25a1.25 1.25 0 1 1-1.25 1.25 1.25 1.25 0 0 1 1.25-1.25Z"/></svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors duration-300" aria-label="Twitter">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M22.162 5.656a8.4 8.4 0 0 1-2.403.659 4.198 4.198 0 0 0 1.84-2.318 8.39 8.39 0 0 1-2.661 1.017 4.194 4.194 0 0 0-7.144 3.825 11.894 11.894 0 0 1-8.64-4.38 4.193 4.193 0 0 0 1.297 5.599 4.173 4.173 0 0 1-1.9-.525v.053a4.195 4.195 0 0 0 3.362 4.113 4.207 4.207 0 0 1-1.895.072 4.197 4.197 0 0 0 3.919 2.913A8.41 8.41 0 0 1 2 18.408a11.86 11.86 0 0 0 6.432 1.887c7.72 0 11.938-6.396 11.938-11.938 0-.182-.004-.364-.013-.544a8.525 8.525 0 0 0 2.105-2.157Z"/></svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors duration-300" aria-label="YouTube">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.123-2.137C19.57 3.5 12 3.5 12 3.5s-7.57 0-9.375.549A3.016 3.016 0 0 0 .502 6.186 31.4 31.4 0 0 0 0 12a31.4 31.4 0 0 0 .502 5.814 3.016 3.016 0 0 0 2.123 2.137C4.43 20.5 12 20.5 12 20.5s7.57 0 9.375-.549a3.016 3.016 0 0 0 2.123-2.137A31.4 31.4 0 0 0 24 12a31.4 31.4 0 0 0-.502-5.814ZM9.75 15.125V8.875L15.5 12l-5.75 3.125Z"/></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-300 hover:text-primary-400 transition-colors duration-300">
                  Home
                </a>
              </li>
              <li>
                <a href="#menu" className="text-gray-300 hover:text-primary-400 transition-colors duration-300">
                  Menu
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-primary-400 transition-colors duration-300">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-primary-400 transition-colors duration-300">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-primary-400 transition-colors duration-300">
                  Reservations
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Newsletter */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-xl font-semibold mb-2">Stay Updated</h3>
              <p className="text-gray-300">
                Subscribe to our newsletter for special offers and new menu items!
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
              />
              <button className="btn-primary whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            2024 TasteBud Restaurant. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-primary-400 text-sm transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-primary-400 text-sm transition-colors duration-300">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-primary-400 text-sm transition-colors duration-300">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
