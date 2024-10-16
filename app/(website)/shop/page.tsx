"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  comparisonTitles,
  defenderPoints,
  ApplePoints,
  samsungPoints,
  faqsItems,
} from "../../utils/constants";
import Faqs from "../(components)/faqs";
import CustomButton from "@/app/_components/customButton";

export default function Shop() {
  const router = useRouter();

  const handlelearnMore = (watchType: string) => {
    router.push(`/product/${watchType}`);
  };

  return (
    <div className="mx-auto w-11/12 pb-20 md:w-9/12">
      <div className="mt-4 space-y-2 text-center">
        <h2 className="text-3xl font-semibold text-black">Shop Page</h2>
        <p className="text-black">The safe phone kids wear</p>
      </div>
      <div className="mt-10">
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
          <div className="flex flex-col items-center rounded-lg p-4">
            <Image
              src={"/blackwatch.svg"}
              height={2000}
              width={2000}
              className="h-80 w-full rounded-lg bg-[#F2F2F2] object-contain"
              alt="Watch"
            />
            <h4 className="mt-4 text-lg font-semibold text-black">
              Android Elite Version
            </h4>
            <p className="mt-2 text-black">Tzs 135,000</p>
            <CustomButton
              btntext="Learn More"
              onClick={() => handlelearnMore("android")}
            />
          </div>

          <div className="flex flex-col items-center rounded-lg p-4">
            <Image
              src="/v2blackwatch.png"
              height={2000}
              width={2000}
              className="h-80 w-full rounded-lg bg-[#F2F2F2] object-contain"
              alt="Watch"
            />
            <h4 className="mt-4 text-lg font-semibold text-black">
              RTO`s Modern Version
            </h4>
            <p className="mt-2 text-black">Tzs 99,000</p>
            <CustomButton
              btntext="Learn More"
              onClick={() => handlelearnMore("rto")}
            />
          </div>
        </div>
      </div>

      <div className="mx-auto my-24 w-full space-y-4 md:w-8/12">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-secondaryColor">
            Comparison between our watches & Apple/Samsung
          </h2>
        </div>

        <div className="grid grid-cols-12 items-center gap-5">
          <div className="col-span-6">
            {" "}
            <div className="pb-4"> </div>{" "}
            {comparisonTitles.map((item, index) => {
              return (
                <div className="py-1" key={index}>
                  <div className="md:text-md border-none text-sm text-black">
                    {item.title}
                  </div>
                </div>
              );
            })}
          </div>
          <div className="col-span-2">
            {" "}
            <div className="pb-4">
              <Image
                src={"/DefenderLogo.svg"}
                height={1000}
                width={1000}
                className="inline-block h-6 w-full object-contain md:h-9"
                alt="Defender Logo"
              />
            </div>
            <div className="rounded-2xl md:bg-red-100">
              {defenderPoints.map((item, index) => {
                return (
                  <div className="flex justify-center py-2" key={index}>
                    <div>{item.icon}</div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="col-span-2">
            {" "}
            <div className="md:text-md pb-4 text-center text-xs font-semibold text-black">
              Apple
            </div>{" "}
            {ApplePoints.map((item, index) => {
              return (
                <div className="flex justify-center py-2" key={index}>
                  <div>{item.icon}</div>
                </div>
              );
            })}
          </div>
          <div className="col-span-2">
            <div className="md:text-md pb-4 text-center text-xs font-semibold text-black">
              Samsung
            </div>
            {samsungPoints.map((item, index) => {
              return (
                <div className="flex justify-center py-2" key={index}>
                  <div>{item.icon}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="mx-auto my-24 w-full md:w-8/12">
        <div className="mb-12 space-y-3 text-center">
          <h4 className="text-xl font-semibold text-black">
            Frequently Asked Questions
          </h4>
          <p className="text-black">Have any question? We are here to help</p>
        </div>

        {faqsItems.map((item) => {
          return (
            <div key={item.title}>
              <Faqs item={item} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
