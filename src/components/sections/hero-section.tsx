"use client";
import Image from "next/image";
import { motion } from "motion/react";
import { Link } from "next-view-transitions";

const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-20 px-6 lg:px-20 overflow-hidden subtle-bakery-pattern min-h-[85vh] flex items-center">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Text & CTA */}
        <div className="lg:col-span-7 flex flex-col gap-8 z-10">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h1 className="font-source-serif italic text-[clamp(2.8rem,6vw,6.5rem)] leading-[1.1] text-[#2a1b15] tracking-[0.05em]">
              HEAVENLY
              <br />
              <span className="text-[#f1b434] font-great-vibes">BITES</span>
            </h1>
            <p className="mt-8 max-w-lg text-[#2a1b15]/80 text-lg md:text-xl font-medium leading-relaxed">
              Experience the magic of handcrafted artisan breads, heavenly
              cakes, and delightful pastries made fresh every day with premium
              ingredients.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="flex flex-wrap items-center gap-8 mt-4"
          >
            <Link
              href="/shop"
              className="px-12 py-3 bg-[#f1b434] text-black rounded-2xl font-bold text-lg border-[1.5px] border-black shadow-neo-sm hover:shadow-neo hover:-translate-y-1 transition-all"
            >
              Order Now
            </Link>
            <div className="flex flex-col">
              <span className="text-3xl font-source-serif font-black text-[#f1b434]">
                ( 4.9 )
              </span>
              <span className="text-[10px] font-source-serif font-bold uppercase tracking-[0.2em] text-[#2a1b15]/40 italic">
                Since 1995
              </span>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Dynamic Asset Composition */}
        <div className="lg:col-span-5 relative h-[500px] md:h-[650px] flex items-center justify-center">
          {/* Main Hero Image: Cake */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, ease: "backOut" }}
            className="relative w-full h-full z-20 drop-shadow-[0_20px_50px_rgba(42,27,21,0.15)]"
          >
            <Image
              src="/food/hero-cake-premium.png"
              alt="Premium Artisan Cake"
              fill
              className="object-contain"
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </motion.div>

          {/* Floating Assets */}
          <motion.div
            animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-10 -right-10 w-40 h-40 z-10"
          >
            <Image
              src="/food/cookie.png"
              alt="Cookie"
              fill
              className="object-contain"
            />
          </motion.div>

          <motion.div
            animate={{ y: [0, 15, 0], rotate: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-10 -left-10 w-48 h-48 z-10"
          >
            <Image
              src="/food/donut1.png"
              alt="Donut"
              fill
              className="object-contain opacity-80"
            />
          </motion.div>

          {/* Decorative Circle Elements */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#f1b434]/10 rounded-full blur-3xl -z-10" />
        </div>
      </div>

      {/* Background Decorative Text/Asset */}
      {/* <div className="absolute bottom-10 left-10 opacity-5 hidden lg:block select-none pointer-events-none">
        <h2 className="font-source-serif font-black text-9xl text-[#2a1b15] tracking-[0.2em]">
          BAKEHOUSE
        </h2>
      </div> */}
    </section>
  );
};

export default HeroSection;
