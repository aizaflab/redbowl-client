"use client";

import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { mockMenuData } from "@/utils/FakeData";
import { Icon } from "@iconify/react";

export function MenuFilters({
  filters,
  onFiltersChange,
  viewMode,
  onViewModeChange,
  totalResults,
  isLoading = false,
}) {
  const categories =
    (() => {
      return mockMenuData.map((cat) => ({
        id: cat.id,
        name: cat.name,
        icon: cat.icon,
      }));
    },
    []);

  const categoryOptions = [
    { value: "all", label: "All Categories", icon: "mdi:food" },
    ...categories.map((cat) => ({
      value: cat.id,
      label: cat.name,
      icon: cat.icon,
    })),
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
    { value: "rating", label: "Rating (High to Low)", icon: "mdi:star" },
    { value: "popularity", label: "Most Popular", icon: "mdi:trending-up" },
  ];

  return (
    <div className="py-6 container mx-auto px-4 2xl:px-40">
      <div className=" bg-[#152225] border-[#2e474d] p-5 rounded-md mb-5">
        <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between ">
          {/* Search */}
          <div className="w-full lg:w-64">
            <Input
              onChange={(value) => onFiltersChange({ search: value })}
              placeholder="Search menu items..."
              className="h-10"
              startIcon={
                <Icon icon="lets-icons:search" className="size-5 text-main" />
              }
            />
          </div>

          {/* Category and Sort */}
          <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
            <div className="w-full sm:w-48">
              <Select
                options={categoryOptions}
                value={filters.category}
                onChange={(value) => onFiltersChange({ category: value })}
                placeholder="Select Category"
              />
            </div>

            <div className="w-full sm:w-56">
              <Select
                options={sortOptions}
                value={filters.sortBy}
                onChange={(value) => onFiltersChange({ sortBy: value })}
                placeholder="Sort By"
              />
            </div>

            {(filters.search || filters.category !== "all") && (
              <button
                onClick={() => onFiltersChange({ search: "", category: "all" })}
                className="size-10   center  bg-main/80 rounded-md text-white hover:text-main/80 transition-colors"
              >
                <Icon icon="mdi:filter-off" className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between text-sm">
        <div className="text-stone-400">
          {isLoading ? (
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 border-2 border-main border-t-transparent rounded-full animate-spin"></div>
              Searching...
            </div>
          ) : (
            <>
              Showing {totalResults} items
              {filters.search && ` for "${filters.search}"`}
              {filters.category !== "all" &&
                ` in ${
                  categoryOptions.find((c) => c.value === filters.category)
                    ?.label
                }`}
            </>
          )}
        </div>

        {/* View Toggle */}
        <div className="flex bg-[#0a1114] rounded-lg p-1 border border-[#2e474d]">
          <button
            onClick={() => onViewModeChange("grid")}
            className={`size-8 center rounded-md text-sm  ${
              viewMode === "grid"
                ? "bg-main text-white"
                : "text-stone-300 hover:text-white"
            }`}
          >
            <Icon icon="mdi:grid" className="w-4 h-4" />
          </button>
          <button
            onClick={() => onViewModeChange("list")}
            className={`size-8 center rounded-md text-sm  ${
              viewMode === "list"
                ? "bg-main text-white"
                : "text-stone-300 hover:text-white"
            }`}
          >
            <Icon icon="mdi:view-list" className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
