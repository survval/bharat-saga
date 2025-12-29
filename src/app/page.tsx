import Link from 'next/link';
import { getAllArticles } from '@/lib/mdx';
import ArticleCard from '@/components/ArticleCard';
import SearchBar from '@/components/SearchBar';

export default async function Home() {
  const articles = await getAllArticles();

  return (
    <div className="flex flex-col gap-16 pb-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-zinc-50 dark:bg-zinc-900/50 border-b border-zinc-200 dark:border-zinc-800">
        <div className="absolute inset-0 opacity-10 dark:opacity-20 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,#ea580c_0%,transparent_50%)]" />
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold font-serif mb-6 tracking-tight text-zinc-900 dark:text-zinc-50">
              Stories, history & wisdom from <span className="text-orange-600">Bharath</span>
            </h1>
            <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 mb-10 leading-relaxed">
              Exploring legends, lives, and lessons from ancient to modern Bharath — respectfully & inclusively.
            </p>

            <SearchBar articles={articles} />
          </div>
        </div>
      </section>

      {/* Featured Quote or Call to Action */}
      <section className="container mx-auto px-4 mt-8">
        <div className="bg-gradient-to-br from-orange-600 to-red-700 rounded-3xl p-10 text-white text-center shadow-xl overflow-hidden relative">
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 bg-black/10 rounded-full blur-3xl" />

          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 font-serif italic text-orange-50">
              "The history of Bharath is not just about the past, it's a guide for our future."
            </h3>
            <p className="max-w-2xl mx-auto text-orange-100/90 mb-8 leading-relaxed">
              Join us in uncovering the hidden gems of our civilization and applying ancient wisdom to modern life.
            </p>
            <Link href="/about" className="inline-block px-8 py-3 bg-white text-orange-700 font-bold rounded-full hover:bg-orange-50 transition-colors">
              Learn Our Mission
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
