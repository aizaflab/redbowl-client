import { Icon } from "@iconify/react";
import React from "react";
import SectionHeading from "../commonSection/SectionHeader";
import templeImg1 from "@/public/img/elements/temple1.png";
import templeImg2 from "@/public/img/elements/temple2.png";
import Image from "next/image";

export default function SpecialOffer() {
  return (
    <section className="sm:py-20 pt-0  text-white">
      <SectionHeading
        title="Special Offers"
        subtitle="Limited time promotions"
      />

      <div className="container mx-auto 2xl:px-40 px-4 text-center">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-opacity-10 p-8 rounded-lg border border-main/30 relative overflow-hidden ">
            <Image
              src={templeImg1}
              alt="templeImg1"
              className="absolute h-80 w-fit -right-20 opacity-50"
            />
            <div
              className="size-40  bg-main rounded-full blur-2xl opacity-25 rotate-12 -top-8 absolute -left-[5%]"
              aria-hidden="true"
            />
            <Icon
              icon="mdi:percent"
              className="w-12 h-12 mx-auto mb-4 text-main"
            />
            <h3 className="text-2xl font-medium mb-2">20% Off First Order</h3>
            <p className="mb-4 text-gray-400">
              New customers get 20% off their first online order
            </p>
            <button className="bg-main px-6 py-2 text-sm mt-5 rounded-full hover:bg-[#152225] transition-colors">
              Order Now
            </button>
          </div>

          <div className="bg-opacity-10 p-8 rounded-lg border  border-main/30 relative overflow-hidden ">
            <Image
              src={templeImg2}
              alt="templeImg1"
              className="absolute h-80 w-fit -right-20 opacity-50"
            />
            <div
              className="size-40  bg-main rounded-full blur-2xl opacity-25 rotate-12 -top-8 absolute -left-[5%]"
              aria-hidden="true"
            />
            <Icon
              icon="mdi:clock"
              className="w-12 h-12 mx-auto mb-4 text-main"
            />
            <h3 className="text-2xl font-medium mb-2">Order Now</h3>
            <p className="mb-4 text-gray-400">
              Buy 2 hibachi bowls, get 1 free drink. Daily 3-5 PM
            </p>
            <button className="bg-main text-sm px-6 py-2 rounded-full hover:bg-[#152225] transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
