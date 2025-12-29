import React from 'react';
import { Calendar, Clock, Tag } from 'lucide-react';
import { format } from 'date-fns';

interface ArticleMetaProps {
    date: string;
    readingTime: string;
    tags: string[];
    className?: string;
}

const ArticleMeta: React.FC<ArticleMetaProps> = ({ date, readingTime, tags, className }) => {
    return (
        <div className={`flex flex-wrap items-center gap-4 text-sm text-gray-500 ${className}`}>
            <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <span>{format(new Date(date), 'MMMM dd, yyyy')}</span>
            </div>
            <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>{readingTime}</span>
            </div>
            <div className="flex flex-wrap gap-2 pt-1 md:pt-0">
                {tags.map((tag) => (
                    <span
                        key={tag}
                        className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-orange-100 text-orange-800 text-xs font-medium"
                    >
                        <Tag className="h-3 w-3" />
                        {tag}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default ArticleMeta;
