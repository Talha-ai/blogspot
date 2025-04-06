'use client';

import Link from 'next/link';
import { useState } from 'react';
import BlogCard from './BlogCard';
import { blogData } from '../app/data/blogData';

const BlogList = () => {
  const [filter, setFilter] = useState('All');

  // Get unique categories
  const categories = ['All', ...new Set(blogData.map((blog) => blog.category))];

  // Filter blogs based on selected category
  const filteredBlogs =
    filter === 'All'
      ? blogData.slice(0, 4) // Show only 4 blogs on homepage
      : blogData.filter((blog) => blog.category === filter).slice(0, 4);

  return (
    <section className="py-16 bg-[#f4f4f4]">
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
              id={blog.id}
              slug={blog.slug}
              title={blog.title}
              image={blog.image}
              content={blog.excerpt || blog.content.substring(0, 150) + '...'}
              category={blog.category}
            />
          ))}
        </div>

        {/* See more button */}
        <div className="text-center mt-12">
          <Link
            href="/blogs"
            className="px-6 py-3 bg-[#2196f3] text-white font-semibold rounded-md hover:bg-blue-600 transition-colors inline-block"
          >
            See More Blogs
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogList;
