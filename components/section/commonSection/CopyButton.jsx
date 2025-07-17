"use client";
import { Icon } from "@iconify/react";
import toast from "react-hot-toast";

export default function CopyButton() {
  const handleCopyUrl = () => {
    const currentUrl = window.location.href;
    navigator.clipboard.writeText(currentUrl).then(() => {
      toast.success("Link copied to clipboard!", { id: "copy" });
    });
  };
  return (
    <button
      type="button"
      onClick={handleCopyUrl}
      className="size-10 center bg-white border border-white  text-black rounded-md transition-colors cursor-pointer"
    >
      <Icon icon="mynaui:send" className="size-[21px]" />
    </button>
  );
}
