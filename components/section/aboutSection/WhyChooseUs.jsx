import { Icon } from "@iconify/react";
import React from "react";
import SectionHeading from "../commonSection/SectionHeader";

export default function WhyChooseUs() {
  return (
    <section className="py-16 ">
      <div className="container 2xl:px-40 px-4 mx-auto">
        <SectionHeading title="Why Choose Us ?" subtitle="Why?" />

        <div className="grid md:grid-cols-3 gap-8">
          <div className="border border-main/50 rounded-xl p-8 relative  ">
            <Icon icon="mdi:food" className="text-5xl text-main mb-6" />
            <h3 className="text-xl font-medium text-white mb-4">
              Authentic Flavors
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Every dish is crafted using traditional recipes passed down
              through generations, ensuring authentic taste in every bite.
            </p>
            <div
              className="w-40 h-16 bg-main rounded-full blur-2xl opacity-25 rotate-12 bottom-8 absolute left-[45%]"
              aria-hidden="true"
            />
          </div>

          <div className="border border-main/50 rounded-xl p-8 relative ">
            <Icon icon="mdi:star" className="text-5xl text-main mb-6" />
            <h3 className="text-xl font-semibold text-white mb-4">
              Premium Quality
            </h3>
            <p className="text-gray-400 leading-relaxed">
              We source only the finest ingredients and maintain the highest
              standards in food preparation and presentation.
            </p>
            <div
              className="w-40 h-16 bg-main rounded-full blur-2xl opacity-25 rotate-12 bottom-8 absolute left-[45%]"
              aria-hidden="true"
            />
          </div>

          <div className="border border-main/50 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow relative">
            <Icon
              icon="mdi:account-group"
              className="text-5xl text-main mb-6"
            />
            <h3 className="text-xl font-semibold text-white mb-4">
              Exceptional Service
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Our friendly and professional staff ensures that every visit is
              memorable, providing personalized attention to each guest.
            </p>
            <div
              className="w-40 h-16 bg-main rounded-full blur-2xl opacity-25 rotate-12 bottom-8 absolute left-[45%]"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
