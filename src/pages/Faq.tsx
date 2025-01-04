import React, { useState } from 'react';
    import { ChevronDown, ChevronUp } from 'lucide-react';

    const faqData = [
      {
        question: 'What is Hama Logistics?',
        answer:
          'Hama Logistics is a leading logistics company providing comprehensive shipping and supply chain solutions across Kenya and beyond. We offer a range of services including domestic and international delivery, freight services, and e-commerce solutions.',
      },
      {
        question: 'What types of shipping services do you offer?',
        answer:
          'We offer a variety of shipping services including express and standard domestic delivery, international shipping, air and sea freight, and specialized e-commerce solutions. We also provide customizable logistics solutions for businesses.',
      },
      {
        question: 'How can I track my shipment?',
        answer:
          'You can track your shipment using the tracking number provided to you. Simply enter the tracking number on our website’s tracking page to view the current status and location of your package. We also offer real-time map tracking for enhanced visibility.',
      },
      {
        question: 'How do I get a shipping quote?',
        answer:
          'To get a shipping quote, please visit our "Get a Quote" page. You will need to provide details such as the origin and destination addresses, package dimensions and weight, and the type of shipping service you require. Our system will then generate a detailed quote for you.',
      },
      {
        question: 'What are your delivery times?',
        answer:
          'Our delivery times vary depending on the type of service and the destination. Express domestic deliveries are typically completed within 24 hours, while standard deliveries take 2-3 business days. International shipping times vary based on the destination and shipping method. Please refer to our service descriptions for more details.',
      },
      {
        question: 'Do you offer international shipping?',
        answer:
          'Yes, we offer international shipping services to various destinations worldwide. We handle all the logistics, including customs clearance, to ensure your packages reach their destination safely and efficiently. Please contact our support team for more information on specific destinations.',
      },
      {
        question: 'What are your freight services?',
        answer:
          'Our freight services include air, ocean, road, and rail freight options. We provide comprehensive solutions for businesses of all sizes, including full container load (FCL), less than container load (LCL), and project cargo. We also offer special handling for sensitive and oversized cargo.',
      },
      {
        question: 'How do you handle customs and regulations for international shipments?',
        answer:
          'We provide assistance with customs documentation and ensure your shipments comply with all relevant regulations. Our team is experienced in navigating customs procedures and will guide you through the necessary steps to ensure a smooth shipping process.',
      },
      {
        question: 'What e-commerce solutions do you offer?',
        answer:
          'Our e-commerce solutions provide integrated shipping options for your online business. We offer easy-to-use APIs and plugins for popular e-commerce platforms, automated shipping processes, and flexible payment options. We also provide fulfillment services and returns management.',
      },
      {
        question: 'How can I contact customer support?',
        answer:
          'You can contact our customer support team via phone, email, or live chat. Our support team is available 24/7 to assist you with any questions or issues you may have. Please visit our "Contact Us" page for more details.',
      },
    ];

    export default function Faq() {
      const [openQuestion, setOpenQuestion] = useState(null);

      const toggleQuestion = (index) => {
        setOpenQuestion(openQuestion === index ? null : index);
      };

      return (
        <div className="py-16 bg-gray-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>

            <div className="space-y-6">
              {faqData.map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div
                    className="flex items-center justify-between cursor-pointer"
                    onClick={() => toggleQuestion(index)}
                  >
                    <h3 className="text-xl font-semibold">{item.question}</h3>
                    {openQuestion === index ? (
                      <ChevronUp className="h-5 w-5 text-orange-600" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-orange-600" />
                    )}
                  </div>
                  {openQuestion === index && (
                    <div className="mt-4 text-gray-700">
                      {item.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    }
