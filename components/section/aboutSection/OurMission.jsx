import { Icon } from "@iconify/react";
import React from "react";
import SectionHeading from "../commonSection/SectionHeader";

export default function OurMission() {
  return (
    <section className="py-16 ">
      <SectionHeading title="Driven by Purpose" subtitle="Mission & Story" />

      <div className="container 2xl:px-40 px-4 mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="bg-[#0F191C] rounded-2xl sm:p-8 p-4 text-white">
            <Icon icon="mdi:target" className="text-5xl mb-6 text-main" />
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-gray-400 leading-relaxed">
              To create extraordinary dining experiences that bring people
              together, celebrate culture through food, and make every meal a
              cherished memory.
            </p>
            <br />
            <p className="text-gray-400 leading-relaxed">
              To become a globally loved restaurant brand known for authentic
              flavors, warm hospitality, and cultural fusion on every plate.
            </p>
          </div>

          <div className="relative">
            <div
              className="w-40 h-16 bg-main rounded-full blur-2xl opacity-25 rotate-12 top-8 absolute right-[60%]"
              aria-hidden="true"
            />
            <h2 className="text-3xl font-medium  mb-6">Our Story</h2>
            <p className="text-lg text-gray-400 mb-6 leading-relaxed">
              RedBowl began as a dream to share the rich culinary heritage of
              our culture with the world. What started as a small family kitchen
              has grown into a beloved dining destination.
            </p>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              Today, we continue to honor our roots while embracing innovation,
              creating dishes that tell stories and bring communities together
              around the universal language of great food.
            </p>

            <div className="flex items-center space-x-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-main">5+</div>
                <div className="text-sm text-gray-400">Years of Excellence</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-main">10K+</div>
                <div className="text-sm text-gray-400">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-main">50+</div>
                <div className="text-sm text-gray-400">Signature Dishes</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
