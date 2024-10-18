"use client";
import { IoSettingsOutline } from "react-icons/io5";
import { AiOutlineAppstore } from "react-icons/ai";
import { TbBuildingStore } from "react-icons/tb";
import { FiLogOut } from "react-icons/fi";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { deleteDataFromLocalStorage } from "@/app/utils/auth";

const Sidebar = () => {
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = () => {
    deleteDataFromLocalStorage("defender_userToken");
    router.push("/");
  };

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
  const bottomLinks = [
    {
      id: "logout",
      label: "Log out",
      icon: <FiLogOut className="text-red-600" />,
      onClick: handleLogout,
      route: "/",
    },
  ];

  return (
    <div className="flex h-full flex-col justify-between py-8">
      <div>
        <ul className="space-y-4">
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
      <ul className="space-y-2">
        {bottomLinks.map((link) => (
          <li key={link.id}>
            <button
              onClick={link.onClick}
              className={`flex cursor-pointer items-center space-x-3 rounded-lg p-3 text-red-600 transition-colors`}
            >
              <span className="text-xl">{link.icon}</span>
              <span className="font-medium">{link.label}</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
