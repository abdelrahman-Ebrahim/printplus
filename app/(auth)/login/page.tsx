"use client";
import CustomButton from "@/components/SharedComponents/CustomButton";
import InputField from "@/components/SharedComponents/InputField";
import Link from "next/link";
import React, { useState } from "react";

const LoginPage = () => {
  // State for email and password
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Check if inputs are empty
  const isDisabled = email.trim() === "" || password.trim() === "";

  return (
    <div className="flex justify-center items-center px-10 min-h-[650px]">
      <form className="flex flex-col justify-center items-center gap-6 md:min-w-[480px]">
        {/* Title and subtitle */}
        <div className="flex flex-col gap-4 w-full">
          <h2 className="text-2xl text-primary">تسجيل الدخول</h2>
          <p className="text-sm text-[#525252]">
            الوصول إلى حساب إطبع الخاص بك.
          </p>
        </div>
        {/* Email Section */}
        <InputField
          id="email"
          label="البريد الإلكتروني"
          type="email"
          placeholder="أدخل البريد الالكتروني"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {/* Password Section */}
        <InputField
          id="password"
          label="كلمة المرور"
          type="password"
          placeholder="أدخل كلمة المرور"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {/* Button and forget password section */}
        <div className="w-full flex justify-between items-center">
          <CustomButton
            type="submit"
            label="تسجيل الدخول"
            disabled={isDisabled}
          />
          <Link href={"/forgetpassword"} className="font-medium text-[#191919]">
            نسيت كلمة المرور
          </Link>
        </div>
        {/* Register Redirect Section */}
        <div className="w-full flex items-center gap-2">
          <p className="text-[#333333]">ليس لديك حساب؟</p>
          <Link href={"/register"} className="font-medium text-secondary">
            إنشاء حساب جديد
          </Link>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
