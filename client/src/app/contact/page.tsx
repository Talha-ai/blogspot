/* eslint-disable @typescript-eslint/no-unused-vars */
// src/app/contact/page.tsx
'use client';

import { useState } from 'react';
import { Leckerli_One } from 'next/font/google';

const leckerliOne = Leckerli_One({
  weight: ['400'],
  subsets: ['latin'],
});

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(
    null
  );

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    try {
      // Replace with actual API call in production
      await new Promise((resolve) => setTimeout(resolve, 1500));

      setSubmitStatus('success');
      setSubmitMessage(
        'Thank you for contacting us! We will get back to you soon.'
      );
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      setSubmitStatus('error');
      setSubmitMessage('Something went wrong. Please try again later.');
    } finally {
      setIsSubmitting(false);
      // Reset message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
        setSubmitMessage('');
      }, 5000);
    }
  };

  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl">
      <div className="text-center mb-12">
        <h1
          className={`${leckerliOne.className} text-4xl md:text-5xl text-[#2196f3] mb-4`}
        >
          Contact Us
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Have questions, suggestions, or just want to say hello? We&apos;d love
          to hear from you. Fill out the form below and our team will get back
          to you as soon as possible.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Send Us a Message
          </h2>

          {submitStatus && (
            <div
              className={`mb-6 p-4 rounded-md ${
                submitStatus === 'success'
                  ? 'bg-green-100 text-green-700'
                  : 'bg-red-100 text-red-700'
              }`}
            >
              {submitMessage}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="name" className="block text-gray-700 mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2196f3]"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2196f3]"
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-gray-700 mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2196f3]"
                placeholder="How can we help you?"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-gray-700 mb-2">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2196f3]"
                placeholder="Write your message here..."
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#2196f3] text-white py-3 px-6 rounded-md hover:bg-[#1976d2] transition-colors duration-300 disabled:opacity-70"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>

        <div>
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              Contact Information
            </h2>

            <div className="space-y-5">
              <div className="flex items-start">
                <div className="flex items-center justify-center bg-[#2196f3] h-10 w-10 rounded-full mr-4">
                  <i className="bx bx-map text-white text-xl"></i>
                </div>
                <div>
                  <h3 className="text-gray-700 font-medium">Address</h3>
                  <p className="text-gray-600">
                    Banjara Hills Road No. 12, Hyderabad, Telangana
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex items-center justify-center bg-[#2196f3] h-10 w-10 rounded-full mr-4">
                  <i className="bx bx-phone text-white text-xl"></i>
                </div>
                <div>
                  <h3 className="text-gray-700 font-medium">Phone</h3>
                  <p className="text-gray-600">+91 9100725070</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex items-center justify-center bg-[#2196f3] h-10 w-10 rounded-full mr-4">
                  <i className="bx bx-envelope text-white text-xl"></i>
                </div>
                <div>
                  <h3 className="text-gray-700 font-medium">Email</h3>
                  <p className="text-gray-600">info@bloginn.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex items-center justify-center bg-[#2196f3] h-10 w-10 rounded-full mr-4">
                  <i className="bx bx-time text-white text-xl"></i>
                </div>
                <div>
                  <h3 className="text-gray-700 font-medium">Business Hours</h3>
                  <p className="text-gray-600">
                    Monday - Friday: 9:00 AM - 5:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              Connect With Us
            </h2>
            <div className="flex space-x-4">
              <a
                href="#"
                className="flex items-center justify-center bg-[#3b5998] h-10 w-10 rounded-full hover:opacity-80 transition-opacity"
              >
                <i className="bx bxl-facebook text-white text-xl"></i>
              </a>
              <a
                href="#"
                className="flex items-center justify-center bg-[#1da1f2] h-10 w-10 rounded-full hover:opacity-80 transition-opacity"
              >
                <i className="bx bxl-twitter text-white text-xl"></i>
              </a>
              <a
                href="#"
                className="flex items-center justify-center bg-[#c32aa3] h-10 w-10 rounded-full hover:opacity-80 transition-opacity"
              >
                <i className="bx bxl-instagram text-white text-xl"></i>
              </a>
              <a
                href="#"
                className="flex items-center justify-center bg-[#0a66c2] h-10 w-10 rounded-full hover:opacity-80 transition-opacity"
              >
                <i className="bx bxl-linkedin text-white text-xl"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Map section */}
      {/* <div className="mt-12 bg-white rounded-lg shadow-lg p-4">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
          Find Us
        </h2>
        <div className="h-96 w-full bg-gray-200 rounded-lg overflow-hidden">
          <div className="w-full h-full flex items-center justify-center bg-gray-200 text-gray-600">
            <p className="text-center">
              Map integration would go here <br />
              (Google Maps or similar service)
            </p>
          </div>
        </div>
      </div> */}
    </div>
  );
}
