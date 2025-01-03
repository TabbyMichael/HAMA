import React from 'react';
import { Truck, Plane, Box, ShoppingBag } from 'lucide-react';

const services = [
  {
    icon: <Truck className="h-8 w-8" />,
    title: 'Domestic Delivery',
    description: 'Fast and reliable delivery across Kenya with real-time tracking',
  },
  {
    icon: <Plane className="h-8 w-8" />,
    title: 'International Shipping',
    description: 'Connect your business to the world with our global shipping network',
  },
  {
    icon: <Box className="h-8 w-8" />,
    title: 'Freight Services',
    description: 'Comprehensive freight solutions for businesses of all sizes',
  },
  {
    icon: <ShoppingBag className="h-8 w-8" />,
    title: 'E-commerce Solutions',
    description: 'Integrated shipping solutions for your online business',
  },
];

export default function Services() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="text-orange-600 mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
              <a 
                href="#" 
                className="mt-4 inline-block text-orange-600 hover:text-orange-700"
              >
                Learn More →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}