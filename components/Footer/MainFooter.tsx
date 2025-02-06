import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebook, FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { FaSnapchat, FaXTwitter } from "react-icons/fa6";

const MainFooter = () => {
  return (
    <footer className="pt-12 bg-[#F8F8F8] flex flex-col justify-center items-center w-full">
      <div className="max-w-[1440px] px-[136.5px]">
        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {/* Logo Section Content */}
          <div className="p-[15px] flex flex-col justify-start items-start">
            {/* Logo div */}
            <Link href={"/"}>
              <Image src={"logo.svg"} alt="logo" width={98} height={58} />
            </Link>
            {/* Footer logo section card */}
            <div className="max-w-[360px] flex flex-col gap-[9.2px]">
              <div className="flex flex-col gap-[9px] font-medium">
                <p>‭+966 59 913 9318‬</p>
                <p>support@print.sa</p>
              </div>
              <p className="text-[#7E7E7E] text-sm">
                المكتب الإداري لشركة اطبع التجارية، مركز السدحان، شارع موسى بن
                نصير، حي السليمانية، الرياض.
              </p>
            </div>
          </div>
          {/* Information Section Content */}
          <div className="p-[15px] flex flex-col">
            <div className="max-w-[360px] pt-5 pb-[10px]">
              <h3 className="font-bold text-lg">معلومات</h3>
            </div>
            <div className="flex flex-col gap-[2px]">
              <Link
                href={"/"}
                className="font-medium text-sm text-[#7E7E7E] h-[29px]"
              >
                من نحن
              </Link>
              <Link
                href={"/"}
                className="font-medium text-sm text-[#7E7E7E] h-[29px]"
              >
                المدونة
              </Link>
              <Link
                href={"/"}
                className="font-medium text-sm text-[#7E7E7E] h-[29px]"
              >
                تواصل معنا
              </Link>
              <Link
                href={"/"}
                className="font-medium text-sm text-[#7E7E7E] h-[29px]"
              >
                سياسة الخصوصية
              </Link>
            </div>
          </div>
          {/* Useful Links Section Content */}
          <div className="p-[15px] flex flex-col">
            <div className="max-w-[360px] pt-5 pb-[10px]">
              <h3 className="font-bold text-lg">روابط مفيدة</h3>
            </div>
            <div className="flex flex-col gap-[2px]">
              <Link
                href={"/"}
                className="font-medium text-sm text-[#7E7E7E] h-[29px]"
              >
                حسابي
              </Link>
              <Link
                href={"/"}
                className="font-medium text-sm text-[#7E7E7E] h-[29px]"
              >
                المنتجات
              </Link>
              <Link
                href={"/"}
                className="font-medium text-sm text-[#7E7E7E] h-[29px]"
              >
                كن شريكاً
              </Link>
              <Link
                href={"/"}
                className="font-medium text-sm text-[#7E7E7E] h-[29px]"
              >
                منتجات مخصصة
              </Link>
              <Link
                href={"/"}
                className="font-medium text-sm text-[#7E7E7E] h-[29px]"
              >
                اصنع قميصك الخاص
              </Link>
            </div>
          </div>
          {/* Sponsers and Social Links Section */}
          <div className="flex flex-col justify-center items-center gap-[10px]">
            {/* Sponsers */}
            <div className="flex flex-col justify-center items-center gap-[29px]">
              <div className="flex justify-center items-center p-2 gap-8">
                <Image
                  src={"/Footer1.svg"}
                  alt="footer1"
                  width={61}
                  height={20}
                />
                <Image
                  src={"/Footer2.svg"}
                  alt="footer2"
                  width={59}
                  height={19}
                />
                <Image
                  src={"/Footer3.svg"}
                  alt="footer2"
                  width={49}
                  height={39}
                />
              </div>
              <div className="flex justify-center items-center p-2 gap-[17.5px]">
                <Image
                  src={"/Footer4.svg"}
                  alt="footer4"
                  width={37}
                  height={37}
                />
                <Image
                  src={"/Footer5.svg"}
                  alt="footer5"
                  width={94.66}
                  height={15.38}
                />
                <Image
                  src={"/Footer6.svg"}
                  alt="footer6"
                  width={41.61}
                  height={50.16}
                />
              </div>
              {/* Social Links */}
              <div className="flex justify-center items-center gap-[14.1px]">
                <button>
                  <FaWhatsapp size={23.5} className="text-[#525252]" />
                </button>
                <button>
                  <FaSnapchat size={23.5} className="text-[#525252]" />
                </button>
                <button>
                  <FaInstagram size={23.5} className="text-[#525252]" />
                </button>
                <button>
                  <FaYoutube size={23.5} className="text-[#525252]" />
                </button>
                <button>
                  <FaXTwitter size={23.5} className="text-[#525252]" />
                </button>
                <button>
                  <FaFacebook size={23.5} className="text-[#525252]" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center px-[136.5px] max-w-[1440px]">
        <div className="py-[15.8px] text-center">
          <p className="text-sm font-medium text-[#7E7E7E]">
            © 2025 Printplus. جميع الحقوق محفوظة.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default MainFooter;
