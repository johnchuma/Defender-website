"use client";
import React from "react";
import { cn } from "@/app/utils/cn";

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
          "rounded border-2 border-primaryColor py-3 text-xs text-primaryColor transition-all",
          "hover:shadow-lg hover:shadow-primaryColor hover:duration-300 hover:ease-linear",
          "hover:outline-offset-8 hover:outline-primaryColor hover:ring-2 hover:ring-primaryColor",
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
