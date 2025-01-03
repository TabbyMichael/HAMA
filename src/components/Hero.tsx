import React, { useState } from 'react';
import { Search, Package } from 'lucide-react';

export default function Hero() {
  const [trackingNumber, setTrackingNumber] = useState('');

  return (
    <div className="relative h-[600px] bg-gradient-to-r from-orange-600 to-yellow-500">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-black opacity-50"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          mixBlendMode: 'multiply'
        }}
      />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Delivering Africa,<br />One Package at a Time
        </h1>
        
        {/* Tracking input */}
        <div className="max-w-2xl">
          <div className="bg-white p-2 rounded-lg shadow-lg flex">
            <input
              type="text"
              placeholder="Enter your tracking number"
              className="flex-1 px-4 py-2 focus:outline-none"
              value={trackingNumber}
              onChange={(e) => setTrackingNumber(e.target.value)}
            />
            <button className="bg-orange-600 text-white px-6 py-2 rounded-md hover:bg-orange-700 flex items-center">
              <Search className="h-5 w-5 mr-2" />
              Track
            </button>
          </div>

          {/* CTA buttons */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <button className="bg-orange-600 text-white px-8 py-3 rounded-md hover:bg-orange-700 flex items-center justify-center">
              <Package className="h-5 w-5 mr-2" />
              Track Package
            </button>
            <button className="bg-white text-orange-600 px-8 py-3 rounded-md hover:bg-gray-100 flex items-center justify-center">
              Ship Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}