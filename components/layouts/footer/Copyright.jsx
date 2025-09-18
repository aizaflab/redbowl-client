import Link from "next/link";

const Copyright = () => {
  return (
    <div className="border-t border-main/20 py-4 lg:py-6 text-center">
      <p className="text-sm text-main tracking-wider font-normal">
        © 2025 RedBowl. All rights reserved. ⇨ Crafted with care by <br />
        <Link
          href="https://adikaz.com"
          className="text-light underline text-white transition-colors duration-200"
          target="_blank"
          rel="noopener noreferrer"
        >
          Adikaz Group
        </Link>
      </p>
    </div>
  );
};

export default Copyright;
