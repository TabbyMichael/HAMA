import React from 'react';
    import { Truck, Facebook, Twitter, Instagram, Mail } from 'lucide-react';
    import { Link } from 'react-router-dom';
    import { useLanguage } from '../context/LanguageContext';

    const translations = {
      en: {
        companyInfo: 'Your trusted logistics partner in Kenya and beyond.',
        quickLinks: 'Quick Links',
        trackShipment: 'Track Shipment',
        getQuote: 'Get a Quote',
        locations: 'Locations',
        services: 'Services',
        servicesTitle: 'Services',
        domesticDelivery: 'Domestic Delivery',
        internationalShipping: 'International Shipping',
        freightServices: 'Freight Services',
        ecommerceSolutions: 'E-commerce Solutions',
        contactUs: 'Contact Us',
        headquarters: 'Headquarters:',
        addressLine1: 'Nairobi Business District',
        addressLine2: 'Kenya',
        copyright: 'Hama Logistics. All rights reserved.',
      },
      sw: {
        companyInfo: 'Mshirika wako unayeaminika wa usafirishaji nchini Kenya na kwingineko.',
        quickLinks: 'Viungo vya Haraka',
        trackShipment: 'Fuatilia Usafirishaji',
        getQuote: 'Pata Bei',
        locations: 'Maeneo',
        services: 'Huduma',
        servicesTitle: 'Huduma',
        domesticDelivery: 'Uwasilishaji wa Ndani',
        internationalShipping: 'Usafirishaji wa Kimataifa',
        freightServices: 'Huduma za Usafirishaji Mizigo',
        ecommerceSolutions: 'Suluhisho za E-commerce',
        contactUs: 'Wasiliana Nasi',
        headquarters: 'Makao Makuu:',
        addressLine1: 'Wilaya ya Biashara ya Nairobi',
        addressLine2: 'Kenya',
        copyright: 'Hama Logistics. Haki zote zimehifadhiwa.',
      },
    };

    export default function Footer() {
      const { language } = useLanguage();

      return (
        <footer className="bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Company Info */}
              <div>
                <div className="flex items-center mb-4">
                  <Truck className="h-8 w-8 text-orange-600" />
                  <span className="ml-2 text-2xl font-bold">Hama</span>
                </div>
                <p className="text-gray-400">
                  {translations[language].companyInfo}
                </p>
                <div className="mt-4 flex space-x-4">
                  <a href="#" className="text-gray-400 hover:text-white">
                    <Facebook className="h-6 w-6" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white">
                    <Twitter className="h-6 w-6" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white">
                    <Instagram className="h-6 w-6" />
                  </a>
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h3 className="text-lg font-semibold mb-4">{translations[language].quickLinks}</h3>
                <ul className="space-y-2">
                  <li><Link to="/track" className="text-gray-400 hover:text-white">{translations[language].trackShipment}</Link></li>
                  <li><Link to="/quote" className="text-gray-400 hover:text-white">{translations[language].getQuote}</Link></li>
                  <li><Link to="/locations" className="text-gray-400 hover:text-white">{translations[language].locations}</Link></li>
                  <li><Link to="/services" className="text-gray-400 hover:text-white">{translations[language].services}</Link></li>
                </ul>
              </div>

              {/* Services */}
              <div>
                <h3 className="text-lg font-semibold mb-4">{translations[language].servicesTitle}</h3>
                <ul className="space-y-2">
                  <li><Link to="/domestic-delivery" className="text-gray-400 hover:text-white">{translations[language].domesticDelivery}</Link></li>
                  <li><Link to="/international-shipping" className="text-gray-400 hover:text-white">{translations[language].internationalShipping}</Link></li>
                  <li><Link to="/freight-services" className="text-gray-400 hover:text-white">{translations[language].freightServices}</Link></li>
                  <li><Link to="/ecommerce-solutions" className="text-gray-400 hover:text-white">{translations[language].ecommerceSolutions}</Link></li>
                </ul>
              </div>

              {/* Contact */}
              <div>
                <h3 className="text-lg font-semibold mb-4">{translations[language].contactUs}</h3>
                <div className="space-y-4">
                  <p className="flex items-center text-gray-400">
                    <Mail className="h-5 w-5 mr-2" />
                    info@hama.co.ke
                  </p>
                  <div>
                    <p className="text-gray-400">{translations[language].headquarters}</p>
                    <p className="text-gray-400">{translations[language].addressLine1}</p>
                    <p className="text-gray-400">{translations[language].addressLine2}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
              <p>&copy; {new Date().getFullYear()} {translations[language].copyright}</p>
            </div>
          </div>
        </footer>
      );
    }
