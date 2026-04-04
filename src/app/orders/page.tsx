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
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          <h1 className="text-5xl md:text-7xl font-shrikhand text-[#1a1a1a] uppercase leading-none">
            Recent Orders
          </h1>
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 text-black hover:opacity-70 transition-opacity font-bold uppercase tracking-widest text-sm"
          >
            <HiArrowLeft size={20} /> Back to Shop
          </Link>
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
                className="inline-flex items-center gap-3 py-4 px-8 bg-[#ffc65d] border-2 border-black rounded-2xl text-xl font-bold uppercase tracking-widest shadow-neo hover:-translate-y-1 transition-all"
              >
                Start Ordering
              </Link>
            </div>
          </div>
        ) : (
          <div className="flex flex-col gap-8">
            {orderHistory.map((order) => (
              <motion.div
                key={order.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white border-4 border-black rounded-[30px] shadow-neo overflow-hidden"
              >
                <div className="bg-[#1a1a1a] p-6 text-white flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex flex-col gap-1">
                    <span className="text-xs font-bold uppercase tracking-[0.2em] opacity-60">
                      Order ID: #{order.id}
                    </span>
                    <span className="text-sm font-bold">
                      {new Date(order.date).toLocaleDateString("en-GB", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="bg-green-500 text-black px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest border-2 border-black">
                      {order.status}
                    </span>
                  </div>
                </div>

                <div className="p-8 flex flex-col gap-6">
                  <div className="flex flex-col gap-4">
                    {order.items.map((item, idx) => (
                      <div
                        key={`${order.id}-${idx}`}
                        className="flex justify-between items-center text-lg font-figtree border-b-2 border-dashed border-black/10 pb-4 last:border-0"
                      >
                        <div className="flex flex-col">
                          <span className="font-bold uppercase leading-tight">
                            {item.name}
                          </span>
                          {item.size && (
                            <span className="text-xs font-bold text-black/40 uppercase">
                              Size: {item.size}
                            </span>
                          )}
                        </div>
                        <div className="flex items-center gap-6">
                          <span className="text-black/40 font-bold">
                            x{item.quantity}
                          </span>
                          <span className="font-bold">
                            Rs.{" "}
                            {(parseFloat(item.price) * item.quantity).toFixed(
                              2,
                            )}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pt-6 border-t-4 border-black">
                    <div className="flex flex-col gap-2 text-black/60 font-bold uppercase tracking-widest text-sm">
                      <div className="flex justify-between md:gap-8">
                        <span>Subtotal:</span>
                        <span className="text-black">Rs. {order.subtotal}</span>
                      </div>
                      <div className="flex justify-between md:gap-8">
                        <span>Shipping:</span>
                        <span className="text-black">Rs. {order.shipping}</span>
                      </div>
                    </div>
                    <div className="flex flex-col md:items-end gap-6">
                      <div className="text-2xl md:text-3xl font-shrikhand text-[#1a1a1a]">
                        Total Rs. {order.total}
                      </div>
                      <button
                        onClick={() => handleReorder(order.items)}
                        className="inline-flex items-center justify-center gap-3 py-3 px-8 bg-[#ffc65d] border-2 border-black rounded-2xl text-lg font-bold uppercase tracking-widest shadow-neo-sm hover:-translate-y-1 hover:shadow-neo transition-all"
                      >
                        <HiArrowPath size={22} /> Reorder All
                      </button>
                    </div>
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
