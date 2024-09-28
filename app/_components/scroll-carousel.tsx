"use client";
import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";

interface ScrollCarouselProps {
  items: React.ReactNode[];
  initialScroll?: number;
}

export default function ScrollCarousel({
  items,
  initialScroll = 0,
}: ScrollCarouselProps) {
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = initialScroll;
    }
  }, [initialScroll]);

  return (
    <div className="relative w-full">
      <div
        className="flex w-full overflow-x-auto scroll-smooth md:py-20"
        ref={carouselRef}
      >
        <div className="flex flex-row justify-start gap-4">
          {items.map((item, index) => (
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.5,
                  delay: 0.2 * index,
                  ease: "easeOut",
                },
              }}
              key={`card-${index}`}
              className="w-72 flex-shrink-0 md:w-96"
            >
              {item}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
