'use client';

import { cn } from '@/lib/utils';

interface BenefitsListProps {
  benefits: string[];
  className?: string;
  itemClassName?: string;
  showBullets?: boolean;
  bulletColor?: string;
}

export function BenefitsList({
  benefits,
  className,
  itemClassName,
  showBullets = true,
  bulletColor = "bg-primary"
}: BenefitsListProps) {
  return (
    <div className={cn("space-y-2", className)}>
      {benefits.map((benefit, index) => (
        <div key={index} className={cn("flex items-center gap-2 text-sm", itemClassName)}>
          {showBullets && (
            <div className={cn("w-1.5 h-1.5 rounded-full", bulletColor)}></div>
          )}
          <span className="text-slate-600 dark:text-slate-400">{benefit}</span>
        </div>
      ))}
    </div>
  );
}
