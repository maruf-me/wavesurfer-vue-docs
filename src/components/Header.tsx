'use client'
import Link from 'next/link';
import { Button } from './ui/button';
import { Github, Moon, Sun } from 'lucide-react';
import { AsideDrawer } from './AsideDrawer';
import { useTheme } from 'next-themes';
import { useRouter } from 'next/navigation';

export const Header = () => {
  const { setTheme, theme } = useTheme();
    const router = useRouter()
  return (
    <header className="dark:bg-secondary/75 bg-white/50 backdrop-blur border-b border-gray-200 dark:border-gray-800 -mb-px sticky top-0 z-50">
      <div className="_container flex items-center justify-between gap-3 h-[64px]">
        <div className="lg:flex-1 flex items-center gap-1.5">
          <Link
            href={'/'}
            className="flex-shrink-0 font-bold text-xl text-primary flex items-end gap-1.5"
          >
            wavesurfer-vue
          </Link>
        </div>

        <ul className="items-center gap-x-8 hidden lg:flex">
          <li className="relative">
            <Link
              href={'/docs/introduction'}
              className="text-sm/6 font-semibold flex items-center gap-1 text-primary"
            >
              Guides
            </Link>
          </li>
          <li className="relative">
            <Link
              href={'/docs/installation'}
              className="text-sm/6 font-semibold flex items-center gap-1 text-black dark:text-white"
            >
              Installation
            </Link>
          </li>
        </ul>

        <div className="flex items-center justify-end lg:flex-1 gap-1.5">
          <Button
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
          >
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          </Button>
          <Button onClick={()=> router.push('https://github.com/meer-sagor/wavesufer-vue')}>
            <Github />
          </Button>
          <AsideDrawer />
        </div>
      </div>
    </header>
  );
};
