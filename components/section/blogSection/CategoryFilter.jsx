"use client";

import { Select } from "@/components/ui/Select";

export default function CategoryFilter() {
  return (
    <div className="flex flex-wrap gap-4">
      <div className="w-32">
        <Select
          options={[
            { value: "", label: "All" },
            { value: "news", label: "News" },
            { value: "blog", label: "Blog" },
          ]}
          fullWidth
        />
      </div>
      <div className="w-48">
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
