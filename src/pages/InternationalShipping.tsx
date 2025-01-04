import React from 'react';
    import { Globe, Plane, Package, ShieldCheck, FileText } from 'lucide-react';

    export default function InternationalShipping() {
      return (
        <div className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">International Shipping</h2>

            <div className="bg-white p-6 rounded-lg shadow-md mb-8 flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-6 md:mb-0 md:pr-8">
                <h3 className="text-2xl font-semibold mb-6">Connect Your Business to the World</h3>
                <p className="text-gray-700 mb-6">
                  Expand your business globally with our international shipping service. We handle all the logistics, so you can focus on growing your business.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-xl font-semibold mb-4">Key Features</h4>
                    <ul className="text-gray-700">
                      <li className="flex items-center mb-2">
                        <Globe className="h-5 w-5 text-orange-600 mr-2" />
                        Global shipping network
                      </li>
                      <li className="flex items-center mb-2">
                        <Plane className="h-5 w-5 text-orange-600 mr-2" />
                        Air and sea freight options
                      </li>
                      <li className="flex items-center mb-2">
                        <Package className="h-5 w-5 text-orange-600 mr-2" />
                        Customs clearance assistance
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
                        Express international shipping
                      </li>
                      <li className="flex items-center mb-2">
                        <Package className="h-5 w-5 text-orange-600 mr-2" />
                        Standard international shipping
                      </li>
                      <li className="flex items-center mb-2">
                        <Package className="h-5 w-5 text-orange-600 mr-2" />
                        Freight shipping
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2">
                <img
                  src="https://images.unsplash.com/photo-1519682337018-559716250a74?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="International Shipping"
                  className="rounded-lg shadow-md w-full h-auto object-cover"
                />
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-6">Customs and Regulations</h3>
              <p className="text-gray-700 mb-6">
                Navigating customs and regulations can be complex. We provide assistance with customs documentation and ensure your shipments comply with all relevant regulations.
              </p>
              <ul className="text-gray-700">
                <li className="mb-2">
                  <span className="font-medium text-orange-600">Documentation:</span>
                  <span className="ml-2">We provide guidance on required documentation.</span>
                </li>
                <li className="mb-2">
                  <span className="font-medium text-orange-600">Compliance:</span>
                  <span className="ml-2">We ensure your shipments comply with all relevant regulations.</span>
                </li>
                <li className="mb-2">
                  <span className="font-medium text-orange-600">Support:</span>
                  <span className="ml-2">Our team is available to assist with any customs-related questions.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      );
    }
