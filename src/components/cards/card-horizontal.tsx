"use client";
import Image from "next/image";
import { RiAddLine } from "react-icons/ri";
import { Link } from "next-view-transitions";

interface CardHorizontalProps {
  id: string | number;
  name: string;
  image: string;
  ingredients: string[];
  price: string;
  calories: string;
  bgColor: string;
}

export default function CardHorizontal({
  id,
  name,
  image,
  ingredients,
  price,
  calories,
  bgColor,
}: CardHorizontalProps) {
  return (
    <Link
      href={`/shop/${id}`}
      className="group flex flex-row items-center gap-6 p-4 rounded-2xl border-[1.5px] border-black bg-white shadow-neo-sm hover:shadow-neo hover:-translate-y-1 transition-all w-full max-w-2xl"
    >
      <div
        className="relative w-32 h-32 rounded-xl overflow-hidden border-[1.5px] border-black/10 shrink-0"
        style={{ backgroundColor: bgColor }}
      >
        <Image
          src={image}
          alt={name}
          fill
          className="object-contain p-2 group-hover:scale-110 transition-transform duration-500"
        />
      </div>
      <div className="flex flex-col flex-1 gap-1">
        <h5 className="text-xl font-shrikhand text-[#2a1b15]">{name}</h5>
        <p className="text-sm text-black/60 line-clamp-1">
          {ingredients.join(", ")}
        </p>
        <div className="flex items-center justify-between mt-2">
          <span className="font-bold text-lg">₹{price}</span>
          <div className="flex gap-2">
            <span className="text-[10px] font-bold px-2 py-0.5 bg-black/5 rounded-md border-[1.5px] border-black/10 uppercase tracking-tighter">
              {calories} cal
            </span>
          </div>
        </div>
      </div>
      <div className="hidden sm:flex p-2 rounded-full bg-[#f1b434] border-[1.5px] border-black shadow-neo-sm group-hover:scale-110 transition-transform">
        <RiAddLine size={20} />
      </div>
    </Link>
  );
}
