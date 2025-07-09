import { Icon } from "@iconify/react";
import Image from "next/image";

import HeroImg from "@/public/img/home/about1.jpg";

export default function HeroSection() {
  return (
    <div className="relative min-h-screen bg-[#0B1315] overflow-hidden">
      {/* Sophisticated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-96 h-96 border border-[#B0695E]/10 rotate-45"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 border border-[#B0695E]/5 rotate-12"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-[#B0695E]/5 rounded-full"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10  pt-10 container 2xl:px-40 px-4 mx-auto">
        <div className="grid lg:grid-cols-12 gap-16 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="lg:col-span-7 space-y-12">
            <div className="space-y-8">
              <div className="flex items-center space-x-6">
                <div className="w-16 h-px bg-[#B0695E]"></div>
                <span className="text-[#B0695E] text-sm tracking-[0.3em] font-light">
                  RedBowl
                </span>
                <div className="w-4 h-4 border border-[#B0695E] rotate-45"></div>
              </div>

              <div className="space-y-6">
                <h1 className="text-6xl text-white  tracking-wide leading-[4.5rem]">
                  Taste the{" "}
                  <span className="relative inline-block">
                    <span className="text-[#B0695E]"> Authenticity</span>
                    <div className="absolute -bottom-2 left-0 w-full h-px bg-[#B0695E]/30"></div>
                  </span>
                  <br />
                  <span className="text-[#B0695E]">With</span> happiness.
                </h1>
              </div>

              <div className="flex items-start space-x-16 ">
                <div className="space-y-6 ">
                  <p className="text-lg text-gray-300 font-light leading-relaxed pr-10 ">
                    Experience the ancient art of teppanyaki where master chefs
                    transform fresh ingredients into culinary poetry, creating
                    memories that linger long after.
                  </p>

                  <div className="space-x-8 flex">
                    <div className="text-center flex items-center gap-3">
                      <div className="text-4xl text-white font-extralight ">
                        25+
                      </div>
                      <div className="text-xs text-gray-500 tracking-[0.2em]">
                        YEARS MASTERY
                        <div className="w-8 h-px bg-[#B0695E]  mt-2"></div>
                      </div>
                    </div>
                    <div className="text-center flex items-center gap-3">
                      <div className="text-4xl text-white font-extralight mb-2">
                        8
                      </div>
                      <div className="text-xs text-gray-500 tracking-[0.2em]">
                        MASTER CHEFS
                        <div className="w-8 h-px bg-[#B0695E] mt-2"></div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-8 pt-10">
                    <button className="group flex items-center space-x-4 bg-[#B0695E] text-white px-6 py-3 hover:bg-white hover:text-[#B0695E] transition-all duration-300 relative overflow-hidden">
                      <Icon
                        icon="material-symbols:local-fire-department"
                        className="text-xl relative z-10"
                      />
                      <span className="relative z-10 tracking-wide">
                        BOOK HIBACHI
                      </span>
                      <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                    </button>

                    <button className="group flex items-center space-x-3 text-gray-400 hover:text-[#B0695E] transition-all duration-300">
                      <div className="w-12 h-12 border border-gray-600 group-hover:border-[#B0695E] flex items-center justify-center transition-all duration-300">
                        <Icon icon="mdi:play" className="text-lg" />
                      </div>
                      <span className="text-sm tracking-wide">WATCH STORY</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Enhanced Image Section */}
          <div className="lg:col-span-5 relative">
            <div className="relative">
              {/* Main Image */}
              <div className="relative z-10 w-full h-[30rem]">
                <Image
                  src={HeroImg}
                  alt="Master chef at hibachi grill"
                  width={1000}
                  height={1000}
                  className="w-full object-cover h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1315]/60 via-transparent to-transparent"></div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-8 -left-8 bg-[#0B1315]/30 backdrop-blur-lg border border-[#B0695E] p-4 z-20">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-[#B0695E] flex items-center justify-center">
                    <Icon
                      icon="material-symbols-light:skillet-cooktop-outline"
                      className="text-white size-9"
                    />
                  </div>
                  <div>
                    <div className="text-white font-medium mb-1">
                      Live Performance
                    </div>
                    <div className="text-xs text-gray-400 tracking-wide">
                      TEPPANYAKI SHOW
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-8 -right-8 bg-[#0B1315]/30 backdrop-blur-lg border border-[#B0695E] p-4 z-20">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-[#B0695E] flex items-center justify-center">
                    <Icon
                      icon="fluent-mdl2:chopsticks"
                      className="text-white size-6"
                    />
                  </div>
                  <div>
                    <div className="text-white font-medium mb-1">
                      Premium Sashimi
                    </div>
                    <div className="text-xs text-gray-400 tracking-wide">
                      DAILY FRESH
                    </div>
                  </div>
                </div>
              </div>

              {/* Background Accent */}
              <div className="absolute -inset-4 border border-[#B0695E]/20 -z-10"></div>
              <div className="absolute -inset-8 border border-[#B0695E]/10 -z-20"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Accent */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#B0695E] to-transparent"></div>
    </div>
  );
}
