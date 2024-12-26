'use client';
import Link from 'next/link';
import { createContext, PropsWithChildren } from 'react';

const NavigationCardContext = createContext(null);

type NavigationCardProps = PropsWithChildren & {
  link: string;
};

export const NavigationCard = ({ children, link }: NavigationCardProps) => {
  return (
    <NavigationCardContext.Provider value={null}>
      <Link href={link}>
        <div className="bg-white/5 p-6 rounded-lg shadow-sm border border-gray-100 transition-colors">
          {children}
        </div>
      </Link>
    </NavigationCardContext.Provider>
  );
};

export const NavigationCardTitle = ({ children }: PropsWithChildren) => (
  <div>{children}</div>
);

export const NavigationCardDescription = ({ children }: PropsWithChildren) => (
  <div>{children}</div>
);

// Attach to NavigationCard for convenience
NavigationCard.Title = NavigationCardTitle;
NavigationCard.Description = NavigationCardDescription;
