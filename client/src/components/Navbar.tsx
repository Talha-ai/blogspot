/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useAuthModal } from './AuthModalProvider';
import axios from 'axios'; // Make sure to install axios

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [, setWindowWidth] = useState(0);
  const { openModal } = useAuthModal();

  // Check authentication status on component mount
  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/getUser`,
          {
            withCredentials: true,
          }
        );
        setIsLoggedIn(response.data.isAuthenticated);
      } catch (error) {
        setIsLoggedIn(false);
      }
    };

    checkAuthStatus();

    // Handle window resize
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      // Close menu on larger screens
      if (window.innerWidth > 1024) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Logout handler
  const handleLogout = async () => {
    try {
      await axios.post(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/logout`,
        {},
        {
          withCredentials: true,
        }
      );
      setIsLoggedIn(false);
    } catch (error) {
      console.error('Logout failed', error);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Common link styling
  const linkStyle =
    "relative text-lg font-semibold text-white hover:after:scale-100 after:content-[''] after:absolute after:left-0 after:-bottom-2 after:w-full after:h-[3px] after:bg-white after:rounded-md after:scale-0 after:transition-transform after:duration-500";

  return (
    <header className="fixed top-0 left-0 w-full h-[75px] flex justify-between items-center bg-[#2196f3] text-white z-50">
      <div className="flex justify-center items-center">
        <Link href="/">
          <h2 className="text-[2em] font-semibold ml-4 md:ml-8">BlogSpot</h2>
        </Link>

        {/* Burger Menu Button - only visible on small screens */}
        <div className="lg:hidden mr-4 z-50">
          <button
            onClick={toggleMenu}
            className="flex flex-col justify-center items-center w-8 h-6 space-y-1.5 focus:outline-none"
          >
            <span
              className={`block w-8 h-1 bg-white rounded transition-transform duration-300 ${
                isMenuOpen ? 'transform rotate-45 translate-y-2.5' : ''
              }`}
            ></span>
            <span
              className={`block w-8 h-1 bg-white rounded transition-opacity duration-300 ${
                isMenuOpen ? 'opacity-0' : 'opacity-100'
              }`}
            ></span>
            <span
              className={`block w-8 h-1 bg-white rounded transition-transform duration-300 ${
                isMenuOpen ? 'transform -rotate-45 -translate-y-2.5' : ''
              }`}
            ></span>
          </button>
        </div>

        {/* Desktop Menu - hidden on small screens */}
        <nav className="hidden lg:block">
          <div>
            <Link href="/" className={`${linkStyle} ml-8`}>
              Home
            </Link>
            <Link href="/about" className={`${linkStyle} ml-8`}>
              About
            </Link>
            <Link href="/blogs" className={`${linkStyle} ml-8`}>
              Blogs
            </Link>
            <Link href="/contact" className={`${linkStyle} ml-8`}>
              Contact
            </Link>
            <Link href="/feedback" className={`${linkStyle} ml-8`}>
              Feedback
            </Link>
          </div>
        </nav>
      </div>
      {isLoggedIn ? (
        <button
          className="text-lg font-semibold px-4 py-1 border-2 border-white rounded-md bg-white text-[#2196f3] hover:bg-transparent hover:text-white transition-colors duration-300 mr-12 ml-5"
          onClick={handleLogout}
        >
          Logout
        </button>
      ) : (
        <>
          <button
            className="text-lg font-semibold px-4 py-1 border-2 border-white rounded-md bg-transparent text-white hover:bg-white hover:text-[#2196f3] transition-colors duration-300 ml-auto"
            onClick={() => openModal('login')}
          >
            Login
          </button>
          <button
            className="text-lg font-semibold px-4 py-1 border-2 border-white rounded-md bg-white text-[#2196f3] hover:bg-transparent hover:text-white transition-colors duration-300 mr-12 ml-5"
            onClick={() => openModal('signup')}
          >
            Signup
          </button>
        </>
      )}

      {/* Mobile Menu - fullscreen overlay */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-[#2196f3] bg-opacity-95 flex flex-col items-center justify-center z-40">
          <nav className="flex flex-col items-center space-y-6 w-full px-4">
            <Link
              href="/"
              className={`${linkStyle} ml-0 text-xl`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`${linkStyle} ml-0 text-xl`}
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/blogs"
              className={`${linkStyle} ml-0 text-xl`}
              onClick={() => setIsMenuOpen(false)}
            >
              Blogs
            </Link>
            <Link
              href="/contact"
              className={`${linkStyle} ml-0 text-xl`}
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Link
              href="/feedback"
              className={`${linkStyle} ml-0 text-xl`}
              onClick={() => setIsMenuOpen(false)}
            >
              Feedback
            </Link>
            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 mt-6">
              {isLoggedIn ? (
                <button
                  className="text-lg font-semibold px-4 py-1 border-2 border-white rounded-md bg-white text-[#2196f3] hover:bg-transparent hover:text-white transition-colors duration-300 w-full sm:w-auto"
                  onClick={() => {
                    handleLogout();
                    setIsMenuOpen(false);
                  }}
                >
                  Logout
                </button>
              ) : (
                <>
                  <button
                    className="text-lg font-semibold px-4 py-1 border-2 border-white rounded-md bg-transparent text-white hover:bg-white hover:text-[#2196f3] transition-colors duration-300 w-full sm:w-auto"
                    onClick={() => {
                      openModal('login');
                      setIsMenuOpen(false);
                    }}
                  >
                    Login
                  </button>
                  <button
                    className="text-lg font-semibold px-4 py-1 border-2 border-white rounded-md bg-white text-[#2196f3] hover:bg-transparent hover:text-white transition-colors duration-300 w-full sm:w-auto"
                    onClick={() => {
                      openModal('signup');
                      setIsMenuOpen(false);
                    }}
                  >
                    Signup
                  </button>
                </>
              )}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
