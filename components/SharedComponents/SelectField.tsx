import React from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import { FaChevronDown } from "react-icons/fa";

interface SelectFieldProps {
  id: string;
  label: string;
  options: { value: number | string; text: string }[];
  register?: UseFormRegisterReturn;
  error?: string;
}

const SelectField: React.FC<SelectFieldProps> = ({
  id,
  label,
  options,
  register,
  error,
}) => {
  return (
    <div className="flex flex-col justify-start items-start w-full gap-2 relative">
      <label htmlFor={id} className="font-medium text-[#191919]">
        {label}
      </label>
      <div className="relative w-full">
        <select
          id={id}
          {...register}
          className="border border-[#E3E3E3] px-[17.5px] py-[22.25px] rounded-lg focus:outline-none placeholder:text-[#525252] w-full appearance-none bg-white"
        >
          {options.map((option) => (
            <option key={option.value} value={option.value} className="text-gray-900">
              {option.text}
            </option>
          ))}
        </select>
        {/* Custom Dropdown Arrow */}
        <FaChevronDown className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none" />
      </div>
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
};

export default SelectField;
