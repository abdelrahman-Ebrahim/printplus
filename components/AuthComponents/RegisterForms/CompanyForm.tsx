"use client";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import CustomButton from "@/components/SharedComponents/CustomButton";
import InputField from "@/components/SharedComponents/InputField";
import { useRouter } from "next/navigation";
import SelectField from "@/components/SharedComponents/SelectField";

interface City {
  value: number;
  text: string;
}

interface CompanyRegisterFormData {
  fullName: string;
  email: string;
  mobileNo: string;
  mobileCode: string;
  mobileIso: string;
  cityId: number;
  password: string;
  accountType: number;
  confirmPassword?: string;
  companyName: string;
  vatNumber: string;
  vatAddress: string;
  vatName: string;
}

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

const defaultValues: CompanyRegisterFormData = {
  fullName: "",
  email: "",
  mobileNo: "",
  mobileCode: "",
  mobileIso: "",
  password: "",
  cityId: 2, // Default to Riyadh
  accountType: 2,
  companyName: "",
  vatNumber: "",
  vatAddress: "",
  vatName: "",
};

const CompanyForm = () => {
  const [loading, setLoading] = useState(false);
  const [cities, setCities] = useState<City[]>([]);
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
  const {
    register,
    handleSubmit,
    watch,
    reset,
    setValue,
    formState: { errors, isValid },
  } = useForm<CompanyRegisterFormData>({ defaultValues });

  // Watch the companyName field
  const companyName = watch("companyName");

  // Automatically update fullName when companyName changes
  useEffect(() => {
    setValue("fullName", companyName);
  }, [companyName, setValue]);

  useEffect(() => {
    const fetchCities = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/cities/1`, {
          headers: { "Accept-Language": "ar-SA" },
        });
        if (response.data.success) {
          setCities(response.data.data);
          const defaultCity = response.data.data.find(
            (city: City) => city.text === "الرياض"
          );
          if (defaultCity) {
            setValue("cityId", defaultCity.value);
          }
        }
      } catch (error) {
        console.error("Error fetching cities:", error);
        toast.error("فشل تحميل المدن، حاول مرة أخرى.");
      }
    };
    fetchCities();
  }, [setValue]);

  const onSubmit = async (data: CompanyRegisterFormData) => {
    try {
      setLoading(true);
      // Include updated phone values
      const { confirmPassword, ...requestData } = {
        ...data,
        mobileNo,
        mobileCode,
        mobileIso,
      };
      const response = await axios.post(
        `${API_BASE_URL}/auth/register`,
        requestData
      );
      toast.success("تم التسجيل بنجاح تفقد بريدك الالكتروني!");
      reset();
      router.push("/login");
    } catch (error: any) {
      toast.error(error.response?.data?.message || "حدث خطأ، حاول مرة أخرى");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      className="flex flex-col gap-6 mx-[79px] w-full justify-center items-center"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-col md:flex-row items-start gap-[132px] w-full">
        <div className="flex flex-col gap-6 w-full">
          <InputField
            id="companyName"
            label="Full name*"
            {...register("companyName", { required: "هذا الحقل مطلوب" })}
          />
          <InputField
            id="email"
            label="Email*"
            {...register("email", {
              required: "هذا الحقل مطلوب",
              pattern: {
                value: /^[^@\s]+@[^@\s]+\.[^@\s]+$/,
                message: "البريد الإلكتروني غير صالح",
              },
            })}
          />
          <InputField
            id="mobileNo"
            isPhoneInput={true}
            label="Mobile Number*"
            value={mobileNo}
            onPhoneChange={handlePhoneChange} // Pass the handler function
          />

          <InputField
            id="password"
            label="Password*"
            type="password"
            {...register("password", { required: "هذا الحقل مطلوب" })}
          />

          <InputField
            id="confirmPassword"
            label="Confirm Password*"
            type="password"
            {...register("confirmPassword", {
              required: "هذا الحقل مطلوب",
              validate: (value) =>
                value === watch("password") || "كلمة المرور غير متطابقة",
            })}
          />
        </div>

        <div className="flex flex-col gap-6 w-full">
          <SelectField
            id="cityId"
            label="City*"
            options={cities}
            register={register("cityId", { required: "هذا الحقل مطلوب" })}
            error={errors.cityId?.message}
          />

          <InputField
            id="vatNumber"
            label="Tax Number*"
            {...register("vatNumber", { required: "هذا الحقل مطلوب" })}
          />

          <InputField
            id="vatName"
            label="Tax Name*"
            {...register("vatName", { required: "هذا الحقل مطلوب" })}
          />

          <InputField
            id="vatAddress"
            label="Tax Address*"
            {...register("vatAddress", { required: "هذا الحقل مطلوب" })}
          />
        </div>
      </div>
      <div>
        <CustomButton
          label={loading ? "Signing up..." : "Sign up"}
          type="submit"
          className="mt-6"
          disabled={!isValid || loading}
        />
      </div>
    </form>
  );
};

export default CompanyForm;
