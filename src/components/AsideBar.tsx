import { Blocks, Book, Code, Terminal } from 'lucide-react';
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
  {
    title: "Usage",
    items: [
      {
        title: "Component Usage",
        href: "/docs/component-usage",
        icon: Code,
      },
      {
        title: "Composable Usage",
        href: "/docs+6/composable-usage",
        icon: Blocks,
      },
    ],
  },
];

const AsideBar = () => {
  const pathname = usePathname()

  return (
    <ul className='py-4'>
      {navigationItems.map(items => (
        <div key={items.title}>
          <h3 className="text-base font-bold text-black dark:text-white py-2">{items.title}</h3>


          {items.items.map(item => (
            <li
              key={item.href}
              className={`font-medium border-l border-gray-200 dark:border-gray-800 text-sm/6 duration-300
                       ${pathname === item.href ? 'border-secondary dark:border-secondary bg-secondary/10 text-secondary dark:text-secondary' : 'text-neutral dark:text-white hover:border-secondary dark:hover:border-secondary hover:bg-secondary/5 dark:hover:bg-secondary/10 hover:text-secondary dark:hover:text-secondary'}`}
            >
              <Link href={item.href} className='block py-1 px-4'>{item.title}</Link>
            </li>
          ))}
        </div>
      ))}
    </ul>
  )
}

export default AsideBar
