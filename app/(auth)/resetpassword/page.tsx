"use client";
import CustomButton from "@/components/SharedComponents/CustomButton";
import InputField from "@/components/SharedComponents/InputField";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [isSuccessful, setIsSuccessful] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const isDisabled = password.trim() === "" || confirmPassword.trim() === "";
  const router = useRouter();

  // Handle Reset Password form submission
  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (password === confirmPassword) {
      setMessage("تم إعادة تعيين كلمة المرور بنجاح.");
      setIsSuccessful(true);
      // Handle success logic (e.g., redirect to login or homepage)
    } else {
      setMessage("كلمة المرور وتأكيد كلمة المرور لا تتطابق.");
    }
  };

  const handleNavigate = () => {
    router.push("/login");
  };

  return (
    <div className="flex justify-center items-center my-12">
      {!isSuccessful && (
        <div className="flex flex-col justify-center items-center">
          <div className="w-full flex flex-col justify-center items-center gap-6 md:min-w-[480px] ">
            <h2 className="text-3xl text-shadeBlack font-bold">
              Choose a new password
            </h2>
            <p className="text-shadeBlack">
              Create a new password for your account.
            </p>
            <form className="w-full flex flex-col items-center gap-6">
              {/* Reset Password Input */}
              <InputField
                id="password"
                label="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              {/* Confirm Reset Password Input */}
              <InputField
                id="confirmPassword"
                label="ConfirmPassword"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />

              {/* Reset Password Button */}
              <CustomButton
                label="Change my paasword   "
                type="submit"
                disabled={isDisabled}
                className="w-[315px]"
                onClick={handleSubmit}
              />

              <Link href={"/login"} className="font-bold text-shadeBlack mt-2">
                Log in
              </Link>

              {/* Message Display */}
              {message && (
                <div className="mt-4 text-[#4B5563] font-medium">{message}</div>
              )}
            </form>
          </div>
        </div>
      )}

      {isSuccessful && (
        <div className="gap-6 flex justify-center items-center flex-col ">
          <div className="flex justify-center items-center">
            <p className="font-bold text-2xl text-shadeBlack">
              Password updated!
            </p>
          </div>
          <p className="text-shadeBlack">
            Your password has been updated successfully!
          </p>
          <CustomButton label="Log in" onClick={handleNavigate} />
        </div>
      )}
    </div>
  );
};

export default ResetPassword;
