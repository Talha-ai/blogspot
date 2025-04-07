'use client';

import { Leckerli_One } from 'next/font/google';

const leckerliOne = Leckerli_One({
  weight: ['400'],
  subsets: ['latin'],
});

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl">
      <div className="text-center mb-12">
        <h1
          className={`${leckerliOne.className} text-4xl md:text-5xl text-[#2196f3] mb-4`}
        >
          About BlogInn
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Your go-to destination for thought-provoking content across a variety
          of topics. Discover stories that inform, inspire, and entertain.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Our Mission
          </h2>
          <p className="text-gray-600 mb-4">
            At BlogInn, we believe in the power of words to transform
            perspectives and connect communities. Our mission is to curate and
            showcase high-quality blog content that educates, entertains, and
            inspires readers from all walks of life.
          </p>
          <p className="text-gray-600 mb-4">
            We strive to be a platform where diverse voices can thrive, sharing
            unique insights and experiences that contribute to meaningful
            conversations around the topics that matter most in today&apos;s
            world.
          </p>
          <p className="text-gray-600">
            Whether you&apos;re a casual reader looking for your next favorite
            blog or a passionate writer seeking to share your voice, BlogInn is
            your home for authentic, engaging content.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            What We Offer
          </h2>

          <div className="space-y-5">
            <div className="flex items-start">
              <div className="flex items-center justify-center bg-[#2196f3] h-10 w-10 rounded-full mr-4">
                <i className="bx bx-bulb text-white text-xl"></i>
              </div>
              <div>
                <h3 className="text-gray-700 font-medium">Diverse Content</h3>
                <p className="text-gray-600">
                  From technology and lifestyle to travel and personal
                  development, we feature blogs across numerous categories to
                  satisfy your curiosity.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex items-center justify-center bg-[#2196f3] h-10 w-10 rounded-full mr-4">
                <i className="bx bx-user-voice text-white text-xl"></i>
              </div>
              <div>
                <h3 className="text-gray-700 font-medium">Expert Insights</h3>
                <p className="text-gray-600">
                  Our featured writers include industry experts, thought
                  leaders, and passionate enthusiasts who bring depth and
                  authenticity to their topics.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex items-center justify-center bg-[#2196f3] h-10 w-10 rounded-full mr-4">
                <i className="bx bx-trending-up text-white text-xl"></i>
              </div>
              <div>
                <h3 className="text-gray-700 font-medium">Trending Topics</h3>
                <p className="text-gray-600">
                  Stay informed with our curated selection of blogs covering the
                  latest trends, news, and conversations shaping our world.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex items-center justify-center bg-[#2196f3] h-10 w-10 rounded-full mr-4">
                <i className="bx bx-world text-white text-xl"></i>
              </div>
              <div>
                <h3 className="text-gray-700 font-medium">Global Community</h3>
                <p className="text-gray-600">
                  Connect with readers and writers from around the globe who
                  share your interests and passion for meaningful content.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start mt-8">
        <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Our Story
          </h2>
          <p className="text-gray-600 mb-4">
            BlogInn was founded in 2023 by a group of content enthusiasts who
            recognized the need for a centralized platform that celebrates
            quality blog content. What started as a small project has grown into
            a thriving community of readers and writers.
          </p>
          <p className="text-gray-600 mb-4">
            We began with just a handful of featured blogs and a vision to
            create something special. Today, we&apos;re proud to showcase
            hundreds of exceptional blogs across dozens of categories, with new
            content being added daily.
          </p>
          <p className="text-gray-600">
            As we continue to grow, our commitment remains the same: to be the
            premier destination for discovering and sharing extraordinary blog
            content that enriches lives and fosters connection.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Join Our Community
          </h2>
          <p className="text-gray-600 mb-6">
            Become part of the BlogInn family and engage with content that
            matters to you. Here&apos;s how you can participate:
          </p>

          <div className="space-y-5">
            <div className="flex items-start">
              <div className="flex items-center justify-center bg-[#2196f3] h-10 w-10 rounded-full mr-4">
                <i className="bx bx-book-reader text-white text-xl"></i>
              </div>
              <div>
                <h3 className="text-gray-700 font-medium">Read & Discover</h3>
                <p className="text-gray-600">
                  Explore our curated collection of blogs and find new
                  perspectives that resonate with you.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex items-center justify-center bg-[#2196f3] h-10 w-10 rounded-full mr-4">
                <i className="bx bx-share text-white text-xl"></i>
              </div>
              <div>
                <h3 className="text-gray-700 font-medium">
                  Share Your Favorites
                </h3>
                <p className="text-gray-600">
                  Found a blog you love? Share it with your network and help
                  support great content creators.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex items-center justify-center bg-[#2196f3] h-10 w-10 rounded-full mr-4">
                <i className="bx bx-envelope text-white text-xl"></i>
              </div>
              <div>
                <h3 className="text-gray-700 font-medium">Subscribe</h3>
                <p className="text-gray-600">
                  Stay updated with our weekly newsletter featuring the best new
                  blogs and trending topics.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <a
              href="http://chat.whatsapp.com/LewbrSC0D2hGNnV7aUmO74"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#2196f3] text-white py-3 px-6 rounded-md hover:bg-[#1976d2] transition-colors duration-300"
            >
              Join WhatsApp Group
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
