import moment from "moment";
import Image from "next/image";
import Link from "next/link";

export default function BlogCard({ blog }) {
  const contentText = blog?.content || "";

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
  const readingTime = Math.ceil(wordCount / 200);

  return (
    <div className="border border-dashed border-main/20 p-3 rounded-xl relative overflow-hidden">
      <div
        className="w-40 h-16 bg-main rounded-full blur-2xl opacity-20 rotate-12 bottom-8 absolute right-[5%]"
        aria-hidden="true"
      />
      <div className="bg-[#121e21]/50 h-48 rounded">
        <Image
          src={blog?.banner?.image || "/placeholder.svg"}
          alt={blog?.title}
          width={1000}
          height={1000}
          className="w-full h-full object-cover rounded"
        />
      </div>
      <div className="pt-4 mb-4">
        <p className="text-main text-sm">{readingTime} min read</p>
        <Link
          href={`/blog/${blog?.slug}`}
          className="text-lg font-medium mt-2 poppins hover:text-sky-800 cursor-pointer line-clamp-2"
        >
          {blog?.title}
        </Link>

        <p className="text-sm text-gray-300/80 mt-2 line-clamp-3">
          {typeof window !== "undefined"
            ? extractTextFromHTML(contentText)
            : contentText.replace(/<[^>]*>/g, "")}
        </p>
      </div>
      <div className="border-t border-dashed border-main/20  pt-3 between">
        <Link
          href={`/blog/${blog?.slug}`}
          className="text-[13px]  px-4 py-[7px] bg-main border-main hover:bg-[#152225] hover:border-[#152225] rounded border border-gray-1000 hover:text-gray-0 text-gray-1000  "
        >
          Read More
        </Link>
        <p className="text-[13px] text-gray-300">
          {" "}
          {moment(blog?.createdAt).format("MMM DD, YYYY")}
        </p>
      </div>
    </div>
  );
}
