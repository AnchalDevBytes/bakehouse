"use client";
import { useCartStore } from "@/store/useCartStore";
import { Link } from "next-view-transitions";
import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { HiArrowLeft, HiShoppingBag, HiArrowPath } from "react-icons/hi2";

export default function OrdersPage() {
  const { orderHistory, addItem } = useCartStore();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  const handleReorder = (items: any[]) => {
    items.forEach((item) => addItem(item));
  };

  return (
    <main className="min-h-screen bg-[#fdfcfb] pt-32 pb-24">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="flex flex-col justify-between gap-6 mb-12">
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 lg:mb-5 text-black hover:opacity-70 transition-opacity font-medium uppercase tracking-widest text-sm"
          >
            <HiArrowLeft size={20} /> Back to Shop
          </Link>
          <h1 className="text-3xl md:text-5xl font-source-serif text-[#1a1a1a] uppercase leading-none">
            Recent Orders
          </h1>
        </div>

        {orderHistory.length === 0 ? (
          <div className="bg-white border-4 border-black p-12 rounded-[40px] shadow-neo text-center flex flex-col gap-8">
            <div className="flex justify-center text-black/20">
              <HiShoppingBag size={80} />
            </div>
            <p className="text-2xl font-bold text-black/40">
              You haven't placed any orders yet.
            </p>
            <div className="flex justify-center">
              <Link
                href="/shop"
                className="inline-flex items-center gap-3 py-4 px-8 bg-[#ffc65d] border-2 border-black rounded-2xl text-xl font-bold uppercase tracking-widest shadow-neo-md hover:-translate-y-1 transition-all"
              >
                Start Ordering
              </Link>
            </div>
          </div>
        ) : (
          <div className="flex flex-col gap-12">
            {[...orderHistory].reverse().map((order) => (
              <motion.div
                key={order.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white border-2 border-black rounded-2xl shadow-neo overflow-hidden flex flex-col"
              >
                {/* Order Header / Status Bar */}
                <div className="bg-[#fff3da] border-b-2 border-black p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-3">
                      <span className="px-3 py-1 bg-black text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-full">
                        Order #{order.id}
                      </span>
                      <span className="text-sm font-bold text-black/40">
                        {new Date(order.date).toLocaleDateString("en-GB", {
                          day: "numeric",
                          month: "short",
                          year: "numeric",
                        })}
                      </span>
                    </div>
                    <div className="text-2xl font-source-serif font-black flex items-center gap-2">
                      Placed at{" "}
                      {new Date(order.date).toLocaleTimeString("en-GB", {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="flex flex-col items-end gap-1">
                      <span className="text-[10px] font-black uppercase tracking-widest text-black/30">
                        Current Status
                      </span>
                      <span className="bg-[#99e1e5] text-[#2a1b15] px-6 py-2 rounded-xl text-sm font-black uppercase tracking-widest border-2 border-black shadow-neo-sm">
                        {order.status}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Items Section */}
                <div className="p-6 md:p-10 flex flex-col gap-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
                    <div className="flex flex-col gap-6">
                      <h4 className="text-sm font-black uppercase tracking-[0.2em] text-black/30 border-b-2 border-black/5 pb-2">
                        Your Items
                      </h4>
                      <div className="flex flex-col gap-4">
                        {order.items.map((item, idx) => (
                          <div
                            key={idx}
                            className="flex justify-between items-center group"
                          >
                            <div className="flex flex-col">
                              <span className="text-lg font-bold leading-none group-hover:translate-x-1 transition-transform">
                                {item.name}
                              </span>
                              {item.size && (
                                <span className="text-[10px] font-black text-black/30 uppercase mt-1">
                                  Size: {item.size}
                                </span>
                              )}
                            </div>
                            <div className="flex items-center gap-4">
                              <span className="text-xs font-black text-black/20">
                                x{item.quantity}
                              </span>
                              <span className="font-bold">
                                Rs. {Number(item.price).toFixed(2)}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-col gap-6">
                      <h4 className="text-sm font-black uppercase tracking-[0.2em] text-black/30 border-b-2 border-black/5 pb-2">
                        Payment Summary
                      </h4>
                      <div className="flex flex-col gap-4 font-bold text-black/60">
                        <div className="flex justify-between">
                          <span>Subtotal</span>
                          <span className="text-black">
                            Rs. {order.subtotal}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span>Shipping</span>
                          <span className="text-black">
                            Rs. {order.shipping}
                          </span>
                        </div>
                        <div className="flex justify-between items-end pt-4 border-t-2 border-black/5 mt-2">
                          <span className="text-black uppercase">
                            Grand Total
                          </span>
                          <span className="text-2xl font-figtree text-black leading-none">
                            Rs. {order.total}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Reorder Action */}
                  <div className="flex flex-col sm:flex-row justify-between items-center gap-6 pt-10 border-t-2 border-black border-dashed">
                    <p className="text-sm text-black/40 font-bold italic">
                      Loved these? You can add them all back to your basket with
                      one click!
                    </p>
                    <button
                      onClick={() => handleReorder(order.items)}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-3 py-4 px-10 bg-[#f1b434] border-2 border-black rounded-2xl text-lg font-bold uppercase tracking-widest shadow-neo hover:-translate-y-1 transition-all"
                    >
                      <HiArrowPath size={22} /> Reorder
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
