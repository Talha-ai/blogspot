'use client';

import { useEffect, useState } from 'react';
import { useAuthModal } from './AuthModalProvider';

export default function AuthModal() {
  const { modalType, closeModal, openModal } = useAuthModal();
  const [mounted, setMounted] = useState(false);

  // Hydration fix
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || !modalType) return null;

  return (
    <div className="fixed inset-0 bg-[#000000c0] flex justify-center items-center z-[100]">
      <div className="bg-white rounded-lg p-8 max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">
            {modalType === 'login' ? 'Login' : 'Sign Up'}
          </h2>
          <button
            onClick={closeModal}
            className="text-gray-500 cursor-pointer hover:text-gray-700"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Login form */}
        {modalType === 'login' && (
          <form className="space-y-4">
            <div>
              <label className="block text-gray-700 mb-2" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                type="email"
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2" htmlFor="password">
                Password
              </label>
              <input
                id="password"
                type="password"
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your password"
              />
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <input
                  id="remember"
                  type="checkbox"
                  className="h-4 w-4 text-blue-600"
                />
                <label htmlFor="remember" className="ml-2 text-gray-700">
                  Remember me
                </label>
              </div>
              <a href="#" className="text-blue-500 hover:underline">
                Forgot password?
              </a>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition-colors"
            >
              Login
            </button>
            <div className="text-center text-gray-500">
              Don&apos;t have an account?{' '}
              <button
                type="button"
                className="text-blue-500 hover:underline"
                onClick={() => {
                  closeModal();
                  setTimeout(() => {
                    openModal('signup');
                  }, 10);
                }}
              >
                Sign up
              </button>
            </div>
          </form>
        )}

        {/* Signup form */}
        {modalType === 'signup' && (
          <form className="space-y-4">
            <div>
              <label className="block text-gray-700 mb-2" htmlFor="name">
                Full Name
              </label>
              <input
                id="name"
                type="text"
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your full name"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                type="email"
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2" htmlFor="password">
                Password
              </label>
              <input
                id="password"
                type="password"
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Create a password"
              />
            </div>
            <div>
              <label
                className="block text-gray-700 mb-2"
                htmlFor="confirmPassword"
              >
                Confirm Password
              </label>
              <input
                id="confirmPassword"
                type="password"
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Confirm your password"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition-colors"
            >
              Sign Up
            </button>
            <div className="text-center text-gray-500">
              Already have an account?{' '}
              <button
                type="button"
                className="text-blue-500 hover:underline"
                onClick={() => {
                  closeModal();
                  setTimeout(() => {
                    openModal('login');
                  }, 10);
                }}
              >
                Login
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
