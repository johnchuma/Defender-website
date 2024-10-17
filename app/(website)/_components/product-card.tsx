import Image, { StaticImageData } from "next/image";
import CustomButton from "@/app/_components/customButton";

interface ProductCardProps {
  image: StaticImageData;
  altText: string;
  productName: string;
  price: string;
  learnMoreText?: string;
  onLearnMoreClick?: () => void;
}

export default function ProductCard({
  image,
  altText,
  productName,
  price,
  learnMoreText = "Learn More",
  onLearnMoreClick,
}: ProductCardProps) {
  return (
    <div className="flex flex-col gap-y-4">
      <div className="rounded-2xl bg-[#F2F2F2]/90 px-12 py-6 2xl:px-16">
        <div className="relative md:max-h-80 md:min-h-72 md:min-w-72 md:max-w-80">
          <Image src={image} alt={altText} />
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex flex-col">
          <div>{productName}</div>
          <div className="font-semibold">{price}</div>
        </div>

        {/* Learn More Button */}
        <CustomButton
          btntext={learnMoreText}
          onClick={onLearnMoreClick}
          className="w-fit px-4 py-2 text-base font-medium capitalize"
        />
      </div>
    </div>
  );
}
