'use client';

import Link from 'next/link';

const Hero = () => {
  return (
    <section className="relative w-full h-[500px] md:h-[600px] bg-gradient-to-r from-blue-600 to-blue-400 text-white overflow-hidden">
      {/* Background pattern (optional) */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute w-40 h-40 bg-white rounded-full top-20 left-20"></div>
        <div className="absolute w-60 h-60 bg-white rounded-full bottom-10 right-10"></div>
        <div className="absolute w-20 h-20 bg-white rounded-full top-40 right-40"></div>
      </div>

      <div className="container mx-auto px-4 h-full flex flex-col justify-center items-center text-center z-10 relative">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          Welcome to BlogSpot
        </h1>
        <p className="text-xl md:text-2xl max-w-2xl mb-8">
          Your source for insightful articles, stories, and updates on topics
          that matter to you.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mt-2">
          <Link href="/blogs">
            <button className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-md hover:bg-blue-50 transition-colors">
              Explore Blogs
            </button>
          </Link>
          <Link href="/contact">
            <button className="px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-md hover:bg-white hover:text-blue-600 transition-colors">
              Contact Us
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
