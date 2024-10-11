import { Metadata } from "next";
import { siteConfig } from "../config/site";
import SideBar from "./_components/side-bar";
import TopNav from "./_components/top-nav";

export const metadata: Metadata = {
  title: `${siteConfig.name}: Home`,
  description: `${siteConfig.description}`,
  icons: {
    icon: "/favicon.ico",
  },
};

export default function AdminDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // TODO: Add loading indicators for dashboard.
    <main className="space-y-2 bg-gray-50">
      <TopNav className="sticky top-0 z-[5000] h-fit pr-4" />
      <section className="flex px-2">
        <SideBar className="sticky top-20 h-min max-h-full w-1/5 grow-0" />{" "}
        <div className="min-h-screen w-full px-8 py-4">{children}</div>
      </section>
    </main>
  );
}
