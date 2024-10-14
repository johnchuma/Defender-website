"use client";
import { IoSettingsOutline } from "react-icons/io5";
import { AiOutlineAppstore } from "react-icons/ai";
import { TbBuildingStore } from "react-icons/tb";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const pathname = usePathname(); 

  const links = [
    {
      id: "myAccount",
      label: "Dashboard",
      icon: <AiOutlineAppstore />,
      route: "/myAccount",
    },
    {
      id: "orders",
      label: "Orders",
      icon: <TbBuildingStore />,
      route: "/orders",
    },
    {
      id: "settings",
      label: "Settings",
      icon: <IoSettingsOutline />,
      route: "/settings",
    },
  ];

  return (
    <div>
      <ul className="space-y-4 pt-9">
        {links.map((link) => (
          <li key={link.id}>
            <Link
              href={link.route}
              className={`flex cursor-pointer items-center space-x-3 rounded-lg p-3 transition-colors ${
                pathname === link.route
                  ? "bg-primaryColor text-white"
                  : "text-mutedText hover:text-primaryColor"
              }`}
            >
              <span className="text-xl">{link.icon}</span>
              <span className="font-medium">{link.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
