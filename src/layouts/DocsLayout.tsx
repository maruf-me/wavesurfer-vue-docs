'use client'
import AsideBar from '@/components/AsideBar';
import { AsideDrawer } from '@/components/AsideDrawer';
import { Button } from '@/components/ui/button';
import { Github, Moon, Search, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import Link from 'next/link';



const DocsLayout = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  const { setTheme, theme } = useTheme()

  return (
    <div className='dark:bg-primary bg-white relative'>
      <header className="dark:bg-primary/75 bg-white/50 backdrop-blur border-b border-gray-200 dark:border-gray-800 -mb-px sticky top-0 z-50">
        <div className="_container flex items-center justify-between gap-3 h-[64px]">
          <div className="lg:flex-1 flex items-center gap-1.5">
            <Link href={'/'} className="flex-shrink-0 font-bold text-xl text-gray-900 dark:text-white flex items-end gap-1.5">LOGO</Link>
          </div>

          <ul className="items-center gap-x-8 hidden lg:flex">
            <li className="relative">
              <Link href={'#'} className='text-sm/6 font-semibold flex items-center gap-1 text-secondary'>Guides</Link>
            </li>
            <li className="relative">
              <Link href={'#'} className='text-sm/6 font-semibold flex items-center gap-1 text-black dark:text-white'>Script Registry</Link>
            </li>
            <li className="relative">
              <Link href={'#'} className='text-sm/6 font-semibold flex items-center gap-1 text-black dark:text-white'>Learn</Link>
            </li>
          </ul>

          <div className="flex items-center justify-end lg:flex-1 gap-1.5">
            <Button>
              <Search />
            </Button>
            <Button
              onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            >
              <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </Button>
            <Button>
              <Github />
            </Button>

            <AsideDrawer />
          </div>
        </div>
      </header>

      <div className="_container lg:grid grid-cols-5">
        <aside className='-mb-px sticky top-[64px] col-start-1 col-end-2 h-[calc(100vh-64px)] hidden lg:block'>
          <AsideBar />
        </aside>

        <main className="col-start-2 col-span-full">
          <div className="animate-fade-up py-4 px-3">
            {children}
          </div>
        </main>
      </div>

      <footer className="text-sm text-gray-700 dark:text-gray-200 mt-20">
        <div className="border-t border-gray-200 dark:border-gray-800">
          <div className="_container">
            <div className="py-10 flex justify-between gap-space24 flex-wrap">
              <div className='space-y-space12'>
                <p className='font-bold text-2xl'>LOGO</p>
                <p>What is Nuxt Scripts?</p>
                <p>What is Nuxt Scripts?</p>
              </div>

              <div className='max-w-[300px]'>
                <div className="bg-gray-200 dark:bg-gray-800 rounded-xl p-space16 flex justify-between gap-space16">
                  <article className='space-y-space12 text-sm text-black dark:text-white '>
                    <p>Hey  My name is Harlan and Im the lead developer and maintainer of Nuxt Scripts.</p>
                    <p>Like the module? Let me know!</p>
                  </article>

                  <div className="space-y-space16">
                    <div className="h-space32 w-space32 rounded-full bg-primary/40 text-center">
                      M
                    </div>

                    <div className="flex gap-space12">
                      <p>dd</p>
                      <p>dd</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-800">
          <div className="_container py-10">
            Copyright © 2024 Nuxt Team - MIT License
          </div>
        </div>
      </footer>
    </div>
  );
};

export default DocsLayout;
