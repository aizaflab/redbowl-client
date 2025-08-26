"use client";

import { useState } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import useUpdateSearchParam from "@/hooks/useUpdateSearchParam";

export default function BlogSearch({ initialSearchTerm }) {
  const updateSearchParam = useUpdateSearchParam();
  const [searchTerm, setSearchTerm] = useState(initialSearchTerm);

  const handleFieldChange = (_key, value) => {
    setSearchTerm(value);
    updateSearchParam({
      searchTerm: value,
      page: 1,
      sort: -1,
    });
  };

  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Search blogs..."
        value={searchTerm}
        onChange={(e) => handleFieldChange("searchTerm", e.target.value)}
        className="sm:w-fit w-full px-4 sm:h-11 h-10 pl-9 border text-sm bg-transparent min-w-64 border-gray-300 dark:border-main/50 rounded-md focus:outline-none ani3"
      />

      <Icon
        icon="lets-icons:search"
        className="absolute left-2 size-5 top-1/2 transform -translate-y-1/2 text-main"
      />
    </div>
  );
}
