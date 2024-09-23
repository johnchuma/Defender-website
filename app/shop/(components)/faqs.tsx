import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

interface FaqItem {
  title: string;
  description: string;
}

interface FaqsProps {
  item: FaqItem;
}

export default function Faqs({ item }: FaqsProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleParagraph = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-[#E0E0E0] border-b-2 py-4">
      <div
        className="flex items-center justify-between rounded-lg cursor-pointer"
        onClick={toggleParagraph}
      >
        <span className="text-black text-lg font-semibold">
          {item.title}
        </span>
        {isOpen ? (
          <div className="inline-flex items-center justify-center p-2 border-2 border-[#E0E0E0] rounded-full">
            <IoIosArrowUp className="text-black" />
          </div>
        ) : (
          <div className="inline-flex items-center justify-center p-2 border-2 border-[#E0E0E0] rounded-full">
            <IoIosArrowDown className="text-black" />
          </div>
        )}
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="py-5 text-mutedText">{item.description}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
