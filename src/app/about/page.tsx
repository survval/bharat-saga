import React from 'react';

export const metadata = {
    title: "About Us | Bharath Saga",
    description: "Learn about the mission and vision of Bharath Saga.",
};

export default function AboutPage() {
    return (
        <div className="py-20">
            <div className="container mx-auto px-4 max-w-4xl">
                <h1 className="text-4xl md:text-5xl font-bold font-serif mb-10 tracking-tight text-center">
                    About <span className="text-orange-600">Bharath Saga</span>
                </h1>

                <div className="prose prose-zinc dark:prose-invert prose-orange max-w-none">
                    <p className="text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed text-center mb-12">
                        "Bharath Saga is a platform dedicated to exploring the profound history, legendary narratives,
                        and timeless wisdom of one of the world's oldest continuous civilizations."
                    </p>

                    <h2 className="font-serif">Our Mission</h2>
                    <p>
                        Our mission is to bring the hidden history and cultural treasures of Bharath to a global audience
                        in a way that is respectful, inclusive, and motivational. We believe that the stories of our
                        ancestors — whether they are recorded history or passed down through legends — contain
                        valuable life lessons that are highly relevant in today's fast-paced world.
                    </p>

                    <h2 className="font-serif">What We Cover</h2>
                    <ul>
                        <li><strong>History:</strong> Evidence-based narratives of events, kingdoms, and movements.</li>
                        <li><strong>Legends:</strong> Traditional stories and epics that define our cultural identity.</li>
                        <li><strong>Wisdom:</strong> Practical life lessons derived from ancient texts and philosophical traditions.</li>
                        <li><strong>Inspiration:</strong> Biographies of great personalities from ancient to modern times.</li>
                    </ul>

                    <h2 className="font-serif">Our Principles</h2>
                    <p>
                        We operate with a commitment to:
                    </p>
                    <ul>
                        <li><strong>Respect:</strong> Valuing the diversity of beliefs and cultures within Bharath.</li>
                        <li><strong>Integrity:</strong> Clearly labeling content as history, legend, or interpretation.</li>
                        <li><strong>Inclusivity:</strong> Celebrating the shared heritage of all people of Bharath.</li>
                        <li><strong>Non-partisan:</strong> Staying away from political propaganda and divisive rhetoric.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
