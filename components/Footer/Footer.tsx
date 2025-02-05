import Link from "next/link";
import React from "react";

const Footer = () => {
  return <footer className="mt-6 mb-12 mx-10 md:px-[126px] flex justify-between items-center">
    <p className="text-[#00000059]">© 2025 print.sa</p>
    <div className="flex items-center gap-6">
        <Link href={"/"} className="text-primary text-[13px] underline">الشروط والأحكام</Link>
        <Link href={"/"} className="text-primary text-[13px] underline">سياسة الخصوصية</Link>
    </div>
  </footer>;
};

export default Footer;
