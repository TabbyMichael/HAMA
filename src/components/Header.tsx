import React, { useState } from 'react';
import { Truck, Menu, X, Globe, User } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState('EN');

  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Truck className="h-8 w-8 text-orange-600" />
            <span className="ml-2 text-2xl font-bold text-gray-900">Hama</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="/" className="text-gray-700 hover:text-orange-600">Home</a>
            <a href="/services" className="text-gray-700 hover:text-orange-600">Services</a>
            <a href="/track" className="text-gray-700 hover:text-orange-600">Track Shipment</a>
            <a href="/locations" className="text-gray-700 hover:text-orange-600">Locations</a>
            <a href="/support" className="text-gray-700 hover:text-orange-600">Support</a>
          </nav>

          {/* Right side buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button 
              onClick={() => setLanguage(language === 'EN' ? 'SW' : 'EN')}
              className="flex items-center text-gray-700 hover:text-orange-600"
            >
              <Globe className="h-5 w-5 mr-1" />
              {language}
            </button>
            <button className="flex items-center text-gray-700 hover:text-orange-600">
              <User className="h-5 w-5 mr-1" />
              Login
            </button>
            <button className="bg-orange-600 text-white px-4 py-2 rounded-md hover:bg-orange-700">
              Get Quote
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="/" className="block px-3 py-2 text-gray-700 hover:text-orange-600">Home</a>
            <a href="/services" className="block px-3 py-2 text-gray-700 hover:text-orange-600">Services</a>
            <a href="/track" className="block px-3 py-2 text-gray-700 hover:text-orange-600">Track Shipment</a>
            <a href="/locations" className="block px-3 py-2 text-gray-700 hover:text-orange-600">Locations</a>
            <a href="/support" className="block px-3 py-2 text-gray-700 hover:text-orange-600">Support</a>
          </div>
        </div>
      )}
    </header>
  );
}