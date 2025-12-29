import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import readingTime from 'reading-time';

const articlesDirectory = path.join(process.cwd(), 'content/articles');

export interface ArticleMetadata {
  title: string;
  subtitle: string;
  slug: string;
  date: string;
  tags: string[];
  source_type: 'history' | 'legend' | 'belief' | 'interpretation' | 'mixed';
  disclaimer: string;
  readingTime?: string;
}

export interface Article {
  meta: ArticleMetadata;
  content: string;
}

export async function getArticleBySlug(slug: string): Promise<Article | null> {
  try {
    const fullPath = path.join(articlesDirectory, `${slug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    const { data, content } = matter(fileContents);
    
    return {
      meta: {
        ...(data as ArticleMetadata),
        readingTime: readingTime(content).text,
      },
      content,
    };
  } catch (error) {
    return null;
  }
}

export async function getAllArticles(): Promise<ArticleMetadata[]> {
  const fileNames = fs.readdirSync(articlesDirectory);
  const allArticlesData = fileNames
    .filter((fileName) => fileName.endsWith('.mdx'))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, '');
      const fullPath = path.join(articlesDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);

      return {
        ...(data as ArticleMetadata),
        slug,
        readingTime: readingTime(content).text,
      };
    });

  // Sort articles by date
  return allArticlesData.sort((a, b) => (a.date < b.date ? 1 : -1));
}
