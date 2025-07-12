import SmoothScrollProvider from "@/components/scroll/SmoothScrollProvider";
import BlogContainer from "@/components/section/blogSection/BlogContainer";
import FeaturedBlog from "@/components/section/blogSection/FeaturedBlog";

export default async function BlogsPage() {
  return (
    <div className="mt-10 container 2xl:px-40 px-3 mx-auto">
      <SmoothScrollProvider>
        <FeaturedBlog />
        <div className="mt-20">
          <BlogContainer />
        </div>
      </SmoothScrollProvider>
    </div>
  );
}
