"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { cn } from "@/app/utils/cn";
import { siteConfig } from "@/app/config/site";
import SocialLinks from "@/app/(website)/_components/social-link";
import { RiArrowDropDownLine } from "react-icons/ri";
import { useWishlist } from "@/app/(website)/(components)/WishlistContext";
import { getDataFromLocalStorage } from "@/app/utils/auth";

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

export const UserFloatingNav = ({
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
  const { wishlistCount } = useWishlist();
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = getDataFromLocalStorage("defender_userToken");
    setIsLoggedIn(!!token); // If token exists, set isLoggedIn to true
  }, []);

  const toggleMenu = () => setOpen((prevOpen) => !prevOpen);

  const handleAccountClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (isLoggedIn) {
      router.push("/myAccount");
    } else {
      router.push("/login");
    }
  };

  return (
    <>
      <div
        className={cn(
          "max-w-screen sticky inset-x-0 top-6 z-[5000] mx-4 grid grid-cols-2 items-center justify-center rounded-2xl bg-white px-8 py-3 md:container md:inset-x-0 md:mx-auto lg:grid-cols-3",
          "shadow-lg",
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
              {!navItem.dropdown ? (
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
                  <span className="hidden text-base sm:block">
                    {navItem.name}
                  </span>
                  {navItem.link === "/" && pathname === "/" && (
                    <span className="absolute -inset-x-2 -bottom-1.5 mx-auto h-px bg-primaryColor hover:bg-primaryCrimsonColor"></span>
                  )}
                  {navItem.link !== "/" && pathname.includes(navItem.link) && (
                    <span className="absolute -inset-x-2 -bottom-1.5 mx-auto h-px bg-primaryColor hover:bg-primaryCrimsonColor"></span>
                  )}
                </Link>
              ) : (
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
              {/* Dropdown for items with dropdown content */}
              {navItem.dropdown && hoveredItem === navItem.name && (
                <div className="absolute left-0 top-full mt-2 w-48 rounded-lg bg-white shadow-lg">
                  <ul className="space-y-4 p-4">
                    {navItem.dropdown.map((item: DropdownItem, i: number) => (
                      <li key={i}>
                        <Link
                          href={item.link}
                          className="block text-sm text-gray-600 hover:text-primaryColor"
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
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

          {/* { My Account } */}
          <span
            onClick={handleAccountClick}
            className={cn(
              "relative cursor-pointer whitespace-nowrap text-base",
              pathname.includes("/myAccount") ||
                pathname.includes("/orders") ||
                pathname.includes("/settings")
                ? "text-primaryColor"
                : "text-gray-600",
              "hover:text-primaryColor",
            )}
          >
            My Account
            {(pathname.includes("/myAccount") ||
              pathname.includes("/orders") ||
              pathname.includes("/settings")) && (
              <span className="absolute -inset-x-2 -bottom-1.5 mx-auto h-px bg-primaryColor hover:bg-primaryCrimsonColor"></span>
            )}
          </span>
        </div>

        {/* Hamburger menu */}
        <div className="justify-self-end">
          <motion.div
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
          </motion.div>
        </div>
      </div>

      {/* ===== MENU OVERLAY ===== */}
      {open && (
        <div className="fixed left-0 top-0 z-[5000] h-screen w-full origin-top bg-[#292929]">
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
              <Image
                src="/images/icons/close-nav.svg"
                alt="Close menu button"
                width={60}
                height={60}
                className="hover:cursor-pointer"
                onClick={toggleMenu}
              />
            </div>

            <div className="flex h-full flex-col items-center justify-center gap-y-8">
              <div className="flex flex-col items-center gap-x-12 gap-y-8 md:flex-row">
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
              </div>
              <div className="">
                <SocialLinks />
              </div>
            </div>
          </div>
        </div>
      )}
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
    <div>
      <Link
        href={href}
        onClick={onClick}
        className="text-2xl font-semibold uppercase text-white hover:text-primaryColor"
      >
        {title}
      </Link>
    </div>
  );
};
