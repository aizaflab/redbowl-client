import { Icon } from "@iconify/react";
import noiseImg from "@/public/img/elements/noice.png";

export default function FeaturedBlog() {
  return (
    <div className="h-96 w-full bg-[#1522255e] mb-12 rounded-lg p-3 gap-7 flex relative overflow-hidden">
      <div className="size-32 blur-3xl bg-main opacity-20 absolute -bottom-0 -right-[0]"></div>
      <div
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        style={{
          backgroundImage: `url(${noiseImg.src})`,
          backgroundRepeat: "repeat",
          backgroundSize: "250px",
          opacity: 0.8,
        }}
      ></div>
      <div className="h-full w-[55%] dark:bg-[#152225] bg-gray-200 rounded-md relative">
        {/* Featured tag */}
        <div className="absolute top-0 left-0 px-4 py-1.5 text-xs bg-primary rounded-full text-white">
          Featured Blog
        </div>
      </div>
      <div className="h-full w-[45%] py-5 z-[100] relative ">
        <div className="flex items-center gap-5 text-gray-600 dark:text-gray-400 ">
          <div className="flex items-center gap-1.5 text-sm">
            <Icon icon="svg-spinners:clock" className="size-4 dark:text-main" />
            1 min Read
          </div>
          <div className="flex items-center gap-1.5 text-sm">
            <Icon icon="uil:calendar" className="size-4 dark:text-main" />
            20 Jan, 2034
          </div>
        </div>
        {/* Blog title */}
        <h2 className="mt-5 mb-2 text-3xl title font-medium">
          Why Do Gas Prices Vary Around the Country or Around the World?
        </h2>
        {/* Blog description snippet */}
        <p className="text-gray-600 dark:text-gray-500 mt-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
          accusantium eveniet quod nulla perferendis, tempore eos quo quam
          laudantium molestiae. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Temporibus accusantium eveniet quod nulla
          perferendis, tempore eos quo quam laudantium molestiae.
        </p>
        {/* Read more button */}
        <div className="mt-7">
          <button className="bg-primary text-white px-5 py-2 text-sm rounded-md">
            Read more
          </button>
        </div>
      </div>
    </div>
  );
}
