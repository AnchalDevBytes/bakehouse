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
import { RiShoppingBag3Line } from "react-icons/ri";
import AnnouncementBanner from "./announcement-banner";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Shop", href: "/shop" },
  { name: "Orders", href: "/orders" },
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
    <>
      <AnnouncementBanner scrolled={scrolled} />
      <header
        className={cn(
          "fixed z-50 flex flex-col container mx-auto items-center pt-4 px-4 pointer-events-none w-full left-1/2 -translate-x-1/2",
          scrolled ? "top-0" : "top-10 sm:top-6",
        )}
      >
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
                </Link>
              );
            })}
            
            {/* Desktop Cart Icon */}
            <Link
              href="/cart"
              className={cn(
                "ml-2 p-2 rounded-full transition-all duration-300 relative group",
                scrolled ? "text-yellow-950 hover:bg-yellow-50" : "text-black hover:bg-black/5",
                pathname === "/cart" && "opacity-100",
                pathname !== "/cart" && "opacity-70 hover:opacity-100"
              )}
            >
              <RiShoppingBag3Line size={22} />
              {mounted && cartCount > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  key={cartCount}
                  className="absolute -top-1 -right-1 bg-red-600 text-white min-w-[18px] h-[18px] rounded-full flex items-center justify-center text-[10px] font-bold shadow-sm"
                >
                  {cartCount}
                </motion.span>
              )}
            </Link>
          </nav>

          {/* Mobile Actions */}
          <motion.div layout="position" className="flex items-center gap-2 md:hidden">
            {/* Mobile Cart Icon - Outside Burger */}
            <Link
              href="/cart"
              onClick={() => setMobileOpen(false)}
              className={cn(
                "p-2 rounded-full transition-all relative",
                scrolled ? "text-yellow-950 hover:bg-yellow-50" : "text-black hover:bg-white/10",
                pathname === "/cart" ? "opacity-100" : "opacity-70"
              )}
            >
              <RiShoppingBag3Line size={22} />
              {mounted && cartCount > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  key={cartCount}
                  className="absolute -top-0.5 -right-0.5 bg-red-600 text-white min-w-[18px] h-[18px] rounded-full flex items-center justify-center text-[10px] font-bold shadow-sm"
                >
                  {cartCount}
                </motion.span>
              )}
            </Link>

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
                  </Link>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}

export default Header;
