"use client";
import { useCartStore } from "@/store/useCartStore";
import Image from "next/image";
import { Link } from "next-view-transitions";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  HiPlus,
  HiMinus,
  HiTrash,
  HiArrowLeft,
  HiCheckCircle,
} from "react-icons/hi2";

export default function CartPage() {
  const { items, removeItem, updateQuantity, checkout } = useCartStore();
  const [isClient, setIsClient] = useState(false);
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [orderSuccess, setOrderSuccess] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  const subtotal = items.reduce(
    (acc, item) => acc + parseFloat(item.price) * item.quantity,
    0,
  );
  const shipping = items.length > 0 ? (subtotal >= 200 ? 0 : 50) : 0;
  const total = subtotal + shipping;

  const handleCheckout = async () => {
    setIsCheckingOut(true);
    // Simulate payment processing
    await new Promise((resolve) => setTimeout(resolve, 2000));
    checkout();
    setIsCheckingOut(false);
    setOrderSuccess(true);
  };

  if (orderSuccess) {
    return (
      <main className="min-h-screen bg-[#fdfcfb] pt-32 pb-24 flex items-center justify-center">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="max-w-md w-full bg-white border-4 border-black p-10 rounded-[40px] shadow-neo text-center flex flex-col gap-8 mx-4"
        >
          <div className="flex justify-center">
            <HiCheckCircle size={100} className="text-green-500" />
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="text-4xl font-shrikhand uppercase leading-none">
              Order Placed!
            </h1>
            <p className="text-lg text-black/60 font-figtree">
              Your delicious treats are being prepared. Thank you for choosing
              Bakehouse!
            </p>
          </div>
          <Link
            href="/shop"
            className="w-full py-5 bg-[#ffc65d] border-2 border-black rounded-2xl text-xl font-bold uppercase tracking-widest shadow-neo hover:-translate-y-1 transition-all"
          >
            Keep Shopping
          </Link>
        </motion.div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#fdfcfb] pt-32 pb-24">
      <div className="container mx-auto px-4 max-w-6xl">
        <h1 className="text-5xl md:text-7xl font-shrikhand text-[#1a1a1a] uppercase leading-none mb-12">
          Your Basket
        </h1>

        {items.length === 0 ? (
          <div className="bg-white border-4 border-black p-12 rounded-[40px] shadow-neo text-center flex flex-col gap-8">
            <p className="text-2xl font-bold text-black/40">
              Your basket is currently empty.
            </p>
            <div className="flex justify-center">
              <Link
                href="/shop"
                className="inline-flex items-center gap-3 py-4 px-8 bg-[#ffc65d] border-2 border-black rounded-2xl text-xl font-bold uppercase tracking-widest shadow-neo hover:-translate-y-1 transition-all"
              >
                <HiArrowLeft /> Go To Shop
              </Link>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            {/* Items List */}
            <div className="lg:col-span-2 flex flex-col gap-6">
              <AnimatePresence>
                {items.map((item) => (
                  <motion.div
                    key={`${item.id}-${item.size || "default"}`}
                    layout
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    className="flex flex-col sm:flex-row gap-6 p-6 bg-white border-4 border-black rounded-[30px] shadow-neo relative overflow-hidden"
                  >
                    <div
                      className="w-full sm:w-32 h-32 bg-gray-100 border-2 border-black rounded-2xl shrink-0 relative flex items-center justify-center overflow-hidden"
                      style={{ backgroundColor: "#f3f4f6" }}
                    >
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-contain p-4"
                      />
                    </div>

                    <div className="flex-1 flex flex-col justify-between py-2">
                      <div className="flex justify-between items-start">
                        <div className="flex flex-col gap-1">
                          <h3 className="text-2xl font-bold uppercase leading-none">
                            {item.name}
                          </h3>
                          {item.size && (
                            <span className="text-sm font-bold text-black/40 uppercase tracking-widest">
                              Size: {item.size}
                            </span>
                          )}
                        </div>
                        <button
                          onClick={() => removeItem(item.id, item.size)}
                          className="p-2 hover:bg-red-50 text-red-500 rounded-xl transition-colors shrink-0"
                          title="Remove item"
                        >
                          <HiTrash size={24} />
                        </button>
                      </div>

                      <div className="flex justify-between items-center mt-4">
                        <div className="flex items-center bg-[#f5f5f5] rounded-full px-2 h-12 shadow-inner border border-black/5">
                          <button
                            onClick={() =>
                              updateQuantity(
                                item.id,
                                Math.max(1, item.quantity - 1),
                                item.size,
                              )
                            }
                            className="w-8 h-8 flex items-center justify-center text-xl text-black/60 hover:text-black transition-colors"
                          >
                            <HiMinus />
                          </button>
                          <span className="min-w-8 text-center font-bold text-lg font-figtree">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              updateQuantity(
                                item.id,
                                item.quantity + 1,
                                item.size,
                              )
                            }
                            className="w-8 h-8 flex items-center justify-center text-xl text-black/60 hover:text-black transition-colors"
                          >
                            <HiPlus />
                          </button>
                        </div>

                        <div className="text-2xl font-bold">
                          Rs.{" "}
                          {(parseFloat(item.price) * item.quantity).toFixed(2)}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* Summary */}
            <div className="lg:col-span-1 lg:sticky lg:top-32">
              <div className="bg-white border-4 border-black p-8 rounded-[40px] shadow-neo flex flex-col gap-8">
                <h2 className="text-3xl font-shrikhand uppercase leading-none border-b-4 border-black pb-4 text-[#1a1a1a]">
                  Summary
                </h2>

                <div className="flex flex-col gap-4 font-figtree text-lg">
                  <div className="flex justify-between">
                    <span className="text-black/50">Subtotal</span>
                    <span className="font-bold">Rs. {subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-black/50">Shipping</span>
                    <span className="font-bold">Rs. {shipping.toFixed(2)}</span>
                  </div>
                </div>

                <div className="flex justify-between items-center text-3xl font-bold border-t-4 border-black pt-6 text-[#1a1a1a]">
                  <span>Total</span>
                  <span>Rs. {total.toFixed(2)}</span>
                </div>

                <button
                  onClick={handleCheckout}
                  disabled={isCheckingOut}
                  className={`w-full py-5 ${isCheckingOut ? "bg-gray-200" : "bg-black"} text-white border-2 border-black rounded-2xl text-xl font-bold uppercase tracking-widest shadow-neo-sm hover:-translate-y-1 hover:shadow-neo transition-all flex items-center justify-center gap-3`}
                >
                  {isCheckingOut ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      <span>Processing...</span>
                    </>
                  ) : (
                    <span>Checkout NOW</span>
                  )}
                </button>

                <p className="text-xs text-center text-black/40 font-bold uppercase tracking-widest">
                  Secure Payment Guaranteed
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
