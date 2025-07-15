"use client";

import { useState } from "react";
import { Icon } from "@iconify/react";
import { menuData } from "@/utils/DataHelper";
import FoodCard from "@/components/cards/FoodCard";
import { FoodListCard } from "@/components/cards/FoodListCard";
import MenuHero from "@/components/section/menuSection/MenuHero";
import { MenuFilters } from "@/components/section/menuSection/MenuFilters";
import SmoothScrollProvider from "@/components/scroll/SmoothScrollProvider";

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

export default function MenuPage() {
  const [viewMode, setViewMode] = useState("grid");
  const [filters, setFilters] = useState({
    category: "all",
    search: "",
    sortBy: "popularity",
    sortOrder: "desc",
  });

  const handleFiltersChange = (newFilters) => {
    setFilters((prev) => ({ ...prev, ...newFilters }));
  };

  const handleAddToCart = (item) => {
    console.log("Added to cart:", item);
  };

  const getFilteredMenuData = () => {
    return menuData
      .map((categoryBlock) => {
        const filteredMenus = categoryBlock.menus
          .filter((item) => {
            const matchesCategory =
              filters.category === "all" || item.category === filters.category;

            const matchesSearch =
              filters.search.trim() === "" ||
              item.name.toLowerCase().includes(filters.search.toLowerCase()) ||
              item.description
                .toLowerCase()
                .includes(filters.search.toLowerCase());

            return matchesCategory && matchesSearch;
          })
          .sort((a, b) => {
            if (filters.sortBy === "name") {
              return a.name.localeCompare(b.name);
            } else if (filters.sortBy === "price") {
              return (
                parseFloat(a.price.slice(1)) - parseFloat(b.price.slice(1))
              );
            } else if (filters.sortBy === "rating") {
              return b.rating - a.rating;
            } else {
              return b.reviewCount - a.reviewCount; // popularity
            }
          });

        return { ...categoryBlock, menus: filteredMenus };
      })
      .filter((block) => block.menus.length > 0);
  };

  const filteredMenuData = getFilteredMenuData();
  const totalFilteredItems = filteredMenuData.reduce(
    (acc, block) => acc + block.menus.length,
    0
  );

  return (
    <div>
      <SmoothScrollProvider>
        <MenuHero />
        <MenuFilters
          filters={filters}
          onFiltersChange={handleFiltersChange}
          viewMode={viewMode}
          onViewModeChange={setViewMode}
        />

        <div className="mb-5 container mx-auto px-4 2xl:px-40">
          <div className="flex items-center justify-between text-sm">
            <div className="text-stone-400">
              <>
                Showing {totalFilteredItems} items
                {filters.search && ` for "${filters.search}"`}
                {filters.category !== "all" &&
                  ` in ${
                    categoryOptions.find((c) => c.value === filters.category)
                      ?.label
                  }`}
              </>
            </div>
          </div>
        </div>

        {/* Menu Items */}
        <section className="pb-16">
          <div className="container mx-auto px-4 2xl:px-40">
            {filteredMenuData.length === 0 ? (
              <div className="text-center py-16">
                <Icon
                  icon="mdi:food-off"
                  className="w-16 h-16 text-main/70 mx-auto mb-4"
                />
                <h3 className="text-xl font-medium text-white mb-2">
                  No items found
                </h3>
                <p className="text-stone-400">
                  Try adjusting your search or filter criteria
                </p>
              </div>
            ) : (
              <div>
                {filteredMenuData.map((categoryBlock, index) => (
                  <div key={index} className="mb-12">
                    {categoryBlock.mainCategory && (
                      <div className="text-2xl font-medium text-white mb-6 p-4 bg-[#0F191C] rounded flex items-center gap-5">
                        <Icon
                          icon={categoryBlock?.icon}
                          className="size-8 text-main"
                        />
                        <h2>{categoryBlock.mainCategory}</h2>
                      </div>
                    )}

                    {/* Group by subcategory */}
                    {Object.entries(
                      categoryBlock.menus.reduce((acc, item) => {
                        if (!acc[item.category]) acc[item.category] = [];
                        acc[item.category].push(item);
                        return acc;
                      }, {})
                    ).map(([category, items]) => (
                      <div key={category} className="mb-8">
                        <h3 className="text-xl font-medium text-main mb-4 capitalize font-serif italic">
                          {category.replace(/-/g, " ")}
                        </h3>
                        <div
                          className={
                            viewMode === "grid"
                              ? "grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                              : "grid md:grid-cols-2 gap-6"
                          }
                        >
                          {items.map((item) =>
                            viewMode === "grid" ? (
                              <FoodCard
                                key={item.id}
                                item={item}
                                onAddToCart={handleAddToCart}
                                onToggleFavorite={() =>
                                  console.log("Favorite toggled:", item.id)
                                }
                              />
                            ) : (
                              <FoodListCard
                                key={item.id}
                                item={item}
                                onAddToCart={handleAddToCart}
                                onToggleFavorite={() =>
                                  console.log("Favorite toggled:", item.id)
                                }
                              />
                            )
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      </SmoothScrollProvider>
    </div>
  );
}
