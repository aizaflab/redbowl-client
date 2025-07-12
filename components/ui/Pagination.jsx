"use client";
import ReactPaginate from "react-paginate";
import { Icon } from "@iconify/react/dist/iconify.js";
// import useUpdateSearchParam from "@/hooks/useUpdateSearchParam";

export default function Pagination({ page, total, limit }) {
  //   const updateSearchParam = useUpdateSearchParam();
  const totalPages = Math.ceil(total / limit);

  // Hide pagination if search results are less than or equal to the limit or only one page exists
  if (totalPages <= 1) return null;

  const handlePageChange = (event) => {
    const newPage = event.selected + 1;
    if (newPage >= 1 && newPage <= totalPages) {
      //   updateSearchParam("page", newPage.toString());
    }
  };

  return (
    <div className="flex items-center justify-end mt-4">
      <ReactPaginate
        breakLabel="..."
        previousLabel={
          <button
            className={`size-8 center bg-transparent border border-main text-sm font-medium rounded-lg  ${
              page === 1
                ? "cursor-not-allowed"
                : "hover:bg-main dark:hover:text-white"
            }`}
            disabled={page === 1}
          >
            <Icon icon="lucide:move-left" className="size-5 " />
          </button>
        }
        nextLabel={
          <button
            className={`size-8 center bg-transparent border border-main text-sm font-medium rounded-lg  ${
              page === totalPages
                ? "cursor-not-allowed"
                : "hover:bg-main dark:hover:text-white"
            }`}
            disabled={page === totalPages}
          >
            <Icon icon="lucide:move-right" className="size-5 " />
          </button>
        }
        onPageChange={handlePageChange}
        pageRangeDisplayed={5}
        marginPagesDisplayed={1}
        pageCount={totalPages}
        forcePage={page - 1}
        pageClassName="rounded-lg bg-[#121E21]  font-medium"
        pageLinkClassName="h-8 w-8 grid place-items-center text-base"
        activeLinkClassName="rounded-lg grid place-items-center bg-main text-white"
        className="flex items-center gap-2"
      />
    </div>
  );
}
