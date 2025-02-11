"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const links = [
  { href: "/profile/orders", icon: "/package.svg", label: "الطلبات" },
  { href: "/profile/info", icon: "/profile.svg", label: "الملف الشخصي" },
  { href: "/profile/addresses", icon: "/location.svg", label: "العناوين" },
  { href: "/profile/wallet", icon: "/wallet.svg", label: "محفظة اطبع" },
];

const ProfileSideBar = () => {
  const pathname = usePathname(); // Get current route

  return (
    <div className="w-[217px] h-[350px] max-w-[217px]">
      <div className="w-full h-[222px] flex flex-col">
        <div className="w-full pb-[22px]">
          <p className="pb-[5.5px] text-[#191919] font-medium text-[16.7px]">حسابي</p>
        </div>

        {links.map(({ href, icon, label }) => {
          const isActive = pathname === href;
          return (
            <Link
              key={href}
              href={href}
              className={`py-[13.52px] px-[10.81px] rounded-[5.41px] flex items-center gap-2 ${
                isActive ? "bg-[#F5F5F5] font-medium" : "font-light"
              }`}
            >
              <Image src={icon} alt={label} width={16} height={16} />
              <p className="text-sm">{label}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default ProfileSideBar;
