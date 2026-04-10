"use client";
import { useCartStore } from "@/store/useCartStore";
import Image from "next/image";
import { Link } from "next-view-transitions";
import { useState, useEffect } from "react";
import {
  HiPlus,
  HiMinus,
  HiTrash,
  HiCheckCircle,
  HiShoppingBag,
} from "react-icons/hi2";
import PageHero from "@/components/ui/page-hero";
import { AnimationWrapper } from "@/components/ui/animation-wrapper";
import { cn } from "@/lib/utils";

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
    await new Promise((resolve) => setTimeout(resolve, 2000));
    checkout();
    setIsCheckingOut(false);
    setOrderSuccess(true);
  };

  if (orderSuccess) {
    return (
      <main className="min-h-screen bg-[#fdfcfb] pt-36 pb-24 flex items-center justify-center px-6">
        <AnimationWrapper animation="scaleIn" className="max-w-xl w-full">
          <div className="bg-[#fff3da] border-2 border-black p-8 md:p-12 rounded-[40px] shadow-neo text-center flex flex-col gap-8 relative overflow-hidden">
            <div className="flex flex-col items-center gap-6 relative z-10">
              <div className="w-16 h-16 bg-green-500 rounded-full border-2 border-black flex items-center justify-center shadow-neo-sm">
                <HiCheckCircle size={32} className="text-black" />
              </div>
              <div className="flex flex-col gap-3">
                <h1 className="text-2xl md:text-4xl font-source-serif text-[#1a1a1a] uppercase leading-none tracking-tight">
                  Sweet <br /> Success!
                </h1>
                <p className="text-lg font-source-serif italic text-black/40">
                  Your artisan treats are being prepared...
                </p>
              </div>
            </div>

            <div className="bg-white border border-black rounded-[24px] p-6 flex flex-col gap-6 shadow-neo-sm relative">
              <div className="flex justify-between items-center border-b border-black border-dashed pb-3 text-[10px] font-black uppercase tracking-[0.2em] text-black/20">
                <span>
                  Receipt #BK-{Math.floor(Math.random() * 900000) + 100000}
                </span>
                <span>
                  {new Date().toLocaleDateString("en-GB", {
                    day: "numeric",
                    month: "short",
                  })}
                </span>
              </div>
              <p className="text-base font-bold text-left leading-relaxed text-black/70">
                Thank you for choosing Bakehouse. Your order has been added to
                your history. We'll start baking shortly!
              </p>
            </div>

            <div className="flex flex-col gap-3 z-10">
              <Link
                href="/orders"
                className="flex-1 py-4 bg-black text-white border border-black rounded-xl text-xs sm:text-lg font-bold uppercase tracking-widest shadow-neo-sm hover:-translate-y-0.5 transition-all"
              >
                Track Orders
              </Link>
              <Link
                href="/shop"
                className="flex-1 py-4 bg-white text-black border border-black rounded-xl text-xs sm:text-lg font-bold uppercase tracking-widest shadow-neo-sm hover:-translate-y-0.5 transition-all"
              >
                Keep Shopping
              </Link>
            </div>
          </div>
        </AnimationWrapper>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#fdfcfb]">
      <PageHero
        title="Your Basket"
        subtitle="Review your selection and prepare for bliss."
        breadcrumb={{ label: "Home", href: "/" }}
      >
        <div className="hidden md:flex items-center gap-4 bg-white border border-black p-4 rounded-2xl shadow-neo-sm">
          <HiShoppingBag size={24} className="text-[#f1b434]" />
          <div className="flex flex-col">
            <span className="text-xl font-black leading-none">
              {items.length}
            </span>
            <span className="text-[8px] font-black uppercase tracking-widest text-black/30">
              Items
            </span>
          </div>
        </div>
      </PageHero>

      <div className="container mx-auto px-3 md:px-20 pb-32 pt-10">
        {items.length === 0 ? (
          <AnimationWrapper className="bg-white border-2 border-black p-16 md:p-24 rounded-[40px] shadow-neo-sm text-center flex flex-col items-center gap-8">
            <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center text-black/5">
              <HiShoppingBag size={48} />
            </div>
            <div className="max-w-md">
              <h2 className="text-2xl font-source-serif italic text-black/30 mb-2">
                Your basket is empty
              </h2>
              <p className="text-black/40 text-sm font-medium">
                Looks like you haven't added any treats yet.
              </p>
            </div>
            <Link
              href="/shop"
              className="inline-flex items-center gap-3 py-4 px-10 bg-[#f1b434] border border-black rounded-xl text-xs sm:text-lg font-bold uppercase tracking-widest shadow-neo-sm hover:-translate-y-0.5 transition-all text-nowrap"
            >
              Start Exploring
            </Link>
          </AnimationWrapper>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-7 flex flex-col gap-6">
              {items.map((item, idx) => (
                <div
                  key={`${item.id}-${item.size || "default"}`}
                  className="flex gap-6 p-6 bg-white border border-black/5 rounded-[32px] shadow-sm transition-all relative overflow-hidden group"
                >
                  <div className="w-16 h-auto sm:w-24 sm:h-24 shrink-0 relative rounded-xl flex items-center justify-center overflow-hidden border border-black/5 bg-[#fdfcfb]">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-contain p-3"
                    />
                  </div>

                  <div className="flex-1 flex flex-col justify-between py-1 text-black/70">
                    <div className="flex justify-between items-start">
                      <div className="flex flex-col gap-1">
                        <h3 className="text-xs sm:text-lg font-black uppercase tracking-tight leading-none text-black">
                          {item.name}
                        </h3>
                        {item.size && (
                          <span className="text-[8px] font-black text-[#f1b434] uppercase tracking-[0.2em]">
                            {item.size} Edition
                          </span>
                        )}
                      </div>
                      <button
                        onClick={() => removeItem(item.id, item.size)}
                        className="p-2 bg-red-50 text-red-500 rounded-lg hover:bg-red-100 transition-colors shrink-0"
                      >
                        <HiTrash size={16} />
                      </button>
                    </div>

                    <div className="flex justify-between items-end mt-2 sm:mt-4">
                      <div className="flex items-center bg-[#f5f5f5] rounded-xl p-0.5 border border-black/10 h-10">
                        <button
                          onClick={() =>
                            updateQuantity(
                              item.id,
                              Math.max(1, item.quantity - 1),
                              item.size,
                            )
                          }
                          className="w-8 h-full flex items-center justify-center text-black/40 hover:text-black"
                        >
                          <HiMinus />
                        </button>
                        <span className="min-w-8 text-center font-black text-sm">
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
                          className="w-8 h-full flex items-center justify-center text-black/40 hover:text-black"
                        >
                          <HiPlus />
                        </button>
                      </div>

                      <div className="text-xs sm:text-lg font-black text-black">
                        Rs.{" "}
                        {(parseFloat(item.price) * item.quantity).toFixed(2)}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Summary */}
            <div className="lg:col-span-5 lg:sticky lg:top-32">
              <AnimationWrapper
                animation="fadeUp"
                delay={0.1}
                className="bg-white border border-black p-8 rounded-[40px] shadow-neo-sm flex flex-col gap-8"
              >
                <div className="flex flex-col gap-1">
                  <h2 className="text-2xl font-source-serif uppercase leading-none border-b border-black pb-4 text-[#1a1a1a]">
                    Summary
                  </h2>
                </div>

                <div className="flex flex-col gap-4 text-base font-bold">
                  <div className="flex justify-between items-center text-black/40">
                    <span className="uppercase tracking-widest text-[10px]">
                      Subtotal
                    </span>
                    <span>Rs. {subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between items-center text-green-600">
                    <span className="text-black/40 uppercase tracking-widest text-[10px]">
                      Shipping
                    </span>
                    <span>
                      {shipping === 0 ? "FREE" : `Rs. ${shipping.toFixed(2)}`}
                    </span>
                  </div>
                </div>

                <div className="flex justify-between items-center text-2xl font-black border-t border-black pt-6 text-[#1a1a1a]">
                  <span className="uppercase tracking-tighter">Total</span>
                  <span>Rs. {total.toFixed(2)}</span>
                </div>

                <button
                  onClick={handleCheckout}
                  disabled={isCheckingOut}
                  className={cn(
                    "w-full py-4 text-lg font-black uppercase tracking-[0.2em] rounded-2xl border border-black shadow-neo hover:shadow-neo-md transition-all flex items-center justify-center gap-3",
                    isCheckingOut
                      ? "bg-black text-white"
                      : "bg-[#f1b434] text-black hover:-translate-y-0.5",
                  )}
                >
                  {isCheckingOut ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      <span>Processing</span>
                    </>
                  ) : (
                    "Place Order"
                  )}
                </button>

                <div className="flex items-center justify-center gap-3 text-[10px] font-black uppercase tracking-[0.3em] text-black/10">
                  <span className="w-6 h-px bg-black/5" />
                  Secure Checkout
                  <span className="w-6 h-px bg-black/5" />
                </div>
              </AnimationWrapper>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
