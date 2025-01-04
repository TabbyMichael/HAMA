import React, { useState } from 'react';
    import { X, Mail, MessageSquare } from 'lucide-react';
    import { Link } from 'react-router-dom';

    interface SupportModalProps {
      isOpen: boolean;
      onClose: () => void;
    }

    const SupportModal: React.FC<SupportModalProps> = ({ isOpen, onClose }) => {
      const [name, setName] = useState('');
      const [email, setEmail] = useState('');
      const [message, setMessage] = useState('');

      const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        console.log('Form submitted:', { name, email, message });
        onClose();
      };

      if (!isOpen) return null;

      return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold">Contact Support</h2>
              <button onClick={onClose} className="text-gray-600 hover:text-gray-800">
                <X className="h-6 w-6" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-700 font-medium mb-2">Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Email</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Message</label>
                <textarea
                  placeholder="Enter your message"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={4}
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-orange-600 text-white py-3 rounded-md hover:bg-orange-700 transition-colors flex items-center justify-center"
              >
                <Mail className="h-5 w-5 mr-2" />
                Send Message
              </button>
            </form>

            <div className="mt-6 text-center">
              <Link to="/faq" className="text-orange-600 hover:text-orange-700 flex items-center justify-center">
                <MessageSquare className="h-5 w-5 mr-2" />
                View FAQ
              </Link>
            </div>
          </div>
        </div>
      );
    };

    export default SupportModal;
