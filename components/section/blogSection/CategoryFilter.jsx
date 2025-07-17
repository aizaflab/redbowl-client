"use client";

import { Select } from "@/components/ui/Select";

export default function CategoryFilter() {
  return (
    <div className="flex flex-1 md:flex-none gap-4">
      <div className="md:w-32 w-full">
        <Select
          options={[
            { value: "", label: "All" },
            { value: "news", label: "News" },
            { value: "blog", label: "Blog" },
          ]}
          fullWidth
        />
      </div>
      <div className="md:w-48 w-full">
        <Select
          options={[
            { value: "", label: "All" },
            { value: "Delicious", label: "Delicious" },
            { value: "Sweet", label: "Sweet" },
          ]}
          fullWidth
        />
      </div>
    </div>
  );
}
