"use client";
import { useState, useEffect } from "react";
import { Link } from "next-view-transitions";
import {
  motion,
  useScroll,
  useMotionValueEvent,
  AnimatePresence,
} from "motion/react";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { useCartStore } from "@/store/useCartStore";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Shop", href: "/shop" },
  { name: "Orders", href: "/orders" },
  { name: "Cart", href: "/cart" },
];

export function Header() {
  const { scrollY } = useScroll();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  const items = useCartStore((state) => state.items);
  const cartCount = items.reduce((acc, item) => acc + item.quantity, 0);

  useEffect(() => {
    setMounted(true);
  }, []);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 50 && !scrolled) {
      setScrolled(true);
    } else if (latest <= 50 && scrolled) {
      setScrolled(false);
    }
  });

  return (
    <header className="fixed top-0 z-50 flex flex-col container mx-auto items-center pt-4 px-4 pointer-events-none w-full left-1/2 -translate-x-1/2">
      <motion.div
        layout
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          layout: { type: "spring", stiffness: 200, damping: 30, mass: 1 },
          opacity: { duration: 0.2 },
        }}
        className={cn(
          "pointer-events-auto flex items-center justify-between px-6 py-2 rounded-full border transition-all duration-500 ease-in-out",
          scrolled
            ? "bg-white/70 border-yellow-100 backdrop-blur-md shadow-sm w-full max-w-4xl"
            : "bg-transparent border-transparent w-full max-w-6xl",
        )}
      >
        {/* Logo Section */}
        <motion.div layout="position" className="flex items-center">
          <Link href="/" className="flex items-center gap-2 group">
            <span
              className={cn(
                "font-great-vibes text-2xl md:text-3xl tracking-tight transition-all duration-300 font-semibold",
                scrolled ? "text-yellow-950" : "text-black",
              )}
            >
              Bake house
            </span>
          </Link>
        </motion.div>

        {/* Navigation - Center */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "py-2 text-sm font-medium transition-all duration-300 relative flex items-center gap-1.5",
                  scrolled ? "px-3 text-yellow-950" : "px-4 text-black",
                  isActive && "opacity-100 font-bold",
                  !isActive && "opacity-70 hover:opacity-100",
                )}
              >
                {item.name}
                {item.name === "Cart" && mounted && cartCount > 0 && (
                  <span className="bg-red-600 text-white min-w-[18px] h-[18px] rounded-full flex items-center justify-center text-[10px]">
                    {cartCount}
                  </span>
                )}
              </Link>
            );
          })}
        </nav>

        {/* Mobile Toggle */}
        <motion.div layout="position" className="flex items-center md:hidden">
          <button
            onClick={() => setMobileOpen((o) => !o)}
            className="p-2 rounded-full text-black hover:bg-yellow-50 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <RxCross2 size={20} />
            ) : (
              <RxHamburgerMenu size={20} />
            )}
          </button>
        </motion.div>
      </motion.div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="md:hidden pointer-events-auto mt-2 mx-auto w-full max-w-3xl rounded-2xl border border-yellow-100 bg-white/90 backdrop-blur-md overflow-hidden shadow-xl"
          >
            <nav className="flex flex-col p-3 gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    "px-4 py-3 text-sm font-medium rounded-xl flex items-center justify-between transition-colors",
                    pathname === item.href
                      ? "bg-yellow-50 text-yellow-950"
                      : "text-black hover:bg-yellow-50/50",
                  )}
                >
                  {item.name}
                  {item.name === "Cart" && mounted && cartCount > 0 && (
                    <span className="bg-yellow-600 text-white min-w-[20px] h-[20px] rounded-full flex items-center justify-center text-[10px]">
                      {cartCount}
                    </span>
                  )}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Header;
