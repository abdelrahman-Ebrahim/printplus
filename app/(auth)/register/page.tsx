"use client";
import CompanyForm from "@/components/AuthComponents/RegisterForms/CompanyForm";
import IndividualForm from "@/components/AuthComponents/RegisterForms/IndividualForm";
import Link from "next/link";
import React, { useState } from "react";

const RegisterPage = () => {
  // State to manage the active tab
  const [activeTab, setActiveTab] = useState("individual"); // Default to "individual"

  // Function to handle tab switching
  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div className="mx-[210px] my-[5px]">
      <div className="flex flex-col gap-6">
        {/* Header and tab switching */}
        {/* Form Header */}
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl text-primary">إنشاء حساب جديد</h2>
        </div>

        {/* Form Tab Switcher */}
        <div className="w-[316px] h-[46px] p-[10px] rounded-[29px] bg-[#F3F3F3F3] self-center flex justify-between items-center">
          {/* Company Tab */}
          <div
            className={`flex justify-center items-center rounded-[29px] flex-1 w-[156px] h-[36px] cursor-pointer ${
              activeTab === "company"
                ? "bg-secondary text-white"
                : "bg-transparent text-black"
            }`}
            onClick={() => handleTabClick("company")}
          >
            شركة
          </div>

          {/* Individual Tab */}
          <div
            className={`flex justify-center items-center rounded-[29px] flex-1 w-[156px] h-[36px] cursor-pointer ${
              activeTab === "individual"
                ? "bg-secondary text-white"
                : "bg-transparent text-black"
            }`}
            onClick={() => handleTabClick("individual")}
          >
            فرد
          </div>
        </div>

        {/* Conditional Rendering Based on Active Tab */}
        <div className="mt-6">
          {activeTab === "company" ? (
            <CompanyForm /> // Render the Company Form component
          ) : (
            <IndividualForm /> // Render the Individual Form component
          )}
        </div>

        {/* Terms and Login Redirect Section */}
        <div className="flex flex-col gap-[22px]">
          <div className="flex gap-2">
            <p className="text-[#333333]">
              بالنقر على زر إنشاء الحساب في الاسفل فانت توافق على
            </p>
            <Link href={"/"} className="text-secondary">
              الشروط والأحكام
            </Link>
          </div>
          <div className="flex gap-2">
            <p className="text-[#333333]">هل لديك حساب؟</p>
            <Link href={"/login"} className="text-secondary">
              تسجيل الدخول
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
