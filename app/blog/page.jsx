import SmoothScrollProvider from "@/components/scroll/SmoothScrollProvider";
import BlogContainer from "@/components/section/blogSection/BlogContainer";
import FeaturedBlog from "@/components/section/blogSection/FeaturedBlog";

export default async function BlogsPage({ searchParams }) {
  const searchTerm = searchParams.searchTerm ?? "";
  const page = searchParams?.page || 0;
  const categoryId = searchParams?.categoryId ?? "";
  return (
    <div className="mt-10 container 2xl:px-40 px-3 mx-auto">
      <SmoothScrollProvider>
        <FeaturedBlog />
        <div className="mt-20">
          <BlogContainer
            searchTerm={searchTerm}
            categoryId={categoryId}
            page={page}
          />
        </div>
      </SmoothScrollProvider>
    </div>
  );
}
