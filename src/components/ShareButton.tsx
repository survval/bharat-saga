'use client';

import React, { useState } from 'react';
import { Share2, Check, Copy } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function ShareButton() {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  return (
    <div className="flex items-center gap-4">
      <span className="text-sm font-medium text-zinc-500">Share this article:</span>
      <button 
        onClick={handleShare}
        className={cn(
          "flex items-center gap-2 px-4 py-2 rounded-full border transition-all shadow-sm",
          copied 
            ? "bg-emerald-50 border-emerald-200 text-emerald-600 dark:bg-emerald-900/20 dark:border-emerald-800"
            : "bg-white border-zinc-200 hover:border-orange-500 hover:text-orange-600 dark:bg-zinc-950 dark:border-zinc-800 dark:hover:border-orange-500"
        )}
      >
        {copied ? (
          <>
            <Check className="h-4 w-4" />
            <span className="text-sm font-medium">Link copied!</span>
          </>
        ) : (
          <>
            <Share2 className="h-4 w-4" />
            <span className="text-sm font-medium">Copy Link</span>
          </>
        )}
      </button>
    </div>
  );
}
