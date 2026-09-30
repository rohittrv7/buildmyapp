import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');
const publicDir = path.join(rootDir, 'public');

// Base URL configuration
const BASE_URL = "https://buildmyapp.store";

// Static routes with priorities and change frequencies
const staticRoutes = [
  { path: '/', priority: '1.0', changefreq: 'daily' },
  { path: '/portfolio', priority: '0.9', changefreq: 'weekly' },
  { path: '/store', priority: '0.9', changefreq: 'weekly' },
  { path: '/retail-billing-panel', priority: '0.95', changefreq: 'weekly' },
  { path: '/digital-teaching-board', priority: '0.95', changefreq: 'weekly' },
  { path: '/services', priority: '0.8', changefreq: 'monthly' },
  { path: '/process', priority: '0.8', changefreq: 'monthly' },
  { path: '/about', priority: '0.8', changefreq: 'monthly' },
  { path: '/contact', priority: '0.8', changefreq: 'monthly' },
  { path: '/blog', priority: '0.7', changefreq: 'weekly' },
  { path: '/privacy', priority: '0.3', changefreq: 'yearly' },
  { path: '/terms', priority: '0.3', changefreq: 'yearly' },
];

// Extract dynamic routes from data files
const siteDataPath = path.join(rootDir, 'src/data/site.ts');
let siteData = '';
if (fs.existsSync(siteDataPath)) {
  siteData = fs.readFileSync(siteDataPath, 'utf8');
}

function extractSlugs(content, arrayName) {
  const slugs = [];
  const idx = content.indexOf(arrayName);
  if (idx !== -1) {
    const endIdx = content.indexOf('];', idx);
    const chunk = endIdx !== -1 ? content.slice(idx, endIdx) : content.slice(idx, idx + 4000);
    const matches = chunk.matchAll(/slug:\s*["']([^"']+)["']/g);
    for (const m of matches) {
      if (!slugs.includes(m[1])) {
        slugs.push(m[1]);
      }
    }
  }
  return slugs;
}

const projectSlugs = extractSlugs(siteData, 'projects');
const productSlugs = extractSlugs(siteData, 'products');
const postSlugs = extractSlugs(siteData, 'posts');

// Ensure key products are included
if (!productSlugs.includes('retailer-pos')) productSlugs.push('retailer-pos');
if (!productSlugs.includes('focus-board')) productSlugs.push('focus-board');
if (!productSlugs.includes('meeting-math')) productSlugs.push('meeting-math');
if (!productSlugs.includes('launch-checklist')) productSlugs.push('launch-checklist');

const dynamicRoutes = [
  ...projectSlugs.map(slug => ({ path: `/portfolio/${slug}`, priority: '0.85', changefreq: 'weekly' })),
  ...productSlugs.map(slug => ({ path: `/store/${slug}`, priority: '0.85', changefreq: 'weekly' })),
  ...postSlugs.map(slug => ({ path: `/blog/${slug}`, priority: '0.7', changefreq: 'monthly' })),
];

const allRoutes = [...staticRoutes, ...dynamicRoutes];
const today = new Date().toISOString().split('T')[0];

// Generate XML
const xmlUrls = allRoutes.map(r => `  <url>
    <loc>${BASE_URL}${r.path === '/' ? '' : r.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${r.changefreq}</changefreq>
    <priority>${r.priority}</priority>
  </url>`).join('\n');

const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${xmlUrls}
</urlset>
`;

fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemapXml, 'utf8');
console.log(`✓ Generated public/sitemap.xml with ${allRoutes.length} URLs (including dynamic routes)`);

// Generate robots.txt
const robotsTxt = `# https://www.robotstxt.org/robotstxt.html
User-agent: *
Allow: /

# Host
Host: ${BASE_URL}

# Sitemaps
Sitemap: ${BASE_URL}/sitemap.xml
`;

fs.writeFileSync(path.join(publicDir, 'robots.txt'), robotsTxt, 'utf8');
console.log('✓ Generated public/robots.txt');

// Ensure google verification file exists in public/
const verifyFilePath = path.join(publicDir, 'googleced34e77a2f226dd.html');
if (!fs.existsSync(verifyFilePath)) {
  fs.writeFileSync(verifyFilePath, 'google-site-verification: googleced34e77a2f226dd.html', 'utf8');
  console.log('✓ Verified public/googleced34e77a2f226dd.html');
}
