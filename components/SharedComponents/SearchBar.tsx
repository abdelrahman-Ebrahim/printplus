import Image from "next/image";
import React from "react";

const SearchBar = () => {
  return (
    <div className="relative w-[350px] h-12">
      <input
        className="w-full h-full rounded-[3003px] border-[0.6px] border-[#A7A7A7] px-[15.3px] focus:outline-none placeholder:text-[#525252] placeholder:text-[9.6px]"
        placeholder="ما المنتج الذي تبحث عنه"
      />
      <div className="absolute inset-y-0 left-[15.3px] flex justify-center items-center">
        <div className="flex justify-center items-center size-8 bg-secondary rounded-[500px] cursor-pointer">
          <Image src={"/search.svg"} alt="search" width={12} height={12} />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
