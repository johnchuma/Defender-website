"use client";

import { FloatingNav } from "@/app/_components/nav";
import { siteConfig } from "../config/site";
import Sidebar from "./(components)/sideBar";
import { UserProvider } from "./(components)/useContext"; 

export default function UserDashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <UserProvider>
      <section className="bg-[#F2F2F2]">
        <FloatingNav navItems={siteConfig.navItems} />
        <div className="flex">
          <div className="fixed left-5 top-24 h-[85vh] w-[18%] rounded-lg bg-white px-3 shadow-lg">
            <Sidebar />
          </div>
          <div className="ms-auto min-h-[90vh] w-[82%] px-5 pt-10">
            {children}
          </div>
        </div>
      </section>
    </UserProvider>
  );
}
