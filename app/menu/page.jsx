"use client";

import { useState } from "react";
import { Icon } from "@iconify/react";
import { mockMenuData } from "@/utils/FakeData";
import FoodCard from "@/components/cards/FoodCard";
import { FoodListCard } from "@/components/cards/FoodListCard";
import MenuHero from "@/components/section/menuSection/MenuHero";
import { MenuFilters } from "@/components/section/menuSection/MenuFilters";
import SmoothScrollProvider from "@/components/scroll/SmoothScrollProvider";

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
  };

  return (
    <div>
      <SmoothScrollProvider>
        <MenuHero />
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
        <section className="pb-16  ">
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
      </SmoothScrollProvider>
    </div>
  );
}
