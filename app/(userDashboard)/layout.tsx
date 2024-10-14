import type { Metadata } from "next";
import { FloatingNav } from "@/app/_components/nav";
import { siteConfig } from "../config/site";
import Sidebar from "./(components)/sideBar";

export const metadata: Metadata = {
  title: `${siteConfig.name}: Home`,
  description: `${siteConfig.description}`,
  icons: {
    icon: "/favicon.ico",
    // shortcut: '/favicon-16x16.png',
    // apple: '/apple-touch-icon.png',
  },
};

export default function UserDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="bg-[#F2F2F2]">
      <FloatingNav navItems={siteConfig.navItems} />
      <div className="flex">
        <div className="fixed h-[85vh] w-[18%] left-5 top-24 rounded-lg bg-white px-3 shadow-lg">
          <Sidebar />
        </div>
        <div className="ms-auto min-h-[90vh] w-[82%] px-5 pt-10">{children}</div>
      </div>
    </section>
  );
}
