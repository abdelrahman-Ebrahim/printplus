"use client";
import ResetPassword from "@/components/AuthComponents/ResetPassword";
import CustomButton from "@/components/SharedComponents/CustomButton";
import InputField from "@/components/SharedComponents/InputField";
import Image from "next/image";
import React, { useState } from "react";

const ForgetPasswordPage = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState(""); // State for the message
  const [showMessage, setShowMessage] = useState(false); // To toggle the message visibility
  const [isResetPasswordShown, setIsResetPasswordShown] = useState(false); // State to show the ResetPassword component

  const isDisabled = email.trim() === "";

  // Handle form submission
  const handleSubmit = (e: any) => {
    e.preventDefault(); // Prevent the default form submission behavior

    if (email.trim() !== "") {
      setMessage(
        "تم إرسال بريد إلكتروني الرجاء اتباع التعليمات المرسلة في البريد"
      );
      setShowMessage(true); // Show the message below the button

      // Set a timeout to show ResetPassword component after 3 seconds
      setTimeout(() => {
        setIsResetPasswordShown(true); // Show the ResetPassword component after 3 seconds
      }, 3000);
    } else {
      setMessage("الرجاء إدخال بريد إلكتروني صحيح.");
      setShowMessage(true); // Show the message if the email is not valid
    }
  };

  return (
    <div className="flex justify-center items-center px-10 min-h-[650px]">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center items-center gap-6 md:min-w-[480px]"
      >
        <div className="flex flex-col gap-4 w-full">
          <h2 className="text-2xl text-primary">إعادة تعيين كلمة مرور</h2>
          {!isResetPasswordShown && (
            <p className="text-sm text-[#525252]">
              لإعادة ضبط كلمة المرور الرجاء ادخال البريد الإلكتروني المستخدم
              لتسجيل الدخول.
            </p>
          )}
        </div>

        {!isResetPasswordShown && (
          <InputField
            id="email"
            label="البريد الإلكتروني"
            type="email"
            placeholder="أدخل البريد الالكتروني"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        )}

        {!isResetPasswordShown && (
          <CustomButton
            label="ارسال"
            type="submit"
            disabled={isDisabled}
            className="w-[315px]"
          />
        )}

        {showMessage && !isResetPasswordShown && (
          <div className="w-full font-medium text-[#4B5563] mt-4 flex items-center gap-3">
            <div className="flex justify-center items-center bg-[#BEEBCC] rounded-[28px] border-[5px] border-[#E4F7EA]">
              <Image
                src="/check-circle.svg"
                alt="check"
                width={24}
                height={24}
              />
            </div>
            {message}
          </div>
        )}

        {isResetPasswordShown && <ResetPassword />}
      </form>
    </div>
  );
};

export default ForgetPasswordPage;
