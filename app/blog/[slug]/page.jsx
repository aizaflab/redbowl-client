import Link from "next/link";
import Image from "next/image";
import { getData } from "@/lib/api";
import { Icon } from "@iconify/react";
import noiseImg from "@/public/img/elements/noice.png";
import BlogDetailLeft from "@/components/section/blogSection/BlogDetailLeft";
import moment from "moment";

function hashString(s) {
  let h = 0;
  for (let i = 0; i < s.length; i++) {
    h = (h << 5) - h + s.charCodeAt(i);
    h |= 0;
  }
  return Math.abs(h);
}

function stripHtml(html) {
  if (!html) return "";
  return html
    .replace(/<[^>]*>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function estimateReadingTimeFromHtml(html, wpm = 200) {
  const text = stripHtml(html);
  const words = text ? text.split(" ").length : 0;
  return Math.max(1, Math.ceil(words / wpm));
}

function pickDeterministic(arr, key) {
  if (!arr.length) throw new Error("Array is empty");
  const idx = hashString(key) % arr.length;
  return arr[idx];
}

function formatCompact(n) {
  // e.g., 2400 -> "2.4K"
  return new Intl.NumberFormat("en", {
    notation: "compact",
    maximumFractionDigits: 1,
  }).format(n);
}

const DUMMY_VIEWS = [
  428, 763, 1192, 1549, 2012, 2455, 2899, 3320, 3890, 4215, 4788, 5120, 5899,
  6355, 7022, 7920,
];

const DUMMY_AUTHORS = [
  {
    name: "Sarah Johnson",
    title: "Full Stack Developer",
    avatar: "/avatars/sarah.jpg",
  },
  {
    name: "Daniel Lee",
    title: "Frontend Engineer",
    avatar: "/avatars/daniel.jpg",
  },
  { name: "Amina Rahman", title: "Tech Writer", avatar: "/avatars/amina.jpg" },
  {
    name: "Carlos Mendes",
    title: "Backend Engineer",
    avatar: "/avatars/carlos.jpg",
  },
  {
    name: "Priya Sharma",
    title: "DevOps Engineer",
    avatar: "/avatars/priya.jpg",
  },
  {
    name: "Jonas Weber",
    title: "Software Architect",
    avatar: "/avatars/jonas.jpg",
  },
];

export default async function BlogDetails({ params }) {
  const { slug } = await params;

  const blogData = await getData(`blogs/public/${slug}`);
  const blog = blogData?.data?.blog || {};

  const readingTimeMin = estimateReadingTimeFromHtml(blog.content, 200);
  const pickedViews = pickDeterministic(DUMMY_VIEWS, slug);
  const pickedAuthor = pickDeterministic(DUMMY_AUTHORS, slug);

  console.log(blog);

  return (
    <div className="container 2xl:px-40 px-4 mx-auto">
      <div className="between  mt-5">
        <nav className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400  font-medium dark:font-normal">
          <Link
            href="#"
            className="dark:hover:text-sky-400 hover:text-primary "
          >
            News
          </Link>
          <Icon icon="mdi:chevron-right" className="w-4 h-4" />
          <Link href="#" className="dark:hover:text-sky-400 hover:text-primary">
            News Detals
          </Link>
          <Icon icon="mdi:chevron-right" className="w-4 h-4" />
          <span className="dark:text-white text-primary">Building Modern</span>
        </nav>

        <div className="items-center gap-3 lg:flex hidden ">
          <span className="text-[12px] text-main bg-main/10 px-3 py-1 rounded-full">
            {blog?.category?.title || "Technology"}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-12 lg:gap-8 pt-4">
        {/* Sidebar — pass content so it can also show reading time if desired */}
        <BlogDetailLeft contentHtml={blog.content ?? ""} />

        {/* Main Content */}
        <main className="col-span-12 lg:col-span-8 ">
          <div className="w-full h-96 relative overflow-hidden rounded-lg bg-[#152225]/10 mb-6">
            <div className="flex items-center gap-3 lg:hidden absolute top-4 right-4 ">
              <span className="text-[12px]  text-main bg-main/10 px-3 py-1 rounded-full">
                {blog?.category?.title || "Technology"}
              </span>
            </div>

            <Image
              src={blog?.image || "/placeholder.svg"}
              alt={blog.title || "Blog image"}
              width={1000}
              height={1000}
              className="w-full h-full object-cover rounded"
            />

            <div
              className="absolute top-0 left-0 w-full h-full pointer-events-none "
              style={{
                backgroundImage: `url(${noiseImg.src})`,
                backgroundRepeat: "repeat",
                backgroundSize: "250px",
                opacity: 0.8,
              }}
            ></div>
          </div>

          {/* Article Header */}
          <div className="mb-7">
            <h1 className="sm:text-4xl text-2xl title  mb-8 leading-tight">
              {blog?.title}
            </h1>

            {/* Author Info */}
            <div className="flex sm:flex-row flex-col sm:items-center justify-between gap-3 py-5 border-y border-[#131C20]">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-main center">
                  <Icon icon="ci:user-01" className="size-7 text-white" />
                </div>

                <div>
                  <p className="title ">{blog?.user?.name}</p>
                  <p className="text-sm text-gray-500">{blog?.user?.email}</p>
                </div>
              </div>

              <div className="flex items-center gap-6 text-sm text-gray-500 dark:text-gray-400">
                <span>{readingTimeMin} min read</span>
                <div>/</div>
                <span>{formatCompact(pickedViews)} views</span>
                <div>/</div>
                <span>
                  {blog.createdAt
                    ? moment(blog.createdAt).format("MMM DD, YYYY")
                    : ""}
                </span>
              </div>
            </div>
          </div>

          {/* Article Content */}
          <div className="prose prose-xl max-w-none">
            <div
              dangerouslySetInnerHTML={{
                __html: blog.content || "<p>No content available.</p>",
              }}
            />
          </div>
        </main>
      </div>
    </div>
  );
}
