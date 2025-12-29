'use client';

import React, { useState } from 'react';
import { Search as SearchIcon } from 'lucide-react';
import { ArticleMetadata } from '@/lib/mdx';
import ArticleCard from './ArticleCard';

interface SearchBarProps {
    articles: ArticleMetadata[];
}

const SearchBar: React.FC<SearchBarProps> = ({ articles }) => {
    const [query, setQuery] = useState('');

    const filteredArticles = articles.filter((article) => {
        const searchContent = `${article.title} ${article.subtitle} ${article.tags.join(' ')}`.toLowerCase();
        return searchContent.includes(query.toLowerCase());
    });

    return (
        <div className="flex flex-col gap-12">
            <div className="relative max-w-xl mx-auto w-full">
                <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-zinc-400" />
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Find articles by title or tags..."
                    className="w-full pl-12 pr-4 py-4 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all shadow-sm"
                />
            </div>

            <div className="container mx-auto">
                <div className="flex items-center justify-between mb-10">
                    <h2 className="text-2xl font-bold font-serif">
                        {query ? `Search Results (${filteredArticles.length})` : 'Latest Articles'}
                    </h2>
                </div>

                {filteredArticles.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredArticles.slice(0, 10).map((article) => (
                            <ArticleCard key={article.slug} article={article} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20 bg-zinc-50 dark:bg-zinc-900/30 rounded-2xl border border-dashed border-zinc-300 dark:border-zinc-800">
                        <p className="text-zinc-500">No articles found matching "{query}".</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default SearchBar;
