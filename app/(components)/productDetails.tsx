import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaMinus, FaPlus } from "react-icons/fa6";

interface productDetailsItems {
  title: string;
  description: string;
  icon: JSX.Element;
}

interface ProductDetailsProps {
  item: productDetailsItems;
}

export default function ProductDetails({ item }: ProductDetailsProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleParagraph = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-[#E0E0E0] border-b-2 py-4">
      <div
        className="flex items-center justify-between rounded-lg cursor-pointer space-x-12"
        onClick={toggleParagraph}
      >
        <div className="flex space-x-5 items-center">
          <span>{item.icon}</span>
          <span className="text-black text-lg font-medium">{item.title}</span>
        </div>

        {isOpen ? (
          <FaMinus className="text-black" />
        ) : (
          <FaPlus className="text-black" />
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
