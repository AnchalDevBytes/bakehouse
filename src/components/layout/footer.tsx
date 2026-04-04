import { Link } from "next-view-transitions";
import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-[#f4a261] border-t-[3px] border-black py-16 px-4 md:px-20 mt-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-7xl mx-auto">
        {/* Brand */}
        <div className="flex flex-col gap-4">
          <h2 className="text-4xl font-shrikhand text-black">Bakehouse</h2>
          <p className="text-black text-lg max-w-sm font-medium">
            Handcrafted with love. From our oven to your heart. Experience the
            finest selection of artisan baked goods, made fresh daily.
          </p>
          <div className="flex gap-4 mt-2">
            <Link
              href="#"
              className="p-3 bg-white border-[3px] border-black rounded-lg hover:-translate-y-1 hover:shadow-neo transition-all text-black"
            >
              <FaInstagram size={24} />
            </Link>
            <Link
              href="#"
              className="p-3 bg-white border-[3px] border-black rounded-lg hover:-translate-y-1 hover:shadow-neo transition-all text-black"
            >
              <FaFacebookF size={24} />
            </Link>
            <Link
              href="#"
              className="p-3 bg-white border-[3px] border-black rounded-lg hover:-translate-y-1 hover:shadow-neo transition-all text-black"
            >
              <FaTwitter size={24} />
            </Link>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-4">
          <h3 className="text-2xl font-source-serif font-bold text-black border-b-[3px] border-black pb-2 inline-block w-fit">
            Navigate
          </h3>
          <nav className="flex flex-col gap-3 font-bold text-lg">
            <Link
              href="/"
              className="hover:underline hover:translate-x-1 w-fit transition-transform"
            >
              Home
            </Link>
            <Link
              href="/shop"
              className="hover:underline hover:translate-x-1 w-fit transition-transform"
            >
              Shop All
            </Link>
            <Link
              href="/shop?category=cakes&pastry"
              className="hover:underline hover:translate-x-1 w-fit transition-transform"
            >
              Cakes & Pastry
            </Link>
            <Link
              href="/shop?category=Breads"
              className="hover:underline hover:translate-x-1 w-fit transition-transform"
            >
              Artisan Breads
            </Link>
            <Link
              href="/shop?category=Deserts"
              className="hover:underline hover:translate-x-1 w-fit transition-transform"
            >
              Desserts
            </Link>
          </nav>
        </div>

        {/* Newsletter */}
        <div className="flex flex-col gap-4">
          <h3 className="text-2xl font-source-serif font-bold text-black border-b-[3px] border-black pb-2 inline-block w-fit">
            Stay Updated
          </h3>
          <p className="text-black text-lg font-medium">
            Get exclusive discounts and sweet tips delivered to your inbox.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 mt-2">
            <input
              type="email"
              placeholder="Your email address"
              className="px-4 py-3 border-[3px] border-black rounded-xl w-full focus:outline-none focus:bg-yellow-50 font-medium"
            />
            <button
              type="button"
              className="px-6 py-3 bg-[#2a1b15] text-white rounded-xl font-bold border-[3px] border-[#2a1b15] hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t-[3px] border-black flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-bold text-black text-lg">
          &copy; {new Date().getFullYear()} Bakehouse. All rights reserved.
        </p>
        <p className="font-bold text-black text-lg">Baked with ❤️ & butter</p>
      </div>
    </footer>
  );
}
