import { useState } from 'react';
import { useCart } from '../context/CartContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { getTotalItems, toggleCart } = useCart();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <a href="#home" className="flex items-center space-x-3">
              <span className="text-2xl font-bold text-primary-500 font-display">HeyBuddy</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-primary-500 font-medium transition-colors duration-300 relative group">
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#menu" className="text-gray-700 hover:text-primary-500 font-medium transition-colors duration-300 relative group">
              Menu
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#about" className="text-gray-700 hover:text-primary-500 font-medium transition-colors duration-300 relative group">
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#contact" className="text-gray-700 hover:text-primary-500 font-medium transition-colors duration-300 relative group">
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </nav>

          {/* Cart and CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <button 
              onClick={toggleCart}
              className="relative p-2 text-gray-700 hover:text-primary-500 transition-colors duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-6 w-6"
                aria-hidden="true"
              >
                <path d="M2.25 3a.75.75 0 0 0 0 1.5h1.757c.21 0 .397.137.457.338l.123.42 1.53 5.214-.826 1.24A1.875 1.875 0 0 0 6.938 14.25h9.562a.75.75 0 0 0 0-1.5H6.937a.375.375 0 0 1-.309-.586l.57-.854h8.438a1.5 1.5 0 0 0 1.414-1.036l1.306-3.918a.75.75 0 0 0-.715-.956H5.27l-.186-.634A1.957 1.957 0 0 0 4.006 3H2.25Z" />
                <path d="M8.25 18a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Zm7.5 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Z" />
              </svg>
              {getTotalItems() > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {getTotalItems()}
                </span>
              )}
            </button>
            <a href="#menu" className="btn-primary inline-block">
              Order Now
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-primary-500 focus:outline-none focus:text-primary-500"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <a href="#home" className="block px-3 py-2 text-gray-700 hover:text-primary-500 font-medium">
                Home
              </a>
              <a href="#menu" className="block px-3 py-2 text-gray-700 hover:text-primary-500 font-medium">
                Menu
              </a>
              <a href="#about" className="block px-3 py-2 text-gray-700 hover:text-primary-500 font-medium">
                About
              </a>
              <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-primary-500 font-medium">
                Contact
              </a>
              <div className="px-3 py-2">
                <button className="btn-primary w-full">
                  Order Now
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
