import React from 'react';
import Link from 'next/link';
import { ArticleMetadata } from '@/lib/mdx';
import ArticleMeta from './ArticleMeta';
import { ArrowRight } from 'lucide-react';

interface ArticleCardProps {
    article: ArticleMetadata;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
    return (
        <article className="flex flex-col h-full bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="p-6 flex flex-col h-full">
                <ArticleMeta
                    date={article.date}
                    readingTime={article.readingTime || ''}
                    tags={article.tags}
                    className="mb-4"
                />

                <Link href={`/articles/${article.slug}`} className="group">
                    <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mb-2 group-hover:text-orange-600 transition-colors">
                        {article.title}
                    </h2>
                </Link>

                <p className="text-zinc-600 dark:text-zinc-400 text-sm line-clamp-3 mb-6 flex-grow">
                    {article.subtitle}
                </p>

                <Link
                    href={`/articles/${article.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-orange-600 hover:text-orange-700 transition-colors"
                >
                    Read Article <ArrowRight className="h-4 w-4" />
                </Link>
            </div>
        </article>
    );
};

export default ArticleCard;
