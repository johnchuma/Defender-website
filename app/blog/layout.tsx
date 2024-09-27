import { Metadata } from "next";
import { siteConfig } from "@/app/config/site";
import HeaderTabs from "./_components/header-tabs";

export const metadata: Metadata = {
  title: `${siteConfig.name}: Blog`,
  description: siteConfig.description,
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="-mt-2 mb-20 min-h-screen space-y-4 bg-white">
      <HeaderTabs />
      {children}
    </div>
  );
}
