"use client";
import { Link } from "next-view-transitions";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

const Button = ({
  href,
  children,
  variant = "white",
  className,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  variant?: "white" | "yellow";
  className?: string;
  onClick?: () => void;
}) => (
  <Link href={href} onClick={onClick}>
    <motion.button
      className={cn(
        "px-6 py-1 font-bold text-lg border-2 border-black rounded-xl transition-all shadow-neo hover:shadow-neo-lg ease-in-out duration-400",
        variant === "white" ? "bg-white" : "bg-[#f1b434] shadow-neo-lg",
        className,
      )}
    >
      {children}
    </motion.button>
  </Link>
);

export default Button;
