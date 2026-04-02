"use client";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { CiCirclePlus, CiCircleRemove } from "react-icons/ci";

interface ProductCardProps {
  name: string;
  image: string;
  ingredients: string[];
  price: string;
  calories: string;
  protein: string;
  bgColor: string;
  onClick: () => void;
}

const ProductCard = ({
  name,
  image,
  ingredients,
  price,
  calories,
  protein,
  bgColor,
  onClick,
}: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="flex flex-col gap-4 w-full max-w-[420px] cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      <div className="relative h-[460px] rounded-3xl border border-black overflow-hidden shadow-neo transition-all duration-300">
        <AnimatePresence mode="wait">
          {!isHovered ? (
            <motion.div
              key="image"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 p-8 flex items-center justify-center"
              style={{ backgroundColor: bgColor }}
            >
              <div className="relative w-full h-full">
                <Image
                  src={image}
                  alt={name}
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="details"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              className="absolute inset-0 bg-[#ffc6a5] p-8 flex flex-col gap-6 font-figtree text-[#1a1a1a]"
            >
              <div className="flex flex-col gap-2">
                <h6 className="font-bold text-lg uppercase tracking-wider">
                  Ingredients:
                </h6>
                <p className="text-xl leading-snug">
                  {ingredients.join(", ")}
                  <span className="opacity-50">...</span>
                </p>
              </div>

              <div className="mt-auto">
                <div className="flex flex-col gap-4">
                  <h6 className="font-bold text-3xl">Price: {price}</h6>
                  <div className="flex gap-2">
                    <div className="px-3 py-1 bg-white border border-black rounded-lg text-sm font-bold shadow-neo-sm">
                      {calories}
                    </div>
                    <div className="px-3 py-1 bg-white border border-black rounded-lg text-sm font-bold shadow-neo-sm uppercase">
                      {protein}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="flex justify-between px-2 items-center">
        <h5 className="text-2xl sm:text-3xl font-source-serif font-semibold">
          {name}
        </h5>
        <div className="text-black">
          {isHovered ? (
            <CiCircleRemove size={48} className="stroke-[0.5px]" />
          ) : (
            <CiCirclePlus size={48} className="stroke-[0.5px]" />
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
