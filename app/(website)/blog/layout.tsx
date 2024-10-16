import { Metadata } from "next";
import { siteConfig } from "@/app/config/site";
import HeaderTabs from "../../_components/header-tabs";
import { blogTabs } from "@/app/utils/constants";

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
    // px for mobile devices throughout the blog sections
    // DEMO: Remove the px to observe changes in the layout
    //
    <div className="-mt-2 mb-20 min-h-screen space-y-4 bg-white px-4 md:px-0">
      <HeaderTabs tabs={blogTabs} />
      {children}
    </div>
  );
}
