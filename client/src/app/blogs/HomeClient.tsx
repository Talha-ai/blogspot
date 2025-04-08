'use client';

import BlogCard from '@/src/components/BlogCard';
import { blogData } from '../data/blogData';
import { useState } from 'react';

export default function HomeClient() {
  const [filter, setFilter] = useState('All');

  const categories = ['All', ...new Set(blogData.map((blog) => blog.category))];

  const filteredBlogs =
    filter === 'All'
      ? blogData.slice(0, 4)
      : blogData.filter((blog) => blog.category === filter).slice(0, 4);

  return (
    <main>
      <div className="text-center mt-10">
        <h2 className="text-[#2196f3] text-[50px] font-['Leckerli_One',_cursive] underline">
          Blogs
        </h2>
      </div>

      <div className="flex flex-wrap justify-center gap-2 mt-7">
        {categories.map((category) => (
          <button
            key={category}
            className={`px-4 py-2 cursor-pointer rounded-full transition-colors ${
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

      <section className="px-4 py-8">
        <div className="container mx-auto max-w-4xl">
          <div className="flex flex-wrap gap-5 justify-center">
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
        </div>
      </section>
    </main>
  );
}
