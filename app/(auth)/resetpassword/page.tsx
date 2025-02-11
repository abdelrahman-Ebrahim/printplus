"use client";
import CustomButton from "@/components/SharedComponents/CustomButton";
import InputField from "@/components/SharedComponents/InputField";
import React, { useState } from "react";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const isDisabled = password.trim() === "" || confirmPassword.trim() === "";

  // Handle Reset Password form submission
  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (password === confirmPassword) {
      setMessage("تم إعادة تعيين كلمة المرور بنجاح.");
      // Handle success logic (e.g., redirect to login or homepage)
    } else {
      setMessage("كلمة المرور وتأكيد كلمة المرور لا تتطابق.");
    }
  };

  return (
    <div className="flex justify-center items-center px-10 min-h-[650px]">
      <div className="flex flex-col justify-center items-center">
        <div className="w-full flex flex-col gap-6 md:min-w-[480px]">
          <h2 className="text-2xl text-primary">إعادة تعيين كلمة مرور</h2>
          <form className="w-full flex flex-col items-center gap-4">
            {/* Reset Password Input */}
            <InputField
              id="password"
              label="كلمة المرور"
              type="password"
              placeholder="أدخل كلمة المرور"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            {/* Confirm Reset Password Input */}
            <InputField
              id="confirmPassword"
              label="تأكيد كلمة المرور"
              type="password"
              placeholder="أدخل كلمة المرور"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />

            {/* Reset Password Button */}
            <CustomButton
              label="إعادة ضبط كلمة المرور"
              type="submit"
              disabled={isDisabled}
              className="w-[315px]"
              onClick={handleSubmit}
            />

            {/* Message Display */}
            {message && (
              <div className="mt-4 text-[#4B5563] font-medium">{message}</div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
