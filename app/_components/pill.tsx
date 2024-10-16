import React from "react";
import { cn } from "../utils/cn";

interface PillProps {
  label: string; // text displayed inside the pill
  className?: string; // allows additional custom styling
}

const Pill: React.FC<PillProps> = ({ label, className }) => {
  return (
    <div
      className={cn(
        "w-fit rounded-full border bg-blue-500 px-2 py-1 text-center text-xs capitalize text-white",
        className,
      )}
    >
      {label}
    </div>
  );
};

export default Pill;
