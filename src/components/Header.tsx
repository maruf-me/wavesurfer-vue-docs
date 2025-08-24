'use client'
import Link from 'next/link';
import { Button } from './ui/button';
import { Github, Moon, Sun, Play, BookOpen, Code } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useRouter } from 'next/navigation';

export const Header = () => {
  const { setTheme, theme } = useTheme();
  const router = useRouter()
  
  return (
    <header className="dark:bg-secondary/75 bg-white/50 backdrop-blur border-b border-gray-200 dark:border-gray-800 -mb-px sticky top-0 z-50">
      <div className="_container flex items-center justify-between gap-3 h-[64px]">
        <div className="lg:flex-1 flex items-center gap-1.5">
        <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <Code className="h-5 w-5 text-white" />
                </div>  
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
              href={'/'}
              className="text-sm/6 font-semibold flex items-center gap-1 text-primary hover:text-primary/80 transition-colors"
            >
              Overview
            </Link>
          </li>
          <li className="relative">
            <Link
              href={'/playground'}
              className="text-sm/6 font-semibold flex items-center gap-1 text-black dark:text-white hover:text-primary transition-colors"
            >
              <Play className="h-4 w-4" />
              Playground
            </Link>
          </li>
          <li className="relative">
            <Link
              href={'/api-references'}
              className="text-sm/6 font-semibold flex items-center gap-1 text-black dark:text-white hover:text-primary transition-colors"
            >
              <BookOpen className="h-4 w-4" />
              API Reference
            </Link>
          </li>
        </ul>

        <div className="flex items-center justify-end lg:flex-1 gap-1.5">
          <Button
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            variant="outline"
            size="sm"
            className="h-9 w-9 p-0"
          >
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          </Button>
          <Button 
            onClick={() => router.push('https://github.com/meer-sagor/wavesurfer-vue')}
            variant="outline"
            size="sm"
            className="h-9 w-9 p-0"
          >
            <Github className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </header>
  );
};
