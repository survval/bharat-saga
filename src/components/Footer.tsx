import React from 'react';
import Link from 'next/link';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full border-t border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950 py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                    <div className="col-span-1 md:col-span-1">
                        <h3 className="text-lg font-bold mb-4 text-orange-600">Bharath Saga</h3>
                        <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
                            Exploring legends, lives, and lessons from ancient to modern Bharath — respectfully & inclusively.
                        </p>
                    </div>

                    <div className="col-span-1">
                        <h4 className="text-sm font-semibold mb-4 uppercase tracking-wider">Quick Links</h4>
                        <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                            <li><Link href="/" className="hover:text-orange-600 transition-colors">Home</Link></li>
                            <li><Link href="/about" className="hover:text-orange-600 transition-colors">About Us</Link></li>
                            <li><Link href="/privacy" className="hover:text-orange-600 transition-colors">Privacy Policy</Link></li>
                            <li><Link href="/terms" className="hover:text-orange-600 transition-colors">Terms of Service</Link></li>
                        </ul>
                    </div>

                    <div className="col-span-1">
                        <h4 className="text-sm font-semibold mb-4 uppercase tracking-wider">Contact</h4>
                        <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4">
                            Connect with us for any inquiries or to share your stories.
                        </p>
                        <Link href="/contact" className="text-sm text-orange-600 font-medium hover:underline">
                            Send a message
                        </Link>
                    </div>
                </div>

                <div className="pt-8 border-t border-zinc-200 dark:border-zinc-800 text-center">
                    <div className="max-w-3xl mx-auto mb-6">
                        <p className="text-[11px] text-zinc-500 italic leading-relaxed">
                            Bharath Saga shares history, legends and cultural narratives for educational and inspirational purposes.
                            Interpretations may vary. We respect all communities and belief systems.
                        </p>
                    </div>
                    <p className="text-xs text-zinc-500">
                        © {currentYear} Bharath Saga — Respecting the culture & diversity of Bharath
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
