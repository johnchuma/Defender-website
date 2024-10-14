import React from "react";
import { IconType } from "react-icons";
import { cn } from "../utils/cn";
import { GoArrowDown, GoArrowUp } from "react-icons/go";

interface StatsCardProps {
  title: string;
  stats: string;
  icon?: IconType;
  positive?: boolean;
  description?: string;
  className?: string;
}

function StatsCard({
  title,
  stats,
  icon: Icon, // renaming icon to Icon for proper usage
  positive,
  description,
  className,
}: StatsCardProps) {
  return (
    <div
      className={cn(
        "space-y-4 rounded-lg bg-white px-4 py-2 shadow-md",
        className,
      )}
    >
      <div className="inline-flex w-full items-center justify-between">
        <h3 className="text-sm text-mutedText">{title}</h3>
        {Icon && (
          <div className={cn("rounded-md p-1")}>
            <Icon size={20} />
          </div>
        )}
      </div>

      <div className="text-2xl font-semibold text-black">{stats}</div>
      {description && (
        <div
          className={`inline-flex items-center space-x-2 ${positive ? "text-green-600" : "text-red-600"}`}
        >
          <span
            className={`material-icons ${positive ? "text-green-600" : "text-red-600"}`}
          >
            {positive ? (
              <GoArrowUp className="rounded-full bg-green-100 p-1 text-green-900" />
            ) : (
              <GoArrowDown className="rounded-full bg-red-100 p-1 text-red-900" />
            )}
          </span>
          <span className="text-xs">
            <span className={`${positive ? "text-green-600" : "text-red-600"}`}>
              {description.split(" ")[0]} {/* Percentage */}
            </span>
            <span className="text-mutedText">
              {/* This week/month part */}
              {description.split(" ").slice(1).join(" ")}{" "}
            </span>
          </span>
        </div>
      )}
    </div>
  );
}

export default StatsCard;
