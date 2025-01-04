import React, { useState } from 'react';
    import { Mail } from 'lucide-react';
    import { useLanguage } from '../context/LanguageContext';

    const translations = {
      en: {
        newsletterTitle: 'Subscribe to Our Newsletter',
        newsletterDescription: 'Stay up-to-date with the latest news, offers, and updates from Hama Logistics.',
        emailPlaceholder: 'Enter your email address',
        subscribe: 'Subscribe',
      },
      sw: {
        newsletterTitle: 'Jiandikishe kwa Jarida Letu',
        newsletterDescription: 'Pata habari mpya, ofa, na masasisho kutoka Hama Logistics.',
        emailPlaceholder: 'Ingiza anwani yako ya barua pepe',
        subscribe: 'Jiandikishe',
      },
    };

    export default function Newsletter() {
      const [email, setEmail] = useState('');
      const { language } = useLanguage();

      const handleSubmit = (e) => {
        e.preventDefault();
        // Handle newsletter subscription logic here
        console.log('Newsletter subscription submitted:', { email });
        setEmail('');
      };

      return (
        <section className="bg-gray-100 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4">{translations[language].newsletterTitle}</h2>
              <p className="text-gray-600 mb-8">{translations[language].newsletterDescription}</p>

              <form onSubmit={handleSubmit} className="flex justify-center">
                <div className="flex rounded-md shadow-sm">
                  <input
                    type="email"
                    placeholder={translations[language].emailPlaceholder}
                    className="px-4 py-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <button
                    type="submit"
                    className="bg-orange-600 text-white px-6 py-2 rounded-r-md hover:bg-orange-700 transition-colors flex items-center"
                  >
                    <Mail className="h-5 w-5 mr-2" />
                    {translations[language].subscribe}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      );
    }
