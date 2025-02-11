import React from "react";
import InputField from "../SharedComponents/InputField";
import CustomButton from "../SharedComponents/CustomButton";
import Image from "next/image";

const UpdateEmail = () => {
  return (
    <div className="flex flex-col gap-4 pb-4">
      {/* Section Title */}
      <div className="ps-[15px]">
        <p className="text-secondary font-medium">
          تحديث البريد الإلكتروني
        </p>
      </div>
      {/* Section Form */}
      <form className="p-[14.5px] flex flex-col gap-[10.81px]">
        <div className="pb-4 flex flex-col justify-start items-start w-full gap-2">
          <p className="text-[#191919] font-medium">
            البريد الإلكتروني الحالي
          </p>
          <div className="py-[15px] flex items-center gap-[5.41px]">
            <Image
              src={"/check-circle.svg"}
              alt="check"
              width={16}
              height={16}
            />
            <p className="text-[#191919]">
              eslam@gmail.com ( تم التأكيد )
            </p>
          </div>
        </div>

        <div className="pb-4">
          <InputField
            id="email"
            label="البريد الإلكتروني الجديد"
            type="email"
          />
        </div>

        <div className="pb-4">
          <InputField
            id="password"
            label="كلمة المرور"
            type="password"
            placeholder="أدخل كلمة المرور"
          />
        </div>

        <CustomButton
          label="تحديث"
          className="self-center rounded-[4px] !py-[6px] !px-6 !min-w-[89px] w-[89px] !h-[32px] text-[13px]"
        />
      </form>
    </div>
  );
};

export default UpdateEmail;
