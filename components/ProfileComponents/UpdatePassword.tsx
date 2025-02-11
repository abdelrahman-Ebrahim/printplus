import Image from "next/image";
import React from "react";
import InputField from "../SharedComponents/InputField";
import CustomButton from "../SharedComponents/CustomButton";

const UpdatePassword = () => {
  return (
    <div className="flex flex-col gap-4">
      {/* Section Title */}
      <div className="ps-[15px]">
        <p className="text-secondary font-medium">تحديث كلمة المرور</p>
      </div>
      {/* Section Form */}
      <form className="p-[14.5px] flex flex-col gap-[10.81px]">
        <div className="pb-4">
          <InputField
            id="password"
            label="كلمة المرور القديمة"
            type="password"
            placeholder="أدخل كلمة المرور"
          />
        </div>

        <div className="pb-4">
          <InputField
            id="password"
            label="كلمة المرور الجديدة"
            type="password"
            placeholder="أدخل كلمة المرور"
          />
        </div>

        <div className="pb-4">
          <InputField
            id="password"
            label="تأكيد كلمة المرور الجديدة"
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

export default UpdatePassword;
