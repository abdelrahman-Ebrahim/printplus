"use client"
import CustomButton from "@/components/SharedComponents/CustomButton";
import { useRouter } from "next/navigation";
import React from "react";

const page = () => {
  const router = useRouter();

  const handleAddressNavigate = () => {
    router.push("/newaddress");
  };
  return (
    <div className="flex flex-col gap-6">
      {/* Section Header */}
      <div className="pb-8 flex justify-between items-center">
        <p className="pb-2 text-[21px] text-[#191919]">العناوين</p>
        <CustomButton
          label=" ‏ ‏‏إضافة عنوان جديد"
          onClick={handleAddressNavigate}
          className="!min-w-[178px] !w-[178px] !h-[40px] rounded-[4px] text-[13px] text-nowrap"
          icon="/add.svg"
        />
      </div>
      {/* Default Address */}
      <div className="border border-[#E0E0E0] p-[21.5px] rounded-lg flex flex-col gap-6">
        <div className="flex flex-col gap-[9px]">
          <span className="bg-[#8259A5] px-1 py-[17px] rounded-[4px] text-[10px] font-medium text-white w-[79px] h-[30px] flex justify-center items-center">
            الافتراضي
          </span>
          <p className="text-sm text-[#191919]">عبد الله بامحمد</p>
          <p className="text-sm text-[#525252]">
            2728 طريق الملك عبد العزيز، الياسمين، الرياض 13326، المملكة العربية
            السعودية
          </p>
          <p className="text-sm text-[#525252]">رقم الجوال : 95512345678</p>
        </div>
        <div className="flex items-center gap-4">
          <button className="text-[13px]">تعديل</button>
          <div className="border border-black w-[12px] rotate-90" />
          <button className="text-[13px] text-[#E90000]">حذف</button>
        </div>
      </div>
      {/* Additional Addresses */}
      <div className="border border-[#E0E0E0] p-[21.5px] rounded-lg flex flex-col gap-6">
        <div className="flex flex-col gap-[9px]">
          <p className="text-sm text-[#191919]">عبد الله بامحمد</p>
          <p className="text-sm text-[#525252]">
            الرياض, حي السليمانية, طريق الملك عبدالعزيز
          </p>
          <p className="text-sm text-[#525252]">رقم الجوال : 95512345678</p>
        </div>
        <div className="flex items-center gap-4">
          <button className="text-[13px] text-primary">تعيين كافتراضي</button>
          <div className="border border-black w-[12px] rotate-90" />
          <button className="text-[13px]">تعديل</button>
          <div className="border border-black w-[12px] rotate-90" />
          <button className="text-[13px] text-[#E90000]">حذف</button>
        </div>
      </div>
    </div>
  );
};

export default page;
