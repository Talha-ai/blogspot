/* eslint-disable @typescript-eslint/no-unused-vars */
// app/blogs/[slug]/page.tsx
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Metadata, ResolvingMetadata } from 'next';

import { blogData } from '../../data/blogData';
import RelatedProducts from '@/src/components/relatedProducts';
import ShareButtons from '@/src/components/shareButtons';
import TableOfContents from '@/src/components/TableOfContents';
import { formatDate } from '../../lib/utils';

// For static generation of all blog routes
export async function generateStaticParams() {
  return blogData.map((post) => ({
    slug: post.slug,
  }));
}

// Dynamic metadata for SEO
export async function generateMetadata(
  { params }: { params: { slug: string } },
  parent: ResolvingMetadata
): Promise<Metadata> {
  const post = blogData.find((post) => post.slug === params.slug);

  // Return 404 metadata if post not found
  if (!post) {
    return {
      title: 'Post Not Found',
      description: 'The requested blog post could not be found',
    };
  }

  // Generate appropriate metadata from post data
  return {
    title: `${post.title} | Your Blog Name`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.publishDate,
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  };
}

// Extract headings from content for Table of Contents
function extractHeadings(content: string) {
  const headingRegex = /^##?\s+(.+)$/gm;
  const headings = [];
  let match;

  while ((match = headingRegex.exec(content)) !== null) {
    const text = match[1];
    const level = match[0].startsWith('##') ? 2 : 1;
    const slug = text
      .toLowerCase()
      .replace(/[^\w\s]/g, '')
      .replace(/\s+/g, '-');

    headings.push({ text, level, slug });
  }

  return headings;
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = blogData.find((post) => post.slug === params.slug);

  // Handle case when post is not found
  if (!post) {
    notFound();
  }

  const headings = extractHeadings(post.content);

  // Process markdown content
  // Note: In a real implementation, you'd use a markdown library like remark/rehype
  // This is a simplified version for the example
  const processedContent = post.content
    .replace(/^##\s+(.+)$/gm, (_, title) => {
      const slug = title
        .toLowerCase()
        .replace(/[^\w\s]/g, '')
        .replace(/\s+/g, '-');
      return `<h2 id="${slug}" class="text-2xl font-bold mt-8 mb-4">${title}</h2>`;
    })
    .replace(
      /^###\s+(.+)$/gm,
      '<h3 class="text-xl font-semibold mt-6 mb-3">$1</h3>'
    )
    .replace(/\*\*(.+?)\*\*/g, '<strong class="font-semibold">$1</strong>')
    .replace(/\n\n/g, '</p><p class="mb-4">')
    .replace(
      /^\d\.\s+\*\*(.+?)\*\*:\s+(.+)$/gm,
      '<div class="mb-4"><span class="font-bold">$1</span>: $2</div>'
    )
    .replace(/^- (.+)$/gm, '<li class="ml-6 mb-1 list-disc">$1</li>')
    .split(/(?=<li)/)
    .join('')
    .split(/(?<=<\/li>)/)
    .join('');

  return (
    <article className="max-w-4xl mx-auto px-4 py-10">
      {/* Structured data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: post.title,
            image: post.image,
            datePublished: post.publishDate,
            description: post.excerpt,
            author: {
              '@type': 'Organization',
              name: 'Your Blog Name',
            },
          }),
        }}
      />

      {/* Category badge */}
      <div className="mb-4">
        <span className="inline-block bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
          {post.category}
        </span>
      </div>

      {/* Post header */}
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-600 mb-8">
        Published on {formatDate(post.publishDate)}
      </p>

      {/* Featured image */}
      <div className="relative w-full h-[400px] mb-8 rounded-lg overflow-hidden">
        <Image
          src={post.image}
          alt={post.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority
          className="object-cover"
        />
      </div>

      {/* Share buttons */}
      <ShareButtons
        title={post.title}
        url={`/blogs/${post.slug}`}
        className="mb-8"
      />

      {/* Table of contents for longer posts */}
      {headings.length > 3 && (
        <TableOfContents headings={headings} className="mb-8" />
      )}

      {/* Post content */}
      <div
        className="prose prose-lg max-w-none mb-12"
        dangerouslySetInnerHTML={{ __html: `<p>${processedContent}</p>` }}
      />

      {/* Related products section */}
      {post.relatedProducts && post.relatedProducts.length > 0 && (
        <section className="border-t border-gray-200 pt-8 mt-12">
          <h2 className="text-2xl font-bold mb-6">Related Products</h2>
          <RelatedProducts products={post.relatedProducts} />
        </section>
      )}

      {/* Navigation to other posts */}
      <nav className="flex justify-between items-center border-t border-gray-200 pt-8 mt-12">
        <PrevNextButton direction="prev" currentPostId={post.id} />
        <PrevNextButton direction="next" currentPostId={post.id} />
      </nav>
    </article>
  );
}

// Component for prev/next post navigation
function PrevNextButton({
  direction,
  currentPostId,
}: {
  direction: 'prev' | 'next';
  currentPostId: number;
}) {
  const sortedPosts = [...blogData].sort(
    (a, b) =>
      new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()
  );
  const currentIndex = sortedPosts.findIndex(
    (post) => post.id === currentPostId
  );

  let targetPost;
  if (direction === 'prev' && currentIndex < sortedPosts.length - 1) {
    targetPost = sortedPosts[currentIndex + 1];
  } else if (direction === 'next' && currentIndex > 0) {
    targetPost = sortedPosts[currentIndex - 1];
  }

  if (!targetPost) {
    return (
      <div className={`flex-1 ${direction === 'next' ? 'text-right' : ''}`} />
    );
  }

  return (
    <a
      href={`/blogs/${targetPost.slug}`}
      className={`flex-1 group inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 ${
        direction === 'next' ? 'text-right flex-row-reverse' : ''
      }`}
    >
      {direction === 'prev' ? (
        <span className="transform transition-transform group-hover:-translate-x-1">
          ←
        </span>
      ) : (
        <span className="transform transition-transform group-hover:translate-x-1">
          →
        </span>
      )}
      <span className="font-medium">
        {direction === 'prev' ? 'Previous' : 'Next'}:{' '}
        {targetPost.title.length > 30
          ? targetPost.title.substring(0, 30) + '...'
          : targetPost.title}
      </span>
    </a>
  );
}
