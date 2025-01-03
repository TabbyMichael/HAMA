import React from 'react';
import { Plane, Ship, Truck, Train } from 'lucide-react';

const freightServices = [
  { icon: <Plane className="h-6 w-6" />, label: 'Air Freight' },
  { icon: <Ship className="h-6 w-6" />, label: 'Ocean Freight' },
  { icon: <Truck className="h-6 w-6" />, label: 'Road Freight' },
  { icon: <Train className="h-6 w-6" />, label: 'Rail Freight' }
];

export default function CargoShipping() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:flex lg:items-center lg:gap-12">
          {/* Left side content */}
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <h2 className="text-3xl font-bold mb-2">Cargo Shipping</h2>
            <p className="text-xl mb-4">Business Only</p>
            <p className="text-gray-600 mb-8">
              Discover shipping and logistics service options from Hama Global Forwarding.
            </p>

            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-6">Services Available</h3>
              <div className="grid grid-cols-2 gap-4">
                {freightServices.map((service, index) => (
                  <div 
                    key={index}
                    className="flex items-center bg-yellow-100 rounded-lg p-4"
                  >
                    <div className="bg-yellow-400 p-2 rounded-md text-gray-800 mr-3">
                      {service.icon}
                    </div>
                    <span className="text-gray-800 font-medium">{service.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <button className="w-full bg-red-600 text-white py-3 rounded-lg hover:bg-red-700 transition-colors">
              Explore Hama Global Forwarding
            </button>
          </div>

          {/* Right side image */}
          <div className="lg:w-1/2">
            <div className="rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
                alt="Cargo Containers"
                className="w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}