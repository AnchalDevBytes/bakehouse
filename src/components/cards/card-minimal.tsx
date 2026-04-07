"use client";
import Image from "next/image";
import { Link } from "next-view-transitions";

interface CardMinimalProps {
  id: string | number;
  name: string;
  image: string;
  ingredients: string[];
  price: string;
  calories: string;
  protein: string;
  bgColor: string;
}

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { RiAddLine } from "react-icons/ri";

export default function CardMinimal({
  id,
  name,
  image,
  ingredients,
  price,
  calories,
  protein,
  bgColor,
}: CardMinimalProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      href={`/shop/${id}`}
      className="group relative flex flex-col items-center gap-3 w-full max-w-[240px]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative w-full aspect-square rounded-2xl border-[1.5px] border-black bg-[#fdfcfb] shadow-neo-sm group-hover:shadow-neo transition-all overflow-hidden">
        <AnimatePresence mode="wait">
          {!isHovered ? (
            <motion.div
              key="image"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0"
            >
              <div
                className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity"
                style={{ backgroundColor: bgColor }}
              />
              <Image
                src={image}
                alt={name}
                fill
                className="object-contain p-6 group-hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
          ) : (
            <motion.div
              key="details"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-[#fff1e6] p-4 flex flex-col font-figtree text-[#2a1b15]"
            >
              <div className="flex flex-col gap-1">
                <h6 className="font-bold text-[10px] uppercase tracking-widest text-black/40">
                  Ingredients
                </h6>
                <p className="text-sm font-medium leading-tight">
                  {ingredients.slice(0, 4).join(", ")}
                  {ingredients.length > 4 && "..."}
                </p>
              </div>

              <div className="mt-auto pt-3 border-t border-black/10">
                <div className="flex justify-between items-end">
                  <div className="flex flex-col gap-1.5">
                    <span className="text-xl font-bold">₹{price}</span>
                    <div className="flex gap-1.5">
                      <div className="px-1.5 py-0.5 bg-white border-[1.5px] border-black/10 rounded-md text-[8px] font-bold uppercase tracking-tighter">
                        {calories} Cal
                      </div>
                      <div className="px-1.5 py-0.5 bg-white border-[1.5px] border-black/10 rounded-md text-[8px] font-bold uppercase tracking-tighter">
                        {protein}
                      </div>
                    </div>
                  </div>
                  <div className="p-2 rounded-full bg-[#f1b434] border border-black shadow-neo-sm group-hover:scale-105 transition-transform">
                    <RiAddLine size={18} />
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <div className="text-center">
        <h5 className="text-sm sm:text-lg font-shrikhand text-[#2a1b15]">
          {name}
        </h5>
      </div>
    </Link>
  );
}
