import { Icon } from "@iconify/react";
import noiseImg from "@/public/img/elements/noice.png";
import moment from "moment";
import Link from "next/link";
import buildQueryParams from "@/lib/buildQueryParams";
import { getData } from "@/lib/api";
import Image from "next/image";

export default async function FeaturedBlog() {
  const queryParams = buildQueryParams({
    page: 0,
    limit: 10,
    sort: 1,
  });

  const data = await getData(`blogs/public?${queryParams}`);
  const featuredBlog = data?.data?.bolgs[0];

  const wordsPerMinute = 200;
  const contentText = featuredBlog?.content || "";

  const extractTextFromHTML = (html) => {
    if (!html) return "";
    // Create a temporary div to parse the HTML
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = html;
    // Get the text content
    const text = tempDiv.textContent || tempDiv.innerText || "";
    return text.length > 150 ? text.slice(0, 150) + "..." : text;
  };

  const wordCount = (() => {
    if (typeof window !== "undefined") {
      const tempDiv = document.createElement("div");
      tempDiv.innerHTML = contentText;
      const text = tempDiv.textContent || tempDiv.innerText || "";
      return text.trim().split(/\s+/).length;
    } else {
      return contentText
        .replace(/<[^>]*>/g, "")
        .trim()
        .split(/\s+/).length;
    }
  })();
  const readingTime = Math.ceil(wordCount / wordsPerMinute);

  return (
    <div className="md:h-96 h-auto w-full bg-[#1522255e] mb-12 rounded-lg p-3 gap-7 flex md:flex-row flex-col relative overflow-hidden">
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
      <div className="md:h-full sm:h-96 h-72 xl:w-[55%] md:w-[50%]  dark:bg-[#152225] bg-gray-200 rounded-md relative">
        {/* Featured tag */}
        <div className="absolute top-0 left-0 px-4 py-1.5 text-xs bg-primary rounded-full text-white">
          Featured Blog
        </div>

        <Image
          src={featuredBlog?.image || "/placeholder.svg"}
          alt={featuredBlog?.title}
          width={1000}
          height={1000}
          className="w-full h-full object-cover rounded"
        />
      </div>
      <div className="h-full xl:w-[45%] md:w-[50%] py-5 z-[100] relative ">
        <div className="flex items-center gap-5 text-gray-600 dark:text-gray-400 ">
          <div className="flex items-center gap-1.5 text-sm">
            <Icon icon="svg-spinners:clock" className="size-4 dark:text-main" />
            {readingTime} min Read
          </div>
          <div className="flex items-center gap-1.5 text-sm">
            <Icon icon="uil:calendar" className="size-4 dark:text-main" />
            {moment(featuredBlog?.createdAt).format("MMM DD, YYYY")}
          </div>
        </div>
        {/* Blog title */}
        <h2 className="mt-5 mb-2 text-3xl title font-medium">
          {featuredBlog?.title}
        </h2>
        {/* Blog description snippet */}
        <p className="text-gray-600 dark:text-gray-500 mt-5">
          {typeof window !== "undefined"
            ? extractTextFromHTML(contentText)
            : contentText.replace(/<[^>]*>/g, "") + "..."}
        </p>
        {/* Read more button */}
        <div className="mt-7">
          <Link href={`/blog/${featuredBlog?.slug}`}>
            <button className="bg-primary text-white px-5 py-2 text-sm rounded-md">
              Read more
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
