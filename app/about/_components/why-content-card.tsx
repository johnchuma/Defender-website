import React, { ReactNode } from "react";
import Image, { StaticImageData } from "next/image";
import Title from "@/app/_components/title";

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
  // Determine order based on even or odd index
  const imageOrderClass = index % 2 === 0 ? "md:order-first" : "md:order-last";
  const textOrderClass = index % 2 === 0 ? "md:order-last" : "md:order-first";

  return (
    <div className="container mx-auto grid grid-cols-1 items-center justify-center gap-x-12 gap-y-12 px-4 md:grid-cols-5 md:px-0">
      {/* Image */}
      <div className={`order-last col-span-2 ${imageOrderClass}`}>
        <Image src={imageSrc} alt={`${title} Section Image`} width={500} />
      </div>

      {/* Text Content */}
      <div className={`flex flex-col gap-y-4 md:col-span-3 ${textOrderClass}`}>
        <Title className="text-start text-2xl">{title}</Title>
        <div>{description}</div>
      </div>
    </div>
  );
};

export default WhySection;
