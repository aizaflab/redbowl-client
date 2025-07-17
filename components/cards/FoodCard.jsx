import { Icon } from "@iconify/react";
import toast from "react-hot-toast";

export default function FoodCard({ item }) {
  const handleCopyUrl = () => {
    const currentUrl = window.location.href;
    navigator.clipboard.writeText(currentUrl).then(() => {
      toast.success("Link copied to clipboard!", { id: "copy" });
    });
  };

  return (
    <div className="rounded-xl border border-[#2e474d] border-dashed overflow-hidden group p-3 relative">
      <div
        className="w-40 h-16 bg-main rounded-full blur-2xl opacity-30 rotate-12 bottom-2 absolute right-[-5%]"
        aria-hidden="true"
      />

      {/* Image Section */}
      <div className="relative overflow-hidden">
        <div className="w-full h-52 bg-[#152225] rounded-md center ">
          {" "}
          <Icon icon="ep:food" className="size-16 text-main/30" />
        </div>
        <span className="absolute top-3 right-3 text-xs text-main bg-main/10 px-2.5 py-1 rounded-full">
          {item?.category}
        </span>
      </div>

      {/* Content Section */}
      <div className="pt-4 px-1 pb-2 z-[10] relative">
        <div className="mb-3">
          <h3 className="font-medium text-xl  mb-1 text-white">{item.name}</h3>
          <p className="text-stone-400 text-sm leading-relaxed line-clamp-2">
            {item.description}
          </p>
        </div>

        {/* Rating and Category */}
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center space-x-1">
            {[...Array(5)].map((_, i) => (
              <Icon
                key={i}
                icon="mdi:star"
                className="w-4 h-4 text-amber-400"
              />
            ))}
            <span className="text-sm text-stone-300 ml-2">
              {" "}
              ({item.reviewCount})
            </span>
          </div>

          <span className=" font-semibold text-xl text-main ">
            {item.price}
          </span>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4">
          <button className="flex-1 bg-main/80 text-white h-10 text-sm px-4 rounded center gap-2">
            <Icon icon="ep:food" className="w-4 h-4" />
            Order Now
          </button>
          <button
            type="button"
            onClick={handleCopyUrl}
            className="size-10 center bg-white border border-white  text-black rounded-md transition-colors cursor-pointer"
          >
            <Icon icon="mynaui:send" className="size-6" />
          </button>
        </div>
      </div>
    </div>
  );
}
