"use client";
import { useState, RefObject } from "react";

interface CategoryProps {
  featuresRef: RefObject<HTMLDivElement>;
  faqsRef: RefObject<HTMLDivElement>;
}

export default function Category({ featuresRef, faqsRef }: CategoryProps) {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index: number, ref: RefObject<HTMLDivElement>) => {
    setActiveTab(index);
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  return (
    <div className="">
      <div className="flex justify-center uppercase space-x-14">
        {[
          { category: "Features", ref: featuresRef },
          { category: "FAQ", ref: faqsRef },
        ].map((item, index) => {
          return (
            <div
              onClick={() => handleTabClick(index, item.ref)}
              key={index}
              className={`flex space-x-2 border-b-2 pb-3 items-center cursor-pointer hover:text-primaryColor ${
                activeTab == index
                  ? "border-primaryColor text-primaryColor"
                  : "border-transparent"
              }`}
            >
              <div>{item.category}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
