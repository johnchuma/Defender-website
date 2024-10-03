"use client";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaGooglePlay } from "react-icons/fa";

export default function VideoPlayer() {
  const [showVideo, setShowVideo] = useState(false);

  const handleButtonClick = () => {
    setShowVideo(true);
  };

  return (
    <div className="relative col-span-8 h-full">
      <Image
        src={"/defenderV.png"}
        height={2000}
        width={2000}
        className="w-[1000px] h-80 object-cover rounded-lg"
        alt="Testimonials"
      />

      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-4 bg-red-600 rounded-full"
        onClick={handleButtonClick}
        animate={{
          boxShadow: [
            "0px 0px 0px 4px rgba(255, 0, 0, 0.9)",
            "0px 0px 0px 10px rgba(255, 0, 0, 0.6)",
            "0px 0px 0px 18px rgba(255, 0, 0, 0.3)",
            "0px 0px 0px 25px rgba(255, 0, 0, 0.1)",
          ],
        }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
        }}
      >
        <FaGooglePlay size={20} className="text-white hover:scale-125" />
      </motion.div>

      {showVideo && (
        <div
          className="fixed inset-0 z-50 flex justify-center items-center bg-[rgba(0,0,0,0.8)]"
          onClick={() => setShowVideo(false)}
        >
          <div className="relative" onClick={(e) => e.stopPropagation()}>
            <iframe
              src={"https://www.youtube.com/embed/d_pV8TGKfMc?autoplay=1"}
              width="600"
              height="428"
              title="How a Mechanical Watch Works | Explained in 5 Minutes"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-lg"
            ></iframe>
            <button
              onClick={() => setShowVideo(false)}
              className="absolute top-2 right-2 text-white bg-red-600 p-2 rounded-full hover:bg-red-700"
            >
              X
            </button>
          </div>
        </div>
      )}
    </div>
  );
}


