/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useState, FormEvent } from 'react';
import { useAuthModal } from './AuthModalProvider';
import axios from 'axios';

// Define types for form data
interface LoginFormData {
  email: string;
  password: string;
  remember: boolean;
}

interface SignupFormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export default function AuthModal() {
  const { modalType, closeModal, openModal } = useAuthModal();
  const [loginError, setLoginError] = useState<string | null>(null);
  const [signupError, setSignupError] = useState<string | null>(null);

  // Login form state
  const [loginData, setLoginData] = useState<LoginFormData>({
    email: '',
    password: '',
    remember: false,
  });

  // Signup form state
  const [signupData, setSignupData] = useState<SignupFormData>({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  // Handle login form submission
  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();
    setLoginError(null);

    try {
      const response = await axios.post(
        'http://localhost:4000/api/auth/login',
        {
          email: loginData.email,
          password: loginData.password,
        },
        {
          withCredentials: true, // Important for session management
        }
      );

      // Handle successful login
      console.log('Login successful', response.data);
      closeModal();
      window.location.href = '/';

      // Optional: Trigger user state update or redirect
    } catch (error: any) {
      setLoginError(
        error.response?.data?.details ||
          error.response?.data?.message ||
          'An error occurred during login'
      );
    }
  };

  // Handle signup form submission
  const handleSignup = async (e: FormEvent) => {
    e.preventDefault();
    setSignupError(null);

    try {
      const response = await axios.post(
        'http://localhost:4000/api/auth/signup',
        {
          name: signupData.name,
          email: signupData.email,
          password: signupData.password,
          confirmPassword: signupData.confirmPassword,
        },
        {
          withCredentials: true, // Important for session management
        }
      );

      // Handle successful signup
      console.log('Signup successful', response.data);
      closeModal();
      // Optional: Trigger user state update or redirect
    } catch (error: any) {
      setSignupError(
        error.response?.data?.details ||
          error.response?.data?.message ||
          'An error occurred during signup'
      );
    }
  };
  return (
    <>
      {modalType && (
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
              <form onSubmit={handleLogin} className="space-y-4">
                {loginError && (
                  <div
                    className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
                    role="alert"
                  >
                    {loginError}
                  </div>
                )}
                <div>
                  <label className="block text-gray-700 mb-2" htmlFor="email">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={loginData.email}
                    onChange={(e) =>
                      setLoginData({ ...loginData, email: e.target.value })
                    }
                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div>
                  <label
                    className="block text-gray-700 mb-2"
                    htmlFor="password"
                  >
                    Password
                  </label>
                  <input
                    id="password"
                    type="password"
                    value={loginData.password}
                    onChange={(e) =>
                      setLoginData({ ...loginData, password: e.target.value })
                    }
                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your password"
                    required
                  />
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <input
                      id="remember"
                      type="checkbox"
                      checked={loginData.remember}
                      onChange={(e) =>
                        setLoginData({
                          ...loginData,
                          remember: e.target.checked,
                        })
                      }
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
              <form onSubmit={handleSignup} className="space-y-4">
                {signupError && (
                  <div
                    className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
                    role="alert"
                  >
                    {signupError}
                  </div>
                )}
                <div>
                  <label className="block text-gray-700 mb-2" htmlFor="name">
                    Full Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={signupData.name}
                    onChange={(e) =>
                      setSignupData({ ...signupData, name: e.target.value })
                    }
                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your full name"
                    required
                    minLength={2}
                    maxLength={50}
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2" htmlFor="email">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={signupData.email}
                    onChange={(e) =>
                      setSignupData({ ...signupData, email: e.target.value })
                    }
                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div>
                  <label
                    className="block text-gray-700 mb-2"
                    htmlFor="password"
                  >
                    Password
                  </label>
                  <input
                    id="password"
                    type="password"
                    value={signupData.password}
                    onChange={(e) =>
                      setSignupData({ ...signupData, password: e.target.value })
                    }
                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Create a password"
                    required
                    minLength={8}
                    // pattern="(?=.*[a-z])(?=.*[A-Z])(?=.*\d)"
                    title="Password must include uppercase, lowercase, and number"
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
                    value={signupData.confirmPassword}
                    onChange={(e) =>
                      setSignupData({
                        ...signupData,
                        confirmPassword: e.target.value,
                      })
                    }
                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Confirm your password"
                    required
                    minLength={8}
                    pattern={signupData.password}
                    title="Passwords must match"
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
      )}
    </>
  );
}
