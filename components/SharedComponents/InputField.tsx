import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: string;
  type?: string;
  placeholder?: string;
  value?: string;
  register?: any;
  isPhoneInput?: boolean;
  error?: string;
  onPhoneChange?: (phone: string, countryData: any) => void;
}

const InputField: React.FC<InputFieldProps> = ({
  id,
  label,
  type = "text",
  placeholder,
  value,
  register,
  isPhoneInput = false,
  error,
  onPhoneChange,
  ...rest
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");

  return (
    <div className="flex flex-col justify-start items-start w-full gap-2">
      <label htmlFor={id} className="font-medium text-[#191919]">
        {label}
      </label>
      <div className="relative w-full">
        {isPhoneInput ? (
          <div className="flex flex-row-reverse border border-[#E3E3E3] rounded-lg !px-[15.5px] !py-[15.25px]">
            <PhoneInput
              country={"sa"} // Default country (Saudi Arabia)
              enableSearch={true}
              value={phoneNumber}
              onChange={(phone, country) => {
                setPhoneNumber(phone);
                onPhoneChange && onPhoneChange(phone, country);
              }}
              inputClass="!border-0 text-left !ml-2 !w-full !focus:outline-none !placeholder:text-[#525252] !bg-transparent"
              containerClass="w-full flex flex-row-reverse"
              buttonClass="!bg-transparent !border-0 !max-w-[40px] !pr-[10px]"
              dropdownClass="!bg-white !border !border-[#E3E3E3] !rounded-md"
            />
          </div>
        ) : (
          <>
            <input
              type={type === "password" && showPassword ? "text" : type}
              id={id}
              placeholder={placeholder}
              value={value}
              {...register}
              {...rest}
              className="border border-[#E3E3E3] px-[17.5px] py-[22.25px] rounded-lg focus:outline-none placeholder:text-[#525252] w-full"
            />
            {type === "password" && (
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 left-3 flex items-center text-gray-500"
              >
                {showPassword ? (
                  <AiOutlineEyeInvisible size={22} />
                ) : (
                  <AiOutlineEye size={22} />
                )}
              </button>
            )}
            {error && <p className="text-red-500">{error}</p>}
          </>
        )}
      </div>
    </div>
  );
};

export default InputField;
