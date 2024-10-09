"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import {
  safetyFeatures,
  technicalSpecifications,
  moreSpecification,
} from "@/app/utils/constants";
import CustomButton from "@/app/_components/customButton";
import VideoPlayer from "../../(components)/videoPlayer";
import SimpleCarousel from "../../(components)/carousel";

export default function ProductPage() {
  const router = useRouter();
  const handleBuyNow = () => {
    const productType = "android";
    router.push(`/ecommerce?type=${productType}`);
  };

  return (
    <div className="mx-auto w-11/12 space-y-20 pb-20 md:w-9/12">
      <div className="flex flex-col items-center">
        <SimpleCarousel type={"android"} />
        <h4 className="mt-4 text-lg font-semibold text-black">
          Android Elite Version
        </h4>
        <p className="mt-2 text-black">Tzs 135,000</p>
        <CustomButton
          btntext="Buy Now"
          className="px-12"
          onClick={handleBuyNow}
        />
      </div>
      <div className="space-y-5">
        <h1 className="text-center text-lg font-bold text-textColor">
          Safety Features
        </h1>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-9">
          {safetyFeatures.map((item: any, index: any) => {
            return (
              <div
                className="flex flex-col items-center space-y-6 rounded-lg p-6 shadow-md md:p-20"
                key={index}
              >
                <div className="inline-flex items-center justify-center rounded-lg border-2 border-[#E0E0E0] p-3">
                  <div className="">{item.icon}</div>
                </div>
                <div className="text-center font-semibold text-textColor">
                  {item.title}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <div className="grid grid-cols-1 gap-9 md:grid-cols-2">
          <div className="flex flex-col justify-center">
            <h2 className="text-lg font-semibold text-textColor md:text-4xl">
              Get to know the Key <br className="hidden md:block" /> differences{" "}
              <br className="block md:hidden" /> between{" "}
              <br className="hidden md:block" />
              Android Elite & RTO version.
            </h2>
          </div>
          <div className="flex w-full flex-col items-center rounded-lg bg-white">
            <div className="relative">
              <VideoPlayer />
            </div>
          </div>
        </div>
      </div>
      <div className="space-y-5">
        <h1 className="text-center text-lg font-bold text-textColor">
          Technical Specifications
        </h1>
        <div>
          {technicalSpecifications.map((item: any, index: any) => {
            return (
              <div className="border-b-2 border-[#E0E0E0] py-4" key={index}>
                <div className="grid grid-cols-2 justify-start gap-4 md:gap-9">
                  <div className="font-semibold text-textColor">
                    {item.title}
                  </div>
                  <div className="text-textColor">{item.decription}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="md:px-24">
        <div className="grid grid-cols-12 items-center gap-5">
          <div className="col-span-12 space-y-5 md:col-span-6">
            <h1 className="text-lg font-bold text-textColor">
              More Specification you need <br className="hidden md:block" />
              to know
            </h1>
            <div className="grid grid-cols-2 gap-5">
              {moreSpecification.map((item: any, index: any) => {
                return (
                  <div className="w-2/3" key={index}>
                    <div className="text-textColor"> {item.text}</div>
                  </div>
                );
              })}
            </div>{" "}
          </div>
          <div className="col-span-12 flex flex-col items-center space-y-5 md:col-span-6">
            {" "}
            <Image
              src={"/blackwatch.svg"}
              height={2000}
              width={2000}
              className="h-60 w-full rounded-lg bg-transparent object-contain"
              alt="Watch"
            />
            <CustomButton btntext={"Buy Now"} onClick={handleBuyNow} />
          </div>
        </div>
      </div>
    </div>
  );
}
