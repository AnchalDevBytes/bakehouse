"use client";
import { Link } from "next-view-transitions";
import { FormEvent } from "react";

export default function Footer() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.currentTarget.reset();
  };

  return (
    <footer className="w-full bg-[#f4a261] border-t-[3px] border-black py-16 px-4 md:px-20 mt-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-7xl mx-auto">
        <div className="flex flex-col gap-4">
          <Link href="/">
            <div className="font-shrikhand text-3xl md:text-4xl text-black select-none">
              Bakehouse
            </div>
          </Link>
          <p className="text-black text-lg max-w-sm">
            Handcrafted with love. From our oven to your heart. Experience the
            finest selection of artisan baked goods, made fresh daily.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="text-2xl font-source-serif font-bold text-black border-b-[3px] border-black pb-2 inline-block w-fit">
            Navigate
          </h3>
          <nav className="flex flex-col gap-3 text-base font-medium">
            {[
              { name: "Home", href: "/" },
              { name: "Shop All", href: "/shop" },
              { name: "Cakes & Pastry", href: "/shop?category=cakes&pastry" },
              { name: "Artisan Breads", href: "/shop?category=Breads" },
              { name: "Desserts", href: "/shop?category=Deserts" },
            ].map((item) => (
              <Link
                href={item.href}
                key={item.name}
                className="hover:underline w-fit transition-transform"
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>

        {/* Newsletter */}
        <div className="flex flex-col gap-4">
          <h3 className="text-2xl font-source-serif font-bold text-black border-b border-black pb-2 inline-block w-fit">
            Stay Updated
          </h3>
          <p className="text-black text-lg font-medium">
            Get exclusive discounts and sweet tips delivered to your inbox.
          </p>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 mt-2"
          >
            <input
              type="email"
              placeholder="Your email address"
              className="px-4 py-3 border-[3px] border-black rounded-xl w-full focus:outline-none focus:bg-yellow-50 font-medium"
            />
            <button className="px-6 py-3 bg-[#2a1b15] text-white rounded-xl font-medium border-[3px] border-[#2a1b15] transition-all whitespace-nowrap">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-black flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-medium text-black text-sm leading-relaxed">
          &copy; {new Date().getFullYear()} Bakehouse. All rights reserved.
        </p>
        <p className="font-medium text-black text-sm leading-relaxed">
          Baked with ❤️ & butter
        </p>
      </div>
    </footer>
  );
}
