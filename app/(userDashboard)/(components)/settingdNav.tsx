"use client";
import { RefObject } from "react";

interface CategoryProps {
  allRef: RefObject<HTMLDivElement>;
  infoRef: RefObject<HTMLDivElement>;
  addressRef: RefObject<HTMLDivElement>;
  notRef: RefObject<HTMLDivElement>;
  activeTab: number;
  setActiveTab: (tab: number) => void;
}

export default function SettingCategory({
  allRef,
  infoRef,
  addressRef,
  notRef,
  activeTab,
  setActiveTab,
}: CategoryProps) {
  const handleTabClick = (index: number, ref: RefObject<HTMLDivElement>) => {
    setActiveTab(index);
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="">
      <div className="flex justify-start space-x-14 uppercase px-3">
        {[
          { category: "All", ref: allRef },
          { category: "Personal Information", ref: infoRef },
          { category: "Address", ref: addressRef },
          { category: "Notifications", ref: notRef },
        ].map((item, index) => (
          <div
            onClick={() => handleTabClick(index, item.ref)}
            key={index}
            className={`flex cursor-pointer items-center space-x-2 border-b-2 pb-3 hover:text-primaryColor ${
              activeTab === index
                ? "border-primaryColor text-primaryColor"
                : "border-transparent"
            }`}
          >
            <div>{item.category}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
