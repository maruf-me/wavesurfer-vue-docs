'use client';

import { ReactNode } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

interface SectionCardProps {
  title: string;
  description?: string;
  icon?: ReactNode;
  badge?: string;
  children?: ReactNode;
  className?: string;
  headerClassName?: string;
  contentClassName?: string;
  gradient?: string;
  borderColor?: string;
  hoverEffect?: boolean;
  animationDelay?: number;
}

export function SectionCard({
  title,
  description,
  icon,
  badge,
  children,
  className,
  headerClassName,
  contentClassName,
  gradient = "from-primary to-primary-dark",
  borderColor = "border-slate-200/50",
  hoverEffect = true,
  animationDelay = 0
}: SectionCardProps) {
  return (
    <Card 
      className={cn(
        "group transition-all duration-500 bg-white/80 backdrop-blur-sm dark:bg-slate-800/80 dark:border-slate-700/50 border-2",
        borderColor,
        hoverEffect && "hover:shadow-2xl hover:-translate-y-2",
        "animate-fade-in-up",
        className
      )}
      style={{ animationDelay: `${animationDelay}ms` }}
    >
      <CardHeader className={cn("pb-4", headerClassName)}>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            {icon && (
              <div className={cn(
                "p-3 bg-gradient-to-br rounded-xl transition-transform duration-300",
                gradient,
                hoverEffect && "group-hover:scale-110"
              )}>
                {icon}
              </div>
            )}
            <CardTitle className="text-xl">{title}</CardTitle>
          </div>
          {badge && (
            <Badge variant="secondary" className="bg-gradient-to-r from-slate-100 to-slate-200 dark:from-slate-700 dark:to-slate-600">
              {badge}
            </Badge>
          )}
        </div>
        {description && (
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
            {description}
          </p>
        )}
      </CardHeader>
      {children && (
        <CardContent className={cn("space-y-6", contentClassName)}>
          {children}
        </CardContent>
      )}
    </Card>
  );
}
