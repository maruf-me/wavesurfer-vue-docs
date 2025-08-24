'use client';

import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface CodeBlockProps {
  code: string;
  title?: string;
  className?: string;
  titleClassName?: string;
  codeClassName?: string;
  language?: string;
}

export function CodeBlock({
  code,
  title,
  className,
  titleClassName,
  codeClassName,
  language = "typescript"
}: CodeBlockProps) {
  return (
    <div className={cn("space-y-3", className)}>
      {title && (
        <h4 className={cn("font-semibold text-slate-900 dark:text-white", titleClassName)}>
          {title}
        </h4>
      )}
      <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-lg border border-slate-200 dark:border-slate-700">
        <pre className={cn("text-sm overflow-x-auto text-slate-700 dark:text-slate-300", codeClassName)}>
          <code className={`language-${language}`}>{code}</code>
        </pre>
      </div>
    </div>
  );
}
