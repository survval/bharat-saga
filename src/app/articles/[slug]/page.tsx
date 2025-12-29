import { getArticleBySlug, getAllArticles } from '@/lib/mdx';
import { MDXRemote } from 'next-mdx-remote/rsc';
import ArticleMeta from '@/components/ArticleMeta';
import Disclaimer from '@/components/Disclaimer';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Share2 } from 'lucide-react';

interface ArticlePageProps {
    params: Promise<{
        slug: string;
    }>;
}

export async function generateStaticParams() {
    const articles = await getAllArticles();
    return articles.map((article) => ({
        slug: article.slug,
    }));
}

export async function generateMetadata({ params }: ArticlePageProps) {
    const { slug } = await params;
    const article = await getArticleBySlug(slug);
    if (!article) return { title: 'Article Not Found' };

    return {
        title: `${article.meta.title} | Bharath Saga`,
        description: article.meta.subtitle,
    };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
    const { slug } = await params;
    const article = await getArticleBySlug(slug);

    if (!article) {
        notFound();
    }

    return (
        <article className="pb-20">
            {/* Article Header */}
            <header className="bg-zinc-50 dark:bg-zinc-900/30 border-b border-zinc-200 dark:border-zinc-800 py-16 mb-12">
                <div className="container mx-auto px-4 max-w-4xl">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-sm font-medium text-zinc-500 hover:text-orange-600 transition-colors mb-8"
                    >
                        <ArrowLeft className="h-4 w-4" /> Back to all articles
                    </Link>

                    <ArticleMeta
                        date={article.meta.date}
                        readingTime={article.meta.readingTime || ''}
                        tags={article.meta.tags}
                        className="mb-6"
                    />

                    <h1 className="text-3xl md:text-5xl font-bold font-serif mb-6 leading-tight text-zinc-900 dark:text-zinc-50">
                        {article.meta.title}
                    </h1>

                    <p className="text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed italic border-l-4 border-orange-500 pl-6 py-1">
                        {article.meta.subtitle}
                    </p>
                </div>
            </header>

            {/* Article Content */}
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    {/* Main Content */}
                    <div className="lg:col-span-8">
                        <Disclaimer
                            type={article.meta.source_type}
                            customDisclaimer={article.meta.disclaimer}
                            className="mb-10"
                        />

                        <div className="prose prose-zinc dark:prose-invert prose-orange max-w-none">
                            <MDXRemote source={article.content} />
                        </div>

                        <div className="mt-16 pt-8 border-t border-zinc-200 dark:border-zinc-800 flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <span className="text-sm font-medium text-zinc-500">Share this article:</span>
                                <button className="p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors">
                                    <Share2 className="h-4 w-4" />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar (Optional) */}
                    <aside className="lg:col-span-4 space-y-8">
                        <div className="bg-zinc-50 dark:bg-zinc-900/50 p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800">
                            <h3 className="font-bold mb-4 font-serif">Quick Summary</h3>
                            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                                This article explores the life and values of {article.meta.title.split(':')[0]}, drawing inspiration from traditional sources and cultural narratives.
                            </p>
                        </div>

                        <div className="sticky top-24">
                            <h3 className="font-bold mb-4 font-serif">Related Content</h3>
                            <div className="space-y-4">
                                <p className="text-xs text-zinc-500 italic">More articles coming soon...</p>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </article>
    );
}
