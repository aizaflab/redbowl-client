"use client";

import Image from "next/image";
import ctaImg from "@/public/img/home/cta.png";
import { Icon } from "@iconify/react/dist/iconify.js";
import toast from "react-hot-toast";
import { useState } from "react";

export default function CTA() {
  const [isloading, setIsloading] = useState(false);
  const [formEmail, setFormEmail] = useState("");

  const submitHandel = async () => {
    try {
      setIsloading(true);
      const res = await fetch("/api/cta", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: formEmail }),
      });

      if (res.ok) {
        toast.success("Confirmation email sent");
        setFormEmail("");
      } else {
        const data = await res.json().catch(() => ({}));
        toast.error(data?.error || "Failed to send");
      }
      return setIsloading(false);
    } catch (err) {
      toast.error("Server error ");
      setIsloading(false);
    }
  };

  return (
    <div className="container mx-auto 2xl:px-40 px-2 sm:my-12">
      <div className="bg-[#152225]/40 sm:p-10 p-5 sm:rounded-2xl rounded-lg flex justify-between relative overflow-hidden">
        <div className="lg:w-1/2 sm:w-4/5 w-full relative text-center sm:text-left">
          <h2 className="sm:text-4xl text-3xl text-white md:pr-20 sm:leading-[3rem] leading-[2.5rem] z-[10] title">
            Where tradition <br /> meets
            <span className="text-main "> taste & flavor.</span>
          </h2>
          <p className="md:my-7 my-5 sm:pr-12 text-gray-300/80 z-[10] sm:text-base text-sm sm:text-left text-center">
            Red Bowl brings the art of Hibachi and Japanese cuisine to your
            table with freshly grilled meats, vibrant vegetables, and a taste
            experience that’s unforgettable.
          </p>

          <div className="z-[10] sm:space-y-0 sm:space-x-2 flex items-center gap-1 ">
            <input
              type="email"
              onChange={(e) => setFormEmail(e.target.value)}
              className="bg-transparent flex-1 sm:flex-none p-3 px-5 rounded-full w-[50%] text-sm focus:outline-none border border-main placeholder:text-main"
              placeholder="Enter your email"
            />
            <button className="sm:px-6 sm:py-2.5 size-12 sm:size-auto text-sm border rounded-full bg-main text-white border-main center">
              <Icon
                icon="streamline:mail-send-email-message"
                className="sm:hidden size-5"
              />
              <span
                className="sm:block hidden whitespace-nowrap"
                onClick={() => submitHandel(formEmail)}
              >
                <span>{isloading ? "Submitting..." : "Start Now"}</span>
              </span>
            </button>
          </div>

          <div
            className="w-40 h-16 bg-main rounded-full blur-2xl opacity-30 rotate-12 absolute top-10 -left-4"
            aria-hidden="true"
          />
        </div>

        <div className="lg:w-1/2 sm:w-1/5 z-[10] sm:block hidden relative center lg:pl-28">
          <Image
            src={ctaImg}
            alt="cta image"
            className="lg:h-64 lg:w-fit sm:w-96 w-64 sm:block hidden   mx-auto z-[10] animate-float  absolute lg:top-5 sm:top-16 top-0 right-5 sm:right-12 md:right-28"
          />
          <div className="h-[28rem] bg-main/50 w-40 absolute sm:block hidden"></div>

          <div className="absolute inset-0">
            <Icon
              icon="fluent-mdl2:chopsticks"
              className="absolute top-20 right-6 text-amber-500 text-4xl opacity-50 animate-float-reverse transform  sm:block hidden"
            />
            <Icon
              icon="streamline-ultimate:seafood-sushi"
              className="absolute top-16 left-40 text-red-500 text-4xl opacity-60 animate-float-slow sm:block hidden"
            />
            <Icon
              icon="carbon:noodle-bowl"
              className="absolute bottom-2 right-20 text-green-500 text-4xl opacity-50 animate-float-reverse-slow sm:block hidden"
            />
            <Icon
              icon="fluent:bowl-salad-20-regular"
              className="absolute bottom-5 left-28 text-lime-500 size-10 opacity-50 animate-float sm:block hidden"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
