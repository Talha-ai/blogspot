/* eslint-disable @next/next/no-img-element */

interface BlogCardProps {
  title: string;
  image: string;
  content: string;
}

export default function BlogCard({ title, image, content }: BlogCardProps) {
  return (
    <div className="flex flex-col sm:flex-row bg-white rounded-3xl shadow-md overflow-hidden max-w-4xl w-full hover:scale-105 transition-all duration-300">
      <div className="w-full sm:w-2/5 md:w-1/3 h-48 sm:h-auto">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      {/* Content container - full width on mobile, partial width on larger screens */}
      <div className="w-full sm:w-3/5 md:w-2/3 p-4 sm:p-6 md:p-8 flex flex-col justify-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-2 sm:mb-4">{title}</h2>
        <p className="text-gray-800 mb-4 sm:mb-6">{content}</p>
        <div>
          <button className="bg-[#2196f3] hover:bg-blue-600 cursor-pointer text-white py-2 px-6 rounded-md transition duration-300">
            <a href="https://www.amazon.in/">Buy now</a>
          </button>
        </div>
      </div>
    </div>
  );
}
