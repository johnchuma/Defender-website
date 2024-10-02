"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/app/lib/utils";
import { siteConfig } from "../config/site";
import SocialLinks from "./social-link";
import { RiArrowDropDownLine } from "react-icons/ri";

interface DropdownItem {
  label: string;
  link: string;
}

interface NavItem {
  name: string;
  link: string;
  icon?: JSX.Element; // Optional icon
  dropdown?: DropdownItem[]; // Optional dropdown
}

const menuVars = {
  initial: { scaleY: 0 },
  animate: {
    scaleY: 1,
    transition: { duration: 0.5, ease: [0.12, 0, 0.39, 0] },
  },
  exit: {
    scaleY: 0,
    transition: {
      delay: 0.5,
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const containerVars = {
  initial: {
    transition: {
      staggerChildren: 0.09,
      staggerDirection: -1,
    },
  },
  open: {
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.09,
      staggerDirection: 1,
    },
  },
};

const menuNavLinkVars = {
  initial: {
    y: "30vh",
    transition: {
      duration: 0.5,
      ease: [0.37, 0, 0.63, 1],
    },
  },
  open: {
    y: 0,
    transition: {
      ease: [0, 0.55, 0.45, 1],
      duration: 0.7,
    },
  },
};

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
    dropdown?: { label: string; link: string }[];
  }[];
  className?: string;
}) => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);
  const [atTop, setAtTop] = useState(true); // New state to track if we are at the top
  const [wishlistCount] = useState(1); // Example wishlist count
  const [hoveredItem, setHoveredItem] = useState<string | null>(null); // Tracks hovered item

  const toggleMenu = () => setOpen((prevOpen) => !prevOpen);

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
    <>
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
            "max-w-screen container fixed inset-x-0 top-2 z-[5000] mx-auto grid grid-cols-2 items-center justify-center rounded-2xl bg-white px-10 py-3 lg:grid-cols-3 2xl:top-4",
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
          <div className="hidden w-full items-center justify-center gap-x-12 lg:inline-flex">
            {navItems.map((navItem: NavItem, idx: number) => (
              <div
                key={idx}
                className="relative"
                onMouseEnter={() => setHoveredItem(navItem.name)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                {/* If dropdown exists, render without href */}
                {!navItem.dropdown ? (
                  <Link
                    key={`link=${idx}`}
                    href={navItem.link}
                    className={cn(
                      "relative text-neutral-600 hover:text-primaryColor",
                      navItem.link === "/" && pathname === "/"
                        ? "font-medium text-primaryColor hover:text-primaryCrimsonColor"
                        : navItem.link !== "/" &&
                            pathname.includes(navItem.link)
                          ? "font-medium text-primaryColor hover:text-primaryCrimsonColor"
                          : "text-neutral-600 hover:text-primaryColor",
                    )}
                  >
                    <span className="block sm:hidden">{navItem.icon}</span>
                    <span className="hidden text-base sm:block">
                      {navItem.name}
                    </span>
                    {/* Underline below the pathname equals navItem.link */}
                    {navItem.link === "/" && pathname === "/" && (
                      <span className="absolute -inset-x-2 -bottom-1.5 mx-auto h-px bg-primaryColor hover:bg-primaryCrimsonColor"></span>
                    )}
                    {navItem.link !== "/" &&
                      pathname.includes(navItem.link) && (
                        <span className="absolute -inset-x-2 -bottom-1.5 mx-auto h-px bg-primaryColor hover:bg-primaryCrimsonColor"></span>
                      )}
                  </Link>
                ) : (
                  // If dropdown exists, no href, just display the name and handle dropdown
                  <div
                    className={cn(
                      "relative flex cursor-pointer items-center justify-center gap-x-2 text-neutral-600 hover:text-primaryColor",
                      hoveredItem === navItem.name
                        ? "font-medium text-primaryColor"
                        : "text-neutral-600",
                    )}
                  >
                    <div>
                      <span className="block sm:hidden">{navItem.icon}</span>
                      <span className="hidden text-base sm:block">
                        {navItem.name}
                      </span>
                    </div>
                    <RiArrowDropDownLine />
                  </div>
                )}

                {/* Dropdown for items with dropdown content (e.g. Products) */}
                {navItem.dropdown && (
                  <AnimatePresence>
                    {hoveredItem === navItem.name && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute left-0 top-full mt-2 w-48 rounded-lg bg-white shadow-lg"
                      >
                        <ul className="space-y-4 p-4">
                          {navItem.dropdown.map(
                            (item: DropdownItem, i: number) => (
                              <li key={i}>
                                <Link
                                  href={item.link}
                                  className="block text-sm text-gray-600 hover:text-primaryColor"
                                >
                                  {item.label}
                                </Link>
                              </li>
                            ),
                          )}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
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
            <div
              className="relative w-fit rounded-full bg-primaryColor p-2 shadow-sm shadow-primaryScarletColor"
              onClick={toggleMenu}
            >
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

      {/* ========== ===== ===== =====  */}
      {/* ===== MENU OVERLAY ===== */}
      {/* ========== ===== ===== =====  */}
      <AnimatePresence>
        {open && (
          <motion.div
            variants={menuVars}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed left-0 top-0 z-[5000] h-screen w-full origin-top bg-[#292929]"
          >
            <div className="container mx-auto flex h-full flex-col">
              {/* Background icons scattered */}
              <div className="absolute inset-0 -z-10">
                <div
                  className="h-full w-full bg-center bg-no-repeat"
                  style={{
                    backgroundImage: `
                      url('/images/icons/flower-tulip.svg'),
                      url('/images/icons/cactus.svg'),
                      url('/images/icons/flower-abstract.svg'),
                      url('/images/icons/crescent-moon.svg'),
                      url('/images/icons/triangle-prism.svg'),
                      url('/images/icons/circle-tube.svg'),
                      url('/images/icons/bubble.svg'),
                      url('/images/icons/bookmark.svg')`,
                    backgroundPosition: `
                        87% 80%,
                        90% 25%,
                        65% 50%,
                        5% 90%,
                        10% 54%,
                        34% 30%,
                        50% 10%,
                        45% 98%`,
                    opacity: 0.55,
                  }}
                />
              </div>

              {/* Nav top */}
              <div className="mt-2 flex items-center justify-between px-6 py-3 2xl:mt-4">
                {/* Logo */}
                <Link href="/" onClick={() => setOpen(false)}>
                  <Image
                    src={siteConfig.logo.url}
                    alt={siteConfig.logo.alt}
                    width={180}
                    height={180}
                  />
                </Link>

                {/* close icon */}
                <motion.div
                  variants={containerVars}
                  initial="initial"
                  animate="open"
                  exit="initial"
                  className="overflow-hidden"
                >
                  <motion.div variants={menuNavLinkVars}>
                    <Image
                      src="/images/icons/close-nav.svg"
                      alt="Close menu button"
                      width={60}
                      height={60}
                      className="hover:cursor-pointer"
                      onClick={toggleMenu}
                    />
                  </motion.div>
                </motion.div>
              </div>

              <div className="flex h-full flex-col items-center justify-center gap-y-8">
                <motion.div
                  variants={containerVars}
                  initial="initial"
                  animate="open"
                  exit="initial"
                  className="flex flex-col items-center gap-x-12 gap-y-8 overflow-hidden md:flex-row"
                >
                  {siteConfig.extraNavItems.map((link, index) => {
                    return (
                      <MenuNavLink
                        onClick={() => setOpen(false)}
                        key={index}
                        title={link.title}
                        href={link.href}
                      />
                    );
                  })}
                </motion.div>
                <motion.div
                  variants={containerVars}
                  initial="initial"
                  animate="open"
                  exit="initial"
                  className="overflow-hidden"
                >
                  <motion.div className="" variants={menuNavLinkVars}>
                    <SocialLinks />
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

interface MenuNavLinkProps {
  title: string;
  href: string;
  onClick?: () => void; // Optional, in case you don't always want an onClick
}

const MenuNavLink: React.FC<MenuNavLinkProps> = ({ title, href, onClick }) => {
  return (
    <motion.div variants={menuNavLinkVars} className="">
      <Link
        href={href}
        onClick={onClick} // This will trigger the menu toggle
        className="text-2xl font-semibold uppercase text-white hover:text-primaryColor"
      >
        {title}
      </Link>
    </motion.div>
  );
};
