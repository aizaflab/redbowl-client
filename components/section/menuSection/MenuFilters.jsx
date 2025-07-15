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
    <div className="py-6 container mx-auto px-4 2xl:px-40 sticky top-10 z-[100]">
      <div className="bg-[#0F191C] border-[#2e474d] p-5 rounded-md">
        <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
          {/* 🔍 Search */}
          <div className="w-full lg:w-64">
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

          {/* 🧩 Filters */}
          <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
            {/* 🗂️ Category */}
            <div className="w-full sm:w-48">
              <Select
                options={categoryOptions}
                value={filters.category}
                onValueChange={(value) => onFiltersChange({ category: value })}
                placeholder="Select Category"
              />
            </div>

            {/* ↕️ Sort */}
            <div className="w-full sm:w-56">
              <Select
                options={sortOptions}
                value={filters.sortBy}
                onValueChange={(value) => onFiltersChange({ sortBy: value })}
                placeholder="Sort By"
              />
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

            {/* 🧭 View Switch */}
            <div className="flex  rounded-lg p-1 border border-main/50">
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
    </div>
  );
}
