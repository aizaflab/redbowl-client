import { Icon } from "@iconify/react";
import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="/"
      className="flex items-end gap-3 h-full"
      aria-label="Go to Home"
    >
      <Icon icon="mdi:bowl-mix" className="size-8 text-primary" />
      <span className="text-xl font-medium  ">Red Bowl</span>
    </Link>
  );
}
