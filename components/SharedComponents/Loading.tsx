import React from "react";

const Loading: React.FC = () => {
  return (
    <div className="flex justify-center gap-10 items-center h-[200px]">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#390089]"></div>
      <p className="ml-4 text-[#390089]">جاري التحميل...</p>
    </div>
  );
};

export default Loading;