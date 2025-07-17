import Image from "next/image";
import faqImg2 from "@/public/img/faq/faq2.png";
import faqImg3 from "@/public/img/faq/faq1.png";

export default function FaqHero() {
  return (
    <section className="bg-[#0F191C] text-white mb-10">
      <div className="container 2xl:px-40 px-4 mx-auto center flex-col h-[18rem] overflow-hidden text-center relative">
        <Image
          src={faqImg3}
          alt="Testimonial Background"
          className="absolute lg:top-32 top-12  xl:left-[15%] left-7 xl:w-32 sm:w-28 w-12 opacity-50 "
        />
        <Image
          src={faqImg2}
          alt="Testimonial Background"
          className="absolute top-20  xl:right-[15%] right-[5%] sm:w-32  w-12 opacity-50"
        />
        <div className="relative">
          <div
            className="w-40 h-16 bg-main rounded-full blur-2xl opacity-30 rotate-12 top-6 absolute left-[45%]"
            aria-hidden="true"
          />

          <h1 className="sm:text-5xl text-3xl font-medium mb-4 text-white">
            Everything <br /> <span className="text-main">You Need to </span>{" "}
            Know
          </h1>
          <p className="opacity-90 text-stone-300 sm:tetx-base text-sm">
            Find answers to the most frequently asked questions about our food,
            service, and policies.
          </p>
        </div>
      </div>
    </section>
  );
}
