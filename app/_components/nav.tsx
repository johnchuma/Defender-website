"use client";
import React, { useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/app/lib/utils";
import Link from "next/link";
import { siteConfig } from "../config/site";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const pathname = usePathname();
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);
  const [atTop, setAtTop] = useState(true); // New state to track if we are at the top

  // Wishlist count state
  const [wishlistCount, setWishlistCount] = useState(1); // Set initial wishlist count

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      const direction = current! - scrollYProgress.getPrevious()!;

      if (current < 0.05) {
        setAtTop(true); // We are at the top
      } else {
        setAtTop(false); // We are not at the top
      }

      if (direction < 0) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "max-w-screen container fixed inset-x-0 top-2 z-[5000] mx-auto grid grid-cols-3 items-center justify-center rounded-2xl bg-white px-10 py-3 2xl:top-4",
          atTop
            ? ""
            : "border border-transparent shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]",
          className,
        )}
      >
        {/* Logo */}
        <Link href="/">
          <Image
            src={siteConfig.logo.url}
            alt={siteConfig.logo.alt}
            width={180}
            height={180}
          />
        </Link>

        {/* Nav items */}
        <div className="inline-flex w-full items-center justify-center gap-x-12">
          {navItems.map((navItem: any, idx: number) => (
            <Link
              key={`link=${idx}`}
              href={navItem.link}
              className={cn(
                "relative text-neutral-600 hover:text-primaryColor",
                navItem.link === "/" && pathname === "/"
                  ? "font-medium text-primaryColor hover:text-primaryCrimsonColor"
                  : navItem.link !== "/" && pathname.includes(navItem.link)
                    ? "font-medium text-primaryColor hover:text-primaryCrimsonColor"
                    : "text-neutral-600 hover:text-primaryColor",
              )}
            >
              <span className="block sm:hidden">{navItem.icon}</span>
              <span className="hidden text-base sm:block">{navItem.name}</span>
              {/* Underline below the pathname equals navItem.link */}
              {navItem.link === "/" && pathname === "/" && (
                <span className="absolute -inset-x-2 -bottom-1.5 mx-auto h-px bg-primaryColor hover:bg-primaryCrimsonColor"></span>
              )}
              {navItem.link !== "/" && pathname.includes(navItem.link) && (
                <span className="absolute -inset-x-2 -bottom-1.5 mx-auto h-px bg-primaryColor hover:bg-primaryCrimsonColor"></span>
              )}
            </Link>
          ))}

          {/* Wishlist with Badge */}
          <div
            className={cn(
              "relative flex w-fit items-center justify-center",
              pathname.includes("/wishlist")
                ? "font-medium text-primaryColor hover:text-primaryCrimsonColor"
                : "text-neutral-600 hover:text-primaryColor",
            )}
          >
            <Link href="/wishlist">
              <span className="relative">
                Wishlist
                {pathname.includes("/wishlist") && (
                  <span className="absolute -inset-x-2 -bottom-1.5 mx-auto h-px bg-primaryColor hover:bg-primaryCrimsonColor"></span>
                )}
              </span>
            </Link>
            {wishlistCount > 0 && (
              <div className="absolute -right-6 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-primaryColor text-xs text-white">
                {wishlistCount}
              </div>
            )}
          </div>
        </div>

        {/* Hamburger menu */}
        <div className="justify-self-end">
          <div className="relative w-fit rounded-full bg-primaryColor p-2 shadow-sm shadow-primaryScarletColor">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="white"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
