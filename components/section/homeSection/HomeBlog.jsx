import BlogCard from "@/components/cards/BlogCard";
import SectionHeading from "../commonSection/SectionHeader";

export default function HomeBlog() {
  return (
    <div className="container 2xl:px-40 px-4 mx-auto py-16">
      <SectionHeading title="Popular Blogs" subtitle="Our Blogs" />

      <div className="grid grid-cols-3 gap-5">
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
    </div>
  );
}
