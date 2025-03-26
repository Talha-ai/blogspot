'use client';

import Hero from '../components/Hero';
import BlogList from '../components/BlogsList';
import TrendingSection from '../components/TrendingSection';

export default function Home() {
  return (
    <>
      <Hero />
      <BlogList />
      <TrendingSection />

      <section className="py-16 bg-[#2196f3] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Community</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            Get updates directly on WhatsApp and never miss our latest articles
            and announcements.
          </p>
          <a
            href="http://chat.whatsapp.com/LewbrSC0D2hGNnV7aUmO74"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-white text-[#2196f3] font-semibold rounded-md hover:bg-blue-50 transition-colors"
          >
            Join WhatsApp Group
          </a>
        </div>
      </section>
    </>
  );
}
