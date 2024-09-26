import React from "react";
import { cn } from "@/app/lib/utils";

interface BtnItem {
  btntext: string;
  width?: string;
  onClick?: () => void;
  className?: string;
}

export default function CustomButton({
  btntext,
  width,
  onClick,
  className,
}: BtnItem) {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <div>
      <button
        className={cn(
          `rounded bg-primaryColor px-20 py-3 text-xs text-white transition-all hover:border-white hover:shadow-lg hover:shadow-primaryColor hover:outline-offset-8 hover:outline-primaryColor hover:ring-2 hover:ring-primaryColor hover:duration-300 hover:ease-linear`,
          width ? width : "w-auto",
          className,
        )}
        onClick={handleClick}
      >
        {btntext}
      </button>
    </div>
  );
}
