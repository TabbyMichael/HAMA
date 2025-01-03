import React from 'react';
import { MapPin } from 'lucide-react';

const locations = [
  { city: 'Nairobi', lat: -1.2921, lng: 36.8219 },
  { city: 'Mombasa', lat: -4.0435, lng: 39.6682 },
  { city: 'Kisumu', lat: -0.1022, lng: 34.7617 },
];

export default function KenyaMap() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Our Network</h2>
        
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Map visualization */}
          <div className="relative h-[400px] bg-orange-50 rounded-lg p-4">
            <div className="absolute inset-0 bg-contain bg-center bg-no-repeat"
                 style={{
                   backgroundImage: "url('https://images.unsplash.com/photo-1580477667995-2b94f01c9516?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80')"
                 }}>
              {locations.map((location, index) => (
                <div
                  key={index}
                  className="absolute"
                  style={{
                    left: `${(location.lng + 180) * (100 / 360)}%`,
                    top: `${(location.lat + 90) * (100 / 180)}%`
                  }}
                >
                  <MapPin className="h-6 w-6 text-orange-600" />
                </div>
              ))}
            </div>
          </div>

          {/* Location details */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">Major Hubs</h3>
            <div className="space-y-6">
              {locations.map((location, index) => (
                <div key={index} className="flex items-start">
                  <MapPin className="h-6 w-6 text-orange-600 mt-1" />
                  <div className="ml-4">
                    <h4 className="text-xl font-medium">{location.city}</h4>
                    <p className="text-gray-600">24/7 Operations</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}