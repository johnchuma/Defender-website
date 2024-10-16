import { truncateWords } from "@/app/utils/truncate";
import Image from "next/image";
import DOMPurify from "dompurify";
import Link from "next/link";

interface BlogPostCardProps {
  uuid: string;
  imageUrl: string;
  date: string;
  title: string;
  description: string;
  titleLength?: number; // Optional prop to specify the max length of the title
  descriptionLength?: number; // Optional prop to specify the max length of the description
}

export default function BlogPostCard({
  uuid,
  imageUrl,
  date,
  title,
  description,
  titleLength = 20,
  descriptionLength = 32,
}: BlogPostCardProps) {
  // Strip HTML from description and truncate it
  const sanitizedDescription = DOMPurify.sanitize(description); // Sanitize HTML to avoid XSS
  const plainTextDescription = sanitizedDescription.replace(
    /<\/?[^>]+(>|$)/g,
    "",
  ); // Remove HTML tags
  const truncatedTitle = titleLength
    ? truncateWords(title, titleLength)
    : title;
  const truncatedDescription = descriptionLength
    ? truncateWords(plainTextDescription, descriptionLength)
    : description;

  return (
    <div className="group max-w-sm overflow-hidden rounded-lg bg-white text-sm">
      {/* Image */}
      <div className="relative h-56 w-full">
        <Image
          src={imageUrl}
          alt={title}
          fill
          objectFit="cover"
          className="rounded-lg"
        />
      </div>

      {/* Content */}
      <div className="pt-4">
        {/* Date */}
        <p className="text-sm lowercase tracking-wide text-gray-500">{date}</p>

        {/* Title */}
        <h3 className="mt-2 text-lg font-semibold text-gray-900 underline-offset-8 group-hover:cursor-pointer group-hover:underline">
          <Link href={`/blog/${uuid}`}>{truncatedTitle}</Link>
        </h3>

        {/* Description */}
        <p className="mt-2 text-gray-700">{truncatedDescription}</p>
      </div>
    </div>
  );
}
