import React from 'react';
import { Mail, MessageSquare, Send } from 'lucide-react';

export const metadata = {
    title: "Contact Us | Bharath Saga",
    description: "Get in touch with the team at Bharath Saga.",
};

export default function ContactPage() {
    return (
        <div className="py-20">
            <div className="container mx-auto px-4 max-w-4xl">
                <h1 className="text-4xl md:text-5xl font-bold font-serif mb-6 tracking-tight text-center">
                    Get in <span className="text-orange-600">Touch</span>
                </h1>
                <p className="text-lg text-zinc-600 dark:text-zinc-400 text-center mb-16 max-w-2xl mx-auto">
                    Have a story to share, a question about our content, or want to collaborate? We'd love to hear from you.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <div className="space-y-8">
                        <h2 className="text-2xl font-bold font-serif">Connect with us</h2>

                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-orange-100 dark:bg-orange-900/30 rounded-xl text-orange-600">
                                <Mail className="h-6 w-6" />
                            </div>
                            <div>
                                <h3 className="font-bold">Email Us</h3>
                                <p className="text-zinc-600 dark:text-zinc-400">hello@bharath-saga.guvvala.xyz</p>
                            </div>
                        </div>

                    </div>

                    {/* Contact Form */}
                    <div className="bg-white dark:bg-zinc-900 p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-sm">
                        <form className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium mb-1">Name</label>
                                <input
                                    type="text"
                                    className="w-full px-4 py-2 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950 focus:outline-none focus:ring-2 focus:ring-orange-500"
                                    placeholder="Your name"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1">Email</label>
                                <input
                                    type="email"
                                    className="w-full px-4 py-2 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950 focus:outline-none focus:ring-2 focus:ring-orange-500"
                                    placeholder="your@email.com"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1">Message</label>
                                <textarea
                                    rows={4}
                                    className="w-full px-4 py-2 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950 focus:outline-none focus:ring-2 focus:ring-orange-500"
                                    placeholder="How can we help?"
                                />
                            </div>
                            <button
                                type="button"
                                className="w-full py-3 bg-orange-600 text-white font-bold rounded-lg hover:bg-orange-700 transition-colors flex items-center justify-center gap-2"
                            >
                                Send Message <Send className="h-4 w-4" />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
