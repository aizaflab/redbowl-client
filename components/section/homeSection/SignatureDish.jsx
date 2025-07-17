import React from "react";
import { Icon } from "@iconify/react";
import { signatureDishMenuItems } from "@/utils/FakeData";
import SectionHeading from "../commonSection/SectionHeader";

export default function SignatureDish() {
  return (
    <div className="sm:py-16 pb-0 pt-20">
      <SectionHeading title="Signature Dishes" subtitle="Signature" />

      <div className="grid lg:grid-cols-2 gap-5 container mx-auto 2xl:px-40 px-4">
        {signatureDishMenuItems.map((item, index) => (
          <div
            key={index}
            className=" bg-[#152225] rounded-xl p-2 flex sm:flex-row flex-col items-center gap-5 relative"
          >
            <div className=" sm:w-60 w-full aspect-square h-52 bg-red-400/10 rounded-md center ">
              <Icon
                icon={item.icon}
                className="size-12 text-red-300 opacity-80"
              />
            </div>
            <div className="pr-3 px-3 pb-3 ">
              <h3 className="text-2xl font-medium font-serif italic text-main mb-2">
                {item.title}
              </h3>
              <p className="text-stone-400">{item.description}</p>
              <div className="mt-5 between">
                <p className="text-gray-200 font-medium text-xl ">
                  {item.price}
                </p>

                <button className="text-[13px] rounded px-4 py-2 bg-main/70">
                  Order Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
