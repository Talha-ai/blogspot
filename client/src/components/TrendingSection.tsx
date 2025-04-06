'use client';

import { Eye } from 'lucide-react';
import Link from 'next/link';

const TrendingSection = () => {
  const trending = [
    {
      id: 1,
      title: 'Natural Skincare: Ancient Remedies for Modern Beauty Routines',
      views: '8.2K',
      category: 'Health',
      slug: 'natural-skincare-ancient-remedies',
    },
    {
      id: 2,
      title: 'Healthy Eating Habits for Busy People',
      views: '6.5K',
      category: 'Food',
      slug: 'healthy-eating-habits-busy-people',
    },
    {
      id: 3,
      title: 'Cricket Technique Revolution: Modern Batting Approaches',
      views: '5.9K',
      category: 'Sports',
      slug: 'cricket-technique-revolution',
    },
    {
      id: 4,
      title: 'The Benefits of Cooking with Ghee',
      views: '4.8K',
      category: 'Food',
      slug: 'benefits-cooking-with-ghee',
    },
    {
      id: 5,
      title: 'The Future of AI: What to Expect in the Next Decade',
      views: '3.7K',
      category: 'Technology',
      slug: 'future-of-ai-next-decade',
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Trending Now</h2>
        <div className="max-w-3xl mx-auto">
          {trending.map((item, index) => (
            <Link href={`/blogs/${item.slug}`} key={item.id} className="block">
              <div className="flex items-center justify-between p-4 border-b border-gray-200 hover:bg-gray-50 transition-colors rounded-lg mb-2 cursor-pointer">
                <div className="flex items-center">
                  <span className="text-3xl font-bold text-[#2196f3] mr-6">
                    #{index + 1}
                  </span>
                  <div>
                    <h3 className="font-semibold text-lg hover:text-[#2196f3] transition-colors">
                      {item.title}
                    </h3>
                    <span className="text-sm text-gray-500">
                      {item.category}
                    </span>
                  </div>
                </div>
                <div className="flex gap-2 items-center text-gray-500">
                  <Eye />
                  {item.views} views
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingSection;
