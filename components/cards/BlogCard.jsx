import Link from "next/link";

export default function BlogCard() {
  return (
    <div className="border border-dashed border-main/20 p-3 rounded-xl relative overflow-hidden">
      <div
        className="w-40 h-16 bg-main rounded-full blur-2xl opacity-20 rotate-12 bottom-8 absolute right-[5%]"
        aria-hidden="true"
      />
      <div className="bg-gray-100 dark:bg-gray-800 h-48 rounded">
        <div className="w-full h-full bg-[#152225] rounded-md "></div>
      </div>
      <div className="pt-4 mb-4">
        <p className="text-main text-sm">3 min read</p>
        <h1 className="text-lg mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit sint quod
          quam
        </h1>

        <div className="text-sm text-gray-400 mt-2">
          Lorem ipsum dolor sit amet, consectetur adip isicing elit. Qui cum id
          sequi accus antium, possimus inve ntore. Soluta sint quod quam,
          architecto.
        </div>
      </div>
      <div className="border-t border-dashed border-main/20  pt-3 between">
        <Link
          href={`/blog`}
          className="text-[13px]  px-4 py-[7px] bg-main border-main hover:bg-[#152225] hover:border-[#152225] rounded border border-gray-1000 hover:text-gray-0 text-gray-1000  "
        >
          Read More
        </Link>
        <p className="text-[13px] text-gray-300"> 23 January, 2034</p>
      </div>
    </div>
  );
}
