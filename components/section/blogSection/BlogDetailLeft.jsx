import moment from "moment";
import Link from "next/link";

import noiseImg from "@/public/img/elements/noice.png";
import buildQueryParams from "@/lib/buildQueryParams";
import { getData } from "@/lib/api";

function estimateReadingTimeFromHtml(html, wpm = 200) {
  if (!html) return 1;
  const text = html
    .replace(/<[^>]*>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  const words = text.length ? text.split(" ").length : 0;
  return Math.max(1, Math.ceil(words / wpm));
}

export default async function BlogDetailLeft({ contentHtml = "", wpm = 200 }) {
  const queryParams = buildQueryParams({
    page: 1,
    limit: 4,
    sort: -1,
  });

  // If your getData can take a generic, keep it; otherwise just cast the result
  const listRes = await getData(`blogs/public?${queryParams}`);
  const popularBlog = listRes?.data?.bolgs ?? [];

  // ✅ Server-safe, typed reading time
  const readingTime = estimateReadingTimeFromHtml(contentHtml, wpm);

  // Category data
  const categoryData = await getData(`categorys/public`);
  const categories = categoryData?.data?.categorys || [];

  console.log({ categories });

  return (
    <aside className="col-span-12 lg:col-span-4 space-y-8 mb-10 lg:mb-0">
      {/* Categories */}
      <div className="bg-[#152225]/10  rounded-lg p-5 relative overflow-hidden border border-[#1d3338]/50">
        <div
          className="absolute top-0 left-0 w-full h-full pointer-events-none "
          style={{
            backgroundImage: `url(${noiseImg.src})`,
            backgroundRepeat: "repeat",
            backgroundSize: "250px",
            opacity: 0.8,
          }}
        />
        <h3 className="title text-xl mb-4">Categories</h3>
        <div className="space-y-2">
          {categories?.map((category) => (
            <a
              key={category.name}
              href="#"
              className="flex items-center justify-between py-2 px-3 hover:bg-[#1c2f33] bg-[#152225]  rounded transition-colors"
            >
              <span className="text-gray-700 dark:text-gray-200">
                {category?.title}
              </span>
            </a>
          ))}
        </div>
      </div>

      <div className="sticky top-20 flex flex-col gap-8 w-full">
        {/* Popular Posts */}
        <div className="border border-[#1d3338]/50 rounded-lg p-5 bg-[#152225]/10  overflow-hidden relative">
          <div
            className="absolute top-0 left-0 w-full h-full pointer-events-none "
            style={{
              backgroundImage: `url(${noiseImg.src})`,
              backgroundRepeat: "repeat",
              backgroundSize: "250px",
              opacity: 0.8,
            }}
          />
          <h3 className="title text-xl mb-4">Popular Posts</h3>
          <div className="space-y-4">
            {popularBlog?.map((post, index) => (
              <article key={`${post.slug ?? index}`}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="block hover:bg-[#152225] p-2.5 rounded transition-colors"
                >
                  <h4 className="title mb-1.5 leading-snug line-clamp-1">
                    {post.title}
                  </h4>
                  <div className="flex items-center gap-3 text-xs text-gray-500">
                    <span>{moment(post.createdAt).format("MMM DD, YYYY")}</span>
                    <span>{readingTime} min read</span>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
}
