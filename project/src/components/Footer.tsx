import React from 'react';
import { Heart, Facebook, Twitter, Instagram, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative">
                <Heart className="h-8 w-8 text-orange-400 fill-current" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-400 rounded-full"></div>
              </div>
              <div>
                <h3 className="text-2xl font-bold">Kashmir Foundation</h3>
                <p className="text-orange-400 font-medium">Help from the Heart</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
              A non-profit organization dedicated to serving vulnerable communities across Kashmir, 
              bringing hope, dignity, and support to those who need it most.
            </p>
            <div className="flex space-x-4">
              <button className="bg-blue-600 hover:bg-blue-700 p-3 rounded-full transition-colors">
                <Facebook className="h-5 w-5" />
              </button>
              <button className="bg-blue-400 hover:bg-blue-500 p-3 rounded-full transition-colors">
                <Twitter className="h-5 w-5" />
              </button>
              <button className="bg-pink-600 hover:bg-pink-700 p-3 rounded-full transition-colors">
                <Instagram className="h-5 w-5" />
              </button>
              <button className="bg-gray-600 hover:bg-gray-700 p-3 rounded-full transition-colors">
                <Mail className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-white transition-colors">Our Services</a></li>
              <li><a href="#impact" className="text-gray-300 hover:text-white transition-colors">Our Impact</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Volunteer</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Donate</a></li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Programs</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Poverty Alleviation</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Education Support</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Healthcare Services</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Clean Water Projects</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Food Distribution</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Disability Support</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 mb-4 md:mb-0">
              © 2024 Kashmir Foundation. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">Transparency Report</a>
            </div>
          </div>
        </div>

        {/* Emergency Contact */}
        <div className="mt-8 bg-red-900 bg-opacity-50 p-6 rounded-xl border border-red-700">
          <div className="flex items-center space-x-3 mb-2">
            <Heart className="h-6 w-6 text-red-400" />
            <h4 className="text-lg font-semibold text-red-100">Emergency Humanitarian Support</h4>
          </div>
          <p className="text-red-200 mb-3">
            For urgent humanitarian assistance or crisis situations, contact us immediately:
          </p>
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6">
            <span className="text-red-100 font-medium">📞 +92-345-9138857</span>
            <span className="text-red-100 font-medium">✉️ help@kashmirfoundation.org</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;