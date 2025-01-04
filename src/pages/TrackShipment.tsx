import React, { useState } from 'react';
    import { Search, MapPin, Clock, Package, CheckCircle, AlertTriangle, Truck } from 'lucide-react';
    import { useLanguage } from '../context/LanguageContext';

    const translations = {
      en: {
        trackYourShipment: 'Track Your Shipment',
        trackingNumberPlaceholder: 'Enter your tracking number',
        track: 'Track',
        trackingDetails: 'Tracking Details',
        trackingNumber: 'Tracking Number:',
        status: 'Status:',
        estimatedDelivery: 'Estimated Delivery:',
        timeline: 'Timeline',
        sensorData: 'Sensor Data',
        temperature: 'Temperature:',
        humidity: 'Humidity:',
        alerts: 'Alerts',
      },
      sw: {
        trackYourShipment: 'Fuatilia Usafirishaji Wako',
        trackingNumberPlaceholder: 'Ingiza nambari yako ya ufuatiliaji',
        track: 'Fuatilia',
        trackingDetails: 'Maelezo ya Ufuatiliaji',
        trackingNumber: 'Nambari ya Ufuatiliaji:',
        status: 'Hali:',
        estimatedDelivery: 'Uwasilishaji Uliokadiriwa:',
        timeline: 'Ratiba',
        sensorData: 'Data ya Sensor',
        temperature: 'Joto:',
        humidity: 'Unyevu:',
        alerts: 'Tahadhari',
      },
    };

    const trackingData = {
      trackingNumber: 'HAMA123456789',
      status: 'In Transit',
      estimatedDelivery: 'May 20, 2024, 10:00 AM',
      timeline: [
        {
          location: 'Nairobi Hub',
          time: 'May 18, 2024, 2:00 PM',
          status: 'Package Received',
          icon: <Package className="h-5 w-5 text-orange-600" />,
        },
        {
          location: 'Mombasa Hub',
          time: 'May 19, 2024, 8:00 AM',
          status: 'In Transit',
          icon: <MapPin className="h-5 w-5 text-orange-600" />,
        },
        {
          location: 'Out for Delivery',
          time: 'May 20, 2024, 8:00 AM',
          status: 'Out for Delivery',
          icon: <Truck className="h-5 w-5 text-orange-600" />,
        },
      ],
      sensorData: {
        temperature: '25°C',
        humidity: '60%',
      },
      alerts: [
        {
          type: 'delay',
          message: 'There might be a slight delay due to traffic.',
        },
      ],
    };

    export default function TrackShipment() {
      const [trackingNumber, setTrackingNumber] = useState('');
      const [showTracking, setShowTracking] = useState(false);
      const { language } = useLanguage();

      const handleTrack = () => {
        setShowTracking(true);
      };

      return (
        <div className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-8">{translations[language].trackYourShipment}</h2>

            <div className="bg-white p-6 rounded-lg shadow-md mb-8">
              <div className="flex items-center mb-4">
                <input
                  type="text"
                  placeholder={translations[language].trackingNumberPlaceholder}
                  className="flex-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  value={trackingNumber}
                  onChange={(e) => setTrackingNumber(e.target.value)}
                />
                <button
                  onClick={handleTrack}
                  className="bg-orange-600 text-white px-6 py-2 rounded-md hover:bg-orange-700 ml-2 flex items-center"
                >
                  <Search className="h-5 w-5 mr-2" />
                  {translations[language].track}
                </button>
              </div>
            </div>

            {showTracking && (
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-semibold">{translations[language].trackingDetails}</h3>
                  <span className="text-gray-600">{translations[language].trackingNumber} {trackingData.trackingNumber}</span>
                </div>

                <div className="mb-6">
                  <div className="flex items-center mb-2">
                    <span className="text-gray-600 mr-2">{translations[language].status}</span>
                    <span className="font-medium text-orange-600">{trackingData.status}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-gray-600 mr-2">{translations[language].estimatedDelivery}</span>
                    <span className="font-medium">{trackingData.estimatedDelivery}</span>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-xl font-semibold mb-4">{translations[language].timeline}</h4>
                  <ul className="relative border-l-2 border-gray-300">
                    {trackingData.timeline.map((event, index) => (
                      <li key={index} className="mb-4 ml-6">
                        <div className="absolute left-[-10px] top-1/2 transform -translate-y-1/2">
                          {event.icon}
                        </div>
                        <div className="ml-4">
                          <div className="flex items-center justify-between">
                            <span className="font-medium">{event.location}</span>
                            <span className="text-gray-600 text-sm">{event.time}</span>
                          </div>
                          <p className="text-gray-600">{event.status}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                {trackingData.sensorData && (
                  <div className="mb-6">
                    <h4 className="text-xl font-semibold mb-4">{translations[language].sensorData}</h4>
                    <div className="flex items-center">
                      <span className="text-gray-600 mr-2">{translations[language].temperature}</span>
                      <span className="font-medium">{trackingData.sensorData.temperature}</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-gray-600 mr-2">{translations[language].humidity}</span>
                      <span className="font-medium">{trackingData.sensorData.humidity}</span>
                    </div>
                  </div>
                )}

                {trackingData.alerts && trackingData.alerts.length > 0 && (
                  <div className="mb-6">
                    <h4 className="text-xl font-semibold mb-4">{translations[language].alerts}</h4>
                    {trackingData.alerts.map((alert, index) => (
                      <div key={index} className="flex items-center bg-yellow-100 p-3 rounded-md mb-2">
                        <AlertTriangle className="h-5 w-5 text-yellow-600 mr-2" />
                        <span className="text-gray-700">{alert.message}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      );
    }
