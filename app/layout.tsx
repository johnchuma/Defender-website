import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { FloatingNav } from "./_components/nav";
import { siteConfig } from "./config/site";
import Footer from "./_components/footer/footer";

const Gilroy = localFont({
  src: [
    {
      path: "./fonts/Gilroy-Bold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/Gilroy-Heavy.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/Gilroy-Light.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "./fonts/Gilroy-Medium.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/Gilroy-Regular.ttf",
      weight: "400",
      style: "normal",
    },
  ],
});

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
    <html lang="en">
      <body className={`${Gilroy.className} bg-slate-100 antialiased`}>
        <FloatingNav navItems={siteConfig.navItems} className="" />
        <div className="pt-24">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
