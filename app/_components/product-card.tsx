import Image, { StaticImageData } from "next/image";

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
      <div className="rounded-2xl bg-[#F2F2F2]/90 px-8 py-6">
        <Image src={image} alt={altText} />
      </div>
      <div className="flex items-center justify-between">
        <div className="flex flex-col">
          <div>{productName}</div>
          <div className="font-semibold">{price}</div>
        </div>
        <button
          onClick={onLearnMoreClick}
          className="rounded-lg bg-primaryColor px-4 py-2 font-medium capitalize text-white hover:bg-[#CB1A14]"
        >
          {learnMoreText}
        </button>
      </div>
    </div>
  );
}
