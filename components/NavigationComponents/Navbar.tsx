import navLinks from "@/constants/navLinks"; // import from constants folder
import Image from "next/image";
import Link from "next/link";
import React from "react";
import SearchBar from "../SharedComponents/SearchBar";
import { FaChevronDown } from "react-icons/fa";

const Navbar = () => {
  return (
    <header className="w-full pt-[9px] pb-4">
      <nav className="w-full flex justify-between items-center px-10">
        {/* Right Side Navbar Section */}
        <div className="flex items-center gap-10">
          {/* Main logo div */}
          <Link href={"/"}>
            <Image src={"/logo.svg"} alt="logo" width={98} height={58} />
          </Link>
          {/* NavLinks div */}
          <div className="flex items-center gap-8 py-9">
            {navLinks.map((link, index) => (
              <div key={index} className="flex items-center gap-[10px]">
                {link.icon && (
                  <Image
                    src={link.icon}
                    alt={link.text}
                    width={24}
                    height={24}
                  />
                )}
                <Link
                  href={link.href}
                  className="font-alex text-[15px] text-black"
                >
                  {link.text}
                </Link>
              </div>
            ))}
          </div>
        </div>
        {/* Left Side Navbar Section */}
        <div className="flex items-center gap-4 py-6">
          {/* SearchBar Component */}
          <SearchBar />
          {/* EN Button */}
          <div className="flex justify-center items-center size-12 border border-[#E3E3E3] rounded-[500px] cursor-pointer">
            <p className="font-medium text-sm">EN</p>
          </div>
          {/* Cart Icon */}
          <div className="relative flex justify-center items-center size-12 border border-[#E3E3E3] rounded-full cursor-pointer">
            <Image src={"/cart.svg"} alt="cart" width={16} height={16} />

            {/* Badge */}
            <span className="absolute -top-1 -left-1 bg-[#CC1100] text-white py-[2px] px-[5.55px] text-xs size-4 flex items-center justify-center rounded-full">
              1
            </span>
          </div>
          {/* Profile Section */}
          <div className="flex items-center gap-2 cursor-pointer">
            <FaChevronDown size={12} />
            <p className="font-medium text-[12px]">محمد</p>
            <div className="flex justify-center items-center size-12 rounded-full bg-[#F5F5F5]">
              <Image
                src={"/profile.svg"}
                alt="profile"
                width={16}
                height={16}
              />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
