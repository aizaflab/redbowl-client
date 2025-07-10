"use client";

import { Icon } from "@iconify/react";

export function FoodListCard({
  item,
  onAddToCart,
  onToggleFavorite,
  isFavorite = false,
}) {
  return (
    <div className="rounded-xl border border-[#2e474d] border-dashed overflow-hidden group p-4 relative bg-[#0a1114]/50 hover:border-main/50 transition-all duration-300">
      <div
        className="w-32 h-8 bg-main rounded-full blur-xl opacity-20 rotate-12 top-2 absolute right-[-3%] group-hover:opacity-30 transition-opacity"
        aria-hidden="true"
      />

      <div className="flex gap-4 relative z-10">
        {/* Image Section */}
        <div className="relative  ">
          <div className="size-[8.6rem] bg-[#152225] rounded-lg center group-hover:bg-[#1a2a2f] transition-colors">
            <Icon icon="ep:food" className="w-8 h-8 text-main/30" />
          </div>

          {/* Badges */}
          <div className="absolute -top-2 -right-2 flex flex-col gap-1">
            {item.isPopular && (
              <span className="text-xs text-white bg-amber-500/90 px-1.5 py-0.5 rounded-full font-medium">
                <Icon icon="mdi:crown" className="w-2.5 h-2.5" />
              </span>
            )}
            {item.isSpicy && (
              <span className="text-xs text-white bg-red-500/90 px-1.5 py-0.5 rounded-full font-medium">
                <Icon icon="mdi:chili-hot" className="w-2.5 h-2.5" />
              </span>
            )}
          </div>
        </div>

        {/* Content Section */}
        <div className="flex-1">
          <div className="flex items-start justify-between mb-1">
            <div className="flex-1 min-w-0">
              <h3 className="font-medium text-lg text-white truncate pr-2 group-hover:text-main transition-colors">
                {item.name}
              </h3>
              <p className="text-stone-400 text-sm leading-relaxed line-clamp-2 mb-3">
                {item.description}
              </p>
            </div>
            <span className="font-semibold text-lg text-main flex-shrink-0 ml-4">
              {item.price}
            </span>
          </div>

          {/* Rating and Info */}
          <div className="flex items-center justify-between gap-4 mb-3 text-xs text-stone-400">
            <div className="flex items-center space-x-1">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Icon
                    key={i}
                    icon="mdi:star"
                    className={`size-4 ${
                      i < Math.floor(item.rating)
                        ? "text-amber-400"
                        : "text-stone-600"
                    }`}
                  />
                ))}
              </div>
              <span className="ml-1">({item.reviewCount})</span>
            </div>
            <span className="text-xs text-main bg-main/10 px-2 py-0.5 rounded-full border border-main/20">
              {item.category}
            </span>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3">
            <button
              onClick={() => onAddToCart(item)}
              className="flex-1 bg-main/80 hover:bg-main text-white h-8 text-xs px-3 rounded flex items-center justify-center gap-1.5 transition-all duration-200 "
            >
              <Icon icon="mdi:cart-plus" className="size-4" />
              Add to Cart
            </button>
            <button
              onClick={() => onToggleFavorite(item)}
              className={`w-8 h-8 flex items-center justify-center border rounded transition-all duration-200  ${
                isFavorite
                  ? "bg-main text-white border-main"
                  : "bg-white/10 border-white/20 text-white hover:border-main hover:text-main"
              }`}
            >
              <Icon
                icon={isFavorite ? "mdi:heart" : "mdi:heart-outline"}
                className="size-4"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
