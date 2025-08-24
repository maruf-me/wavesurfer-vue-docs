import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';


const navigationItems = [
  {
    title: "Getting Started",
    items: [
      {
        title: "Introduction",
        href: "/docs/introduction",
      },
      {
        title: "Installation",
        href: "/docs/installation",
      },
    ],
  },
  {
    title: "Audio Player",
    items: [
      {
        title: "Component Usage",
        href: "/docs/component-usage",
      },
      {
        title: "Composable Usage",
        href: "/docs/composable-usage",
      },
      {
        title: "Player Options",
        href: "/docs/player-options",
      },
      {
        title: "Player Events",
        href: "/docs/player-events",
      },
    ],
  },
  {
    title: "Audio Recorder",
    items: [
      {
        title: "Recorder Setup",
        href: "/docs/recorder-setup",
      },
      {
        title: "Recording Methods",
        href: "/docs/recording-methods",
      },
      {
        title: "Record Plugin Options",
        href: "/docs/record-plugin-options",
      },
    ],
  },
  {
    title: "Plugins & Features",
    items: [
      {
        title: "Available Plugins",
        href: "/docs/plugins",
      },
      {
        title: "Plugin Configuration",
        href: "/docs/plugin-configuration",
      },
      {
        title: "Custom Plugins",
        href: "/docs/custom-plugins",
      },
    ],
  },
  {
    title: "Examples",
    items: [
      {
        title: "Basic Player",
        href: "/docs/examples/basic-player",
      },
      {
        title: "Advanced Player",
        href: "/docs/examples/advanced-player",
      },
      {
        title: "Audio Recorder",
        href: "/docs/examples/audio-recorder",
      },
      {
        title: "With Plugins",
        href: "/docs/examples/with-plugins",
      },
    ],
  },
  {
    title: "Playground",
    items: [
      {
        title: "Interactive Playground",
        href: "/docs/playground",
      },
    ],
  },
  {
    title: "API Reference",
    items: [
      {
        title: "WaveSurferPlayer Props",
        href: "/docs/api/player-props",
      },
      {
        title: "useWaveSurfer Return",
        href: "/docs/api/use-wavesurfer",
      },
      {
        title: "useWaveSurferRecorder Return",
        href: "/docs/api/use-wavesurfer-recorder",
      },
      {
        title: "Events Reference",
        href: "/docs/api/events",
      },
    ],
  },
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
