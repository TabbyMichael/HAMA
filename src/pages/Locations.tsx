import React from 'react';
    import { MapPin, Phone, Clock, ArrowRight } from 'lucide-react';
    import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';

    const locations = [
      {
        name: 'Ngara Hub',
        address: 'Ngara, Nairobi',
        phone: '+254 700 000 000',
        hours: 'Mon-Fri: 8:00 AM - 6:00 PM',
        services: ['Drop-off', 'Pickup', 'Customer Service'],
        lat: -1.2695,
        lng: 36.8214,
      },
      {
        name: 'Mombasa Hub',
        address: '456 Mombasa Road, Mombasa',
        phone: '+254 711 111 111',
        hours: 'Mon-Sat: 9:00 AM - 5:00 PM',
        services: ['Drop-off', 'Pickup'],
        lat: -4.0435,
        lng: 39.6682,
      },
      {
        name: 'Kisumu Hub',
        address: '789 Kisumu Avenue, Kisumu',
        phone: '+254 722 222 222',
        hours: 'Mon-Fri: 10:00 AM - 4:00 PM',
        services: ['Customer Service'],
        lat: -0.1022,
        lng: 34.7617,
      },
    ];

    const mapContainerStyle = {
      width: '100%',
      height: '900px',
    };

    const center = {
      lat: -1.2695,
      lng: 36.8214,
    };

    export default function Locations() {
      const { isLoaded, loadError } = useLoadScript({
        // googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY, // Removed API key
      });

      if (loadError) {
        return <div>Error loading maps</div>;
      }

      if (!isLoaded) {
        return <div>Loading maps</div>;
      }

      return (
        <div className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Our Locations</h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <GoogleMap
                  mapContainerStyle={mapContainerStyle}
                  zoom={6}
                  center={center}
                >
                  {locations.map((location, index) => (
                    <Marker
                      key={index}
                      position={{ lat: location.lat, lng: location.lng }}
                      icon={{
                        url: '/map-pin.svg',
                        scaledSize: new google.maps.Size(30, 30),
                      }}
                      title={location.name}
                    />
                  ))}
                </GoogleMap>
              </div>
              <div>
                <div className="grid grid-cols-1 gap-8">
                  {locations.map((location, index) => (
                    <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                      <h3 className="text-xl font-semibold mb-4">{location.name}</h3>
                      <div className="flex items-center mb-2">
                        <MapPin className="h-5 w-5 text-orange-600 mr-2" />
                        <span className="text-gray-700">{location.address}</span>
                      </div>
                      <div className="flex items-center mb-2">
                        <Phone className="h-5 w-5 text-orange-600 mr-2" />
                        <a href={`tel:${location.phone}`} className="text-gray-700">{location.phone}</a>
                      </div>
                      <div className="flex items-center mb-4">
                        <Clock className="h-5 w-5 text-orange-600 mr-2" />
                        <span className="text-gray-700">{location.hours}</span>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold mb-2">Services</h4>
                        <ul className="text-gray-700">
                          {location.services.map((service, i) => (
                            <li key={i} className="flex items-center mb-1">
                              <ArrowRight className="h-4 w-4 text-orange-600 mr-1" />
                              {service}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
