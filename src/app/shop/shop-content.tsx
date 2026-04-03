"use client";

import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import productsData from "@/helpers/data.json";
import ProductCard from "@/components/sections/product-card";

const categories = [
  { id: "all", label: "All Items" },
  { id: "cakes&pastry", label: "Cakes & Pastries" },
  { id: "Breads", label: "Breads" },
  { id: "cupcakes", label: "Cupcakes" },
  { id: "snacks", label: "Snacks" },
  { id: "Deserts", label: "Desserts" },
  { id: "donuts", label: "Donuts" },
];

export default function ShopContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  
  const [activeCategory, setActiveCategory] = useState("all");

  useEffect(() => {
    const cat = searchParams.get("category");
    if (cat && categories.some(c => c.id === cat)) {
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

  const filteredProducts = activeCategory === "all" 
    ? productsData 
    : productsData.filter((p) => p.category === activeCategory);

  return (
    <div className="px-4 md:px-20">
      <div className="flex flex-col gap-8 mb-16">
        <div className="flex items-end justify-between">
          <div>
            <h1 className="text-5xl md:text-6xl font-source-serif mb-4">Our Menu</h1>
            <p className="text-xl max-w-2xl text-gray-700">Explore our delicious selection of baked daily artisan goods.</p>
          </div>
          
          {activeCategory !== "all" && (
            <button 
              onClick={() => handleCategoryChange("all")}
              className="text-lg underline underline-offset-4 decoration-2 font-bold hover:text-gray-500"
            >
              Clear Filter
            </button>
          )}
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-4 mt-4">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => handleCategoryChange(cat.id)}
              className={`px-6 py-2 rounded-full border-2 border-black font-bold text-lg transition-all duration-300 shadow-neo ${
                activeCategory === cat.id 
                  ? "bg-[#2a1b15] text-white -translate-y-1" 
                  : "bg-white hover:-translate-y-1 hover:bg-gray-50"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Product Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 gap-y-16 place-items-center">
          {filteredProducts.map((product) => (
            <div key={product.id} className="w-full max-w-[400px]">
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
      ) : (
        <div className="py-20 text-center text-3xl font-source-serif">
          No items found in this category.
        </div>
      )}
    </div>
  );
}
