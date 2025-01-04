import React, { useState } from 'react';
    import { LogIn, Phone } from 'lucide-react';
    import { Link } from 'react-router-dom';

    export default function SignupForm() {
      const [email, setEmail] = useState('');
      const [password, setPassword] = useState('');
      const [confirmPassword, setConfirmPassword] = useState('');

      const handleSubmit = (e) => {
        e.preventDefault();
        // Handle signup logic here
        console.log('Signup submitted:', { email, password, confirmPassword });
      };

      return (
        <div className="flex items-center justify-center py-16">
          <div className="bg-white p-8 rounded-lg shadow-md max-w-sm w-full">
            <Link to="/" className="text-gray-600 hover:text-gray-800 mb-4 block">
              ← Back to home
            </Link>
            <h2 className="text-2xl font-semibold mb-2">Create an account</h2>
            <p className="text-gray-600 mb-6">Get started with Hama today</p>

            <Link to="/sign-in-with-phone" className="w-full bg-white border border-gray-300 text-gray-700 py-3 rounded-md hover:bg-gray-100 transition-colors flex items-center justify-center mb-4">
              <LogIn className="h-5 w-5 mr-2" />
              Sign up with Google
            </Link>
            <Link to="/sign-in-with-phone" className="w-full bg-white border border-gray-300 text-gray-700 py-3 rounded-md hover:bg-gray-100 transition-colors flex items-center justify-center mb-6">
              <Phone className="h-5 w-5 mr-2" />
              Sign up with Phone
            </Link>

            <div className="text-center text-gray-600 mb-6">OR CONTINUE WITH</div>

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
              <div>
                <label className="block text-gray-700 font-medium mb-2">Password</label>
                <input
                  type="password"
                  placeholder="Create a password"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Confirm Password</label>
                <input
                  type="password"
                  placeholder="Confirm your password"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-orange-600 to-pink-600 text-white py-3 rounded-md hover:opacity-90 transition-colors"
              >
                Create Account
              </button>
            </form>

            <div className="mt-4 text-center">
              Already have an account? <Link to="/login" className="text-orange-600 hover:text-orange-700">Sign in</Link>
            </div>
          </div>
        </div>
      );
    }
