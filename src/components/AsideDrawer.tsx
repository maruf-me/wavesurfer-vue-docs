
'use client'
import { Menu } from "lucide-react";
import { useState } from "react";
import AsideBar from "./AsideBar";
import { Button } from "./ui/button";

export function AsideDrawer() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="lg:hidden">
      <Button onClick={() => setIsOpen(!isOpen)}>
        <Menu />
      </Button>


      <aside className={`fixed  inset-y-0 left-0 z-40 w-64 h-screen transition-transform duration-300 bg-white dark:bg-primary 
      ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <p className="h-[64px] px-3 items-center flex border-b border-gray-200 dark:border-gray-800 sticky top-0 ">Logo</p>

        <div className="px-3">

          <AsideBar />
        </div>
      </aside>
    </div>
  )
}
