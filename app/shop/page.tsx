"use client";
import Image from "next/image";
import {
  comparisonTitles,
  defenderPoints,
  ApplePoints,
  samsungPoints,
} from "../../utils/constants";
import Faqs from "./(components)/faqs";

export default function Shop() {
  return (
    <div className="w-9/12 mx-auto">
      <div className="text-center mt-4 space-y-2">
        <h2 className="font-bold text-black text-3xl ">Shop Page</h2>
        <p className="text-black">The safe phone kids wear</p>
      </div>
      <div className="mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="flex flex-col items-center bg-gray-100 p-4 rounded-lg">
            <Image
              src="/watch.svg"
              height={584}
              width={460}
              className="rounded-lg object-cover bg-[#F2F2F2]"
              alt="Watch"
            />
            <h4 className="mt-4 font-bold text-black text-lg">
              Android Elite Version
            </h4>
            <p className="mt-2 text-black">Tzs 135,000</p>
            <button className="mt-4 bg-primaryColor text-white text-xs py-3 px-20 rounded">
              Learn More
            </button>
          </div>

          <div className="flex flex-col items-center bg-gray-100 p-4 rounded-lg">
            <Image
              src="/watch.svg"
              height={584}
              width={460}
              className="rounded-lg object-cover bg-[#F2F2F2]"
              alt="Watch"
            />
            <h4 className="mt-4 font-bold text-black text-lg">
              RTO`s Modern Version
            </h4>
            <p className="mt-2 text-black">Tzs 99,000</p>
            <button className="mt-4 bg-primaryColor text-white text-xs py-3 px-20 rounded">
              Learn More
            </button>
          </div>
        </div>
      </div>

      <div className="w-8/12 mx-auto my-24 space-y-4">
        <div className="text-center">
          <h2 className="font-bold text-secondaryColor text-2xl">
            Comparison between our watches & Apple/Samsung
          </h2>
        </div>

        <div className="grid grid-cols-12 items-center gap-5">
          <div className="col-span-6">
            {" "}
            <div className="pb-4">{"titles"}</div>{" "}
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
            <div className="text-black font-bold pb-4 text-center">Apple</div>{" "}
            {ApplePoints.map((item, index) => {
              return (
                <div className="py-2 flex justify-center" key={index}>
                  <div>{item.icon}</div>
                </div>
              );
            })}
          </div>
          <div className="col-span-2">
            <div className="text-black font-bold pb-4 tex">Samsung</div>
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
          <h4 className="font-bold text-black text-xl">
            Frequently Asked Questions
          </h4>
          <p className="text-black">Have any question? We are here to help</p>
        </div>

        {[
          {
            title:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, seddo eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          },
          {
            title:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, seddo eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          },
          {
            title:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, seddo eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          },
          {
            title:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, seddo eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          },
          {
            title:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, seddo eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          },
        ].map((item) => {
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
