import React from 'react';

export const metadata = {
    title: "Terms and Privacy | Bharath Saga",
};

export default function LegalPage() {
    return (
        <div className="py-20">
            <div className="container mx-auto px-4 max-w-4xl">
                <h1 className="text-4xl font-bold font-serif mb-12">Legal Information</h1>

                <section className="mb-16">
                    <h2 className="text-2xl font-bold mb-6 font-serif text-orange-600">Privacy Policy</h2>
                    <div className="prose prose-zinc dark:prose-invert max-w-none">
                        <p>At Bharath Saga, we respect your privacy. We do not collect personal information from visitors unless explicitly provided through our contact forms. Any information shared with us is used solely for the purpose of communicating with you and is never sold to third parties.</p>
                        <p>We use standard analytics tools to understand how visitors interact with our site to improve the user experience. This data is anonymized and does not identify individual users.</p>
                    </div>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-6 font-serif text-orange-600">Terms of Service</h2>
                    <div className="prose prose-zinc dark:prose-invert max-w-none">
                        <p>The content published on Bharath Saga is for educational and inspirational purposes. While we strive for accuracy, the interpretations of legends and historical events may vary.</p>
                        <h3>Content Usage</h3>
                        <p>You may share links to our articles. However, copying full articles or substantial portions of our content without permission is prohibited.</p>
                        <h3>Disclaimer</h3>
                        <p>Bharath Saga and its contributors are not responsible for any actions taken based on the information provided on this site. We do not make medical, legal, or financial claims.</p>
                        <p>We respect all communities and belief systems. Our goal is to promote unity and understanding through the shared history and culture of Bharath.</p>
                    </div>
                </section>
            </div>
        </div>
    );
}
