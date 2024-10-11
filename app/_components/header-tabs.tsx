"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "../utils/cn";

interface Tab {
  href: string;
  label: string;
}

interface HeaderTabsProps {
  tabs: Tab[];
  className?: string;
}

export default function HeaderTabs({ tabs, className }: HeaderTabsProps) {
  const pathname = usePathname();

  return (
    <div className="container relative mx-auto">
      <div
        className={cn(
          "scrollbar-hide flex space-x-8 overflow-x-auto bg-white py-2 text-sm xl:justify-center",
          className,
        )}
      >
        {tabs.map((tab) => {
          const isActive = pathname === tab.href;

          return (
            <Link
              key={tab.href}
              href={tab.href}
              className={`relative mx-2 whitespace-nowrap text-gray-600 hover:text-red-500 ${
                isActive ? "font-semibold text-red-500" : ""
              }`}
            >
              {tab.label.toUpperCase()}
              {isActive && (
                <span className="absolute -inset-x-2 -bottom-1.5 mx-auto h-px bg-primaryColor hover:bg-primaryCrimsonColor" />
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
