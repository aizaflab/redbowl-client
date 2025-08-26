import BlogSearch from "./BlogSearch";
import CategoryFilter from "./CategoryFilter";
import BlogCard from "@/components/cards/BlogCard";
import Pagination from "@/components/ui/Pagination";
import { getData } from "@/lib/api";
import buildQueryParams from "@/lib/buildQueryParams";

export default async function BlogContainer({ searchTerm, categoryId, page }) {
  const limit = 9;

  const queryParams = buildQueryParams({
    page: page || 1,
    limit,
    categoryId,
    searchTerm: searchTerm,
    sort: -1,
  });

  const data = await getData(`blogs/public?${queryParams}`);
  const categoryData = await getData(`categorys/public`);
  const blogs = data?.data?.bolgs || [];
  const totalPost = data?.totalItems || 0;
  const categories = categoryData?.data?.categorys || [];

  return (
    <div className=" pb-12  z-[100] relative">
      <div className="flex sm:flex-row flex-col gap-5 sm:items-center sticky sm:top-[4rem] top-[3.6rem] z-[200] justify-between mb-8 bg-[#121e21] p-3 sm:p-5 rounded-md">
        <BlogSearch initialSearchTerm={searchTerm} />
        <CategoryFilter categories={categories} categoryId={categoryId} />
      </div>

      {blogs.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <BlogCard key={blog._id} blog={blog} />
          ))}
        </div>
      ) : (
        <div className="text-center text-gray-600">No blogs found.</div>
      )}
      <Pagination page={page} limit={limit} total={totalPost} />
    </div>
  );
}
