import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const VideoThumbnail = ({
  thumbnailSrc,
  altText,
  videoUrl,
}: {
  thumbnailSrc: StaticImageData;
  altText: string;
  videoUrl: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <>
      {/* Thumbnail with Play Button */}
      <div
        onClick={handleOpen}
        className="group/thumbnail relative w-full cursor-pointer overflow-hidden rounded-xl"
      >
        <Image
          src={thumbnailSrc}
          alt={altText}
          className="brightness-70 rounded-lg transition duration-500 ease-in-out group-hover/thumbnail:brightness-90"
        />
        {/* Play Button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <button className="rounded-full bg-red-600 p-4">
            <Image
              src="images/icons/play.svg"
              alt="Play Icon"
              width={24}
              height={24}
            />
          </button>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black bg-opacity-75"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Iframe content */}
            <div className="relative w-[90%] max-w-4xl">
              <iframe
                className="aspect-video w-full rounded-2xl"
                src={videoUrl}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>

              {/* Close Button */}
              <button
                onClick={handleClose}
                className="absolute -right-2 -top-10 rounded-full bg-primaryScarletColor p-1.5 hover:bg-primaryCrimsonColor"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="white"
                  className="h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default VideoThumbnail;
