"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-toastify";
import CustomButton from "@/components/SharedComponents/CustomButton";
import InputField from "@/components/SharedComponents/InputField";
import { useRouter } from "next/navigation";

// Interface for form data
interface IndvidualRegisterFormData {
  fullName: string;
  email: string;
  mobileNo: string;
  mobileCode: string;
  mobileIso: string;
  cityId: number;
  password: string;
  accountType: number;
  confirmPassword?: string; // Add this field for UI validation
}

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

const defaultValues = {
  fullName: "",
  email: "",
  mobileNo: "",
  mobileCode: "",
  mobileIso: "",
  password: "",
  cityId: 2,
  accountType: 1,
};

const IndividualForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
    reset,
  } = useForm<IndvidualRegisterFormData>({
    defaultValues,
  });

  const [loading, setLoading] = useState(false);
  const router = useRouter();

  // State to store phone input data
  const [mobileNo, setMobileNo] = useState(defaultValues.mobileNo);
  const [mobileCode, setMobileCode] = useState(defaultValues.mobileCode);
  const [mobileIso, setMobileIso] = useState(defaultValues.mobileIso);

  // Function to handle phone input change
  const handlePhoneChange = (phone: string, country: any) => {
    setMobileNo(phone);
    setMobileCode(`+${country.dialCode}`);
    setMobileIso(country.countryCode.toUpperCase());
  };

  const onSubmit = async (data: IndvidualRegisterFormData) => {
    try {
      setLoading(true);
      // Include updated phone values
      const { confirmPassword, ...requestData } = {
        ...data,
        mobileNo,
        mobileCode,
        mobileIso,
      };

      console.log("Request Data Sent:", requestData); // Log the data being sent

      const response = await axios.post(
        `${API_BASE_URL}/auth/register`,
        requestData
      );

      console.log("Success:", response.data);
      toast.success("تم التسجيل بنجاح تفقد بريدك الالكتروني!");
      reset();
      router.push("login");
    } catch (error: any) {
      console.error("Registration Error:", error);

      if (error.response) {
        console.log("Response Data:", error.response.data);
        console.log("Status Code:", error.response.status);
        console.log("Headers:", error.response.headers);
        toast.error(error.response.data?.message || "حدث خطأ، حاول مرة أخرى");
      } else if (error.request) {
        console.log("Request Error:", error.request);
        toast.error(
          "لم يتم استلام استجابة من السيرفر، تحقق من اتصالك بالإنترنت."
        );
      } else {
        console.log("Error Message:", error.message);
        toast.error("حدث خطأ غير متوقع، حاول مرة أخرى.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="flex flex-col gap-6" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col md:flex-row items-center gap-[132px]">
        {/* Right Side */}
        <div className="flex flex-col gap-8 w-full">
          <InputField
            id="fullName"
            label="الإسم الكامل"
            placeholder="أدخل اسمك الكامل"
            {...register("fullName", { required: "هذا الحقل مطلوب" })}
          />
          <InputField
            id="email"
            label="البريد الإلكتروني"
            placeholder="أدخل البريد الإلكتروني"
            {...register("email", {
              required: "هذا الحقل مطلوب",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: "البريد الإلكتروني غير صالح",
              },
            })}
          />
          <InputField
            id="mobileNo"
            isPhoneInput={true}
            label="رقم الجوال"
            value={mobileNo}
            onPhoneChange={handlePhoneChange} // Pass the handler function
          />
        </div>

        {/* Left Side */}
        <div className="flex flex-col gap-8 w-full">
          <InputField
            id="password"
            label="كلمة المرور"
            placeholder="أدخل كلمة المرور"
            type="password"
            {...register("password", { required: "هذا الحقل مطلوب" })}
          />
          <InputField
            id="confirmpassword"
            label="تأكيد كلمة المرور"
            placeholder="أدخل كلمة المرور"
            type="password"
            {...register("confirmPassword", {
              required: "هذا الحقل مطلوب",
              validate: (value) =>
                value === watch("password") || "كلمة المرور غير متطابقة",
            })}
          />
        </div>
      </div>

      {/* Submit Button */}
      <div>
        <CustomButton
          label={loading ? "جارٍ التسجيل..." : "تسجيل"}
          type="submit"
          className="mt-6"
          disabled={!isValid || loading}
        />
      </div>
    </form>
  );
};

export default IndividualForm;
