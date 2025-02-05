import navItems from "@/constants/navItems";
import Link from "next/link";
import React from "react";

const NavItems = () => {
  return (
    <div className="py-6 flex justify-center items-center gap-8">
      {navItems.map((item, i) => (
        <div key={i}>
          <Link href={item.href} className="text-[15px]">{item.text}</Link>
        </div>
      ))}
    </div>
  );
};

export default NavItems;
