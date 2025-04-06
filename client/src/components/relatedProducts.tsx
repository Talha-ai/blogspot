// components/RelatedProducts.tsx
import Image from 'next/image';
import Link from 'next/link';

type Product = {
  title: string;
  image: string;
  link: string;
  price: string;
};

export default function RelatedProducts({ products }: { products: Product[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
      {products.map((product, index) => (
        <Link
          href={product.link}
          key={index}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center bg-[#f4f4f4] p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow"
        >
          <div className="relative w-20 h-20 flex-shrink-0">
            <Image
              src={product.image}
              alt={product.title}
              fill
              sizes="80px"
              className="object-cover rounded"
            />
          </div>
          <div className="ml-4 flex-grow">
            <h3 className="font-medium mb-1">{product.title}</h3>
            <p className="text-blue-600 font-semibold">{product.price}</p>
          </div>
          <div className="ml-4 flex-shrink-0">
            <span className="text-sm font-medium text-blue-600">View →</span>
          </div>
        </Link>
      ))}
    </div>
  );
}
