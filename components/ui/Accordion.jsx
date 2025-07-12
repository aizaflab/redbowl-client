"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";

const Accordion = ({ btnClass, data }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [indexAc, setIndexAc] = useState(0);

  const toggleAccordion = (index) => {
    if (index === indexAc) {
      setIsOpen(!isOpen);
    } else {
      setIsOpen(true);
    }
    setIndexAc(index);
  };

  return (
    <div>
      {data.map((item, index) => (
        <div
          key={index}
          onClick={() => toggleAccordion(index)}
          className="mb-1"
        >
          <div
            className={`between gap-4 px-5 py-5 rounded cursor-pointer w-full h-[50px] mb-2 focus:outline-none font-medium  border border-[#1a2a2f] bg-[#0F191C] hover:bg-[#1c2e34]`}
          >
            <h2 className=" text-[15px] text-white">{item.question}</h2>
            <Icon
              icon="flowbite:angle-down-outline"
              className="size-4 text-main"
            />
          </div>
          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out px-3 ${
              isOpen && indexAc === index ? "max-h-[16rem] py-2" : "max-h-0"
            }`}
          >
            <div
              dangerouslySetInnerHTML={{ __html: item.answer }}
              className="dark:text-gray-300"
            />
            {item.status && (
              <Link className="text-[#05669b]" href="/faqs">
                FAQ page.
              </Link>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
