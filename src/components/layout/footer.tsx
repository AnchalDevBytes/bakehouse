import { Link } from "next-view-transitions";
import {
  RiInstagramFill,
  RiFacebookBoxFill,
  RiTwitterFill,
} from "react-icons/ri";

export default function Footer() {
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
                Experience the magic of handcrafted artisan breads and heavenly
                treats, baked daily with passion since 1995.
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 grid grid-cols-2 gap-8">
            <div className="flex flex-col gap-6">
              <h6 className="text-sm font-semibold uppercase tracking-widest text-[#f1b434]">
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
              <h6 className="text-sm font-semibold uppercase tracking-widest text-[#f1b434]">
                Company
              </h6>
              <nav className="flex flex-col gap-3">
                <Link
                  href="/#our-story"
                  className="text-sm font-medium hover:text-[#f1b434] transition-colors w-fit"
                >
                  Our Story
                </Link>
                <Link
                  href="/#moments"
                  className="text-sm font-medium hover:text-[#f1b434] transition-colors w-fit"
                >
                  Our Moments
                </Link>
                <Link
                  href="/#faq"
                  className="text-sm font-medium hover:text-[#f1b434] transition-colors w-fit"
                >
                  FAQ
                </Link>
              </nav>
            </div>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <h6 className="text-sm font-semibold uppercase tracking-widest text-[#f1b434]">
              Contact Us
            </h6>
            <div className="flex flex-col gap-4">
              <a
                href="contact@zarasana.com"
                className="text-sm font-medium text-[#2a1b15]/70 hover:text-[#f1b434] transition-colors"
              >
                contact@zarasana.com
              </a>
              <a
                href="tel:+918987601036"
                className="text-sm font-medium text-[#2a1b15]/70 hover:text-[#f1b434] transition-colors"
              >
                +91 8987601036
              </a>
            </div>
            <div className="flex gap-3 mt-2">
              {[
                { icon: RiInstagramFill, label: "Instagram", href: "#" },
                { icon: RiFacebookBoxFill, label: "Facebook", href: "#" },
                { icon: RiTwitterFill, label: "Twitter", href: "#" },
              ].map((social, i) => (
                <Link
                  href={social.href}
                  key={i}
                  className="p-2.5 rounded-full border-[1.5px] border-black/10 hover:border-[#f1b434] hover:text-[#f1b434] transition-all"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] text-center uppercase tracking-widest font-bold text-black/50">
            © {""}
            <Link
              target="_blank"
              href="https://www.zarasana.com"
              className="hover:text-black transition-colors"
            >
              zarasana.com
            </Link>{" "}
            all rights reserved, build with ❤️ by {""}
            <Link
              target="_blank"
              href="https://github.com/AnchalDevBytes"
              className="hover:text-black transition-colors"
            >
              AnchalDevBytes
            </Link>
          </p>
          <div className="flex items-center gap-1 text-[10px] uppercase tracking-widest font-bold text-black/50">
            Developer :
            <Link
              target="_blank"
              href="https://github.com/AnchalDevBytes"
              className="hover:text-black transition-colors"
            >
              AnchalDevBytes
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
