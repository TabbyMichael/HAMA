import React, { Suspense } from 'react';
import { Warehouse, Package, Home, Truck, Users, Plus } from 'lucide-react';
import AnimatedImage from './ui/AnimatedImage';
import ServiceCard from './ui/ServiceCard';
import LoadingSkeleton from './ui/LoadingSkeleton';

const solutions = [
  { icon: <Warehouse />, label: 'Warehousing' },
  { icon: <Package />, label: 'Packaging' },
  { icon: <Home />, label: 'Real Estate' },
  { icon: <Truck />, label: 'Transport' },
  { icon: <Users />, label: 'Service Logistics' },
  { icon: <Plus />, label: 'And more!' }
];

function EnterpriseContent() {
  return (
    <div className="lg:w-1/2 animate-fade-in">
      <h2 className="text-3xl font-bold mb-2">Enterprise Logistics Services</h2>
      <p className="text-xl mb-4">Business Only</p>
      <p className="text-gray-600 mb-8">
        Find out how Hama Supply Chain can revolutionize your business as a 
        3PL provider.
      </p>

      <div className="mb-8 animate-slide-up">
        <h3 className="text-xl font-semibold mb-4">Solutions Available</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {solutions.map((solution, index) => (
            <ServiceCard
              key={index}
              icon={solution.icon}
              title={solution.label}
              className="p-3"
            />
          ))}
        </div>
      </div>

      <button className="w-full bg-orange-600 text-white py-3 rounded-lg hover:bg-orange-700 transition-colors">
        Explore Hama Supply Chain
      </button>
    </div>
  );
}

export default function EnterpriseServices() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:flex lg:items-center lg:gap-12">
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <AnimatedImage 
              src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
              alt="Enterprise Logistics"
              className="h-[400px]"
            />
          </div>
          <Suspense fallback={<LoadingSkeleton />}>
            <EnterpriseContent />
          </Suspense>
        </div>
      </div>
    </section>
  );
}