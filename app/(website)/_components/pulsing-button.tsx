"use client";
import { motion, AnimatePresence } from "framer-motion";
import React, { ReactNode } from "react";

interface PulsingButtonProps {
  children: ReactNode;
}

const pulseVariants = {
  animate: {
    boxShadow: [
      "0px 0px 0px 4px rgba(255, 0, 0, 0.3)",
      "0px 0px 0px 12px rgba(255, 0, 0, 0.6)",
      "0px 0px 0px 24px rgba(255, 0, 0, 0.2)",
      "0px 0px 0px 30px rgba(255, 0, 0, 0.1)",
    ],
    transition: {
      repeat: Infinity,
      repeatType: "loop", // Loop animation
    },
  },
};

const PulsingButton: React.FC<PulsingButtonProps> = ({ children }) => {
  return (
    <AnimatePresence>
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform rounded-full"
        variants={pulseVariants}
        animate="animate"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default PulsingButton;
