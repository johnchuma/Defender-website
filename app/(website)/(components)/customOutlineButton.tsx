"use client";
import React from "react";
import { cn } from "@/app/lib/utils";

interface BtnItem {
  btntext: string;
  width?: string;
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
}

export default function CustomOutlineButton({
  btntext,
  width,
  disabled = false,
  onClick,
  className,
}: BtnItem) {
  const handleClick = () => {
    if (onClick && !disabled) {
      onClick();
    }
  };

  return (
    <div>
      <button
        className={cn(
          "text-primaryColor border-2 border-primaryColor text-xs py-3 rounded transition-all",
          "hover:shadow-primaryColor hover:ease-linear hover:duration-300 hover:shadow-lg",
          "hover:outline-primaryColor hover:outline-offset-8 hover:ring-2 hover:ring-primaryColor",
          width ? width : "w-auto",
          disabled ? "cursor-not-allowed opacity-50" : "",
          className,
        )}
        onClick={handleClick}
        type="button"
        disabled={disabled}
      >
        {btntext}
      </button>
    </div>
  );
}