import { getAllArticles } from '@/lib/mdx';
import ArticleCard from '@/components/ArticleCard';

export const metadata = {
    title: "All Articles | Bharath Saga",
    description: "Browse all articles about the legends, history, and wisdom of Bharath.",
};

export default async function ArticlesPage() {
    const articles = await getAllArticles();

    return (
        <div className="py-20">
            <div className="container mx-auto px-4">
                <header className="max-w-3xl mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold font-serif mb-6 tracking-tight">
                        Knowledge Library
                    </h1>
                    <p className="text-lg text-zinc-600 dark:text-zinc-400">
                        A comprehensive collection of stories, historical analysis, and philosophical lessons from across the ages of Bharath.
                    </p>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {articles.map((article) => (
                        <ArticleCard key={article.slug} article={article} />
                    ))}
                </div>

                {articles.length === 0 && (
                    <div className="text-center py-20 bg-zinc-50 dark:bg-zinc-900/30 rounded-2xl border border-dashed border-zinc-300 dark:border-zinc-800">
                        <p className="text-zinc-500">We are currently preparing more stories. Check back soon!</p>
                    </div>
                )}
            </div>
        </div>
    );
}
