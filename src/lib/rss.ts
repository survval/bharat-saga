import { getAllArticles } from './mdx';
import fs from 'fs';
import path from 'path';

export async function generateRssFeed() {
    const articles = await getAllArticles();
    const siteUrl = 'https://bharath-saga.guvvala.xyz';

    const rss = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
<channel>
  <title>Bharath Saga</title>
  <link>${siteUrl}</link>
  <description>Exploring legends, lives, and lessons from ancient to modern Bharath</description>
  <language>en</language>
  <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
  <atom:link href="${siteUrl}/rss.xml" rel="self" type="application/rss+xml" />
  ${articles
            .map((article) => `
    <item>
      <title>${escape(article.title)}</title>
      <link>${siteUrl}/articles/${article.slug}</link>
      <description>${escape(article.subtitle)}</description>
      <pubDate>${new Date(article.date).toUTCString()}</pubDate>
      <guid>${siteUrl}/articles/${article.slug}</guid>
    </item>`)
            .join('')}
</channel>
</rss>`;

    fs.writeFileSync(path.join(process.cwd(), 'public/rss.xml'), rss);
}

function escape(text: string) {
    return text
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&apos;');
}
