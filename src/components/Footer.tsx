import Image from "next/image"
import Link from "next/link"

export const Footer = ()=>{
    return  <footer className="text-sm text-gray-700 dark:text-gray-200 mt-20">
    <div className="border-t border-gray-200 dark:border-gray-800">
      <div className="_container">
        <div className="py-10 flex justify-between gap-space24 flex-wrap">
          <div className="space-y-space12">
            <p className="font-bold text-2xl text-primary">wavesurfer-vue</p>
          </div>

          <div className="max-w-[320px]">
            <div className="bg-gray-200 dark:bg-gray-800 rounded-xl p-space16 flex justify-between gap-space16">
              <article className="space-y-space12 text-sm text-black dark:text-white ">
                <p>
                  Hey My name is{' '}
                  <Link
                    href={'https://github.com/meer-sagor'}
                    className="underline"
                  >
                    Meer Sagor
                  </Link>{' '}
                  and Im the lead developer and maintainer of{' '}
                  <code>@meersagor/wavesurfer-vue</code>
                </p>
              </article>

              <div className="space-y-space16">
                <div className="size-space32 rounded-full bg-primary/40 text-center">
                  <Image
                    src="https://avatars.githubusercontent.com/u/78520766?v=4"
                    alt="Picture of the author Meer Sagor"
                    width={32}
                    height={32}
                    className='rounded-full'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="border-t border-gray-200 dark:border-gray-800">
      <div className="_container py-10 text-center">
        Copyright © {new Date().getFullYear()} Meer Sagor. Licensed under
        the MIT License
      </div>
    </div>
  </footer>
}