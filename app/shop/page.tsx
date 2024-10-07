"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  comparisonTitles,
  defenderPoints,
  ApplePoints,
  samsungPoints,
  faqsItems,
} from "../utils/constants";
import Faqs from "../(components)/faqs";
import CustomButton from "../(components)/customButton";

export default function Shop() {
  const router = useRouter();

  const handlelearnMore = (watchType:string) => {
    router.push(`/product/${watchType}`);
  };

  return (
    <div className="w-11/12 md:w-9/12 mx-auto pb-20">
      <div className="text-center mt-4 space-y-2">
        <h2 className="font-semibold text-black text-3xl ">Shop Page</h2>
        <p className="text-black">The safe phone kids wear</p>
      </div>
      <div className="mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="flex flex-col items-center p-4 rounded-lg">
            <Image
              src={"/blackwatch.svg"}
              height={2000}
              width={2000}
              className="rounded-lg w-full object-contain h-80 bg-[#F2F2F2]"
              alt="Watch"
            />
            <h4 className="mt-4 font-semibold text-black text-lg">
              Android Elite Version
            </h4>
            <p className="mt-2 text-black">Tzs 135,000</p>
            <CustomButton btntext="Learn More" onClick={() => handlelearnMore('android')} />
            </div>

          <div className="flex flex-col items-center p-4 rounded-lg">
            <Image
              src="/v2blackwatch.png"
              height={2000}
              width={2000}
              className="rounded-lg w-full object-contain h-80 bg-[#F2F2F2]"
              alt="Watch"
            />
            <h4 className="mt-4 font-semibold text-black text-lg">
              RTO`s Modern Version
            </h4>
            <p className="mt-2 text-black">Tzs 99,000</p>
            <CustomButton btntext="Learn More" onClick={() => handlelearnMore('rto')} />
            </div>
        </div>
      </div>

      <div className="w-full md:w-8/12 mx-auto my-24 space-y-4">
        <div className="text-center">
          <h2 className="font-semibold text-secondaryColor text-2xl">
            Comparison between our watches & Apple/Samsung
          </h2>
        </div>

        <div className="grid grid-cols-12 items-center gap-5">
          <div className="col-span-6">
            {" "}
            <div className="pb-4">{" "}</div>{" "}
            {comparisonTitles.map((item, index) => {
              return (
                <div className="py-1" key={index}>
                  <div className="border-none text-black text-sm md:text-md">{item.title}</div>
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
                className="inline-block object-contain h-6 md:h-9 w-full"
                alt="Defender Logo"
              />
            </div>
            <div className="md:bg-red-100 rounded-2xl">
              {defenderPoints.map((item, index) => {
                return (
                  <div className="py-2 flex justify-center" key={index}>
                    <div>{item.icon}</div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="col-span-2">
            {" "}
            <div className="text-black font-semibold pb-4 text-xs md:text-md text-center">
              Apple
            </div>{" "}
            {ApplePoints.map((item, index) => {
              return (
                <div className="py-2 flex justify-center" key={index}>
                  <div>{item.icon}</div>
                </div>
              );
            })}
          </div>
          <div className="col-span-2">
            <div className="text-black font-semibold pb-4 text-xs md:text-md text-center">Samsung</div>
            {samsungPoints.map((item, index) => {
              return (
                <div className="py-2 flex justify-center" key={index}>
                  <div>{item.icon}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="w-full md:w-8/12 mx-auto my-24">
        <div className="text-center space-y-3 mb-12">
          <h4 className="font-semibold text-black text-xl">
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

