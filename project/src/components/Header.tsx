import React, { useState } from 'react';
import { Heart, Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="relative">
              <Heart className="h-10 w-10 text-blue-700 fill-current" />
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-orange-500 rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Kashmir Foundation</h1>
              <p className="text-sm text-blue-700 font-medium">Help from the Heart</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-blue-700 font-medium transition-colors">
              Home
            </a>
            <a href="#about" className="text-gray-700 hover:text-blue-700 font-medium transition-colors">
              About
            </a>
            <a href="#services" className="text-gray-700 hover:text-blue-700 font-medium transition-colors">
              Services
            </a>
            <a href="#impact" className="text-gray-700 hover:text-blue-700 font-medium transition-colors">
              Impact
            </a>
            <a href="#contact" className="text-gray-700 hover:text-blue-700 font-medium transition-colors">
              Contact
            </a>
          </nav>

          {/* Donate Button */}
          <div className="hidden md:flex">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              Donate Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-700" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <a href="#home" className="text-gray-700 hover:text-blue-700 font-medium">
                Home
              </a>
              <a href="#about" className="text-gray-700 hover:text-blue-700 font-medium">
                About
              </a>
              <a href="#services" className="text-gray-700 hover:text-blue-700 font-medium">
                Services
              </a>
              <a href="#impact" className="text-gray-700 hover:text-blue-700 font-medium">
                Impact
              </a>
              <a href="#contact" className="text-gray-700 hover:text-blue-700 font-medium">
                Contact
              </a>
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full font-medium self-start">
                Donate Now
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;