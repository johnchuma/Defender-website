import type { Metadata } from "next";
import { FloatingNav } from "./_components/nav";
import { siteConfig } from "./config/site";
import Footer from "./_components/footer/footer";

export const metadata: Metadata = {
  title: `${siteConfig.name}: Home`,
  description: `${siteConfig.description}`,
  icons: {
    icon: "/favicon.ico",
    // shortcut: '/favicon-16x16.png',
    // apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <FloatingNav navItems={siteConfig.navItems} />
      <div className="pt-24">{children}</div>
      <Footer />
    </div>
  );
}
