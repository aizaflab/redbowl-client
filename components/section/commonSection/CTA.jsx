import Image from "next/image";
import ctaImg from "@/public/img/home/cta.png";
import { Icon } from "@iconify/react/dist/iconify.js";

export default function CTA() {
  return (
    <div className="container mx-auto 2xl:px-40 px-2 my-12">
      <div className="bg-[#152225]/40 sm:p-10 p-5 rounded-2xl flex justify-between relative overflow-hidden">
        <div className="lg:w-1/2 sm:w-4/5 w-full relative text-center sm:text-left">
          <h2 className="sm:text-4xl text-3xl text-[#1A1A1A] dark:text-white md:pr-20 sm:leading-[3rem] leading-[2.5rem] z-[10] title">
            Where tradition <br /> meets
            <span className="text-main "> taste & flavor.</span>
          </h2>
          <p className="md:my-7 my-5 sm:pr-12 text-[#6D6D6D] dark:text-gray-300/80 z-[10] sm:text-base text-sm">
            Red Bowl brings the art of Hibachi and Japanese cuisine to your
            table with freshly grilled meats, vibrant vegetables, and a taste
            experience that’s unforgettable.
          </p>

          <div className="z-[10] sm:space-y-0 sm:space-x-2 flex items-center gap-1 ">
            <input
              type="text"
              className="bg-transparent flex-1 sm:flex-none p-3 px-5 rounded-full w-[50%] text-sm focus:outline-none border border-main placeholder:text-main"
              placeholder="Enter your email"
            />
            <button className="sm:px-6 sm:py-2.5 size-12 sm:size-auto text-sm border rounded-full bg-main text-white border-main center">
              <Icon
                icon="streamline:mail-send-email-message"
                className="sm:hidden size-5"
              />
              <span className="sm:block hidden whitespace-nowrap">
                Start Now
              </span>
            </button>
          </div>

          <div
            className="w-40 h-16 bg-main rounded-full blur-2xl opacity-30 rotate-12 absolute top-10 -left-4"
            aria-hidden="true"
          />
        </div>

        <div className="lg:w-1/2 sm:w-1/5 z-[10] sm:block hidden relative center pl-28">
          <Image
            src={ctaImg}
            alt="cta image"
            className="h-64 w-fit mx-auto z-[10] animate-float"
          />
          <div className="h-[28rem] bg-main/50 w-40 absolute"></div>

          <div className="absolute inset-0">
            <Icon
              icon="fluent-mdl2:chopsticks"
              className="absolute top-20 right-6 text-amber-500 text-4xl opacity-50 animate-float-reverse transform "
            />
            <Icon
              icon="streamline-ultimate:seafood-sushi"
              className="absolute top-16 left-40 text-red-500 text-4xl opacity-60 animate-float-slow"
            />
            <Icon
              icon="carbon:noodle-bowl"
              className="absolute bottom-2 right-20 text-green-500 text-4xl opacity-50 animate-float-reverse-slow"
            />
            <Icon
              icon="fluent:bowl-salad-20-regular"
              className="absolute bottom-5 left-28 text-lime-500 size-10 opacity-50 animate-float"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
