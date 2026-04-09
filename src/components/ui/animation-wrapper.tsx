"use client";
import { motion, HTMLMotionProps } from "motion/react";
import { ReactNode } from "react";

interface AnimationWrapperProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
  animation?: "fadeUp" | "fadeIn" | "scaleIn";
  delay?: number;
}

const animations = {
  fadeUp: {
    initial: { opacity: 0, y: 10 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.2, ease: "easeOut" as const },
  },
  fadeIn: {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { once: true },
    transition: { duration: 0.2, ease: "easeOut" as const },
  },
  scaleIn: {
    initial: { opacity: 0, scale: 0.9 },
    whileInView: { opacity: 1, scale: 1 },
    viewport: { once: true },
    transition: { duration: 0.2, ease: "backOut" as const },
  },
};

export const AnimationWrapper = ({
  children,
  animation = "fadeUp",
  delay = 0,
  className,
  ...props
}: AnimationWrapperProps) => {
  const selectedAnimation = animations[animation];

  return (
    <motion.div
      {...selectedAnimation}
      transition={{ ...selectedAnimation.transition, delay }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};
