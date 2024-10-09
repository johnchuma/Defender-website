import React from "react";
import { cn } from "@/app/utils/cn";
import Title from "../../_components/title";

interface BackgroundBannerProps {
  backgroundImage: string;
  title: React.ReactNode;
  className?: string;
}

const BackgroundBanner: React.FC<BackgroundBannerProps> = ({
  backgroundImage,
  title,
  className,
}) => {
  return (
    <section
      className={cn(
        "relative mb-20 min-h-[80dvh] rounded-lg bg-cover bg-center bg-no-repeat",
        className,
      )}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 flex items-center justify-center text-white">
        <Title className="capitalize">{title}</Title>
      </div>
    </section>
  );
};

export default BackgroundBanner;
