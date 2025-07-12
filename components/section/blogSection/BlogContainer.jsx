import BlogSearch from "./BlogSearch";
import CategoryFilter from "./CategoryFilter";
import BlogCard from "@/components/cards/BlogCard";
import Pagination from "@/components/ui/Pagination";

export default async function BlogContainer() {
  return (
    <div className=" pb-12  z-[100] relative">
      <div className="flex sm:flex-row flex-col gap-5 sm:items-center sticky top-[4rem] z-[200] justify-between mb-8 bg-[#121e21]  p-5 rounded-md">
        <BlogSearch />
        <CategoryFilter />
      </div>

      {[1, 2, 3, 4, 5, 6].length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((blog) => (
            <BlogCard key={blog._id} />
          ))}
        </div>
      ) : (
        <div className="text-center text-gray-400">No blogs found.</div>
      )}
      <Pagination page={1} limit={10} total={20} />
    </div>
  );
}
