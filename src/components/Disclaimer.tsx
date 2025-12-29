import React from 'react';
import { Info, ShieldAlert } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface DisclaimerProps {
    type: 'history' | 'legend' | 'belief' | 'interpretation' | 'mixed';
    customDisclaimer?: string;
    className?: string;
}

const Disclaimer: React.FC<DisclaimerProps> = ({ type, customDisclaimer, className }) => {
    let message = '';
    let icon = <Info className="h-5 w-5 text-blue-500" />;
    let bgColor = 'bg-blue-50 border-blue-200';
    let textColor = 'text-blue-800';

    if (type === 'legend' || type === 'belief') {
        message = "This article is based on traditional stories and cultural narratives. Interpretations may vary.";
        icon = <ShieldAlert className="h-5 w-5 text-amber-500" />;
        bgColor = 'bg-amber-50 border-amber-200';
        textColor = 'text-amber-800';
    } else if (type === 'history') {
        message = "Information referenced from historical research; interpretation may differ among scholars.";
        icon = <Info className="h-5 w-5 text-emerald-500" />;
        bgColor = 'bg-emerald-50 border-emerald-200';
        textColor = 'text-emerald-800';
    } else {
        message = customDisclaimer || "This content includes a mix of historical and traditional perspectives.";
        icon = <Info className="h-5 w-5 text-gray-500" />;
        bgColor = 'bg-gray-50 border-gray-200';
        textColor = 'text-gray-800';
    }

    return (
        <div className={cn("flex items-start gap-3 p-4 border rounded-lg my-6", bgColor, className)}>
            <div className="flex-shrink-0 mt-0.5">
                {icon}
            </div>
            <div>
                <p className={cn("text-sm font-medium mb-1 capitalize", textColor)}>
                    Source Classification: {type}
                </p>
                <p className={cn("text-sm leading-relaxed", textColor)}>
                    {message}
                </p>
                {customDisclaimer && customDisclaimer !== message && (
                    <p className={cn("text-xs mt-2 italic opacity-80", textColor)}>
                        {customDisclaimer}
                    </p>
                )}
            </div>
        </div>
    );
};

export default Disclaimer;
