"use client";

import { Icon } from "@iconify/react";
import { contactCardData } from "@/utils/DataHelper";

export default function ContactCard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 -mt-8 mb-10  px-4 lg:px-32 container mx-auto  2xl:px-60  z-[20] relative">
      {contactCardData.map((card, index) => (
        <div
          key={index}
          className="bg-[#142226] border border-[#142226] rounded-lg p-6 hover:border-main transition-all duration-300 relative overflow-hidden"
        >
          <div className="flex items-center mb-4">
            <div className="bg-main/20 p-3 rounded-lg text-main mr-4">
              <Icon icon={card.icon} className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-medium">{card.title}</h3>
          </div>
          <p className="text-gray-300 mb-4 text-sm">{card.description}</p>
          <a
            href={card.link}
            className="text-main transition-colors flex items-center text-sm"
            {...(card.isExternal
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
          >
            {card.linkText}
            <Icon icon="mdi:arrow-right" className="h-4 w-4 ml-2" />
          </a>
          <div
            className="size-40  bg-main rounded-full blur-2xl opacity-25 rotate-12 absolute -top-10 -right-40"
            aria-hidden="true"
          />
        </div>
      ))}
    </div>
  );
}
