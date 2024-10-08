"use client";
import CustomButton from "@/app/(components)/customButton";
import React from "react";

interface SupportCardProps {
  title: string;
  description: string;
  buttonText: string;
  imageUrl: string;
  buttonLink?: string;
}

const SupportCard: React.FC<SupportCardProps> = ({
  title,
  description,
  buttonText,
  imageUrl,
}) => {
  return (
    <div className="rounded-xl bg-white pb-4 shadow-xl">
      {/* Image */}
      <div
        className="relative min-h-56 w-full overflow-hidden rounded-xl bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />

      {/* Content */}
      <div className="mt-4 grid grid-rows-2 place-content-between space-y-2 px-6 text-start">
        <div className="space-y-2">
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="">{description}</p>
        </div>

        <CustomButton
          btntext={buttonText}
          onClick={() => {
            console.log("Download user manual clicked");
          }}
          className="px-auto mt-4 w-full"
        />
      </div>
    </div>
  );
};

export default SupportCard;
