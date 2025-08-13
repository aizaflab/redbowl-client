import AboutImg1 from "@/public/img/elements/banner1.jpg";
import AboutImg2 from "@/public/img/elements/banner2.jpg";
import levesImg from "@/public/img/home/leves.png";
import SectionHeading from "../commonSection/SectionHeader";
import Image from "next/image";

export default function AboutSection() {
  return (
    <div className="relative py-20 ">
      <SectionHeading title="About Us" subtitle="Special moments" />

      <div className="container mx-auto px-4 2xl:px-40 relative">
        <div className="grid md:grid-cols-3 lg:gap-8 gap-4 items-center">
          {/* Left Image */}
          <div className="bg-[#152225] w-full lg:h-full h-80 rounded">
            <Image
              src={AboutImg1}
              alt="About Img"
              className="w-full h-full object-cover rounded"
            />
          </div>

          {/* Center Content */}
          <div className="text-center lg:h-[28rem] text-white bg-[#152225] w-full  h-80 rounded p-4 center flex-col relative overflow-hidden">
            <Image
              src={levesImg}
              alt="levesImg"
              className="absolute -top-10 -right-20 opacity-15 "
            />
            <Image
              src={levesImg}
              alt="levesImg"
              className="absolute -left-60 -bottom-40 opacity-25 rotate-[90deg] "
            />

            <div className="my-8">
              <p className="text-main font-script text-sm mb-4">
                Taste perception
              </p>

              <h3 className="text-2xl lg:text-4xl font-medium font-serif italic mb-6 leading-tight text-white tracking-widest">
                Traditional <br />& Modren
              </h3>

              <p className="text-gray-400/80 font-normal lg:text-base text-sm lg:mb-8 mb-0">
                Sed ut perspiciatis unde omnis iste totam rem aperiam eaque
                illa. We blend time-hon
              </p>
            </div>

            <button className="text-[14px] rounded px-5 py-2 bg-main">
              Read More
            </button>
          </div>

          {/* Right Image */}
          <div className="bg-[#152225] w-full lg:h-full h-80 rounded">
            <Image
              src={AboutImg2}
              alt="About Img"
              className="w-full h-full object-cover rounded"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
