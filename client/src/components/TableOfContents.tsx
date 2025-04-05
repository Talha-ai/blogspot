'use client';

import { useEffect, useState } from 'react';

type Heading = {
  text: string;
  level: number;
  slug: string;
};

export default function TableOfContents({
  headings,
  className = '',
}: {
  headings: Heading[];
  className?: string;
}) {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '0px 0px -80% 0px' }
    );

    headings.forEach((heading) => {
      const element = document.getElementById(heading.slug);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      headings.forEach((heading) => {
        const element = document.getElementById(heading.slug);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [headings]);

  return (
    <div className={`p-4 bg-gray-50 rounded-lg ${className}`}>
      <h3 className="text-lg font-semibold mb-3">Table of Contents</h3>
      <nav>
        <ol className="space-y-2">
          {headings.map((heading) => (
            <li
              key={heading.slug}
              className={`${heading.level === 2 ? 'ml-4' : ''}`}
            >
              <a
                href={`#${heading.slug}`}
                className={`text-sm hover:text-blue-600 ${
                  activeId === heading.slug
                    ? 'font-medium text-blue-600'
                    : 'text-gray-600'
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById(heading.slug)?.scrollIntoView({
                    behavior: 'smooth',
                  });
                }}
              >
                {heading.text}
              </a>
            </li>
          ))}
        </ol>
      </nav>
    </div>
  );
}
