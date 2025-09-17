import React from "react";
import { Icon } from "@iconify/react";
import { signatureDishMenuItems } from "@/utils/DataHelper";
import SectionHeading from "../commonSection/SectionHeader";
import Image from "next/image";
import Link from "next/link";

export default function SignatureDish() {
  return (
    <div className="sm:py-16 pb-0 pt-20">
      <SectionHeading title="Signature Dishes" subtitle="Signature" />

      <div className="grid lg:grid-cols-2 gap-5 container mx-auto 2xl:px-40 px-4">
        {signatureDishMenuItems.map((item, index) => (
          <div
            key={index}
            className=" bg-[#152225] rounded-xl p-2 flex sm:flex-row flex-col items-center gap-3 relative"
          >
            <div className="sm:max-w-[14rem] sm:w-[14rem] aspect-square h-52 bg-red-400/10 rounded-md center ">
              {item?.url ? (
                <Image
                  src={item?.url}
                  alt={item?.name}
                  className=" h-full w-full object-cover rounded-md "
                  width={800}
                  height={500}
                />
              ) : (
                <Icon icon="ep:food" className="size-16 text-main/30" />
              )}
            </div>
            <div className="pr-3 px-3 pb-3 flex-1 ">
              <h3 className="text-2xl font-medium font-serif italic text-main mb-2">
                {item.title}
              </h3>
              <p className="text-stone-400">{item.description}</p>
              <div className="mt-5 between">
                <p className="text-gray-200 font-medium text-xl ">
                  {item.price}
                </p>

                <Link
                  target="_blank"
                  href="https://red-bowl-hibachichicken-oxon-hill.cloveronline.com"
                  className="text-[13px] rounded px-4 py-2 bg-main/70"
                >
                  Order Now
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
