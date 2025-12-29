import React from 'react';
import { Mail } from 'lucide-react';
import ContactForm from '@/components/ContactForm';

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
                                <p className="text-zinc-600 dark:text-zinc-400">bharath-saga@guvvala.xyz</p>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <ContactForm />
                </div>
            </div>
        </div>
    );
}
