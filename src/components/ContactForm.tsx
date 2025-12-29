'use client';

import React, { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';

export default function ContactForm() {
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('submitting');

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));

        setStatus('success');
    };

    if (status === 'success') {
        return (
            <div className="bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800 p-8 rounded-2xl text-center">
                <CheckCircle2 className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-emerald-900 dark:text-emerald-100 mb-2">Message Sent!</h3>
                <p className="text-emerald-700 dark:text-emerald-300">
                    Thank you for reaching out. We've received your message and will get back to you at bharath-saga@guvvala.xyz.
                </p>
                <button
                    onClick={() => setStatus('idle')}
                    className="mt-6 text-sm font-medium text-emerald-700 dark:text-emerald-400 hover:underline"
                >
                    Send another message
                </button>
            </div>
        );
    }

    return (
        <div className="bg-white dark:bg-zinc-900 p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-sm font-medium mb-1">Name</label>
                    <input
                        required
                        type="text"
                        className="w-full px-4 py-2 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
                        placeholder="Your name"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium mb-1">Email</label>
                    <input
                        required
                        type="email"
                        className="w-full px-4 py-2 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
                        placeholder="your@email.com"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium mb-1">Message</label>
                    <textarea
                        required
                        rows={4}
                        className="w-full px-4 py-2 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
                        placeholder="How can we help?"
                    />
                </div>
                <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full py-3 bg-orange-600 text-white font-bold rounded-lg hover:bg-orange-700 disabled:opacity-70 transition-colors flex items-center justify-center gap-2"
                >
                    {status === 'submitting' ? (
                        'Sending...'
                    ) : (
                        <>
                            Send Message <Send className="h-4 w-4" />
                        </>
                    )}
                </button>
            </form>
        </div>
    );
}
