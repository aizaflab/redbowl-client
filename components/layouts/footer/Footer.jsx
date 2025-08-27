import Link from "next/link";
import Socials from "./Socials";
import Copyright from "./Copyright";
import { Icon } from "@iconify/react";
import { footerLinkItems, footerMenuItem } from "@/utils/DataHelper";
import Logo from "../navbar/Logo";

export default function Footer() {
  return (
    <div className=" relative border-t border-main/20">
      <div className="container 2xl:px-40 px-4 mx-auto py-12 flex items-start flex-wrap md:flex-nowrap gap-10 md:gap-0 justify-between text-sm">
        <div className="xl:max-w-[26rem] lg:max-w-[20rem] max-w-[16rem] flex flex-col gap-3">
          <div className="text-xl mb-1">
            <Logo />
          </div>
          <p className="text-gray-300">
            Redbowl offers authentic Japanese hibachi cuisine with fresh
            ingredients, expert grill techniques, and a welcoming atmosphere
            full of flavor and entertainment.
          </p>
          <Socials />
        </div>

        <div className="flex-col gap-3">
          <h2 className="text-xl text-main">Company</h2>
          <div className="flex flex-col gap-3 mt-4">
            {footerMenuItem?.map((data, idx) => (
              <Link
                key={idx}
                href={data?.url}
                className="text-gray-300 hover:text-light hover:text-gray-0"
              >
                {data?.name}
              </Link>
            ))}
          </div>
        </div>

        <div className="gap-3">
          <h2 className="text-xl text-main">Links</h2>
          <div className="flex flex-col gap-3 mt-4">
            {footerLinkItems?.map((data, idx) => (
              <Link
                key={idx}
                href={data?.url}
                className="text-gray-300 hover:text-gray-0 hover:text-light"
              >
                {data?.name}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex-col gap-3 max-w-[28rem]">
          <h2 className="text-xl mb-4 text-main">Contact</h2>
          <div className="space-y-3">
            <p className="text-gray-300 hover:text-light flex items-center gap-3">
              <Icon icon="hugeicons:call-02" className="size-5" />
              <span>+1 240-493-7034</span>
            </p>
            <p className="text-gray-300 hover:text-light flex items-center gap-3">
              <Icon icon="ion:mail-outline" className="size-5" />{" "}
              <span>ask@redbowlhibachi.com</span>
            </p>
            <p className="text-gray-300 hover:text-light flex items-center gap-3">
              <Icon
                icon="material-symbols:location-on-outline-rounded"
                className="size-5"
              />
              <span>6210 Livingston Rd, Oxon Hill, MD 20745, USA.</span>
            </p>
            <p className="text-gray-300 hover:text-light flex items-center gap-3">
              <Icon icon="lsicon:time-two-outline" className="size-5" />
              <span>Moday - Saturday 9AM - 5PM</span>
            </p>
          </div>
        </div>
      </div>
      <Copyright />
    </div>
  );
}
