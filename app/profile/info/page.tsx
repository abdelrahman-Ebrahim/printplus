import PersonalInformation from "@/components/ProfileComponents/PersonalInformation";
import UpdateEmail from "@/components/ProfileComponents/UpdateEmail";
import UpdatePassword from "@/components/ProfileComponents/UpdatePassword";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col w-[647px]">
      {/* Information header */}
      <div className="pb-8">
        <p className="pb-2 text-[21px] text-[#191919]">الملف الشخصي</p>
      </div>
      {/* Personal Information Section */}
      <PersonalInformation />
      {/* Update Email Section */}
      <UpdateEmail />
      {/* Update Password Section */}
      <UpdatePassword />
    </div>
  );
};

export default page;
