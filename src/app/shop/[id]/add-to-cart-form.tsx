"use client";

import { useState } from "react";

export type SizeVariant = {
  label: string;
  price: string;
};

export interface AddToCartProps {
  basePrice: string;
  sizes?: SizeVariant[];
}

export default function AddToCartForm({ basePrice, sizes }: AddToCartProps) {
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState<SizeVariant | null>(
    sizes && sizes.length > 0 ? sizes[0] : null,
  );

  const currentPrice = selectedSize ? selectedSize.price : basePrice;
  const totalPrice = (parseFloat(currentPrice) * quantity).toFixed(2);

  const increment = () => setQuantity((q) => q + 1);
  const decrement = () => setQuantity((q) => (q > 1 ? q - 1 : 1));

  return (
    <div className="flex flex-col gap-8 w-full mt-2">
      <div className="flex flex-col gap-6">
        <h2 className="text-3xl md:text-4xl font-source-serif text-[#1a1a1a]">
          Rs. {totalPrice}
        </h2>

        {sizes && sizes.length > 0 && (
          <div className="flex flex-col gap-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#1a1a1a]">
              Select
            </span>
            <div className="flex flex-wrap gap-2">
              {sizes.map((size) => {
                const isSelected = selectedSize?.label === size.label;
                return (
                  <button
                    key={size.label}
                    type="button"
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-3 text-sm transition-all border ${
                      isSelected
                        ? "bg-[#1a1a1a] text-white border-[#1a1a1a]"
                        : "bg-white text-[#1a1a1a] border-gray-300 hover:border-[#1a1a1a]"
                    }`}
                  >
                    {size.label}
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>

      <div className="flex flex-col sm:flex-row items-center gap-4 mt-2">
        {/* Quantity */}
        <div className="flex items-center bg-[#f5f5f5] rounded-full px-2 h-14 shrink-0 shadow-inner">
          <button
            type="button"
            onClick={decrement}
            className="w-10 h-10 flex items-center justify-center text-2xl text-black/60 hover:text-black transition-colors"
          >
            &minus;
          </button>
          <span className="min-w-8 text-center font-bold text-lg font-figtree">
            {quantity}
          </span>
          <button
            type="button"
            onClick={increment}
            className="w-10 h-10 flex items-center justify-center text-2xl text-black/60 hover:text-black transition-colors"
          >
            &#43;
          </button>
        </div>

        {/* Add to Cart */}
        <button className="flex-1 w-full h-14 bg-white text-black border border-black text-sm font-bold uppercase tracking-[0.2em] rounded-2xl shadow-neo-sm hover:-translate-y-1 hover:shadow-neo transition-all">
          Add To Cart
        </button>
      </div>
    </div>
  );
}
