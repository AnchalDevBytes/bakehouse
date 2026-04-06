"use client";
import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import productsData from "@/helpers/data.json";
import { cn } from "@/lib/utils";
import CardStandard from "@/components/cards/card-standard";
import { AnimationWrapper } from "@/components/ui/animation-wrapper";

const categories = [
  { id: "all", label: "All Items" },
  { id: "cakepastry", label: "Cakes & Pastries" },
  { id: "bread", label: "Breads" },
  { id: "cupcakes", label: "Cupcakes" },
  { id: "snacks", label: "Snacks" },
  { id: "deserts", label: "Desserts" },
  { id: "donuts", label: "Donuts" },
];

export default function ShopContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [activeCategory, setActiveCategory] = useState("all");

  useEffect(() => {
    const cat = searchParams.get("category");
    if (cat && categories.some((c) => c.id === cat)) {
      setActiveCategory(cat);
    } else {
      setActiveCategory("all");
    }
  }, [searchParams]);

  const handleCategoryChange = (categoryId: string) => {
    if (categoryId === "all") {
      router.push("/shop");
    } else {
      router.push(`/shop?category=${categoryId}`);
    }
  };

  const filteredProducts =
    activeCategory === "all"
      ? productsData
      : productsData.filter((p) => p.category === activeCategory);

  return (
    <div className="flex flex-col gap-0 border-t border-black/5">
      {/* Category Filter Section */}
      <div className="bg-[#fdfcfb] px-6 lg:px-20 py-8">
        <div className="flex flex-col gap-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xs font-black uppercase tracking-[0.3em] text-black/20">
              Browse Categories
            </h2>
            {activeCategory !== "all" && (
              <button
                onClick={() => handleCategoryChange("all")}
                className="text-lg underline underline-offset-4 decoration-2 font-bold hover:text-gray-500"
              >
                Clear Filter
              </button>
            )}
          </div>

          <div className="flex flex-wrap gap-4 mt-4">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => handleCategoryChange(cat.id)}
                className={cn(
                  "px-3 py-0.5 rounded-sm border-2 border-black font-bold text-base transition-all duration-300 shadow-neo-sm",
                  activeCategory === cat.id
                    ? "shadow-neo-md bg-yellow-500"
                    : "bg-white hover:-translate-y-1 hover:bg-gray-50",
                )}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Grid Section */}
      <section className="bg-[#fdfcfb] px-6 lg:px-20 py-16">
        <div className="max-w-7xl mx-auto">
          <AnimationWrapper className="mb-12">
            <h2 className="text-2xl md:text-3xl font-source-serif font-black uppercase leading-none mb-4">
              {activeCategory === "all"
                ? "The Full Collection"
                : categories.find((c) => c.id === activeCategory)?.label}
            </h2>
            <div className="w-12 h-1 bg-black/10" />
          </AnimationWrapper>

          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-12 gap-y-16 place-items-center">
              {filteredProducts.map((product, idx) => (
                <AnimationWrapper
                  key={product.id}
                  delay={idx * 0.02}
                  className="w-full max-w-[400px]"
                >
                  <CardStandard
                    id={product.id}
                    name={product.name}
                    image={product.image}
                    ingredients={product.ingredients}
                    price={product.price}
                    calories={product.calories}
                    protein={product.protein}
                    bgColor={product.bgColor}
                  />
                </AnimationWrapper>
              ))}
            </div>
          ) : (
            <div className="py-32 text-center">
              <h3 className="text-2xl font-source-serif italic text-black/20">
                Awaiting freshly baked items...
              </h3>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
