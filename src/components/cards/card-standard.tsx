"use client";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { RiAddLine } from "react-icons/ri";
import { Link } from "next-view-transitions";

interface CardStandardProps {
  id: string | number;
  name: string;
  image: string;
  ingredients: string[];
  price: string;
  calories: string;
  protein: string;
  bgColor: string;
}

export default function CardStandard({
  id,
  name,
  image,
  ingredients,
  price,
  calories,
  protein,
  bgColor,
}: CardStandardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      href={`/shop/${id}`}
      className="flex flex-col gap-4 w-full max-w-[340px] group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-[320px] rounded-2xl border-[1.5px] border-black overflow-hidden shadow-neo-sm transition-all duration-300">
        <AnimatePresence mode="wait">
          {!isHovered ? (
            <motion.div
              key="image"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 p-10 flex items-center justify-center transition-colors"
              style={{ backgroundColor: bgColor }}
            >
              <div className="relative w-full h-full">
                <Image
                  src={image}
                  alt={name}
                  fill
                  className="object-contain drop-shadow-md group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 340px"
                  priority
                />
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="details"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-[#fff1e6] p-6 flex flex-col gap-4 font-figtree text-[#2a1b15]"
            >
              <div className="flex flex-col gap-1">
                <h6 className="font-bold text-xs uppercase tracking-widest text-black/40">
                  Ingredients
                </h6>
                <p className="text-base font-medium leading-tight">
                  {ingredients.slice(0, 4).join(", ")}
                  {ingredients.length > 4 && "..."}
                </p>
              </div>

              <div className="mt-auto pt-4 border-t border-black/10">
                <div className="flex justify-between items-end">
                  <div className="flex flex-col gap-2">
                    <span className="text-2xl font-bold">₹{price}</span>
                    <div className="flex gap-2">
                      <div className="px-2 py-0.5 bg-white border-[1.5px] border-black/10 rounded-md text-[10px] font-bold uppercase tracking-tighter">
                        {calories} Cal
                      </div>
                      <div className="px-2 py-0.5 bg-white border-[1.5px] border-black/10 rounded-md text-[10px] font-bold uppercase tracking-tighter">
                        {protein}
                      </div>
                    </div>
                  </div>
                  <div className="p-3 rounded-full bg-[#f1b434] border-[1.5px] border-black shadow-neo-sm group-hover:scale-110 transition-transform">
                    <RiAddLine size={24} />
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="flex justify-between items-center px-1">
        <h5 className="text-xl font-shrikhand tracking-tight text-[#2a1b15]">
          {name}
        </h5>
        <div className="text-black/20 group-hover:text-[#f1b434] transition-colors">
          <RiAddLine size={28} />
        </div>
      </div>
    </Link>
  );
}
