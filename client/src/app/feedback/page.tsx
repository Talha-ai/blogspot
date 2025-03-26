/* eslint-disable @typescript-eslint/no-unused-vars */
// src/app/feedback/page.tsx
'use client';

import { useState } from 'react';
import { Leckerli_One } from 'next/font/google';

const leckerliOne = Leckerli_One({
  weight: ['400'],
  subsets: ['latin'],
});

type FeedbackType =
  | 'general'
  | 'suggestion'
  | 'bug'
  | 'content'
  | 'design'
  | 'other';

export default function FeedbackPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    feedbackType: 'general' as FeedbackType,
    rating: 5,
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
      [name]: name === 'rating' ? parseInt(value) : value,
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
        'Thank you for your feedback! We appreciate your time and insights.'
      );
      setFormData({
        name: '',
        email: '',
        feedbackType: 'general',
        rating: 5,
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
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="text-center mb-12">
        <h1
          className={`${leckerliOne.className} text-4xl md:text-5xl text-[#2196f3] mb-4`}
        >
          We Value Your Feedback
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Your thoughts and suggestions help us improve BlogSpot. Please take a
          moment to share your experience and let us know how we can make it
          even better.
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
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

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
          </div>

          <div>
            <label htmlFor="feedbackType" className="block text-gray-700 mb-2">
              Feedback Type
            </label>
            <select
              id="feedbackType"
              name="feedbackType"
              value={formData.feedbackType}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2196f3] bg-white"
            >
              <option value="general">General Feedback</option>
              <option value="suggestion">Feature Suggestion</option>
              <option value="bug">Bug Report</option>
              <option value="content">Content Feedback</option>
              <option value="design">Design Feedback</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-700 mb-2">
              How would you rate your experience?
            </label>
            <div className="flex items-center space-x-2">
              {[1, 2, 3, 4, 5].map((rating) => (
                <label
                  key={rating}
                  className="flex flex-col items-center cursor-pointer"
                >
                  <input
                    type="radio"
                    name="rating"
                    value={rating}
                    checked={formData.rating === rating}
                    onChange={handleChange}
                    className="sr-only"
                  />
                  <span
                    className={`text-4xl ${
                      formData.rating >= rating
                        ? 'text-[#FFC107]'
                        : 'text-gray-300'
                    }`}
                  >
                    ★
                  </span>
                  <span className="text-xs mt-1">{rating}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block text-gray-700 mb-2">
              Your Feedback
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2196f3]"
              placeholder="Please share your thoughts, suggestions, or report any issues you've encountered..."
            ></textarea>
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-[#2196f3] text-white py-3 px-10 rounded-md hover:bg-[#1976d2] transition-colors duration-300 disabled:opacity-70"
            >
              {isSubmitting ? 'Submitting...' : 'Submit Feedback'}
            </button>
          </div>
        </form>
      </div>

      <div className="mt-12 text-center">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Other Ways to Connect
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center">
            <div className="flex items-center justify-center bg-[#2196f3] h-16 w-16 rounded-full mb-4">
              <i className="bx bx-envelope text-white text-3xl"></i>
            </div>
            <h3 className="text-lg font-medium mb-2">Email Us</h3>
            <p className="text-gray-600 text-center mb-4">
              Send your feedback directly to our dedicated team.
            </p>
            <a
              href="mailto:feedback@blogspot.com"
              className="text-[#2196f3] hover:underline"
            >
              feedback@blogspot.com
            </a>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center">
            <div className="flex items-center justify-center bg-[#2196f3] h-16 w-16 rounded-full mb-4">
              <i className="bx bxl-twitter text-white text-3xl"></i>
            </div>
            <h3 className="text-lg font-medium mb-2">Tweet Us</h3>
            <p className="text-gray-600 text-center mb-4">
              Share your thoughts with us on Twitter.
            </p>
            <a href="#" className="text-[#2196f3] hover:underline">
              @BlogSpot
            </a>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center sm:col-span-2 md:col-span-1">
            <div className="flex items-center justify-center bg-[#2196f3] h-16 w-16 rounded-full mb-4">
              <i className="bx bx-chat text-white text-3xl"></i>
            </div>
            <h3 className="text-lg font-medium mb-2">Community Forum</h3>
            <p className="text-gray-600 text-center mb-4">
              Join discussions and share ideas with other users.
            </p>
            <a href="#" className="text-[#2196f3] hover:underline">
              Visit Our Forum
            </a>
          </div>
        </div>
      </div>

      <div className="mt-12 bg-white rounded-lg shadow-lg p-6 text-center">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          FAQ About Feedback
        </h2>
        <div className="space-y-5 text-left max-w-3xl mx-auto">
          <div>
            <h3 className="text-lg font-medium text-gray-800">
              What happens to my feedback?
            </h3>
            <p className="text-gray-600">
              All feedback is reviewed by our team and considered for future
              updates and improvements to BlogSpot.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-medium text-gray-800">
              Will I receive a response?
            </h3>
            <p className="text-gray-600">
              We try to respond to all feedback, especially bug reports and
              feature suggestions, but high volume may prevent personal replies
              to every submission.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-medium text-gray-800">
              Is my feedback anonymous?
            </h3>
            <p className="text-gray-600">
              We collect your name and email to better understand our audience
              and follow up if needed, but you can request to remain anonymous
              in your feedback message.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
