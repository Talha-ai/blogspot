/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';

interface BlogCardProps {
  id: number;
  slug: string;
  title: string;
  image: string;
  content: string;
  category: string;
}

export default function BlogCard({
  slug,
  title,
  image,
  content,
  category,
}: BlogCardProps) {
  return (
    <div className="flex flex-col sm:flex-row bg-white rounded-3xl shadow-md overflow-hidden max-w-4xl w-full hover:shadow-lg transition-all duration-300">
      <div className="w-full sm:w-2/5 md:w-1/3 h-48 sm:h-auto">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      {/* Content container - full width on mobile, partial width on larger screens */}
      <div className="w-full sm:w-3/5 md:w-2/3 p-4 sm:p-6 md:p-8 flex flex-col justify-between">
        <div>
          <span className="inline-block px-3 py-1 text-sm font-semibold text-blue-600 bg-blue-100 rounded-full mb-3">
            {category}
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold mb-2 sm:mb-4">
            {title}
          </h2>
          <p className="text-gray-700 mb-4 sm:mb-6 line-clamp-3">{content}</p>
        </div>
        <div>
          <Link
            href={`/blogs/${slug}`}
            className="inline-block bg-[#2196f3] hover:bg-blue-600 text-white py-2 px-6 rounded-md transition duration-300"
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
}
