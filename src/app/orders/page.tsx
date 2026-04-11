"use client";
import { useCartStore } from "@/store/useCartStore";
import { Link } from "next-view-transitions";
import { useState, useEffect } from "react";
import {
  HiShoppingBag,
  HiArrowPath,
  HiClock,
  HiCheckCircle,
  HiTruck,
} from "react-icons/hi2";
import PageHero from "@/components/ui/page-hero";
import { AnimationWrapper } from "@/components/ui/animation-wrapper";

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

  const getStatusIcon = (status: string) => {
    switch (status.toLowerCase()) {
      case "delivered":
        return <HiCheckCircle className="text-green-500" />;
      case "shipping":
        return <HiTruck className="text-blue-500" />;
      default:
        return <HiClock className="text-yellow-500" />;
    }
  };

  return (
    <main className="min-h-screen bg-[#fdfcfb]">
      <PageHero
        title="Your Journey"
        subtitle="A history of your sweet moments. Track your current delights or relive your past favorites."
        breadcrumb={{ label: "Shop", href: "/shop" }}
      >
        <div className="hidden md:flex items-center gap-4 bg-white border border-black p-4 rounded-3xl shadow-neo">
          <div className="flex flex-col items-end">
            <span className="text-2xl font-black">{orderHistory.length}</span>
            <span className="text-[10px] font-black uppercase tracking-widest text-black/30">
              Total Orders
            </span>
          </div>
        </div>
      </PageHero>

      <div className="container mx-auto px-3 md:px-20 pb-32">
        {orderHistory.length === 0 ? (
          <AnimationWrapper className="bg-white border-2 border-black p-16 md:p-24 rounded-[40px] shadow-neo-sm text-center flex flex-col items-center gap-8">
            <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center text-black/5">
              <HiShoppingBag size={48} />
            </div>
            <div className="max-w-md">
              <h2 className="text-xl sm:text-2xl font-source-serif italic text-black/30 mb-2">
                No orders yet
              </h2>
              <p className="text-black/40 text-xs sm:text-sm font-medium">
                Your culinary journey starts here.
              </p>
            </div>
            <Link
              href="/shop"
              className="inline-flex items-center gap-3 py-4 px-10 bg-[#ffc65d] border border-black rounded-xl text-sm sm:text-lg font-bold uppercase tracking-widest shadow-neo-sm hover:-translate-y-0.5 transition-all text-nowrap"
            >
              Start Ordering
            </Link>
          </AnimationWrapper>
        ) : (
          <div className="flex flex-col gap-10 max-w-7xl mx-auto">
            <div className="flex items-center gap-4 mb-4">
              <div className="h-px bg-black/5 flex-1" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-black/10">
                Recent Activity
              </span>
              <div className="h-px bg-black/5 flex-1" />
            </div>

            {[...orderHistory].map((order, idx) => (
              <AnimationWrapper
                key={order.id}
                delay={idx * 0.05}
                className="bg-white border border-black/10 rounded-[32px] shadow-sm hover:shadow-neo-sm transition-all overflow-hidden flex flex-col relative group"
              >
                {/* Order Header */}
                <div className="bg-[#fff3da] border-b border-black/5 p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-3">
                      <span className="px-3 py-1 bg-black text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-full">
                        Order #{order.id}
                      </span>
                      <span className="text-[10px] font-black text-black/20 uppercase tracking-widest">
                        {new Date(order.date).toLocaleDateString("en-GB", {
                          day: "numeric",
                          month: "short",
                          year: "numeric",
                        })}
                      </span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-source-serif font-black leading-none">
                      Placed at{" "}
                      {new Date(order.date).toLocaleTimeString("en-GB", {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </h3>
                  </div>

                  <div className="flex items-center gap-6">
                    <div className="flex flex-col items-end gap-1.5">
                      <span className="text-[10px] font-black uppercase tracking-widest text-black/20">
                        Status
                      </span>
                      <div className="flex items-center gap-2 bg-white border border-black/10 px-4 py-2 rounded-xl">
                        <span className="text-base">
                          {getStatusIcon(order.status)}
                        </span>
                        <span className="text-[10px] font-black uppercase tracking-widest">
                          {order.status}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Items Section */}
                <div className="p-8 md:p-10 flex flex-col gap-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
                    <div className="flex flex-col gap-6">
                      <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-black/30 border-b border-black/5 pb-3">
                        The Selection
                      </h4>
                      <div className="flex flex-col gap-4">
                        {order.items.map((item, i) => (
                          <div
                            key={i}
                            className="flex justify-between items-start group/item"
                          >
                            <div className="flex flex-col gap-0.5">
                              <span className="text-base font-black uppercase tracking-tight group-hover/item:text-[#f1b434] transition-colors leading-none">
                                {item.name}
                              </span>
                              {item.size && (
                                <span className="text-[8px] font-black text-black/20 uppercase tracking-widest">
                                  {item.size} Edition
                                </span>
                              )}
                            </div>
                            <div className="flex items-center gap-4">
                              <span className="text-[10px] font-black text-black/10">
                                x{item.quantity}
                              </span>
                              <span className="text-base font-bold">
                                Rs. {Number(item.price).toFixed(2)}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-col gap-6">
                      <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-black/30 border-b border-black/5 pb-3">
                        Investment Summary
                      </h4>
                      <div className="flex flex-col gap-4 text-sm font-bold text-black/40">
                        <div className="flex justify-between">
                          <span className="uppercase tracking-widest text-xs">
                            Subtotal
                          </span>
                          <span className="text-black/70">
                            Rs. {order.subtotal}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="uppercase tracking-widest text-xs">
                            Shipping
                          </span>
                          <span className="text-black/70">
                            Rs. {order.shipping}
                          </span>
                        </div>
                        <div className="flex justify-between items-end pt-5 border-t border-black/10 mt-1 text-black">
                          <span className="text-xs font-black uppercase tracking-[0.2em]">
                            Grand Total
                          </span>
                          <span className="text-2xl font-source-serif font-black leading-none tracking-tighter">
                            Rs. {order.total}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Reorder Action */}
                  <div className="flex flex-col sm:flex-row justify-between items-center gap-6 pt-8 border-t border-black/5 border-dashed">
                    <p className="text-base font-medium text-black/30 italic max-w-xs leading-relaxed">
                      "RELIVE THE MOMENT."
                    </p>
                    <button
                      onClick={() => handleReorder(order.items)}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-3 py-4 px-10 bg-[#f1b434] border border-black rounded-xl text-lg font-bold uppercase tracking-widest shadow-neo-sm hover:-translate-y-0.5 transition-all"
                    >
                      <HiArrowPath size={20} /> Reorder
                    </button>
                  </div>
                </div>

                {/* Subtle Decorative ID */}
                <div className="absolute top-1/2 -right-12 -translate-y-1/2 rotate-90 hidden lg:block">
                  <span className="text-[10px] font-black uppercase tracking-[0.5em] text-black/5">
                    OrderReference-{order.id}
                  </span>
                </div>
              </AnimationWrapper>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
