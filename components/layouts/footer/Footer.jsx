import Link from "next/link";
import Socials from "./Socials";
import Copyright from "./Copyright";
import { Icon } from "@iconify/react";
import { footerLinkItems, footerMenuItem } from "@/utils/DataHelper";

export default function Footer() {
  return (
    <div className=" relative border-t border-main/20">
      <div className="container 2xl:px-40 px-4 mx-auto py-12 flex items-start flex-wrap md:flex-nowrap gap-10 md:gap-0 justify-between text-sm">
        <div className="xl:max-w-[26rem] lg:max-w-[20rem] max-w-[16rem] flex flex-col gap-3">
          <div className="text-xl text-main mb-1">
            <span className="text-light">Indian</span> Place
          </div>
          <p className="text-gray-300">
            Indian Place Restaurant bietet authentische indische Küche mit
            aromatischen Gewürzen, frischen Zutaten und herzlicher
            Gastfreundschaft.
          </p>
          <Socials />
        </div>

        <div className="flex-col gap-3">
          <h2 className="text-xl text-main">Speisekarte</h2>
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
          <h2 className="text-xl mb-4 text-main">Kontakt</h2>
          <div className="space-y-3">
            <p className="text-gray-300 hover:text-light flex items-center gap-3">
              <Icon icon="hugeicons:call-02" className="size-5" />
              <span>+49 176 45850022</span>
            </p>
            <p className="text-gray-300 hover:text-light flex items-center gap-3">
              <Icon icon="ion:mail-outline" className="size-5" />{" "}
              <span>info@indianpalace.de</span>
            </p>
            <p className="text-gray-300 hover:text-light flex items-center gap-3">
              <Icon
                icon="material-symbols:location-on-outline-rounded"
                className="size-5"
              />
              <span>Riemekestraße 8-10, 33102 Paderborn</span>
            </p>
            <p className="text-gray-300 hover:text-light flex items-center gap-3">
              <Icon icon="lsicon:time-two-outline" className="size-5" />
              <span>Montag – Samstag, 9:00 – 17:00 Uhr</span>
            </p>
          </div>
        </div>
      </div>
      <Copyright />
    </div>
  );
}
