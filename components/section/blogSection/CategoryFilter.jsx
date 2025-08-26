"use client";

import { Select } from "@/components/ui/Select";
import useUpdateSearchParam from "@/hooks/useUpdateSearchParam";
import { useState } from "react";

export default function CategoryFilter({ categories, categoryId }) {
  const updateSearchParam = useUpdateSearchParam();
  const [selectedCategory, setSelectedCategory] = useState(categoryId || "");

  const handleFieldChange = (id) => {
    setSelectedCategory(id);
    updateSearchParam({
      categoryId: id,
      page: 1,
    });
  };

  console.log({ categories });

  const categoryOption = [
    { value: "", label: "All" },
    ...categories.map((category) => ({
      value: category._id,
      label: category.title,
    })),
  ];
  return (
    <div className="flex flex-1 md:flex-none gap-4">
      <div className="md:w-48 w-full">
        <Select
          options={categoryOption}
          value={selectedCategory}
          onValueChange={(value) => handleFieldChange(value)}
          fullWidth
        />
      </div>
    </div>
  );
}
