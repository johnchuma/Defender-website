import { cn } from "@/app/utils/cn";
import React from "react";

interface CardWrapperProps {
  children: React.ReactNode;
  title?: string;
  className?: string;
}

function CardWrapper({ children, title, className }: CardWrapperProps) {
  return (
    <div
      className={cn("space-y-4 rounded-lg bg-white p-4 shadow-md", className)}
    >
      {title && <h1 className="text-xl font-semibold capitalize">{title}</h1>}
      {children}
    </div>
  );
}

export default CardWrapper;
