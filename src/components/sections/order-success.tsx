import { AnimationWrapper } from "@/components/ui/animation-wrapper";
import { HiCheckCircle } from "react-icons/hi2";
import { Link } from "next-view-transitions";

const OrderSuccess = () => {
  return (
    <main className="min-h-screen bg-[#fdfcfb] pt-36 pb-24 flex items-center justify-center px-3 sm:px-6">
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
};

export default OrderSuccess;
