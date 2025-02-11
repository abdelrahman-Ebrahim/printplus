"use client";
import CustomButton from "@/components/SharedComponents/CustomButton";
import InputField from "@/components/SharedComponents/InputField";
import Image from "next/image";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

interface ForgetPasswordFormData {
  email: string;
}

const ForgetPasswordPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<ForgetPasswordFormData>({ mode: "onChange" });

  const [message, setMessage] = useState("");
  const [showMessage, setShowMessage] = useState(false);
  const [loading, setLoading] = useState(false);

  // Handle form submission
  const onSubmit = async (data: ForgetPasswordFormData) => {
    setLoading(true);
    setShowMessage(false);

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/forget-password`,
        { email: data.email },
        {
          headers: {
            "Accept-Language": "ar-SA",
          },
        }
      );

      const { message } = response.data; // Extract response data
      setMessage(message);
      setShowMessage(true);
    } catch (error: any) {
      console.error("Forget Password Error:", error);

      // Handle API response errors
      if (error.response) {
        setMessage(error.response.data?.message || "حدث خطأ، حاول مرة أخرى");
      } else if (error.request) {
        setMessage("لم يتم استلام استجابة من السيرفر، تحقق من اتصالك بالإنترنت.");
      } else {
        setMessage("حدث خطأ غير متوقع، حاول مرة أخرى.");
      }

      setShowMessage(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center px-10 min-h-[650px]">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col justify-center items-center gap-6 md:min-w-[480px]"
      >
        <div className="flex flex-col gap-4 w-full">
          <h2 className="text-2xl text-primary">إعادة تعيين كلمة مرور</h2>
          <p className="text-sm text-[#525252]">
            لإعادة ضبط كلمة المرور الرجاء ادخال البريد الإلكتروني المستخدم
            لتسجيل الدخول.
          </p>
        </div>

        <InputField
          id="email"
          label="البريد الإلكتروني"
          type="email"
          placeholder="أدخل البريد الالكتروني"
          {...register("email", {
            required: "هذا الحقل مطلوب",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
              message: "البريد الإلكتروني غير صالح",
            },
          })}
          error={errors.email?.message}
        />

        <CustomButton
          label="ارسال"
          type="submit"
          disabled={!isValid}
          isLoading={loading}
          className="w-[315px]"
        />

        {showMessage && (
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
      </form>
    </div>
  );
};

export default ForgetPasswordPage;
