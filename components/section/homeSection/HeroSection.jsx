import { Icon } from "@iconify/react";
import ImageSlider from "./HeroImageSlider";

export default function HeroSection() {
  return (
    <div className="relative  overflow-hidden">
      {/* Sophisticated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-96 h-96 border border-[#B0695E]/10 rotate-45"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 border border-[#B0695E]/5 rotate-12"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-[#B0695E]/5 rounded-full"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 container 2xl:px-40 px-4 mx-auto md:py-24 sm:py-20 py-12">
        <div className="grid lg:grid-cols-12 gap-16 items-center ">
          {/* Left Content */}
          <div className="lg:col-span-7 space-y-12 mb-10 lg:mb-0">
            <div className="sm:space-y-8 relative">
              <div
                className="w-40 h-16 bg-main rounded-full blur-2xl opacity-20 rotate-12 top-12 absolute lg:left-[5%] left-[35%]"
                aria-hidden="true"
              />

              <div className="flex items-center justify-center lg:justify-start space-x-6 z-[10] relative">
                <div className="w-16 h-px bg-[#B0695E]"></div>
                <span className="text-[#B0695E] text-sm tracking-[0.3em] font-light">
                  RedBowl
                </span>
                <div className="w-4 h-4 border border-[#B0695E] rotate-45"></div>
              </div>

              <div className="space-y-6 z-[10] relative text-center lg:text-left my-4 sm:my-0 sm:mb-6">
                <h1 className="2xl:text-6xl sm:text-5xl text-3xl text-white  tracking-wide sm:leading-[4.5rem] leading-[2.5rem]">
                  Taste the{" "}
                  <span className="relative inline-block">
                    <span className="text-[#B0695E]"> Authenticity</span>
                    <div className="absolute -bottom-2 left-0 w-full h-px bg-[#B0695E]/30"></div>
                  </span>
                  <br />
                  <span className="text-[#B0695E]">With</span> happiness.
                </h1>
              </div>

              <div className="flex items-start space-x-16 text-center lg:text-left ">
                <div className="space-y-6 ">
                  <p className="sm:text-lg text-sm text-gray-300 font-light leading-relaxed lg:pr-10 ">
                    Experience the ancient art of teppanyaki where master chefs
                    transform fresh ingredients into culinary poetry, creating
                    memories that linger long after.
                  </p>

                  <div className="flex items-center justify-center lg:justify-start sm:space-x-8 space-x-4 2xl:pt-10 pt-5">
                    {/* Delivery */}
                    <button className="group flex items-center sm:space-x-4 space-x-2 bg-[#B0695E] text-white sm:px-6 px-3 sm:py-3 py-2 hover:bg-white hover:text-[#B0695E] transition-all duration-300 relative overflow-hidden sm:text-base text-sm">
                      <Icon
                        icon="mdi:truck-delivery"
                        className="sm:text-xl text-lg relative z-10"
                      />
                      <span className="relative z-10 sm:tracking-wide whitespace-nowrap">
                        DELIVERY
                      </span>
                      <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                    </button>

                    {/* Pickup */}
                    <button className="group flex items-center sm:space-x-4 space-x-2 bg-[#B0695E] text-white sm:px-6 px-3 sm:py-3 py-2 hover:bg-white hover:text-[#B0695E] transition-all duration-300 relative overflow-hidden sm:text-base text-sm">
                      <Icon
                        icon="mdi:bag-checked"
                        className="sm:text-xl text-lg relative z-10"
                      />
                      <span className="relative z-10 sm:tracking-wide whitespace-nowrap">
                        PICKUP
                      </span>
                      <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Enhanced Image Section */}
          <div className="lg:col-span-5 relative lg:p-0 sm:p-7 p-3">
            <ImageSlider />
            {/* Background Accent */}
            <div className="absolute xl:-inset-4 inset-0 border border-[#B0695E]/20 -z-10"></div>
            <div className="absolute xl:-inset-8 inset-0 border border-[#B0695E]/10 -z-20"></div>
          </div>
        </div>
      </div>

      {/* Bottom Accent */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#B0695E] to-transparent"></div>
    </div>
  );
}
