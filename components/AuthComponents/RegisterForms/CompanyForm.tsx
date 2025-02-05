import CustomButton from "@/components/SharedComponents/CustomButton";
import InputField from "@/components/SharedComponents/InputField";
import React, { useState, useEffect } from "react";

const CompanyForm = () => {
  // Define state for each input field
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [taxName, setTaxName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [taxNumber, setTaxNumber] = useState("");
  const [taxAddress, setTaxAddress] = useState("");

  // State to manage the disabled state of the button
  const [isDisabled, setIsDisabled] = useState(true);

  // Effect to check if any input is empty
  useEffect(() => {
    const isAnyInputEmpty =
      !name ||
      !email ||
      !phone ||
      !taxName ||
      !password ||
      !confirmPassword ||
      !taxNumber ||
      !taxAddress;
    setIsDisabled(isAnyInputEmpty);
  }, [
    name,
    email,
    phone,
    taxName,
    password,
    confirmPassword,
    taxNumber,
    taxAddress,
  ]);

  // Handler for form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log("Form submitted:", {
      name,
      email,
      phone,
      taxName,
      password,
      confirmPassword,
      taxNumber,
      taxAddress,
    });
  };

  return (
    <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
      {/* Form Input Fields */}
      <div className="flex flex-col md:flex-row items-center gap-[132px]">
        {/* Right side section */}
        <div className="flex flex-col gap-8 w-full">
          <InputField
            id="name"
            label="الإسم"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="اسم"
          />
          <InputField
            id="email"
            label="البريد الإلكتروني"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="أدخل البريد الالكتروني"
          />
          <InputField
            id="phone"
            isPhoneInput={true}
            label="رقم الجوال"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="512345678"
          />
          <InputField
            id="taxname"
            label="الاسم الضريبي"
            value={taxName}
            onChange={(e) => setTaxName(e.target.value)}
          />
        </div>
        {/* Left side section */}
        <div className="flex flex-col gap-8 w-full">
          <InputField
            id="password"
            label="كلمة المرور"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="أدخل كلمة المرور"
            type="password"
          />
          <InputField
            id="confirmpassword"
            label="تأكيد كلمة المرور"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="أدخل كلمة المرور"
            type="password"
          />
          <InputField
            id="taxnumber"
            label="الرقم الضريبي"
            value={taxNumber}
            onChange={(e) => setTaxNumber(e.target.value)}
          />
          <InputField
            id="taxaddress"
            label="العنوان الضريبي"
            value={taxAddress}
            onChange={(e) => setTaxAddress(e.target.value)}
          />
        </div>
      </div>
      {/* Submit Button */}
      <div>
        <CustomButton
          label="إنشاء"
          type="submit"
          className="mt-6"
          disabled={isDisabled}
        />
      </div>
    </form>
  );
};

export default CompanyForm;
