"use client";

import { FloatingNav } from "@/app/_components/nav";
import { siteConfig } from "../config/site";
import Sidebar from "./(components)/sideBar";
import { UserProvider } from "./(components)/useContext";

export default function UserDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <UserProvider>
      <section className="bg-[#F2F2F2]">
        <FloatingNav navItems={siteConfig.navItems} />
        <div className="flex">
          <div className="fixed left-5 top-24 hidden h-[85vh] w-[18%] rounded-lg bg-white px-3 shadow-lg md:block">
            <Sidebar />
          </div>
          <div
            id="mobile-sidebar"
            className="fixed left-0 top-0 z-50 hidden h-full pt-24 w-full bg-white p-4 shadow-md md:hidden"
          >
            <Sidebar />
          </div>
          <div className="ms-auto min-h-[90vh] w-full px-5 pt-10 md:w-[82%]">
            {children}
          </div>
        </div>
      </section>
    </UserProvider>
  );
}
