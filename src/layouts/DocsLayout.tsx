'use client';
import AsideBar from '@/components/AsideBar';
import { cn } from '@/lib/utils';

const DocsLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div className={cn("bg-gradient-section dark:bg-gradient-section-dark relative")}>
      <div className={cn("_container lg:grid grid-cols-5")}>
        <aside className={cn("-mb-px sticky top-[64px] col-start-1 col-end-2 h-[calc(100vh-64px)] hidden lg:block")}>
          <AsideBar />
        </aside>

        <main className={cn("col-start-2 col-span-full")}>
          <div className={cn("animate-fade-up py-4 px-3")}>{children}</div>
        </main>
      </div>
    </div>
  );
};

export default DocsLayout;
