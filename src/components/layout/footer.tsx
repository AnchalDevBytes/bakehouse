"use client";
import { Link } from "next-view-transitions";
import { FormEvent } from "react";
import {
  RiInstagramFill,
  RiFacebookBoxFill,
  RiTwitterFill,
} from "react-icons/ri";

export default function Footer() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.currentTarget.reset();
  };

  return (
    <footer className="w-full bg-[#fdfcfb] border-t-[1.5px] border-black pt-20 pb-10 px-6 md:px-20 mt-auto subtle-bakery-pattern relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col gap-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Brand blurb */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <Link href="/" className="flex items-center gap-2 group">
                <span className="font-great-vibes text-3xl md:text-4xl tracking-tight transition-all duration-300 font-semibold">
                  Bake house
                </span>
              </Link>
              <p className="text-[#2a1b15]/60 text-lg leading-relaxed max-w-md">
                Handcrafted treats for every occasion, baked with love and
                premium ingredients in the heart of the city since 1995.
              </p>
            </div>

            <div className="flex gap-4">
              {[
                { icon: RiInstagramFill, label: "Instagram" },
                { icon: RiFacebookBoxFill, label: "Facebook" },
                { icon: RiTwitterFill, label: "Twitter" },
              ].map((social, i) => (
                <button
                  key={i}
                  className="p-3 rounded-full border-[1.5px] border-black/10 hover:border-[#f1b434] hover:text-[#f1b434] transition-all"
                  aria-label={social.label}
                >
                  <social.icon size={22} />
                </button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 grid grid-cols-2 gap-8">
            <div className="flex flex-col gap-6">
              <h6 className="text-xs font-bold uppercase tracking-widest text-[#f1b434]">
                Shop
              </h6>
              <nav className="flex flex-col gap-3">
                {["Cakes", "Breads", "Donuts", "Snacks"].map((item) => (
                  <Link
                    key={item}
                    href={`/shop?category=${item.toLowerCase()}`}
                    className="text-sm font-medium hover:text-[#f1b434] transition-colors w-fit"
                  >
                    {item}
                  </Link>
                ))}
              </nav>
            </div>
            <div className="flex flex-col gap-6">
              <h6 className="text-xs font-bold uppercase tracking-widest text-[#f1b434]">
                Company
              </h6>
              <nav className="flex flex-col gap-3">
                {["Our Story", "Locations", "Contact", "FAQ"].map((item) => (
                  <Link
                    key={item}
                    href="#"
                    className="text-sm font-medium hover:text-[#f1b434] transition-colors w-fit"
                  >
                    {item}
                  </Link>
                ))}
              </nav>
            </div>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <h6 className="text-xs font-bold uppercase tracking-widest text-[#f1b434]">
              Newsletter
            </h6>
            <p className="text-sm text-[#2a1b15]/60">
              Get sweet updates and exclusive offers delivered to your inbox.
            </p>
            <form onSubmit={handleSubmit} className="flex gap-2 w-full mt-2">
              <input
                type="email"
                placeholder="Email Address"
                className="flex-1 px-4 py-3 bg-white border-[1.5px] border-black/10 rounded-xl focus:border-black outline-none transition-all text-sm font-medium"
                required
              />
              <button className="px-6 py-3 bg-[#2a1b15] text-white rounded-xl text-sm font-bold border-[1.5px] border-black hover:bg-black transition-colors">
                Join
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] uppercase tracking-widest font-bold text-black/30">
            © {new Date().getFullYear()} BAKEHOUSE BAKERY. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-8 text-[10px] uppercase tracking-widest font-bold text-black/30">
            <Link href="#" className="hover:text-black">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-black">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
