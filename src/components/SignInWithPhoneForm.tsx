import React, { useState } from 'react';
    import { Link } from 'react-router-dom';
    import CountryCodePicker from './CountryCodePicker';

    export default function SignInWithPhoneForm() {
      const [phoneNumber, setPhoneNumber] = useState('');
      const [countryCode, setCountryCode] = useState('+1');

      const handleSubmit = (e) => {
        e.preventDefault();
        // Handle sign in with phone logic here
        console.log('Sign in with phone submitted:', { phoneNumber, countryCode });
      };

      const handleCountryCodeSelect = (code: string) => {
        setCountryCode(code);
      };

      return (
        <div className="flex items-center justify-center py-16">
          <div className="bg-white p-8 rounded-lg shadow-md max-w-sm w-full">
            <h2 className="text-2xl font-semibold mb-2 text-center">Sign in with Phone</h2>
            <p className="text-gray-600 mb-6 text-center">
              Or <Link to="/login" className="text-blue-600 hover:text-blue-700">sign in with email</Link>
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex items-center border rounded-md focus-within:ring-2 focus-within:ring-blue-500">
                <CountryCodePicker onSelect={handleCountryCodeSelect} />
                <input
                  type="tel"
                  placeholder="Enter your phone number"
                  className="flex-1 px-4 py-2 focus:outline-none rounded-r-md"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-orange-600 to-pink-600 text-white py-3 rounded-md hover:opacity-90 transition-colors"
              >
                Continue with Phone
              </button>
            </form>
          </div>
        </div>
      );
    }
