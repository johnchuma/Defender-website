import { truncateWords } from "@/app/lib/utils";
import Image from "next/image";

interface BlogPostCardProps {
  imageUrl: string;
  date: string;
  title: string;
  description: string;
  titleLength?: number; // Optional prop to specify the max length of the title
  descriptionLength?: number; // Optional prop to specify the max length of the description
}

export default function BlogPostCard({
  imageUrl,
  date,
  title,
  description,
  titleLength,
  descriptionLength,
}: BlogPostCardProps) {
  const truncatedTitle = titleLength
    ? truncateWords(title, titleLength)
    : title;
  const truncatedDescription = descriptionLength
    ? truncateWords(description, descriptionLength)
    : description;

  return (
    <div className="group max-w-sm overflow-hidden rounded-lg bg-white text-sm">
      {/* Image */}
      <div className="relative h-56 w-full">
        <Image
          src={imageUrl}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>

      {/* Content */}
      <div className="pt-4">
        {/* Date */}
        <p className="text-sm uppercase tracking-wide text-gray-500">{date}</p>

        {/* Title */}
        <h3 className="mt-2 text-lg font-semibold text-gray-900 underline-offset-8 group-hover:underline">
          {truncatedTitle}
        </h3>

        {/* Description */}
        <p className="mt-2 text-gray-700">{truncatedDescription}</p>
      </div>
    </div>
  );
}
