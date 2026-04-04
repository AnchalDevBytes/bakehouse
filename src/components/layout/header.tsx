"use client";
import { useState } from "react";
import { Link } from "next-view-transitions";
import { motion, AnimatePresence } from "motion/react";
import Button from "@/components/ui/Button";
import { usePathname } from "next/navigation";
import { RiMenu4Line, RiCloseLine } from "react-icons/ri";
import { useCartStore } from "@/store/useCartStore";
import { useEffect } from "react";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Shop", href: "/shop" },
  { name: "Orders", href: "/orders" },
  { name: "Cart", href: "/cart" },
];

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const items = useCartStore((state) => state.items);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const cartCount = items.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 p-6 backdrop-blur-md bg-[#fdfcfb]/80 border-b-2 border-transparent hover:border-black/5 transition-all">
      <nav className="mx-auto flex items-center justify-between px-2 md:px-20">
        <Link href="/">
          <div className="font-shrikhand text-3xl md:text-4xl text-black select-none">
            Bakehouse
          </div>
        </Link>

        <div className="hidden md:flex gap-6 items-center">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Button
                key={item.name}
                href={item.href}
                variant={isActive ? "yellow" : "white"}
              >
                <div className="flex items-center gap-2">
                  {item.name}
                  {item.name === "Cart" && mounted && cartCount > 0 && (
                    <span className="bg-[#ff3d3d] text-white min-w-[24px] h-6 rounded-full flex items-center justify-center text-xs border-2 border-black shadow-neo-sm">
                      {cartCount}
                    </span>
                  )}
                </div>
              </Button>
            );
          })}
        </div>

        {/* Mobile: Hamburger Icon */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 border-2 border-black rounded-lg bg-white shadow-neo active:shadow-neo-sm transition-all"
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? (
            <RiCloseLine size={24} />
          ) : (
            <RiMenu4Line size={24} />
          )}
        </button>
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-24 left-6 right-6 p-6 bg-[#fdfcfb] border-2 border-black rounded-3xl shadow-neo-lg z-50 flex flex-col gap-4 md:hidden"
          >
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Button
                  key={item.name}
                  href={item.href}
                  variant={isActive ? "yellow" : "white"}
                  className="w-full text-center"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <div className="flex items-center justify-center gap-2">
                    {item.name}
                    {item.name === "Cart" && mounted && cartCount > 0 && (
                      <span className="bg-[#ff3d3d] text-white min-w-[24px] h-6 rounded-full flex items-center justify-center text-xs border-2 border-black shadow-neo-sm">
                        {cartCount}
                      </span>
                    )}
                  </div>
                </Button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Header;
