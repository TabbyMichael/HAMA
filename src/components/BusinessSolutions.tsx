import React from 'react';
import { Store } from 'lucide-react';

export default function BusinessSolutions() {
  return (
    <section className="bg-yellow-400 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:flex items-center gap-12">
          {/* Left side image */}
          <div className="lg:w-1/3 mb-8 lg:mb-0">
            <img
              src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
              alt="Business Owner"
              className="rounded-lg shadow-lg w-full h-[400px] object-cover"
            />
          </div>

          {/* Right side content */}
          <div className="lg:w-2/3">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold mb-4">Hama for Your Business</h2>
              <p className="text-gray-800 text-lg mb-8">
                Power your small and medium-sized business success with world-class shipping and logistics. 
                Our team of experts can help you address the ever-changing needs of your customers.
              </p>
              <button className="bg-red-600 text-white px-8 py-3 rounded-md hover:bg-red-700 transition-colors inline-flex items-center">
                <Store className="mr-2 h-5 w-5" />
                Explore Our Business Solutions
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}