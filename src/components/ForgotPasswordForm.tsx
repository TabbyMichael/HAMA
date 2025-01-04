import React, { useState } from 'react';
    import { Link } from 'react-router-dom';
    import { Mail } from 'lucide-react';

    export default function ForgotPasswordForm() {
      const [email, setEmail] = useState('');

      const handleSubmit = (e) => {
        e.preventDefault();
        // Handle forgot password logic here
        console.log('Forgot password submitted:', { email });
      };

      return (
        <div className="flex items-center justify-center py-16">
          <div className="bg-white p-8 rounded-lg shadow-md max-w-sm w-full">
            <Link to="/login" className="text-gray-600 hover:text-gray-800 mb-4 block">
              ← Back to login
            </Link>
            <h2 className="text-2xl font-semibold mb-2">Forgot your password?</h2>
            <p className="text-gray-600 mb-6">Enter your email address to reset your password.</p>

            <form onSubmit={handleSubmit} className="space-y-4">
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
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-orange-600 to-pink-600 text-white py-3 rounded-md hover:opacity-90 transition-colors flex items-center justify-center"
              >
                <Mail className="h-5 w-5 mr-2" />
                Reset Password
              </button>
            </form>
          </div>
        </div>
      );
    }
