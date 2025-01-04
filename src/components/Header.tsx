import React, { useState } from 'react';
    import { Truck, Menu, X, Globe, User, HelpCircle } from 'lucide-react';
    import { Link } from 'react-router-dom';
    import SupportModal from './SupportModal';
    import { useLanguage } from '../context/LanguageContext';

    const translations = {
      en: {
        home: 'Home',
        services: 'Services',
        trackShipment: 'Track Shipment',
        locations: 'Locations',
        support: 'Support',
        login: 'Login',
        getQuote: 'Get Quote',
      },
      sw: {
        home: 'Nyumbani',
        services: 'Huduma',
        trackShipment: 'Fuatilia Usafirishaji',
        locations: 'Maeneo',
        support: 'Msaada',
        login: 'Ingia',
        getQuote: 'Pata Bei',
      },
    };

    export default function Header() {
      const [isMenuOpen, setIsMenuOpen] = useState(false);
      const [isSupportModalOpen, setIsSupportModalOpen] = useState(false);
      const { language, setLanguage } = useLanguage();

      const handleOpenSupportModal = () => {
        setIsSupportModalOpen(true);
      };

      const handleCloseSupportModal = () => {
        setIsSupportModalOpen(false);
      };

      const handleLanguageChange = () => {
        setLanguage(language === 'en' ? 'sw' : 'en');
      };

      return (
        <header className="bg-white shadow-md">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16 items-center">
              {/* Logo */}
              <div className="flex items-center">
                <Truck className="h-8 w-8 text-orange-600" />
                <Link to="/" className="ml-2 text-2xl font-bold text-gray-900">Hama</Link>
              </div>

              {/* Desktop Navigation */}
              <nav className="hidden md:flex space-x-8">
                <Link to="/" className="text-gray-700 hover:text-orange-600">{translations[language].home}</Link>
                <Link to="/services" className="text-gray-700 hover:text-orange-600">{translations[language].services}</Link>
                <Link to="/track" className="text-gray-700 hover:text-orange-600">{translations[language].trackShipment}</Link>
                <Link to="/locations" className="text-gray-700 hover:text-orange-600">{translations[language].locations}</Link>
                <button onClick={handleOpenSupportModal} className="text-gray-700 hover:text-orange-600 flex items-center">
                  <HelpCircle className="h-5 w-5 mr-1" />
                  {translations[language].support}
                </button>
              </nav>

              {/* Right side buttons */}
              <div className="hidden md:flex items-center space-x-4">
                <button
                  onClick={handleLanguageChange}
                  className="flex items-center text-gray-700 hover:text-orange-600"
                >
                  <Globe className="h-5 w-5 mr-1" />
                  {language === 'en' ? 'EN' : 'SW'}
                </button>
                <Link to="/login" className="flex items-center text-gray-700 hover:text-orange-600">
                  <User className="h-5 w-5 mr-1" />
                  {translations[language].login}
                </Link>
                <button className="bg-orange-600 text-white px-4 py-2 rounded-md hover:bg-orange-700">
                  {translations[language].getQuote}
                </button>
              </div>

              {/* Mobile menu button */}
              <div className="md:hidden">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="text-gray-700"
                >
                  {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile menu */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <Link to="/" className="block px-3 py-2 text-gray-700 hover:text-orange-600">{translations[language].home}</Link>
                <Link to="/services" className="block px-3 py-2 text-gray-700 hover:text-orange-600">Services</Link>
                <Link to="/track" className="block px-3 py-2 text-gray-700 hover:text-orange-600">Track Shipment</Link>
                <Link to="/locations" className="block px-3 py-2 text-gray-700 hover:text-orange-600">Locations</Link>
                <button onClick={handleOpenSupportModal} className="block px-3 py-2 text-gray-700 hover:text-orange-600 flex items-center">
                  <HelpCircle className="h-5 w-5 mr-1" />
                  {translations[language].support}
                </button>
                <Link to="/login" className="block px-3 py-2 text-gray-700 hover:text-orange-600">
                  {translations[language].login}
                </Link>
                <button className="block px-3 py-2 text-gray-700 hover:text-orange-600">
                  {translations[language].getQuote}
                </button>
              </div>
            </div>
          )}
          <SupportModal isOpen={isSupportModalOpen} onClose={handleCloseSupportModal} />
        </header>
      );
    }
