import React from 'react';
import Link from 'next/link';
import ThemeToggle from './ThemeToggle';

const Header = () => {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                <Link href="/" className="flex flex-col">
                    <span className="text-xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                        Bharath Saga
                    </span>
                    <span className="text-[10px] text-zinc-500 hidden sm:block">
                        Hidden history and life lessons of Bharath
                    </span>
                </Link>

                <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-600 dark:text-zinc-400">
                    <Link href="/" className="hover:text-orange-600 transition-colors">Home</Link>
                    <Link href="/articles" className="hover:text-orange-600 transition-colors">Articles</Link>
                    <Link href="/about" className="hover:text-orange-600 transition-colors">About</Link>
                    <Link href="/contact" className="hover:text-orange-600 transition-colors">Contact</Link>
                </nav>

                <div className="flex items-center gap-4">
                    <ThemeToggle />
                    <button className="p-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors md:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu"><line x1="4" x2="20" y1="12" y2="12" /><line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" /></svg>
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
