import React from 'react';
    import { ShoppingBag, Package, Code, CreditCard, CheckCircle } from 'lucide-react';

    export default function EcommerceSolutions() {
      return (
        <div className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">E-commerce Solutions</h2>

            <div className="bg-white p-6 rounded-lg shadow-md mb-8 flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-6 md:mb-0 md:pr-8">
                <h3 className="text-2xl font-semibold mb-6">Integrated Shipping for Your Online Business</h3>
                <p className="text-gray-700 mb-6">
                  Our e-commerce solutions provide integrated shipping options for your online business. We make it easy to ship your products to your customers.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-xl font-semibold mb-4">Key Features</h4>
                    <ul className="text-gray-700">
                      <li className="flex items-center mb-2">
                        <ShoppingBag className="h-5 w-5 text-orange-600 mr-2" />
                        Integration with popular e-commerce platforms
                      </li>
                      <li className="flex items-center mb-2">
                        <Package className="h-5 w-5 text-orange-600 mr-2" />
                        Automated shipping process
                      </li>
                      <li className="flex items-center mb-2">
                        <Code className="h-5 w-5 text-orange-600 mr-2" />
                        Easy-to-use APIs
                      </li>
                      <li className="flex items-center mb-2">
                        <CreditCard className="h-5 w-5 text-orange-600 mr-2" />
                        Flexible payment options
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-4">Service Options</h4>
                    <ul className="text-gray-700">
                      <li className="flex items-center mb-2">
                        <Package className="h-5 w-5 text-orange-600 mr-2" />
                        Direct-to-consumer shipping
                      </li>
                      <li className="flex items-center mb-2">
                        <Package className="h-5 w-5 text-orange-600 mr-2" />
                        Fulfillment services
                      </li>
                      <li className="flex items-center mb-2">
                        <Package className="h-5 w-5 text-orange-600 mr-2" />
                        Returns management
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2">
                <img
                  src="https://images.unsplash.com/photo-1562157873-818bc0726f68?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="E-commerce Solutions"
                  className="rounded-lg shadow-md w-full h-auto object-cover"
                />
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-6">Integration and Support</h3>
              <p className="text-gray-700 mb-6">
                We provide seamless integration with popular e-commerce platforms and offer dedicated support to help you get started.
              </p>
              <ul className="text-gray-700">
                <li className="mb-2">
                  <span className="font-medium text-orange-600">Integration:</span>
                  <span className="ml-2">We offer plugins and APIs for easy integration.</span>
                </li>
                <li className="mb-2">
                  <span className="font-medium text-orange-600">Support:</span>
                  <span className="ml-2">Our team is available to assist with any integration-related questions.</span>
                </li>
                <li className="mb-2">
                  <span className="font-medium text-orange-600">Documentation:</span>
                  <span className="ml-2">We provide comprehensive documentation for our APIs.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      );
    }
