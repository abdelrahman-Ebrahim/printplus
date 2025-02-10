"use client";

import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import CustomButton from "@/components/SharedComponents/CustomButton";
import InputField from "@/components/SharedComponents/InputField";
import Link from "next/link";

interface LoginFormData {
  email: string;
  password: string;
}

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>();

  const router = useRouter();
  const [error, setError] = useState<string | null>(null);

  const onSubmit = async (data: LoginFormData) => {
    setError(null); // Reset previous errors

    const result = await signIn("credentials", {
      redirect: false,
      email: data.email,
      password: data.password,
      callbackUrl: "/", // 👈 Ensures redirect after login
    });

    if (result?.error) {
      toast.error(result.error);
      setError(result.error);
      return; // Exit early to avoid further execution
    }

    // ✅ Successful login
    toast.success("تم تسجيل الدخول بنجاح!");
    window.location.href = "/";
  };

  return (
    <div className="flex justify-center items-center px-10 min-h-[650px]">
      <form
        className="flex flex-col justify-center items-center gap-6 md:min-w-[480px]"
        onSubmit={handleSubmit(onSubmit)}
      >
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
          {...register("email", { required: "هذا الحقل مطلوب" })}
        />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}

        {/* Password Section */}
        <InputField
          id="password"
          label="كلمة المرور"
          type="password"
          placeholder="أدخل كلمة المرور"
          {...register("password", { required: "هذا الحقل مطلوب" })}
        />
        {errors.password && (
          <p className="text-red-500">{errors.password.message}</p>
        )}

        {/* Error Message */}
        {error && <p className="text-red-500">{error}</p>}

        {/* Button and forget password section */}
        <div className="w-full flex justify-between items-center">
          <CustomButton
            type="submit"
            label={isSubmitting ? "جارٍ تسجيل الدخول..." : "تسجيل الدخول"}
            disabled={isSubmitting}
          />
          <Link href="/forgetpassword" className="font-medium text-[#191919]">
            نسيت كلمة المرور؟
          </Link>
        </div>

        {/* Register Redirect Section */}
        <div className="w-full flex items-center gap-2">
          <p className="text-[#333333]">ليس لديك حساب؟</p>
          <Link href="/register" className="font-medium text-secondary">
            إنشاء حساب جديد
          </Link>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
