"use client";

import { Icon } from "@iconify/react/dist/iconify.js";

export default function BlogSearch({}) {
  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Search blogs..."
        className="sm:w-fit px-4 h-11 pl-9 border text-sm bg-transparent  w-full min-w-64 border-main/50 rounded-md focus:outline-none ani3"
      />

      <Icon
        icon="lets-icons:search"
        className="absolute left-2 size-5 top-1/2 transform -translate-y-1/2 text-main"
      />
    </div>
  );
}
