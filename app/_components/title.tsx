import React from "react";
import { cn } from "@/app/utils/cn";

interface TitleProps {
  children: React.ReactNode;
  className?: string; // Optional prop to extend or override styles
}

const Title: React.FC<TitleProps> = ({ children, className }) => {
  return (
    <div
      className={cn(
        "text-center text-2xl font-semibold capitalize md:text-3xl",
        className,
      )}
    >
      {children}
    </div>
  );
};

export default Title;
