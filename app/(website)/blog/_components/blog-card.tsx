import Link from "next/link";
import React from "react";
import { truncateWords } from "@/app/lib/utils"; // Adjust the import path as necessary

interface BlogCardProps {
  title: string;
  description: string;
  link: string;
  backgroundImage: string;
  large?: boolean;
  truncateTitleLength?: number;
  truncateDescriptionLength?: number;
}

const BlogCard: React.FC<BlogCardProps> = ({
  title,
  description,
  link,
  backgroundImage,
  large = false,
  truncateTitleLength,
  truncateDescriptionLength,
}) => {
  const truncatedTitle = truncateTitleLength
    ? truncateWords(title, truncateTitleLength)
    : title;
  const truncatedDescription = truncateDescriptionLength
    ? truncateWords(description, truncateDescriptionLength)
    : description;

  return (
    <div
      className={`relative ${large ? "col-span-2 min-h-full" : "row-span-1 h-[35vh]"} group rounded-lg bg-cover bg-center bg-no-repeat`}
      style={{
        backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0) 50%), url(${backgroundImage})`,
      }}
    >
      <div className="absolute inset-0 text-white">
        <div
          className={`flex h-full flex-col items-start justify-end gap-y-1 md:gap-y-2 ${large ? "px-10 pb-16" : "px-5 pb-8"}`}
        >
          <Link
            href={link}
            className="cursor-pointer self-start text-lg font-semibold underline-offset-4 group-hover:underline md:text-xl"
          >
            {truncatedTitle}
          </Link>
          <div className="">{truncatedDescription}</div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
