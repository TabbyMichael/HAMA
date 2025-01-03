import React from 'react';
import { Truck, Facebook, Twitter, Instagram, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <Truck className="h-8 w-8 text-orange-600" />
              <span className="ml-2 text-2xl font-bold">Hama</span>
            </div>
            <p className="text-gray-400">
              Your trusted logistics partner in Kenya and beyond.
            </p>
            <div className="mt-4 flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Track Shipment</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Get a Quote</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Locations</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Services</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Domestic Delivery</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">International Shipping</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Freight Services</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">E-commerce Solutions</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-4">
              <p className="flex items-center text-gray-400">
                <Mail className="h-5 w-5 mr-2" />
                info@hama.co.ke
              </p>
              <div>
                <p className="text-gray-400">Headquarters:</p>
                <p className="text-gray-400">Nairobi Business District</p>
                <p className="text-gray-400">Kenya</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Hama Logistics. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}