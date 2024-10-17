"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/app/config/site";
import Title from "@/app/_components/title";
import FooterLinks from "./footer-links";
import SocialLinks from "../social-link";
import CustomButton from "@/app/_components/customButton";
import { footerTitleLinks } from "@/app/utils/constants";

// images
import GoogleBadge from "@/public/images/google-play.png";
import AppleBadge from "@/public/images/apple-store.png";

function Footer() {
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
        <div className="grid grid-cols-5 items-center justify-between gap-12">
          <div className="col-span-5 px-4 lg:col-span-3">
            <div className="grid w-full grid-cols-3 gap-y-12 md:grid-cols-5">
              {Object.entries(footerTitleLinks).map(([title, links]) => (
                <FooterLinks key={title} title={title} links={links} />
              ))}
            </div>
          </div>

          {/* ############## Form Row ############## */}
          <div className="col-span-5 mx-4 md:mx-0 lg:col-span-2">
            <div className="flex flex-col gap-y-4 rounded-xl bg-[#303030] px-6 py-8">
              <div className="text-sm">
                <Title className="pb-2 text-start text-lg">
                  Newsletter Signup
                </Title>
                <div>
                  Subscribe to our newsletter to receive updates and promotions
                </div>
              </div>
              <div className="inline-flex gap-x-2 text-sm md:gap-x-4">
                <div className="inline-flex w-3/4 items-center gap-x-1 rounded-lg bg-white px-3 shadow-md md:gap-x-3 md:px-4">
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
                    className="w-full border-none text-gray-500 focus:border-none focus:outline-none focus:ring-0"
                  />
                </div>
                {/* Submit button */}
                <CustomButton
                  btntext="Sign Up"
                  onClick={() => console.log("Footer sign up form submitted")}
                  className="w-fit rounded-xl px-2 py-2 text-sm font-medium capitalize md:px-4 md:text-base"
                />
              </div>
            </div>
          </div>
        </div>

        {/* ############## Store and Social Icons ############## */}
        <div className="grid grid-cols-5 place-content-between place-items-center gap-12 px-4 md:px-0 lg:place-items-start">
          <div className="col-span-5 self-end md:col-span-2 md:px-4 lg:col-span-3">
            <div className="inline-flex gap-x-4">
              <Image
                src={GoogleBadge}
                alt="Get it on Google Play"
                className="hover:scale-105 hover:cursor-pointer active:scale-95"
              />
              <Image
                src={AppleBadge}
                alt="Get it on App Store"
                className="hover:scale-105 hover:cursor-pointer active:scale-95"
              />
            </div>
          </div>
          <div className="col-span-5 md:col-span-3 lg:col-span-2">
            <div className="w-fit">
              <div className="pb-4 font-semibold">Follow us on</div>
              <SocialLinks />
            </div>
          </div>
        </div>

        {/* ############## Divider ############## */}
        <hr className="mx-4 md:mx-0" />

        {/* ############## Extras ############## */}
        <div className="grid grid-cols-3 place-content-center gap-x-4 gap-y-4 px-4 text-base md:px-0 lg:flex lg:flex-row lg:place-content-start lg:divide-x">
          <Link href="/" className="underline-offset-4 hover:underline">
            Sitemap
          </Link>
          <Link href="/" className="underline-offset-4 hover:underline lg:pl-4">
            Customer Support Link
          </Link>
          <Link href="/" className="underline-offset-4 hover:underline lg:pl-4">
            Copyright Information
          </Link>
          <Link href="/" className="underline-offset-4 hover:underline lg:pl-4">
            Privacy Policy
          </Link>
          <Link href="/" className="underline-offset-4 hover:underline lg:pl-4">
            Terms and Conditions
          </Link>
        </div>
      </div>
    </main>
  );
}

export default Footer;
