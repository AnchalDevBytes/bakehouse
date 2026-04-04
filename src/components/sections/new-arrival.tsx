"use client";
import { useState, useRef, useEffect } from "react";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi2";
import ProductCard from "@/components/sections/product-card";
import products from "@/helpers/data.json";

const NewArrivals = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      const progress = (scrollLeft / (scrollWidth - clientWidth)) * 100;
      setScrollProgress(progress);
    }
  };

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const firstItem = scrollRef.current.firstElementChild as HTMLElement;
      if (firstItem) {
        // Dynamic scroll calculation: card width + gap (24px for lg:gap-6)
        const scrollAmount = firstItem.offsetWidth + 24;
        scrollRef.current.scrollBy({
          left: direction === "left" ? -scrollAmount : scrollAmount,
          behavior: "smooth",
        });
      }
    }
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener("resize", handleScroll);
    return () => window.removeEventListener("resize", handleScroll);
  }, []);

  const newArrivals = products.filter((product) => product.isNew).slice(0, 10);

  return (
    <section className="flex flex-col gap-12 sm:gap-20 px-4 sm:px-6 lg:px-0">
      <div className="flex items-center justify-center gap-6 px-4 md:px-20 w-full min-w-0">
        <h4 className="text-3xl sm:text-4xl md:text-5xl font-source-serif text-black leading-tight">
          New Arrivals
        </h4>
        <button className="px-4 sm:px-8 py-1 bg-[#2a1b15] text-white rounded-xl font-bold flex items-center gap-2 hover:bg-[#3d2921] transition-all duration-300 w-fit shrink-0">
          See All <span className="text-xl -translate-y-1">→</span>
        </button>
      </div>

      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="grid grid-cols-1 md:grid-cols-2 lg:flex lg:overflow-x-hidden lg:gap-6 no-scrollbar pb-8 gap-12"
      >
        {newArrivals.map((product, index) => (
          <div
            key={product.id}
            className={`lg:shrink-0 lg:w-[380px] flex items-center justify-center ${
              index >= 4 ? "hidden lg:flex" : "flex"
            }`}
          >
            <ProductCard
              id={product.id}
              name={product.name}
              image={product.image}
              ingredients={product.ingredients}
              price={product.price}
              calories={product.calories}
              protein={product.protein}
              bgColor={product.bgColor}
            />
          </div>
        ))}
      </div>

      {/* Navigation Controls - Desktop Only */}
      <div className="hidden lg:flex flex-col items-center gap-6 mt-4">
        <div className="flex items-center gap-8 w-full max-w-2xl px-12">
          <button
            onClick={() => scroll("left")}
            className="p-2 text-black hover:opacity-50 transition-opacity"
            aria-label="Scroll left"
          >
            <HiArrowLeft size={24} />
          </button>

          <div className="flex-1 h-[2px] bg-gray-100 relative rounded-full overflow-hidden">
            <div
              className="absolute left-0 top-0 h-full bg-[#1b4b36] transition-all duration-300 ease-out"
              style={{ width: `${scrollProgress}%` }}
            />
          </div>

          <button
            onClick={() => scroll("right")}
            className="p-2 text-black hover:opacity-50 transition-opacity"
            aria-label="Scroll right"
          >
            <HiArrowRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;
