'use client';

import Link from 'next/link';
import { useState } from 'react';
import BlogCard from './BlogCard';

// Sample blog data
const sampleBlogs = [
  {
    id: 1,
    title: 'The Benefits of Cooking with Ghee',
    image: '/ghee.jpg',
    content:
      'Ghee is typically prepared by simmering butter, which is churned from cream, skimming any impurities from the surface, then pouring and retaining the clear liquid fat while discarding the solid residue...',
    category: 'Cooking',
  },
  {
    id: 2,
    title: '10 Must-Try Recipes for Beginners',
    image: '/buttermilk.jpg',
    content:
      'Starting your cooking journey can be intimidating, but these 10 recipes are perfect for beginners. They require minimal ingredients and simple techniques while delivering maximum flavor...',
    category: 'Recipes',
  },
  {
    id: 3,
    title: 'Healthy Eating Habits for Busy People',
    image: '/curd.jpg',
    content:
      "Maintaining a balanced diet when you're constantly on the go might seem impossible. Here are practical strategies to ensure you're getting the nutrition you need without spending hours in the kitchen...",
    category: 'Health',
  },
  {
    id: 4,
    title: 'The Art of Food Presentation',
    image: '/cheese.jpg',
    content:
      'They say we eat with our eyes first. Learn simple yet effective techniques to elevate your home cooking with professional-looking plating and presentation that will impress your guests...',
    category: 'Tips',
  },
];

const BlogList = () => {
  const [filter, setFilter] = useState('All');

  // Get unique categories
  const categories = [
    'All',
    ...new Set(sampleBlogs.map((blog) => blog.category)),
  ];

  // Filter blogs based on selected category
  const filteredBlogs =
    filter === 'All'
      ? sampleBlogs
      : sampleBlogs.filter((blog) => blog.category === filter);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Latest Blogs</h2>

        {/* Category filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-4 py-2 rounded-full transition-colors ${
                filter === category
                  ? 'bg-[#2196f3] text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
              onClick={() => setFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Blog cards */}
        <div className="flex flex-col gap-8 items-center">
          {filteredBlogs.map((blog) => (
            <BlogCard
              key={blog.id}
              title={blog.title}
              image={blog.image}
              content={blog.content}
            />
          ))}
        </div>

        {/* See more button */}
        <div className="text-center mt-12">
          <Link href="/blogs">
            <button className="px-6 py-3 bg-[#2196f3] text-white font-semibold rounded-md hover:bg-blue-600 transition-colors">
              See More Blogs
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogList;
