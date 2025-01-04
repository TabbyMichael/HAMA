import React, { useRef, useEffect } from 'react';
    import { MapPin } from 'lucide-react';
    import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';

    const locations = [
      { city: 'Nairobi', lat: -1.2695, lng: 36.8214 },
      { city: 'Mombasa', lat: -4.0435, lng: 39.6682 },
      { city: 'Kisumu', lat: -0.1022, lng: 34.7617 },
    ];

    const mapContainerStyle = {
      width: '100%',
      height: '300px',
    };

    const center = {
      lat: -1.2695,
      lng: 36.8214,
    };

    export default function KenyaMap() {
      const mapRef = useRef(null);
      const { isLoaded, loadError } = useLoadScript({
        // googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY, // Removed API key
      });

      useEffect(() => {
        if (isLoaded && mapRef.current) {
          // Map is already initialized, no need to re-render
        }
      }, [isLoaded]);

      if (loadError) {
        return <div>Error loading maps</div>;
      }

      if (!isLoaded) {
        return <div>Loading maps</div>;
      }

      return (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Our Network</h2>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Map visualization */}
              <div className="relative h-[400px] bg-orange-50 rounded-lg p-4">
                <GoogleMap
                  mapContainerStyle={mapContainerStyle}
                  zoom={10}
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
                    />
                  ))}
                </GoogleMap>
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
