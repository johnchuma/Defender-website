import React from "react";

interface BtnItem {
  btntext: string;
  paddingX?: string;
  onClick?: () => void;
}

export default function CustomButton({ btntext, paddingX, onClick }: BtnItem) {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };
  return (
    <div>
      <button
        className={`mt-4 bg-primaryColor border-2 border-primaryColor text-white text-xs py-3 ${paddingX??"px-20"} rounded transition-all hover:shadow-primaryColor hover:ease-linear hover:duration-300 hover:shadow-lg hover:outline-primaryColor hover:outline-offset-8 hover:ring-2 hover:ring-primaryColor `}
        onClick={handleClick}
      >
        {btntext}
      </button>
    </div>
  );
}