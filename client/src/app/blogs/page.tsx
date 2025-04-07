import BlogCard from '@/src/components/BlogCard';
import { blogData } from '../data/blogData';
// import Link from 'next/link';

export const metadata = {
  title: 'All Blogs | MyBlogPlatform',
  description:
    'Explore insightful blogs across categories like cooking, health, technology, sports, and more.',
};

export default function Home() {
  return (
    <main>
      <div className="text-center mt-10">
        <h2 className="text-[#2196f3] text-[50px] font-['Leckerli_One',_cursive] underline">
          Blogs
        </h2>
      </div>

      <section className="px-4 py-8">
        <div className="container mx-auto max-w-4xl">
          <div className="flex flex-wrap gap-5 justify-center">
            {blogData.map((blog) => (
              // <Link key={blog.id} href={`/blogs/${blog.slug}`}>
              <BlogCard
                key={blog.id}
                id={blog.id}
                slug={blog.slug}
                title={blog.title}
                image={blog.image}
                content={blog.excerpt || blog.content.substring(0, 150) + '...'}
                category={blog.category}
              />
              // </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
