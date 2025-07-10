"use client";

import { useState } from "react";
import { Icon } from "@iconify/react";

import { mockMenuData } from "@/utils/FakeData";
import FoodCard from "@/components/cards/FoodCard";
import { FoodListCard } from "@/components/cards/FoodListCard";
import { MenuFilters } from "@/components/section/menuSection/MenuFilters";

export default function MenuPage() {
  const [viewMode, setViewMode] = useState("grid");
  const [filters, setFilters] = useState({
    category: "all",
    search: "",
    sortBy: "popularity",
    sortOrder: "desc",
    priceRange: [0, 100],
    tags: [],
  });

  const handleFiltersChange = (newFilters) => {
    setFilters((prev) => ({ ...prev, ...newFilters }));
  };

  const handleAddToCart = (item) => {
    console.log("Added to cart:", item);
    // Implement cart functionality
  };

  return (
    <div className="min-h-screen bg-[#0a1114]">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#152225] to-[#1a2a2f] text-white py-20 mb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-light mb-4 text-white">
            Professional Menu
          </h1>
          <p className="text-xl opacity-90 text-stone-300">
            Discover our complete collection of authentic Japanese flavors &
            crispy fried chicken
          </p>
        </div>
      </section>

      {/* Filters */}
      <MenuFilters
        filters={filters}
        onFiltersChange={handleFiltersChange}
        viewMode={viewMode}
        onViewModeChange={setViewMode}
        categories={"all"}
        totalResults={mockMenuData.length}
        isLoading={false}
      />

      {/* Menu Items */}
      <section className="pb-16 bg-[#0a1114] ">
        <div className="container mx-auto px-4 2xl:px-40">
          {mockMenuData.length === 0 ? (
            <div className="text-center py-16">
              <Icon
                icon="mdi:food-off"
                className="w-16 h-16 text-stone-600 mx-auto mb-4"
              />
              <h3 className="text-xl font-medium text-white mb-2">
                No items found
              </h3>
              <p className="text-stone-400">
                Try adjusting your search or filter criteria
              </p>
            </div>
          ) : (
            <div
              className={
                viewMode === "grid"
                  ? "grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                  : "grid md:grid-cols-2 gap-6 "
              }
            >
              {mockMenuData.map((item) =>
                viewMode === "grid" ? (
                  <FoodCard
                    key={item.id}
                    item={item}
                    onAddToCart={handleAddToCart}
                    onToggleFavorite={() => toggleFavorite(item.id)}
                  />
                ) : (
                  <FoodListCard
                    key={item.id}
                    item={item}
                    onAddToCart={handleAddToCart}
                    onToggleFavorite={() => toggleFavorite(item.id)}
                  />
                )
              )}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
