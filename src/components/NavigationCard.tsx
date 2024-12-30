'use client';
import Link from 'next/link';
import { createContext, PropsWithChildren } from 'react';

const NavigationCardContext = createContext(null);

type NavigationCardProps = PropsWithChildren & {
  link: string;
};

function NavigationCard({ children, link }: NavigationCardProps) {
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

// eslint-disable-next-line react/display-name
NavigationCard.Title = function ({ children }: PropsWithChildren) {
  return <div>{children}</div>;
};

// eslint-disable-next-line react/display-name
NavigationCard.Description = function ({ children }: PropsWithChildren) {
  return <div>{children}</div>;
};


export default NavigationCard