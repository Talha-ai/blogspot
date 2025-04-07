import { blogData } from '../data/blogData';

export async function GET() {
  const baseUrl = 'https://www.bloginn.space';

  // Get all blog URLs
  const blogUrls = blogData.map((blog) => `${baseUrl}/blog/${blog.slug}`);

  // Add main pages
  const urls = [
    baseUrl,
    `${baseUrl}/blogs`,
    `${baseUrl}/about`,
    `${baseUrl}/contact`,
    ...blogUrls,
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${urls
        .map(
          (url) => `
        <url>
          <loc>${url}</loc>
          <lastmod>${new Date().toISOString()}</lastmod>
          <changefreq>weekly</changefreq>
          <priority>0.7</priority>
        </url>
      `
        )
        .join('')}
    </urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
