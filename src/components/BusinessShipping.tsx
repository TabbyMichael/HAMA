import React, { Suspense } from 'react';
import { Truck, Package } from 'lucide-react';
import LoadingSkeleton from './ui/LoadingSkeleton';

const shippingOptions = [
  {
    icon: <Truck className="h-6 w-6 text-orange-600" />,
    title: 'Hama Express',
    description: 'Fast, door-to-door, courier delivered. Time definite delivery to East African countries'
  },
  {
    icon: <Package className="h-6 w-6 text-orange-600" />,
    title: 'Hama eCommerce',
    description: 'Connecting businesses to consumers with standard domestic and international residential delivery and returns solutions'
  }
];

function ShippingContent() {
  return (
    <div className="lg:w-1/2">
      <h2 className="text-3xl font-bold mb-2 animate-fade-in">Retailer or Volume Shipping</h2>
      <p className="text-xl mb-4 animate-fade-in">Business Only</p>
      <p className="text-gray-600 mb-8 animate-fade-in">
        We have two divisions that offer reliable business shipping for e-commerce, 
        supplier or manufacturing companies.
      </p>

      <div className="space-y-6">
        {shippingOptions.map((option, index) => (
          <div 
            key={index}
            className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
          >
            <div className="flex items-start">
              <div className="flex-shrink-0">{option.icon}</div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold mb-2">{option.title}</h3>
                <p className="text-gray-600">{option.description}</p>
              </div>
              <div className="ml-auto">
                <span className="text-orange-600 transition-transform duration-300 group-hover:translate-x-2">→</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function BusinessShipping() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:flex lg:items-center lg:gap-12">
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <div className="rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1580674285054-bed31e145f59?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                alt="Business Shipping"
                className="w-full h-[400px] object-cover transition-transform duration-500 hover:scale-105"
                loading="lazy"
              />
            </div>
          </div>
          <Suspense fallback={<LoadingSkeleton />}>
            <ShippingContent />
          </Suspense>
        </div>
      </div>
    </section>
  );
}