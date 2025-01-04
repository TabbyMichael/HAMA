import React from 'react';
    import { Truck, Plane, Box, ShoppingBag } from 'lucide-react';
    import { useLanguage } from '../context/LanguageContext';

    const translations = {
      en: {
        ourServices: 'Our Services',
        domesticDelivery: 'Domestic Delivery',
        domesticDescription: 'Fast and reliable delivery across Kenya with real-time tracking',
        internationalShipping: 'International Shipping',
        internationalDescription: 'Connect your business to the world with our global shipping network',
        freightServices: 'Freight Services',
        freightDescription: 'Comprehensive freight solutions for businesses of all sizes',
        ecommerceSolutions: 'E-commerce Solutions',
        ecommerceDescription: 'Integrated shipping solutions for your online business',
        learnMore: 'Learn More →',
        businessSolutions: 'Business Solutions',
        ecommerceIntegration: 'E-commerce Integration',
        ecommerceIntegrationDescription: 'Seamlessly integrate our shipping services with your e-commerce platform. We offer easy-to-use APIs and plugins for popular platforms.',
        customizableLogistics: 'Customizable Logistics',
        customizableLogisticsDescription: 'Tailor our logistics solutions to meet the specific needs of your business. We offer flexible options for warehousing, fulfillment, and more.',
        dataDrivenInsights: 'Data-Driven Insights',
        dataDrivenInsightsDescription: 'Gain valuable insights into your supply chain with our data and analytics tools. Optimize your operations and reduce costs.',
        flexibleWarehousing: 'Flexible Warehousing',
        flexibleWarehousingDescription: 'Our on-demand warehousing solutions provide flexible storage and fulfillment options. Scale your operations as needed.',
      },
      sw: {
        ourServices: 'Huduma Zetu',
        domesticDelivery: 'Uwasilishaji wa Ndani',
        domesticDescription: 'Uwasilishaji wa haraka na wa kuaminika kote Kenya na ufuatiliaji wa wakati halisi',
        internationalShipping: 'Usafirishaji wa Kimataifa',
        internationalDescription: 'Unganisha biashara yako na ulimwengu kwa mtandao wetu wa usafirishaji wa kimataifa',
        freightServices: 'Huduma za Usafirishaji Mizigo',
        freightDescription: 'Suluhisho kamili za usafirishaji mizigo kwa biashara za ukubwa wote',
        ecommerceSolutions: 'Suluhisho za E-commerce',
        ecommerceDescription: 'Suluhisho zilizounganishwa za usafirishaji kwa biashara yako ya mtandaoni',
        learnMore: 'Jifunze Zaidi →',
        businessSolutions: 'Suluhisho za Biashara',
        ecommerceIntegration: 'Ujumuishaji wa E-commerce',
        ecommerceIntegrationDescription: 'Unganisha huduma zetu za usafirishaji na jukwaa lako la e-commerce. Tunatoa API na programu-jalizi rahisi kutumia kwa majukwaa maarufu.',
        customizableLogistics: 'Usafirishaji Unaoweza Kubadilishwa',
        customizableLogisticsDescription: 'Badilisha suluhisho zetu za usafirishaji ili kukidhi mahitaji maalum ya biashara yako. Tunatoa chaguo rahisi za kuhifadhi, utimilifu na zaidi.',
        dataDrivenInsights: 'Maarifa Yanayoendeshwa na Data',
        dataDrivenInsightsDescription: 'Pata maarifa muhimu katika mnyororo wako wa usambazaji kwa zana zetu za data na uchanganuzi. Boresha shughuli zako na upunguze gharama.',
        flexibleWarehousing: 'Uhifadhi Rahisi',
        flexibleWarehousingDescription: 'Suluhisho zetu za uhifadhi wa mahitaji hutoa chaguo rahisi za kuhifadhi na utimilifu. Ongeza shughuli zako inavyohitajika.',
      },
    };

    const services = [
      {
        icon: <Truck className="h-8 w-8" />,
        title: 'domesticDelivery',
        description: 'domesticDescription',
        details: 'Our domestic delivery service ensures your packages reach their destination quickly and safely. We offer real-time tracking, so you always know where your shipment is.',
      },
      {
        icon: <Plane className="h-8 w-8" />,
        title: 'internationalShipping',
        description: 'internationalDescription',
        details: 'Expand your business globally with our international shipping service. We handle all the logistics, so you can focus on growing your business.',
      },
      {
        icon: <Box className="h-8 w-8" />,
        title: 'freightServices',
        description: 'freightDescription',
        details: 'Our freight services provide comprehensive solutions for businesses of all sizes. We offer a range of options to meet your specific needs.',
      },
      {
        icon: <ShoppingBag className="h-8 w-8" />,
        title: 'ecommerceSolutions',
        description: 'ecommerceDescription',
        details: 'Our e-commerce solutions provide integrated shipping options for your online business. We make it easy to ship your products to your customers.',
      },
    ];

    export default function Services() {
      const { language } = useLanguage();

      return (
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">{translations[language].ourServices}</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="text-orange-600 mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{translations[language][service.title]}</h3>
                  <p className="text-gray-600">{translations[language][service.description]}</p>
                  <details className="mt-4">
                    <summary className="text-orange-600 hover:text-orange-700 cursor-pointer">{translations[language].learnMore}</summary>
                    <p className="text-gray-600 mt-2">{service.details}</p>
                  </details>
                </div>
              ))}
            </div>
            {/* Business Solutions Section */}
            <div className="mt-16">
              <h2 className="text-3xl font-bold text-center mb-12">{translations[language].businessSolutions}</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                  <h3 className="text-xl font-semibold mb-4">{translations[language].ecommerceIntegration}</h3>
                  <p className="text-gray-600 mb-4">
                    {translations[language].ecommerceIntegrationDescription}
                  </p>
                  <a href="#" className="text-orange-600 hover:text-orange-700">{translations[language].learnMore}</a>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                  <h3 className="text-xl font-semibold mb-4">{translations[language].customizableLogistics}</h3>
                  <p className="text-gray-600 mb-4">
                    {translations[language].customizableLogisticsDescription}
                  </p>
                  <a href="#" className="text-orange-600 hover:text-orange-700">{translations[language].learnMore}</a>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                  <h3 className="text-xl font-semibold mb-4">{translations[language].dataDrivenInsights}</h3>
                  <p className="text-gray-600 mb-4">
                    {translations[language].dataDrivenInsightsDescription}
                  </p>
                  <a href="#" className="text-orange-600 hover:text-orange-700">{translations[language].learnMore}</a>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                  <h3 className="text-xl font-semibold mb-4">{translations[language].flexibleWarehousing}</h3>
                  <p className="text-gray-600 mb-4">
                    {translations[language].flexibleWarehousingDescription}
                  </p>
                  <a href="#" className="text-orange-600 hover:text-orange-700">{translations[language].learnMore}</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      );
    }
