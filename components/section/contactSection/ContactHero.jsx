import Image from "next/image";
import noiseImg from "@/public/img/elements/noice.png";
import contactHeroImage from "@/public/img/contact/contactHero.png";

export default function ContactHero() {
  return (
    <div className="bg-[#0f191c7a] lg:h-[22rem] h-[15rem] w-full relative overflow-hidden ">
      <div
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        style={{
          backgroundImage: `url(${noiseImg.src})`,
          backgroundRepeat: "repeat",
          backgroundSize: "250px",
          opacity: 0.8,
        }}
      ></div>

      <div className="container mx-auto 2xl:px-40 px-4 flex gap-10 h-full ">
        <div className="h-full xl:w-[40%] md:w-[50%] sm:w-[70%] w-full flex flex-col justify-center sm:text-left text-center ">
          <div className="px-3 py-1.5 rounded-full bg-main/10 text-primary sm:text-xs text-[10px] w-fit z-[20] title mx-auto sm:mx-0">
            Contact Us
          </div>
          <h1 className="lg:text-5xl sm:text-4xl text-3xl font-bold md:pb-6 py-4 lg:leading-[3.5rem] text-[#1A1A1A] z-[20] dark:text-gray-200 sm:text-left text-center mx-auto sm:mx-0">
            Contact{" "}
            <span className="text-main">
              Our Team <br /> Anytime,
            </span>{" "}
            Anywhere
          </h1>

          <div className="size-32 blur-3xl bg-main opacity-20 absolute top-20 left-[10%]"></div>
        </div>
        <div className=" items-end justify-end md:w-[60%] w-[30%] sm:flex hidden">
          <Image
            src={contactHeroImage}
            alt="contactHeroImage"
            className="md:w-[73%] w-full"
          />
        </div>
      </div>
    </div>
  );
}
