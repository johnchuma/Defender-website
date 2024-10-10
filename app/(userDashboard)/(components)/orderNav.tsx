"use client";
import { useState, RefObject } from "react";

interface CategoryProps {
  allRef: RefObject<HTMLDivElement>;
  pendingRef: RefObject<HTMLDivElement>;
  deliveredRef: RefObject<HTMLDivElement>;
  activeTab: number;
  setActiveTab: (tab: number) => void;
}

export default function OrderCategory({
  allRef,
  pendingRef,
  deliveredRef,
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
    <div>
      <div className="flex justify-start space-x-14 px-3 uppercase">
        {[
          { category: "All", ref: allRef },
          { category: "Pending", ref: pendingRef },
          { category: "Delivered", ref: deliveredRef },
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
