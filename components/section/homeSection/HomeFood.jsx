import React from "react";
import { HomeFoodItems } from "@/utils/DataHelper";
import FoodCard from "@/components/cards/FoodCard";
import SectionHeading from "../commonSection/SectionHeader";

export default function HomeFood() {
  return (
    <div className="container 2xl:px-40 px-4 mx-auto sm:py-16">
      <SectionHeading title="Best Bites" subtitle="Dishes" />
      <div className="grid lg:grid-cols-3 sm:grid-cols-2  gap-5">
        {HomeFoodItems.slice(0, 3).map((item) => (
          <FoodCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
