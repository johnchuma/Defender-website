"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import {
  safetyFeatures,
  technicalSpecifications,
  moreSpecification,
} from "../../utils/constants";
import CustomButton from "../../(components)/customButton";
import VideoPlayer from "../../(components)/videoPlayer";
import SimpleCarousel from "../../(components)/carousel";

export default function ProductPage() {
    const router = useRouter();
    const handleBuyNow = () => {
        const productType = "rto";
        router.push(`/ecommerce?type=${productType}`);
      };
      
  return (
    <div className="w-11/12 md:w-9/12 mx-auto space-y-20 pb-20">
      <div className="flex flex-col items-center">
        <SimpleCarousel type={"rto"}/>
        <h4 className="mt-4 font-semibold text-black text-lg">
            RTO`s Modern Version
        </h4>
        <p className="mt-2 text-black">Tzs 99,000</p>
        <CustomButton
          btntext="Buy Now"
          className="px-12"
          onClick={handleBuyNow}
        />
      </div>
      <div className="space-y-5">
        <h1 className="text-textColor font-bold text-center text-lg">
          Safety Features
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-9">
          {safetyFeatures.map((item:any, index:any) => {
            return (
              <div
                className="flex flex-col items-center p-6 md:p-20 rounded-lg space-y-6 shadow-md"
                key={index}
              >
                <div className="inline-flex items-center justify-center p-3 border-2 border-[#E0E0E0] rounded-lg">
                  <div className="">{item.icon}</div>
                </div>
                <div className="text-textColor font-semibold text-center">
                  {item.title}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-9">
          <div className="flex flex-col justify-center">
            <h2 className="text-textColor font-semibold text-lg md:text-4xl">
              Get to know the Key <br className="hidden md:block" /> differences <br className="block md:hidden"/> between <br className="hidden md:block"/>
              Android Elite & RTO version.
            </h2>
          </div>
          <div className="flex flex-col items-center bg-white rounded-lg  w-full">
            <div className="relative">
              <VideoPlayer />
            </div>
          </div>
        </div>
      </div>
      <div className="space-y-5">
        <h1 className="text-textColor font-bold text-center text-lg">
          Technical Specifications
        </h1>
        <div>
          {technicalSpecifications.map((item:any, index:any) => {
            return (
              <div className="border-[#E0E0E0] border-b-2 py-4" key={index}>
                <div className="justify-start grid grid-cols-2 gap-4 md:gap-9">
                  <div className="text-textColor font-semibold">
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
          <div className="col-span-12 md:col-span-6 space-y-5">
            <h1 className="text-textColor font-bold text-lg">
              More Specification you need <br className="hidden md:block" />
              to know
            </h1>
            <div className="grid grid-cols-2 gap-5">
              {moreSpecification.map((item:any, index:any) => {
                return (
                  <div className="w-2/3" key={index}>
                    <div className="text-textColor"> {item.text}</div>
                  </div>
                );
              })}
            </div>{" "}
          </div>
          <div className="col-span-12 md:col-span-6 space-y-5 flex flex-col items-center">
            {" "}
            <Image
              src={"/bluewatch.png"}
              height={2000}
              width={2000}
              className="rounded-lg w-full h-60 object-contain bg-transparent"
              alt="Watch"
            />
            <CustomButton btntext={"Buy Now"} onClick={handleBuyNow} />
          </div>
        </div>
      </div>
    </div>
  );
}
