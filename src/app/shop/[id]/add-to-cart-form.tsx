"use client";

import { useState } from "react";
import { useCartStore } from "@/store/useCartStore";
import { motion, AnimatePresence } from "motion/react";

export type SizeVariant = {
  label: string;
  price: string;
};

export interface Product {
  id: number;
  name: string;
  image: string;
  price: string;
  sizes?: SizeVariant[];
}

export interface AddToCartProps {
  product: Product;
}

export default function AddToCartForm({ product }: AddToCartProps) {
  const [showToast, setShowToast] = useState(false);
  const addItem = useCartStore((state) => state.addItem);

  const [selectedSize, setSelectedSize] = useState<SizeVariant | null>(
    product.sizes && product.sizes.length > 0 ? product.sizes[0] : null,
  );

  const currentPrice = selectedSize ? selectedSize.price : product.price;

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: currentPrice,
      quantity: 1,
      size: selectedSize?.label,
      image: product.image,
    });

    // Show Neo-Brutalist toast
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2000);
  };

  return (
    <div className="flex flex-col gap-8 w-full mt-2">
      <div className="flex flex-col gap-6">
        <h2 className="text-3xl md:text-4xl font-source-serif text-[#1a1a1a]">
          Rs. {parseFloat(currentPrice).toFixed(2)}
        </h2>

        {product.sizes && product.sizes.length > 0 && (
          <div className="flex flex-col gap-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#1a1a1a]">
              Select
            </span>
            <div className="flex flex-wrap gap-2">
              {product.sizes.map((size) => {
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
        <button
          onClick={handleAddToCart}
          className="w-full h-14 bg-white text-black border border-black text-sm font-bold uppercase tracking-[0.2em] rounded-2xl shadow-neo-sm hover:-translate-y-1 hover:shadow-neo transition-all"
        >
          Add To Cart
        </button>
      </div>

      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-10 right-10 z-50 bg-[#ffc65d] border-2 border-black p-4 px-6 rounded-xl shadow-neo font-bold flex items-center gap-3"
          >
            <div className="w-6 h-6 bg-green-400 border border-black flex items-center justify-center text-xs">
              ✓
            </div>
            <span>Added to your basket!</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
