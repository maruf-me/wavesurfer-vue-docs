'use client';

import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface CTASectionProps {
  title: string;
  description?: string;
  children?: ReactNode;
  className?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  backgroundGradient?: string;
  centered?: boolean;
}

export function CTASection({
  title,
  description,
  children,
  className,
  titleClassName,
  descriptionClassName,
  backgroundGradient = "from-blue-50 to-purple-50 dark:from-slate-800 dark:to-slate-700",
  centered = true
}: CTASectionProps) {
  return (
    <div className={cn("text-center", className)}>
      <div className={cn(
        "bg-gradient-to-r rounded-md p-12 max-w-4xl mx-auto border border-blue-200/50 dark:border-slate-600/50",
        backgroundGradient
      )}>
        <h3 className={cn(
          "text-3xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent",
          titleClassName
        )}>
          {title}
        </h3>
        
        {description && (
          <p className={cn(
            "text-lg text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto",
            centered && "mx-auto",
            descriptionClassName
          )}>
            {description}
          </p>
        )}
        
        {children && (
          <div className="flex gap-4 justify-center flex-wrap">
            {children}
          </div>
        )}
      </div>
    </div>
  );
}
