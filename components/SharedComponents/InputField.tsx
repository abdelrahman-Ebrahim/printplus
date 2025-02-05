import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

interface InputFieldProps {
  id: string;
  label: string;
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  isPhoneInput?: boolean;
}

const InputField: React.FC<InputFieldProps> = ({
  id,
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  isPhoneInput = false, // Default to false
}) => {
  // Password visibility toggler state
  const [showPassword, setShowPassword] = useState(false);

  // State for country code dropdown
  const [countryCode, setCountryCode] = useState("+966"); // Default to Saudi Arabia

  // List of country codes (you can expand this list)
  const countryCodes = [
    { code: "+966" }, // Saudi Arabia
    { code: "+971" }, // UAE
    { code: "+965" }, // Kuwait
    { code: "+973" }, // Bahrain
    { code: "+968" }, // Oman
    { code: "+974" }, // Qatar
    { code: "+20" }, // Egypt
  ];

  return (
    <div className="flex flex-col justify-start items-start w-full gap-2">
      {/* Label for the input */}
      <label htmlFor={id} className="font-medium text-[#191919]">
        {label}
      </label>
      <div className="relative w-full">
        {/* Phone input with country code dropdown */}
        {isPhoneInput ? (
          <div
            className="flex items-center border border-[#E3E3E3] rounded-lg focus:outline-none"
            dir="ltr"
          >
            {/* Country code dropdown */}
            <select
              value={countryCode}
              onChange={(e) => setCountryCode(e.target.value)}
              className="px-3 py-[22.25px] bg-transparent border-l border-[#E3E3E3] focus:outline-none"
            >
              {countryCodes.map((country) => (
                <option key={country.code} value={country.code}>
                  {country.code}
                </option>
              ))}
            </select>
            {/* Phone number input */}
            <input
              dir="rtl"
              type="tel"
              id={id}
              placeholder={placeholder}
              value={value}
              onChange={onChange}
              className="px-[17.5px] py-[22.25px] w-full focus:outline-none placeholder:text-[#525252]"
            />
          </div>
        ) : (
          // Regular input field
          <>
            <input
              type={type === "password" && showPassword ? "text" : type}
              id={id}
              placeholder={placeholder}
              value={value}
              onChange={onChange}
              className="border border-[#E3E3E3] px-[17.5px] py-[22.25px] rounded-lg focus:outline-none placeholder:text-[#525252] w-full"
            />
            {/* Toggle password visibility icon */}
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
          </>
        )}
      </div>
    </div>
  );
};

export default InputField;
