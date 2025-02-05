interface ButtonProps {
  type?: "button" | "submit" | "reset";
  label: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void; // Accept event object
  disabled?: boolean;
  className?: string;
}

const CustomButton: React.FC<ButtonProps> = ({
  type = "button",
  label,
  onClick,
  disabled = false,
  className = "",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`min-w-[148px] w-[243px] rounded-[500px] px-[45.84px] py-[21.44px] font-medium text-white transition-all 
          ${disabled ? "bg-[#E0E0E0] text-[#C9C9C9]" : "bg-primary"} 
          ${className}`}
    >
      {label}
    </button>
  );
};

export default CustomButton;
