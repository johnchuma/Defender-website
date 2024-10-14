"use client";
import { cn } from "@/app/utils/cn";
import React from "react";
import { useRouter, usePathname } from "next/navigation";
import { IconType } from "react-icons";
import { AiOutlineAppstore, AiOutlineLineChart } from "react-icons/ai";
import { IoSettingsOutline } from "react-icons/io5";
import { CiDollar } from "react-icons/ci";
import { BsBox } from "react-icons/bs";
import {
  PiBookOpenThin,
  PiPhoneLight,
  PiUsersThreeLight,
} from "react-icons/pi";
import { HiOutlineBuildingStorefront } from "react-icons/hi2";

interface NavItemProps {
  label: string;
  route: string;
  icon: IconType;
}

interface SideNavProps {
  className?: string;
}

const navItems: NavItemProps[] = [
  {
    label: "Dashboard",
    route: "/admin",
    icon: AiOutlineAppstore,
  },
  {
    label: "Orders",
    route: "/admin/orders",
    icon: HiOutlineBuildingStorefront,
  },
  { label: "Payments", route: "/admin/payments", icon: CiDollar },
  { label: "Customers", route: "/admin/customers", icon: PiUsersThreeLight },
  { label: "Blog", route: "/admin/blog", icon: PiBookOpenThin },
  {
    label: "Contact & Inquiries",
    route: "/admin/contact-inquiries",
    icon: PiPhoneLight,
  },
  { label: "Inventory", route: "/admin/inventory", icon: BsBox },
  {
    label: "Reports & Analytics",
    route: "/admin/reports-analytics",
    icon: AiOutlineLineChart,
  },
  { label: "Settings", route: "/admin/settings", icon: IoSettingsOutline },
];

function SideBar({ className }: SideNavProps) {
  const router = useRouter();
  const pathname = usePathname();

  // Extract the base route from the pathname
  const baseRoute = pathname.split("/").slice(0, 2).join("/"); // Assuming /admin is the base

  const handleClick = (route: string) => {
    router.push(route);
  };

  return (
    <div
      className={cn("space-y-4 rounded-xl bg-white p-4 shadow-lg", className)}
    >
      {navItems.map((item, index) => {
        const isActive = pathname === item.route;
        const isChild = pathname.startsWith(item.route + "/");
        const isHighlighted = isActive || (item.route !== baseRoute && isChild);

        return (
          <div
            key={index}
            className={cn(
              "flex cursor-pointer items-center space-x-2 rounded-md p-2 transition-all duration-200",
              isHighlighted
                ? "bg-primaryColor text-white"
                : "text-mutedText hover:text-primaryColor",
            )}
            onClick={() => handleClick(item.route)}
          >
            <item.icon size={20} />
            <span>{item.label}</span>
          </div>
        );
      })}
    </div>
  );
}

export default SideBar;
