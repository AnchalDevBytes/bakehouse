"use client";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { RiCloseLine } from "react-icons/ri";

interface ProductDetailProps {
  isOpen: boolean;
  onClose: () => void;
  product: {
    name: string;
    image: string;
    description: string;
    calories: string;
    protein: string;
    carbs: string;
    price: string;
    ingredients: string[];
    bgColor: string;
  };
}

const ProductDetailOverlay = ({
  isOpen,
  onClose,
  product,
}: ProductDetailProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-[#fdfcfb] flex items-center justify-center overflow-y-auto"
        >
          <button
            onClick={onClose}
            className="absolute top-8 right-8 text-black hover:scale-110 transition-transform p-2 bg-white/50 backdrop-blur rounded-full border border-black shadow-neo-sm"
          >
            <RiCloseLine size={32} />
          </button>

          <div className="container mx-auto px-4 py-20 max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-20 items-start">
              {/* Left side: Image */}
              <div
                className="rounded-[40px] aspect-square flex items-center justify-center p-12 border border-black shadow-neo"
                style={{ backgroundColor: product.bgColor }}
              >
                <div className="relative w-full h-full">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </div>

              {/* Right side: Details */}
              <div className="flex flex-col gap-8 py-4 font-figtree">
                <div className="flex flex-col gap-4">
                  <h1 className="text-5xl md:text-7xl font-shrikhand text-[#1a1a1a] uppercase leading-none">
                    {product.name}
                  </h1>
                  <p className="text-xl md:text-2xl text-black/70 leading-snug">
                    {product.description}
                  </p>
                  <div className="flex items-center gap-4 text-sm font-bold uppercase tracking-widest text-black/50">
                    <span>Calories: {product.calories}</span>
                    <span>|</span>
                    <span>Protein: {product.protein}</span>
                    <span>|</span>
                    <span>Carbs: {product.carbs}</span>
                  </div>
                </div>

                <div className="flex flex-col gap-6">
                  <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a1a]">
                    {product.price} USD
                  </h2>
                  <button className="w-full py-6 bg-[#ff3d3d] text-white rounded-2xl text-2xl font-bold uppercase tracking-widest shadow-neo-lg hover:-translate-y-1 transition-transform border border-black">
                    Buy Now →
                  </button>
                </div>

                <div className="flex flex-col border-t border-black/10 pt-8 gap-8">
                  <div className="flex flex-col gap-4">
                    <div className="flex justify-between items-center">
                      <h4 className="text-xl font-bold uppercase">
                        Ingredients (Halal)
                      </h4>
                      <span className="text-2xl rotate-180">↑</span>
                    </div>
                    <p className="text-lg text-black/60 leading-relaxed italic">
                      {product.ingredients.join(", ")}
                      <span className="opacity-50">...</span>
                    </p>
                  </div>

                  <div className="flex flex-col gap-4 border-t border-black/10 pt-8">
                    <div className="flex justify-between items-center">
                      <h4 className="text-xl font-bold uppercase">
                        Shipping & Storing
                      </h4>
                      <span className="text-2xl">↓</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProductDetailOverlay;
