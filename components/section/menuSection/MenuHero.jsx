import Image from "next/image";
import HeroImg1 from "@/public/img/home/about4.jpg";
import HeroImg2 from "@/public/img/home/about2.jpg";
import HeroImg3 from "@/public/img/home/about3.jpg";

export default function MenuHero() {
  return (
    <section className="bg-[#0F191C] text-white  mb-10">
      <div className="container 2xl:px-40 px-4 mx-auto between h-[18rem] overflow-hidden">
        <div>
          <h1 className="text-5xl font-medium mb-4 text-white">
            Uncover{" "}
            <span className="text-main">
              your <br /> new
            </span>{" "}
            favorite dish.
          </h1>
          <p className=" opacity-90 text-stone-300">
            Discover our complete collection of authentic Japanese flavors &
            crispy fried chicken
          </p>
        </div>

        <div className="flex gap-6">
          <div className="w-32 h-72 bg-main mt-28">
            <Image
              src={HeroImg1}
              alt="HeroImg1"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-36 h-96 bg-main">
            <Image
              src={HeroImg2}
              alt="HeroImg1"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-32 h-72 bg-main">
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
