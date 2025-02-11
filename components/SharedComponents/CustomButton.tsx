import Image from "next/image";

interface ButtonProps {
  type?: "button" | "submit" | "reset";
  label: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  className?: string;
  isLoading?: boolean; // New prop for loading state
  icon?: string;
}

const CustomButton: React.FC<ButtonProps> = ({
  type = "button",
  label,
  onClick,
  disabled = false,
  className = "",
  isLoading = false,
  icon
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || isLoading}
      className={`min-w-[148px] w-[243px] flex items-center justify-center gap-2 rounded-[500px] px-[45.84px] py-[21.44px] font-medium text-white transition-all 
          ${
            disabled || isLoading ? "bg-[#E0E0E0] text-[#C9C9C9]" : "bg-primary"
          } 
          ${className}`}
    >
      {icon && <Image src={icon} alt="icon" width={10} height={10}/>}
      {label}
      {isLoading && (
        <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></span>
      )}
    </button>
  );
};

export default CustomButton;
