import React, { ReactNode } from "react";
import Image, { StaticImageData } from "next/image";
import Title from "@/app/(website)/_components/title";

interface WhySectionProps {
  title: string;
  description: ReactNode;
  imageSrc: StaticImageData;
  index: number;
}

const WhySection: React.FC<WhySectionProps> = ({
  title,
  description,
  imageSrc,
  index, // Index to check for position swapping
}) => {
  // Determine order based on even or odd index for larger screens
  const imageOrderClass = index % 2 === 0 ? "md:order-first" : "md:order-last";
  const textOrderClass = index % 2 === 0 ? "md:order-last" : "md:order-first";

  return (
    <div className="container mx-auto grid grid-cols-1 gap-y-6 px-4 md:grid-cols-5 md:gap-x-12 md:gap-y-12 md:px-0">
      {/* Title and Description */}
      <div
        className={`flex flex-col gap-y-4 md:col-span-3 md:justify-center ${textOrderClass}`}
      >
        <Title className="text-start text-lg md:text-2xl">{title}</Title>
        <div>{description}</div>
      </div>

      {/* Image */}
      <div className={`order-last col-span-1 ${imageOrderClass} md:col-span-2`}>
        <Image
          src={imageSrc}
          alt={`${title} Section Image`}
          width={500}
          height={400}
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default WhySection;
