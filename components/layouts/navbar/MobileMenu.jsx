import Link from "next/link";
import { menuItems } from "@/utils/DataHelper";
import { usePathname } from "next/navigation";

export default function MobileMenu({ openMenu, setOpenMenu }) {
  const pathName = usePathname();
  return (
    <>
      <div
        onClick={() => setOpenMenu(false)}
        className={`${
          openMenu ? "opacity-100 visible" : "opacity-0 invisible"
        } fixed bottom-0 left-0 w-full dynamicMenuHeight bg-[#0B1315]/40 md:hidden ani3 z-[1000]`}
      ></div>

      <div
        className={`${
          openMenu ? "translate-x-0" : "-translate-x-full"
        } fixed bottom-0 left-0 sm:w-1/2 w-2/3 dynamicMenuHeight  backdrop-blur-md z-[1000] pt-8 bg-[#0B1315]  border-r border-r-emerald-900/30 p-5 md:hidden ani3 `}
      >
        <div className="relative h-full w-full">
          <div className="flex flex-col space-y-2">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className={`text-gray-200 hover:text-main  ${
                  pathName === item.path ? "text-main " : "text-gray-200 "
                }  px-3 py-2 rounded font-medium text-[15px] w-full`}
                onClick={() => setOpenMenu(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="absolute bottom-0 w-full">
            <Link
              href="/demo"
              className="block rounded-full  bg-main text-center text-white w-full py-2 h-full transition-all duration-300 hover:bg-transparent text-[14px]"
            >
              Order Now
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
