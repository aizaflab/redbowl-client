import Link from "next/link";
import Image from "next/image";
import logoImg from "@/public/img/logo/logo.png";

export default function Logo() {
  return (
    <Link
      href="/"
      className="flex items-end gap-3 h-full"
      aria-label="Go to Home"
    >
      <Image src={logoImg} alt="logo" className="w-32 h-fit" />
    </Link>
  );
}
