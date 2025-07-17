"use client";

import Logo from "./Logo";
import Link from "next/link";
import { useState } from "react";
import { Icon } from "@iconify/react";
import MobileMenu from "./MobileMenu";
import { usePathname } from "next/navigation";
import { menuItems } from "@/utils/DataHelper";

export default function Navbar() {
  const pathName = usePathname();
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <>
      <nav className="sticky top-0 z-[1000]  backdrop-blur-md  border-b border-b-emerald-900/30 md:py-2 py-3 ">
        <div className="container mx-auto 2xl:px-40 px-4 between  ">
          <Logo />
          {/* Desktop Navigation */}
          <div className="flex items-center gap-6">
            {/* Menu Items with Buttton */}
            <div className="hidden md:flex items-center lg:space-x-10 space-x-6 title text-[15.5px]  ">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.path}
                  className={` hover:text-main py-3  ${
                    pathName === item.path ? "text-main " : "text-gray-200 "
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* mobile menu bar */}
            <button
              onClick={() => setOpenMenu(!openMenu)}
              className="bg-[#132529] text-main size-8 rounded center cursor-pointer block md:hidden"
            >
              <Icon
                icon={
                  openMenu
                    ? "line-md:menu-to-close-transition"
                    : "line-md:close-to-menu-transition"
                }
                className="size-6"
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <MobileMenu openMenu={openMenu} setOpenMenu={setOpenMenu} />
    </>
  );
}
