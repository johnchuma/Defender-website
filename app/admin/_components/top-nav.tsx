import Avatar from "@/app/_components/avatar";
import Pill from "@/app/_components/pill";
import { siteConfig } from "@/app/config/site";
import { cn } from "@/app/utils/cn";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function TopNav({ className }: { className?: string }) {
  return (
    <nav className={cn("w-full bg-white py-2 shadow-sm", className)}>
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <Image
            src={siteConfig.logo.url}
            alt={siteConfig.logo.alt}
            width={180}
            height={180}
          />
        </Link>

        {/* Right Icons and Avatar */}
        <div className="inline-flex items-center gap-x-4 divide-x">
          <button
            className="rounded-lg border border-[#E0E0E0] p-2 hover:cursor-pointer hover:bg-gray-50"
            type="button"
          >
            <Image
              src="/images/icons/notification.svg"
              alt="Notification Icon"
              width={20}
              height={20}
            />
          </button>
          <div className="inline-flex gap-x-4 pl-4">
            <Avatar src="/images/author.jpg" size={40} />
            <div>
              <p className="text-sm">Jane Chuwa</p>
              <Pill label="Admin" className="" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default TopNav;
