"use client";
import Image from "next/image";
import { Link } from "next-view-transitions";

interface CardMinimalProps {
  id: string | number;
  name: string;
  image: string;
  price: string;
  bgColor: string;
}

export default function CardMinimal({
  id,
  name,
  image,
  price,
  bgColor,
}: CardMinimalProps) {
  return (
    <Link
      href={`/shop/${id}`}
      className="group relative flex flex-col items-center gap-3 w-full max-w-[240px]"
    >
      <div className="relative w-full aspect-square rounded-2xl border-[1.5px] border-black bg-[#fdfcfb] shadow-neo-sm group-hover:shadow-neo transition-all overflow-hidden">
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
      </div>
      <div className="text-center">
        <h5 className="text-lg font-shrikhand text-[#2a1b15]">{name}</h5>
        <span className="text-sm font-bold text-[#f1b434]">₹{price}</span>
      </div>
    </Link>
  );
}
