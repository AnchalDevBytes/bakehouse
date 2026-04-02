import { cn } from "@/lib/utils";
import { motion } from "motion/react";

export const Card = ({
  children,
  className,
  bgColor,
}: {
  children: React.ReactNode;
  className?: string;
  bgColor: string;
}) => (
  <motion.div
    className={cn(
      "rounded-2xl md:rounded-4xl overflow-hidden relative p-6 md:p-8",
      bgColor,
      className,
    )}
  >
    {children}
  </motion.div>
);
