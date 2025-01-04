import React from 'react';
    import { Truck, Clock, CheckCircle, ShieldCheck, Package } from 'lucide-react';

    export default function DomesticDelivery() {
      return (
        <div className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Domestic Delivery</h2>

            <div className="bg-white p-6 rounded-lg shadow-md mb-8 flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-6 md:mb-0 md:pr-8">
                <h3 className="text-2xl font-semibold mb-6">Fast and Reliable Delivery Across Kenya</h3>
                <p className="text-gray-700 mb-6">
                  Our domestic delivery service ensures your packages reach their destination quickly and safely. We offer real-time tracking, so you always know where your shipment is.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-xl font-semibold mb-4">Key Features</h4>
                    <ul className="text-gray-700">
                      <li className="flex items-center mb-2">
                        <Truck className="h-5 w-5 text-orange-600 mr-2" />
                        Fast and reliable delivery
                      </li>
                      <li className="flex items-center mb-2">
                        <Clock className="h-5 w-5 text-orange-600 mr-2" />
                        Real-time tracking
                      </li>
                      <li className="flex items-center mb-2">
                        <CheckCircle className="h-5 w-5 text-orange-600 mr-2" />
                        Door-to-door service
                      </li>
                      <li className="flex items-center mb-2">
                        <ShieldCheck className="h-5 w-5 text-orange-600 mr-2" />
                        Secure handling
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-4">Service Options</h4>
                    <ul className="text-gray-700">
                      <li className="flex items-center mb-2">
                        <Package className="h-5 w-5 text-orange-600 mr-2" />
                        Express delivery
                      </li>
                      <li className="flex items-center mb-2">
                        <Package className="h-5 w-5 text-orange-600 mr-2" />
                        Standard delivery
                      </li>
                      <li className="flex items-center mb-2">
                        <Package className="h-5 w-5 text-orange-600 mr-2" />
                        Same-day delivery (select areas)
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2">
                <img
                  src="https://images.unsplash.com/photo-1603523984947-828596419178?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Domestic Delivery"
                  className="rounded-lg shadow-md w-full h-auto object-cover"
                />
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-6">Service Level Agreements</h3>
              <p className="text-gray-700 mb-6">
                We are committed to providing the highest level of service. Our service level agreements ensure that your packages are delivered on time and in good condition.
              </p>
              <ul className="text-gray-700">
                <li className="mb-2">
                  <span className="font-medium text-orange-600">Delivery Time:</span>
                  <span className="ml-2">Express delivery within 24 hours, standard delivery within 2-3 business days.</span>
                </li>
                <li className="mb-2">
                  <span className="font-medium text-orange-600">Tracking:</span>
                  <span className="ml-2">Real-time tracking available for all shipments.</span>
                </li>
                <li className="mb-2">
                  <span className="font-medium text-orange-600">Customer Support:</span>
                  <span className="ml-2">24/7 customer support available via phone, email, and chat.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      );
    }
