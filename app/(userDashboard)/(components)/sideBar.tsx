"use client";
import React, { useState } from "react";
import { IoSettingsOutline } from "react-icons/io5";
import { AiOutlineAppstore } from "react-icons/ai";
import { TbBuildingStore } from "react-icons/tb";
import { useRouter } from "next/navigation"; 

const Sidebar = () => {
  const [activeLink, setActiveLink] = useState<string>("myAccount");
  const router = useRouter(); 

  const links = [
    { id: "myAccount", label: "Dashboard", icon: <AiOutlineAppstore />, route: "/myAccount" },
    { id: "orders", label: "Orders", icon: <TbBuildingStore />, route: "/orders" },
    { id: "settings", label: "Settings", icon: <IoSettingsOutline />, route: "/settings" },
  ];

  const handleLinkClick = (id: string, route: string) => {
    setActiveLink(id); 
    router.push(route); 
  };

  return (
    <div className="flex">
      <div className="fixed bottom-5 left-5 top-24 w-64 rounded-lg bg-white p-5 shadow-lg md:w-48 lg:w-64">
        <ul className="space-y-4">
          {links.map((link) => (
            <li
              key={link.id}
              className={`flex cursor-pointer items-center space-x-3 rounded-lg p-3 transition-colors ${activeLink === link.id ? "bg-primaryColor text-white" : "text-mutedText hover:text-primaryColor"}`}
              onClick={() => handleLinkClick(link.id, link.route)}
            >
              <span className="text-xl">{link.icon}</span>
              <span className="font-medium">{link.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
