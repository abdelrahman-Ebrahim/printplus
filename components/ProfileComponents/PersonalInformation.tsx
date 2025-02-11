import React from "react";
import InputField from "../SharedComponents/InputField";
import CustomButton from "../SharedComponents/CustomButton";

const PersonalInformation = () => {
  return (
    <div className="flex flex-col gap-4 pb-4">
      {/* Section Title */}
      <div className="ps-[15px]">
        <p className="text-secondary font-medium">المعلومات الشخصية</p>
      </div>
      {/* Section Form */}
      <form className="p-[14.5px] flex flex-col gap-[10.81px]">
        <div className="pb-4">
          <InputField
            id="name"
            label="الاسم"
            type="text"
            placeholder="your name"
          />
        </div>

        <div className="pb-4">
          <InputField
            id="mobileNo"
            isPhoneInput={true}
            label="رقم الجوال"
            placeholder="512345678"
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

export default PersonalInformation;
