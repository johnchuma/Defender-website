"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "../../config/site";
import Title from "../title";
import FooterLinks from "./footer-links";
import SocialLinks from "../social-link";

// images
import GoogleBadge from "@/public/images/google-play.png";
import AppleBadge from "@/public/images/apple-store.png";
import CustomButton from "@/app/(components)/customButton";

function Footer() {
  const homeLinks = [
    { label: "Overview", href: "/overview" },
    { label: "Products", href: "/products" },
    { label: "Testimonials", href: "/testimonials" },
    { label: "Features", href: "/features" },
  ];

  const productsLinks = [
    { label: "User Guides", href: "/" },
    { label: "SmartWatch", href: "/" },
    { label: "Comparison Tool", href: "/" },
    { label: "Features", href: "/" },
    { label: "Specification", href: "/" },
  ];

  const ecommerceLinks = [
    { label: "Wishlist", href: "/" },
    { label: "User Account", href: "/" },
    { label: "Order Tracking", href: "/" },
    { label: "Payment Options", href: "/" },
  ];

  const supportLinks = [
    { label: "FAQs", href: "/" },
    { label: "Contact Form", href: "/" },
    { label: "Live Chat", href: "/" },
  ];

  const careerLinks = [
    { label: "Current Job", href: "/" },
    { label: "Why Join Us", href: "/" },
    { label: "Internships Programs", href: "/" },
  ];

  return (
    <main className="bg-[#292929] py-20 text-white">
      <div className="container mx-auto flex flex-col gap-y-10">
        {/* ############## Logo row ############## */}
        <div className="">
          <Image
            src={siteConfig.logo.url}
            alt={siteConfig.logo.alt}
            width={180}
            height={180}
          />
        </div>

        {/* ############## Link & Form Row ############## */}
        <div className="flex items-start justify-between gap-x-12 px-4">
          {/* ====== Link section ======= */}
          <div className="flex w-7/12 flex-col gap-y-12">
            <div className="flex items-start justify-between gap-x-4">
              <FooterLinks title="Home" links={homeLinks} />
              <FooterLinks title="Products" links={productsLinks} />
              <FooterLinks title="E-commerce" links={ecommerceLinks} />
              <FooterLinks title="Support" links={supportLinks} />
              <FooterLinks title="Career" links={careerLinks} />
            </div>

            {/* Store Icons */}
            <div className="inline-flex gap-x-4">
              <Image src={GoogleBadge} alt="Get it on Google Play" />
              <Image src={AppleBadge} alt="Get it on App Store" />
            </div>
          </div>

          {/* ====== form section ======= */}
          <div className="flex w-5/12 flex-col gap-y-8">
            {/* Form card */}
            <div className="flex flex-col gap-y-4 rounded-xl bg-[#303030] px-6 py-8">
              <div className="text-sm">
                <Title className="pb-2 text-start text-lg">
                  Newsletter Signup
                </Title>
                <div>
                  Subscribe to our newsletter to receive updates and promotions
                </div>
              </div>

              {/* Input and button */}
              <div className="inline-flex gap-x-4 text-sm">
                <div className="inline-flex w-3/4 items-center gap-x-3 rounded-lg bg-white px-4 py-2 shadow-md">
                  {/* Search icon */}
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M8.1665 0.666748C4.02437 0.666748 0.666504 4.02461 0.666504 8.16675C0.666504 12.3089 4.02437 15.6667 8.1665 15.6667C9.93735 15.6667 11.5649 15.053 12.8479 14.0267L15.9106 17.0893C16.236 17.4148 16.7637 17.4148 17.0891 17.0893C17.4145 16.7639 17.4145 16.2363 17.0891 15.9108L14.0264 12.8482C15.0528 11.5651 15.6665 9.93759 15.6665 8.16675C15.6665 4.02461 12.3086 0.666748 8.1665 0.666748ZM2.33317 8.16675C2.33317 4.94509 4.94484 2.33341 8.1665 2.33341C11.3882 2.33341 13.9998 4.94509 13.9998 8.16675C13.9998 11.3884 11.3882 14.0001 8.1665 14.0001C4.94484 14.0001 2.33317 11.3884 2.33317 8.16675Z"
                      fill="#7A7A7A"
                    />
                  </svg>
                  {/* input */}
                  <input
                    id="email"
                    type="email"
                    placeholder="ahmadhamis45@gmail.com"
                    className="w-full border-none text-gray-500 focus:outline-none"
                  />
                </div>
                {/* Submit button */}
                <CustomButton
                  btntext="Sign Up"
                  onClick={() => console.log("Footer sign up form submitted")}
                  className="w-fit px-4 py-2 text-base font-medium capitalize"
                />
              </div>
            </div>

            {/* Social media */}
            <div className="w-fit">
              <div className="pb-4 font-semibold">Follow us on</div>
              <SocialLinks />
            </div>
          </div>
        </div>

        {/* ############## Divider ############## */}
        <hr />

        {/* ############## Extras ############## */}
        <div className="flex flex-row gap-x-4 divide-x text-xs">
          <Link href="/" className="underline-offset-4 hover:underline">
            Sitemap
          </Link>
          <Link href="/" className="pl-4 underline-offset-4 hover:underline">
            Customer Support Link
          </Link>
          <Link href="/" className="pl-4 underline-offset-4 hover:underline">
            Copyright Information
          </Link>
          <Link href="/" className="pl-4 underline-offset-4 hover:underline">
            Privacy Policy
          </Link>
          <Link href="/" className="pl-4 underline-offset-4 hover:underline">
            Terms and Conditions
          </Link>
        </div>
      </div>
    </main>
  );
}

export default Footer;
