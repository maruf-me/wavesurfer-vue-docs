import { Button } from '@/components/ui/button';
import { Blocks, Book, Code, Terminal } from 'lucide-react';
import Link from 'next/link';

const navigationItems = [
  {
    title: "Getting Started",
    items: [
      {
        title: "Introduction",
        href: "docs/introduction",
        icon: Book,
      },
      {
        title: "Installation",
        href: "docs/installation",
        icon: Terminal,
      },
    ],
  },
  {
    title: "Usage",
    items: [
      {
        title: "Component Usage",
        href: "docs/component-usage",
        icon: Code,
      },
      {
        title: "Composable Usage",
        href: "docs+6/composable-usage",
        icon: Blocks,
      },
    ],
  },
];


const DocsLayout = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div className='bg-green-300 relative'>

      <header className="bg-black/75 backdrop-blur border-b border-gray-200 dark:border-gray-800 -mb-px sticky top-0 z-50">
        <div className="_container flex items-center justify-between gap-3 h-[64px]">
          <div className="lg:flex-1 flex items-center gap-1.5">
            <Link href={'/'} className="flex-shrink-0 font-bold text-xl text-gray-900 dark:text-white flex items-end gap-1.5">LOGO</Link>
          </div>


          <ul className="items-center gap-x-8 hidden lg:flex">
            <li className="relative">
              <Link href={'#'} className='text-sm/6 font-semibold flex items-center gap-1 text-primary'>Guides</Link>
            </li>
            <li className="relative">
              <Link href={'#'} className='text-sm/6 font-semibold flex items-center gap-1 text-primary'>Guides</Link>
            </li>
            <li className="relative">
              <Link href={'#'} className='text-sm/6 font-semibold flex items-center gap-1 text-primary'>Guides</Link>
            </li>
          </ul>

          <div className="flex items-center justify-end lg:flex-1 gap-1.5">
            <Button>ddd</Button>
            <Button>ddd</Button>
            <Button>ddd</Button>
          </div>
        </div>
      </header>

      <div className="_container grid grid-cols-5 min-h-">
        <aside className='-mb-px sticky top-[64px] bg-blue-400 col-start-1 col-end-2 h-[calc(100vh-64px)]'>
          <ul>
            {navigationItems.map(items => (items.items.map(item => (<li key={item.href}>
              <Link href={item.href}>{item.title}</Link>
            </li>))))}
          </ul>

        </aside>

        <main className="col-start-2 col-span-full">
          <div className="animate-fade-up">
            {children}


            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam consectetur tempora quo? Facere porro quidem numquam commodi aut, in voluptatum iure! Quisquam maiores blanditiis eaque cumque minima alias perspiciatis, libero ipsum dolorem cupiditate nihil impedit rerum debitis hic qui vel asperiores minus dolor laborum enim tempore reprehenderit illo harum? Placeat iure facilis debitis quod saepe quo officia laudantium nihil qui quidem eum voluptatum, repudiandae nisi est nulla et consequatur deleniti non. Perspiciatis alias exercitationem ex labore veniam aut quae molestiae. Et suscipit quisquam placeat voluptatum error? Esse maxime laboriosam excepturi nisi cum repudiandae, officiis fugit optio. Sed totam, suscipit nihil blanditiis ex rerum expedita esse quae doloribus delectus praesentium eius, corporis impedit pariatur repellat obcaecati? Vitae qui nostrum ullam exercitationem cupiditate. Ex, vitae deserunt aut accusantium repellat dolores quos tenetur voluptates distinctio necessitatibus error rem saepe blanditiis. Sequi dolore velit suscipit exercitationem necessitatibus non officiis impedit quibusdam quis odio consequuntur cumque quas officia repudiandae praesentium, nihil, architecto mollitia voluptas qui voluptatem cupiditate nulla quam! Commodi aspernatur facere vel facilis enim quaerat iste in? Corporis nisi, cupiditate odit ut voluptatum natus fugit id ullam enim ab omnis sapiente ea nam iusto laborum aperiam soluta eligendi. Autem accusantium ullam laudantium? Illum illo ut sit, quaerat repudiandae labore perferendis quo amet adipisci ratione asperiores quam architecto nesciunt aliquam impedit quia numquam reprehenderit soluta sapiente qui inventore voluptatibus ex delectus. Tenetur enim architecto animi facere dolor impedit necessitatibus facilis est reiciendis fugit corrupti quod quaerat modi accusantium molestias quasi quas, vitae assumenda! Voluptatem earum dolorum, nobis totam similique nemo doloremque recusandae nulla suscipit quam deserunt quibusdam voluptates sint odio quae illo dignissimos enim voluptatum. Molestias adipisci et sint facilis ea corrupti, tempora nisi libero esse exercitationem ullam accusantium! A minus earum modi debitis, at veritatis molestias dolor architecto. Ullam magnam molestias voluptas temporibus recusandae eligendi tempora fugiat, ab eveniet tempore voluptatum qui aperiam cum ipsa voluptates itaque nulla velit, amet id ipsum impedit nam laudantium fugit minima! Natus aliquam maiores velit unde provident obcaecati voluptates. Consequuntur fugit placeat a illo rerum quos sed quibusdam iure, obcaecati ducimus explicabo, perspiciatis quam tempore dicta quaerat reprehenderit. Quas, aliquam hic suscipit ea voluptates a reiciendis quod repellat et harum iste adipisci recusandae perferendis perspiciatis impedit voluptatum. Beatae quisquam totam, voluptatum quas iste modi nostrum! Exercitationem tenetur iste eius, deleniti fugit, maiores quidem itaque impedit perferendis, voluptate qui. Fugit, quas eaque! Non repellendus at repellat ex? Numquam facilis, neque ab inventore, nisi minima modi eligendi possimus debitis velit accusantium mollitia dolorem libero, tenetur incidunt quae provident excepturi autem nostrum at nihil ut aliquid commodi placeat? Sint commodi nihil nobis molestiae totam suscipit eveniet accusantium explicabo perferendis ab animi nisi, iste quae beatae laborum obcaecati cumque eius debitis, nam delectus. Mollitia doloremque ipsam dicta, a hic eligendi atque exercitationem veritatis dolorum odit quaerat necessitatibus modi omnis fugiat illo eveniet. Laudantium nobis debitis aut quae dolor sapiente? Commodi qui a at voluptas. Maiores nemo ullam nam praesentium, id enim, minus voluptate perferendis architecto corrupti eius ad atque ipsam minima ipsum.</p>
          </div>
        </main>
      </div>

      <footer className="text-sm text-gray-700 dark:text-gray-200 mt-20">
        <div className="border-t border-gray-200 dark:border-gray-800">
          <div className="_container">
            <div className="py-10 grid xl:grid-cols-3 lg:gap-20 gap-10">
              <div>LOGO</div>

              <div>Nav</div>

              <div>Contact</div>
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
