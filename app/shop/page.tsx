"use client";
import Image from "next/image";
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
  return (
    <div className="w-9/12 mx-auto">
      <div className="text-center mt-4 space-y-2">
        <h2 className="font-semibold text-black text-3xl ">Shop Page</h2>
        <p className="text-black">The safe phone kids wear</p>
      </div>
      <div className="mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="flex flex-col items-center p-4 rounded-lg">
            <Image
              src="/Defenderwatch.jpg"
              height={584}
              width={460}
              className="rounded-lg object-cover bg-[#F2F2F2]"
              alt="Watch"
            />
            <h4 className="mt-4 font-semibold text-black text-lg">
              Android Elite Version
            </h4>
            <p className="mt-2 text-black">Tzs 135,000</p>
            <CustomButton btntext="Learn More" onClick={() => console.log("Android version clicked!")}/>
          </div>

          <div className="flex flex-col items-center p-4 rounded-lg">
            <Image
              src="/Defenderwatch.jpg"
              height={584}
              width={460}
              className="rounded-lg object-cover bg-[#F2F2F2]"
              alt="Watch"
            />
            <h4 className="mt-4 font-semibold text-black text-lg">
              RTO`s Modern Version
            </h4>
            <p className="mt-2 text-black">Tzs 99,000</p>
            <CustomButton btntext="Learn More" onClick={() => console.log("Android version clicked!")}/>
          </div>
        </div>
      </div>

      <div className="w-8/12 mx-auto my-24 space-y-4">
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
                  <div className="border-none text-black">{item.title}</div>
                </div>
              );
            })}
          </div>
          <div className="col-span-2">
            {" "}
            <div className="pb-4">
              <Image
                src={"/DefenderLogo.svg"}
                height={90}
                width={90}
                className="inline-block object-contain"
                alt="Defender Logo"
              />
            </div>{" "}
            <div className="bg-red-100 rounded-2xl">
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
            <div className="text-black font-semibold pb-4 text-center">
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
            <div className="text-black font-semibold pb-4 tex">Samsung</div>
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

      <div className="w-8/12 mx-auto my-24">
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

