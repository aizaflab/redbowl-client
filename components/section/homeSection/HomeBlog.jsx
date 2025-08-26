import BlogCard from "@/components/cards/BlogCard";
import SectionHeading from "../commonSection/SectionHeader";
import buildQueryParams from "@/lib/buildQueryParams";
import { getData } from "@/lib/api";

export default async function HomeBlog() {
  const queryParams = buildQueryParams({
    page: 1,
    limit: 3,
    sort: -1,
  });

  const data = await getData(`blogs/public?${queryParams}`);
  const blogs = data?.data?.bolgs || [];

  return (
    <div className="container 2xl:px-40 px-4 mx-auto py-16">
      <SectionHeading title="Popular Blogs" subtitle="Our Blogs" />

      <div>
        {blogs.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {blogs.map((blog) => (
              <BlogCard key={blog._id} blog={blog} />
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-600">No blogs found.</div>
        )}
      </div>
    </div>
  );
}
