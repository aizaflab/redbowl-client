import Image from "next/image";
import HeroImg1 from "@/public/img/home/about4.jpg";
import HeroImg2 from "@/public/img/home/about2.jpg";
import HeroImg3 from "@/public/img/home/about3.jpg";

export default function MenuHero() {
  return (
    <section className="bg-[#0F191C] text-white  sm:mb-10 mb-5 overflow-hidden ">
      <div className="container 2xl:px-40 px-4 mx-auto between sm:h-[18rem] h-[15rem] overflow-hidden">
        <div className="sm:text-left text-center relative ">
          <h1 className="sm:text-5xl text-3xl font-medium mb-4 text-white">
            Uncover{" "}
            <span className="text-main">
              your <br /> new
            </span>{" "}
            favorite dish.
          </h1>
          <p className="sm:tetx-base text-sm opacity-90 text-stone-300 xl:pr-0 pr-5">
            Discover our complete collection of authentic Japanese flavors &
            crispy fried chicken
          </p>
          <div
            className="w-40 h-16 bg-main rounded-full blur-2xl opacity-30 rotate-12 top-12 absolute lg:left-[5%] left-[35%]"
            aria-hidden="true"
          />
        </div>

        <div className="flex gap-6">
          <div className="w-32 h-72 bg-[#142125] mt-28 lg:block hidden">
            <Image
              src={HeroImg1}
              alt="HeroImg1"
              className="w-full h-full object-cover  "
            />
          </div>
          <div className="w-36 h-96 bg-[#142125] md:block hidden">
            <Image
              src={HeroImg2}
              alt="HeroImg1"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-32 h-72 bg-[#142125] sm:block hidden ">
            <Image
              src={HeroImg3}
              alt="HeroImg1"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
