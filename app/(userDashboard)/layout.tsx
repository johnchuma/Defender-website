import type { Metadata } from "next";
import { FloatingNav } from "../(website)/_components/nav";
import { siteConfig } from "../(website)/config/site";
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
    <section className="flex">
      <Sidebar />
        <FloatingNav navItems={siteConfig.navItems} />
        <div className="pt-24">{children}</div>
    </section>
  );
}
