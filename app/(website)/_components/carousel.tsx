"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
interface CarouselProps {
  images: string[];
}

export default function Carousel({ images }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1,
      );
    }, 4500); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup the interval on unmount
  }, [images.length]);

  return (
    <div className="relative h-64 w-64 overflow-hidden">
      <div
        className="flex h-full w-full transition-transform duration-500 ease-in-out"
        style={{
          transform: `rotateY(${currentIndex * -120}deg)`, // Adjust rotation for 3D effect
          transformStyle: "preserve-3d",
        }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="absolute inset-0 flex h-full w-full items-center justify-center"
            style={{
              transform: `rotateY(${index * 120}deg) translateZ(200px)`,
              backfaceVisibility: "hidden",
            }}
          >
            <Image
              src={image}
              alt={`Slide ${index}`}
              width={250}
              height={250}
              className={`${index === currentIndex ? "opacity-100" : "opacity-0"}`}
              style={{
                transition: "opacity 1s ease-in-out",
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
