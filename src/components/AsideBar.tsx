import { cn } from '@/lib/utils';
import { Book, Terminal } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';


const navigationItems = [
  {
    title: "Getting Started",
    items: [
      {
        title: "Introduction",
        href: "/docs/introduction",
        icon: Book,
      },
      {
        title: "Installation",
        href: "/docs/installation",
        icon: Terminal,
      },
    ],
  },
  // {
  //   title: "Usage",
  //   items: [
  //     {
  //       title: "Component Usage",
  //       href: "/docs/component-usage",
  //       icon: Code,
  //     },
  //     {
  //       title: "Composable Usage",
  //       href: "/docs+6/composable-usage",
  //       icon: Blocks,
  //     },
  //   ],
  // },
];

const AsideBar = () => {
  const pathname = usePathname()

  return (
    <ul className={cn('py-4')}>
      {navigationItems.map(items => (
        <div key={items.title}>
          <h3 className={cn("text-base font-bold text-black dark:text-white py-2")}>{items.title}</h3>


          {items.items.map(item => (
            <li
              key={item.href}
              className={cn(`font-medium border-l border-gray-200 dark:border-gray-800 text-sm/6 duration-300
                       ${pathname === item.href ? 'border-primary dark:border-primary bg-primary/10 text-primary dark:text-primary' : 'text-neutral dark:text-white hover:border-primary dark:hover:border-primary hover:bg-primary/5 dark:hover:bg-primary/10 hover:text-primary dark:hover:text-primary'}`)}
            >
              <Link href={item.href} className={cn('block py-1 px-4')}>{item.title}</Link>
            </li>
          ))}
        </div>
      ))}
    </ul>
  )
}

export default AsideBar
