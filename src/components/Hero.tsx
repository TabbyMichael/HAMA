import React, { useState } from 'react';
    import { Search, Package } from 'lucide-react';
    import { useLanguage } from '../context/LanguageContext';

    const translations = {
      en: {
        heroTitle: 'Delivering Africa, One Package at a Time',
        trackingPlaceholder: 'Enter your tracking number',
        track: 'Track',
        trackPackage: 'Track Package',
        shipNow: 'Ship Now',
        deliveryOptions: 'Our Delivery Options',
        hyperlocal: 'Hyperlocal Delivery',
        guaranteed: 'Guaranteed Delivery',
        sustainable: 'Sustainable Options',
      },
      sw: {
        heroTitle: 'Tunakuletea Afrika, Kifurushi Kimoja kwa Wakati',
        trackingPlaceholder: 'Ingiza nambari yako ya ufuatiliaji',
        track: 'Fuatilia',
        trackPackage: 'Fuatilia Kifurushi',
        shipNow: 'Safirisha Sasa',
        deliveryOptions: 'Chaguo Zetu za Uwasilishaji',
        hyperlocal: 'Uwasilishaji wa Karibu',
        guaranteed: 'Uwasilishaji Uliohakikishwa',
        sustainable: 'Chaguo Endelevu',
      },
    };

    export default function Hero() {
      const [trackingNumber, setTrackingNumber] = useState('');
      const { language } = useLanguage();

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
              {translations[language].heroTitle}
            </h1>

            {/* Tracking input */}
            <div className="max-w-2xl">
              <div className="bg-white p-2 rounded-lg shadow-lg flex">
                <input
                  type="text"
                  placeholder={translations[language].trackingPlaceholder}
                  className="flex-1 px-4 py-2 focus:outline-none"
                  value={trackingNumber}
                  onChange={(e) => setTrackingNumber(e.target.value)}
                />
                <button className="bg-orange-600 text-white px-6 py-2 rounded-md hover:bg-orange-700 flex items-center">
                  <Search className="h-5 w-5 mr-2" />
                  {translations[language].track}
                </button>
              </div>

              {/* CTA buttons */}
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <button className="bg-orange-600 text-white px-8 py-3 rounded-md hover:bg-orange-700 flex items-center justify-center">
                  <Package className="h-5 w-5 mr-2" />
                  {translations[language].trackPackage}
                </button>
                <button className="bg-white text-orange-600 px-8 py-3 rounded-md hover:bg-gray-100 flex items-center justify-center">
                  {translations[language].shipNow}
                </button>
              </div>
              {/* Delivery Options Showcase */}
              <div className="mt-6 text-white">
                <h3 className="text-lg font-semibold mb-2">{translations[language].deliveryOptions}</h3>
                <ul className="flex flex-wrap gap-4">
                  <li className="bg-orange-700 bg-opacity-50 px-3 py-1 rounded-md">{translations[language].hyperlocal}</li>
                  <li className="bg-orange-700 bg-opacity-50 px-3 py-1 rounded-md">{translations[language].guaranteed}</li>
                  <li className="bg-orange-700 bg-opacity-50 px-3 py-1 rounded-md">{translations[language].sustainable}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      );
    }
