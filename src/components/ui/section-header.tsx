'use client';

import { ReactNode } from 'react';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  badge?: {
    text: string;
    icon?: ReactNode;
  };
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
  badgeClassName?: string;
  centered?: boolean;
}

export function SectionHeader({
  title,
  subtitle,
  badge,
  className,
  titleClassName,
  subtitleClassName,
  badgeClassName,
  centered = true
}: SectionHeaderProps) {
  return (
    <div className={cn(
      "mb-16",
      centered && "text-center",
      className
    )}>
      {badge && (
        <Badge 
          variant="outline" 
          className={cn(
            "mb-4 px-4 py-2 text-sm bg-white/80 backdrop-blur-sm border-blue-200 dark:bg-slate-800/80 dark:border-slate-700",
            badgeClassName
          )}
        >
          {badge.icon}
          {badge.text}
        </Badge>
      )}
      
      <h2 className={cn(
        "text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-slate-900 via-blue-800 to-indigo-900 bg-clip-text text-transparent dark:from-white dark:via-blue-200 dark:to-indigo-200",
        titleClassName
      )}>
        {title}
      </h2>
      
      {subtitle && (
        <p className={cn(
          "text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed",
          centered && "mx-auto",
          subtitleClassName
        )}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
