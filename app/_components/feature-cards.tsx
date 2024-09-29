import Image, { StaticImageData } from "next/image";

interface FeatureCardProps {
  type: "type1" | "type2"; // Determines which layout to render
  bgColor: string;
  icon: StaticImageData;
  iconClassName?: string;
  title: string;
  description: string;
  bgOrnament: StaticImageData;
  primaryOrnament?: StaticImageData;
  secondaryOrnament?: StaticImageData;
  primaryOrnamentPaddingLeft?: string;
  iconInverted?: boolean;
  arrowIcon: StaticImageData;
}

export default function FeatureCard({
  type,
  bgColor,
  icon,
  iconClassName = "",
  title,
  description,
  bgOrnament,
  primaryOrnament,
  secondaryOrnament,
  primaryOrnamentPaddingLeft = "",
  iconInverted = false,
  arrowIcon,
}: FeatureCardProps) {
  if (type === "type1") {
    return (
      <div className="grid grid-cols-2 gap-x-4 md:gap-x-8">
        {/* Title and Icon Section */}
        <div className={`relative rounded-lg ${bgColor} text-white`}>
          {/* Background Ornament */}
          <div className="absolute inset-y-0 right-0 z-10 flex w-16 items-center justify-end pt-8">
            <Image src={bgOrnament} alt="Background Ornament" />
          </div>

          {/* Content */}
          <div className="z-50 flex flex-col justify-between gap-y-4 p-8">
            <div className="w-fit rounded-full bg-[#292929] p-1.5">
              <Image
                src={icon}
                alt={`${title} icon`}
                className={`${iconClassName} ${iconInverted ? "invert" : ""}`}
              />
            </div>
            <div className="font-white text-wrap text-lg font-semibold capitalize md:text-xl">
              {title}
            </div>
            <div className="inline-flex h-16 justify-between">
              {primaryOrnament && (
                <div className={`self-start ${primaryOrnamentPaddingLeft}`}>
                  <Image src={primaryOrnament} alt="Primary Ornament" />
                </div>
              )}
              <div className="self-end">
                {arrowIcon && <Image src={arrowIcon} alt="Arrow icon" />}
              </div>
            </div>
          </div>
        </div>

        {/* Description Section */}
        <div className="relative flex flex-col items-center justify-center gap-y-4 rounded-lg p-8 font-medium text-[#525252] shadow-lg">
          <div className="text-sm md:text-base">{description}</div>
          {secondaryOrnament && (
            <div className="flex w-full justify-end">
              <Image src={secondaryOrnament} alt="Secondary Ornament" />
            </div>
          )}
        </div>
      </div>
    );
  } else if (type === "type2") {
    return (
      <div className="grid grid-cols-2 gap-x-4 md:gap-x-8">
        {/* Description Section */}
        <div className="relative flex flex-col items-center justify-center gap-y-4 rounded-lg p-8 font-medium text-[#525252] shadow-lg">
          <div className="text-sm md:text-base">{description}</div>
          {secondaryOrnament && (
            <div className="flex w-full justify-end">
              <Image src={secondaryOrnament} alt="Secondary Ornament" />
            </div>
          )}
        </div>

        {/* Title and Icon Section */}
        <div className={`relative rounded-lg ${bgColor} text-white`}>
          {/* Background Ornament */}
          <div className="absolute inset-y-0 right-0 z-10 flex w-16 items-center justify-end pt-8">
            <Image src={bgOrnament} alt="Background Ornament" />
          </div>

          {/* Content */}
          <div className="z-50 flex flex-col justify-between gap-y-4 p-8">
            <div className="w-fit rounded-full bg-[#292929] p-1.5">
              <Image
                src={icon}
                alt={`${title} icon`}
                className={iconClassName}
              />
            </div>
            <div className="font-white text-lg font-semibold capitalize md:text-xl">
              {title}
            </div>
            <div className="flex h-16 flex-col items-center justify-center gap-y-4">
              {primaryOrnament && (
                <div className="">
                  <Image src={primaryOrnament} alt="Primary Ornament" />
                </div>
              )}
              <div className="-rotate-180 self-start">
                <Image src={arrowIcon} alt="Arrow icon" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
