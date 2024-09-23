import React from "react";

interface BtnItem {
  btntext: string;
  width?: string;
  onClick?: () => void;
}

export default function CustomButton({ btntext, width, onClick }: BtnItem) {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };
  return (
    <div>
      <button
        className={`mt-4 bg-primaryColor text-white text-xs py-3 px-20 rounded transition-all hover:shadow-primaryColor hover:ease-linear hover:duration-300 hover:shadow-lg hover:outline-primaryColor hover:outline-offset-8 hover:border-white hover:ring-2 hover:ring-primaryColor ${
          width ? width : "w-auto"
        }`}
        onClick={handleClick}
      >
        {btntext}
      </button>
    </div>
  );
}
