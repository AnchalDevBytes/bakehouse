"use client";
import React from "react";
import { motion } from "motion/react";
import { Link } from "next-view-transitions";
import { HiArrowLeft } from "react-icons/hi2";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  breadcrumb?: { label: string; href: string };
  bgColor?: string;
  className?: string;
  children?: React.ReactNode;
}

const PageHero = ({
  title,
  subtitle,
  breadcrumb,
  bgColor = "bg-[#fdfcfb]",
  className = "",
  children,
}: PageHeroProps) => {
  return (
    <section
      className={`relative pt-32 pb-12 px-6 lg:px-20 overflow-hidden ${bgColor} ${className}`}
    >
      <div className="max-w-7xl mx-auto w-full flex flex-col gap-6 relative z-10">
        {/* Breadcrumb / Back Link */}
        {breadcrumb && (
          <motion.div
            initial={{ opacity: 0, x: -5 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Link
              href={breadcrumb.href}
              className="inline-flex items-center gap-2 text-black/40 hover:text-black transition-colors font-bold uppercase tracking-widest text-xs"
            >
              <HiArrowLeft size={18} /> {breadcrumb.label}
            </Link>
          </motion.div>
        )}

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-3xl">
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="text-3xl md:text-5xl font-source-serif font-black text-[#1a1a1a] uppercase leading-none tracking-tight"
            >
              {title}
            </motion.h1>
            {subtitle && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
                className="mt-4 text-lg md:text-xl text-black/50 font-medium max-w-xl leading-relaxed"
              >
                {subtitle}
              </motion.p>
            )}
          </div>
          {children && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.2, ease: "easeOut" }}
              className="shrink-0"
            >
              {children}
            </motion.div>
          )}
        </div>
      </div>

      {/* Decorative Elements - Thinned out */}
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-160 h-160 bg-teal-500/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Subtle Pattern Overlay */}
      <div className="absolute inset-0 subtle-bakery-pattern opacity-[0.03] pointer-events-none" />
    </section>
  );
};

export default PageHero;
