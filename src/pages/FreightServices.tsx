import React from 'react';
    import { Truck, Ship, Plane, Train, Package, ShieldCheck } from 'lucide-react';

    export default function FreightServices() {
      return (
        <div className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Freight Services</h2>

            <div className="bg-white p-6 rounded-lg shadow-md mb-8 flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-6 md:mb-0 md:pr-8">
                <h3 className="text-2xl font-semibold mb-6">Comprehensive Freight Solutions</h3>
                <p className="text-gray-700 mb-6">
                  Our freight services provide comprehensive solutions for businesses of all sizes. We offer a range of options to meet your specific needs.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-xl font-semibold mb-4">Key Features</h4>
                    <ul className="text-gray-700">
                      <li className="flex items-center mb-2">
                        <Truck className="h-5 w-5 text-orange-600 mr-2" />
                        Road freight
                      </li>
                      <li className="flex items-center mb-2">
                        <Ship className="h-5 w-5 text-orange-600 mr-2" />
                        Ocean freight
                      </li>
                      <li className="flex items-center mb-2">
                        <Plane className="h-5 w-5 text-orange-600 mr-2" />
                        Air freight
                      </li>
                      <li className="flex items-center mb-2">
                        <Train className="h-5 w-5 text-orange-600 mr-2" />
                        Rail freight
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
                        Full container load (FCL)
                      </li>
                      <li className="flex items-center mb-2">
                        <Package className="h-5 w-5 text-orange-600 mr-2" />
                        Less than container load (LCL)
                      </li>
                      <li className="flex items-center mb-2">
                        <Package className="h-5 w-5 text-orange-600 mr-2" />
                        Project cargo
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2">
                <img
                  src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Freight Services"
                  className="rounded-lg shadow-md w-full h-auto object-cover"
                />
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-6">Special Handling</h3>
              <p className="text-gray-700 mb-6">
                We offer special handling options for sensitive and oversized cargo. Our team is experienced in handling a wide range of freight types.
              </p>
              <ul className="text-gray-700">
                <li className="mb-2">
                  <span className="font-medium text-orange-600">Temperature-Controlled:</span>
                  <span className="ml-2">We provide temperature-controlled shipping for sensitive goods.</span>
                </li>
                <li className="mb-2">
                  <span className="font-medium text-orange-600">Oversized Cargo:</span>
                  <span className="ml-2">We have the expertise to handle oversized and heavy cargo.</span>
                </li>
                <li className="mb-2">
                  <span className="font-medium text-orange-600">Hazardous Materials:</span>
                  <span className="ml-2">We are certified to handle hazardous materials.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      );
    }
