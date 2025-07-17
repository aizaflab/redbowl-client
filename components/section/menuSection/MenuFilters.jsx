"use client";

import { Icon } from "@iconify/react";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";

export function MenuFilters({
  filters,
  onFiltersChange,
  viewMode,
  onViewModeChange,
}) {
  const categoryOptions = [
    { value: "all", label: "All Categories" },
    { value: "fried-chicken", label: "Fried Chicken" },
    { value: "sandwich", label: "Sandwich" },
    { value: "tenders", label: "Tenders" },
    { value: "hibachi", label: "Hibachi" },
    { value: "sushi", label: "Sushi" },
    { value: "bento", label: "Bento" },
    { value: "parmesan-bowl", label: "Parmesan Bowl" },
    { value: "smoothie", label: "Smoothie" },
    { value: "mac-n-cheese", label: "Mac N Cheese" },
    { value: "sides", label: "Sides" },
  ];

  const sortOptions = [
    {
      value: "name",
      label: "Name (A-Z)",
      icon: "mdi:sort-alphabetical-ascending",
    },
    {
      value: "price",
      label: "Price (Low to High)",
      icon: "mdi:sort-numeric-ascending",
    },
    {
      value: "rating",
      label: "Rating (High to Low)",
      icon: "mdi:star",
    },
    {
      value: "popularity",
      label: "Most Popular",
      icon: "mdi:trending-up",
    },
  ];

  return (
    <div className="py-6 container mx-auto px-4 2xl:px-40 sticky md:top-10 top-[2rem] z-[100] ">
      <div className="bg-[#0F191C] border-[#2e474d] sm:p-5 p-3 rounded-md">
        <div className="flex flex-wrap md:flex-nowrap sm:gap-4 gap-2 items-start lg:items-center justify-between">
          {/* 🔍 Search */}
          <div className="flex-1 ">
            <div className=" md:w-full lg:w-64 order-1">
              <Input
                value={filters.search}
                onChange={(e) => onFiltersChange({ search: e.target.value })}
                placeholder="Search menu items..."
                className="h-10"
                startIcon={
                  <Icon icon="lets-icons:search" className="size-5 text-main" />
                }
              />
            </div>
          </div>

          {/* 🧩 Filters */}
          <div className="flex flex-col md:flex-row sm:gap-4 gap-2 w-full md:w-auto md:order-2 order-3">
            <div className="flex  gap-4 flex-1">
              {/* 🗂️ Category */}
              <div className="w-full md:w-48">
                <Select
                  options={categoryOptions}
                  value={filters.category}
                  onValueChange={(value) =>
                    onFiltersChange({ category: value })
                  }
                  placeholder="Select Category"
                />
              </div>

              {/* ↕️ Sort */}
              <div className="w-full lg:w-56 md:w-48">
                <Select
                  options={sortOptions}
                  value={filters.sortBy}
                  onValueChange={(value) => onFiltersChange({ sortBy: value })}
                  placeholder="Sort By"
                />
              </div>
            </div>
            {/* 🎛️ Reset */}
            {(filters.search || filters.category !== "all") && (
              <button
                onClick={() => onFiltersChange({ search: "", category: "all" })}
                className="size-10 center bg-main/80 rounded-md text-white hover:text-main/80 transition-colors"
                title="Clear Filters"
              >
                <Icon icon="mdi:filter-off" className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* 🧭 View Switch */}
          <div className="flex  rounded-lg p-1 border border-main/50 order-2 md:order-3">
            <button
              onClick={() => onViewModeChange("grid")}
              className={`size-8 center rounded-md text-sm ${
                viewMode === "grid"
                  ? "bg-main text-white"
                  : "text-stone-300 hover:text-white"
              }`}
              title="Grid View"
            >
              <Icon icon="mdi:grid" className="w-4 h-4" />
            </button>
            <button
              onClick={() => onViewModeChange("list")}
              className={`size-8 center rounded-md text-sm ${
                viewMode === "list"
                  ? "bg-main text-white"
                  : "text-stone-300 hover:text-white"
              }`}
              title="List View"
            >
              <Icon icon="mdi:view-list" className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
