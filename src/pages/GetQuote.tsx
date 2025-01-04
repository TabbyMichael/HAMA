import React, { useState } from 'react';
    import { MapPin, Package, Truck, Calendar, Tag as CurrencyIcon } from 'lucide-react';

    export default function GetQuote() {
      const [origin, setOrigin] = useState('');
      const [destination, setDestination] = useState('');
      const [weight, setWeight] = useState('');
      const [dimensions, setDimensions] = useState('');
      const [shippingType, setShippingType] = useState('express');
      const [quote, setQuote] = useState(null);

      const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate fetching a quote
        const simulatedQuote = {
          cost: 150,
          deliveryTime: '2-3 business days',
          breakdown: {
            shipping: 100,
            insurance: 20,
            fuelSurcharge: 30,
          },
        };
        setQuote(simulatedQuote);
      };

      return (
        <div className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-8">Get a Shipping Quote</h2>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    <MapPin className="inline-block h-5 w-5 mr-1 text-orange-600" />
                    Origin
                  </label>
                  <input
                    type="text"
                    placeholder="Enter origin address"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                    value={origin}
                    onChange={(e) => setOrigin(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    <MapPin className="inline-block h-5 w-5 mr-1 text-orange-600" />
                    Destination
                  </label>
                  <input
                    type="text"
                    placeholder="Enter destination address"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    <Package className="inline-block h-5 w-5 mr-1 text-orange-600" />
                    Weight (kg)
                  </label>
                  <input
                    type="number"
                    placeholder="Enter package weight"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    <Package className="inline-block h-5 w-5 mr-1 text-orange-600" />
                    Dimensions (cm)
                  </label>
                  <input
                    type="text"
                    placeholder="Enter package dimensions (e.g., 20x30x10)"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                    value={dimensions}
                    onChange={(e) => setDimensions(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    <Truck className="inline-block h-5 w-5 mr-1 text-orange-600" />
                    Shipping Type
                  </label>
                  <select
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                    value={shippingType}
                    onChange={(e) => setShippingType(e.target.value)}
                  >
                    <option value="express">Express</option>
                    <option value="standard">Standard</option>
                    <option value="freight">Freight</option>
                  </select>
                </div>
                <button
                  type="submit"
                  className="w-full bg-orange-600 text-white py-3 rounded-md hover:bg-orange-700 transition-colors flex items-center justify-center"
                >
                  {CurrencyIcon && <CurrencyIcon className="h-5 w-5 mr-2" />}
                  Get Quote
                </button>
              </form>

              {quote && (
                <div className="mt-8 p-4 border rounded-md">
                  <h3 className="text-xl font-semibold mb-4">Quote Details</h3>
                  <div className="flex items-center mb-2">
                    <span className="text-gray-600 mr-2">Estimated Cost:</span>
                    <span className="font-medium text-orange-600">${quote.cost}</span>
                  </div>
                  <div className="flex items-center mb-2">
                    <span className="text-gray-600 mr-2">Estimated Delivery Time:</span>
                    <span className="font-medium">{quote.deliveryTime}</span>
                  </div>
                  <div className="mt-4">
                    <h4 className="text-lg font-semibold mb-2">Cost Breakdown</h4>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Shipping:</span>
                      <span className="font-medium">${quote.breakdown.shipping}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Insurance:</span>
                      <span className="font-medium">${quote.breakdown.insurance}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Fuel Surcharge:</span>
                      <span className="font-medium">${quote.breakdown.fuelSurcharge}</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      );
    }
