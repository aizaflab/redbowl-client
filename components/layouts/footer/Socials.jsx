import Link from "next/link";
import { Icon } from "@iconify/react";
import { socialData } from "@/utils/DataHelper";

const Socials = () => {
  return (
    <div className="flex items-center gap-5 mt-5">
      {socialData.map((item, idx) => {
        return (
          <Link className="text-2xl" href={item.href} key={idx}>
            <Icon icon={item?.icon} className={`text-main ${item.color}`} />
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
