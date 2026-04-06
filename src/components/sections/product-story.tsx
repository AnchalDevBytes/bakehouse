"use client";
import React from "react";
import { AnimationWrapper } from "@/components/ui/animation-wrapper";
import { HiCheckBadge, HiGlobeAlt, HiSparkles } from "react-icons/hi2";

interface ProductStoryProps {
  ingredients: string[];
  name: string;
}

const ProductStory = ({ ingredients, name }: ProductStoryProps) => {
  const highlights = [
    {
      icon: <HiSparkles className="text-yellow-500" />,
      title: "Artisanal Craft",
      text: `Every ${name} is hand-shaped by our master bakers, ensuring a unique touch in every bite.`,
    },
    {
      icon: <HiCheckBadge className="text-teal-500" />,
      title: "Pure Ingredients",
      text: "No preservatives, no artificial flavors. Just the goodness of nature's best pantry.",
    },
    {
      icon: <HiGlobeAlt className="text-orange-500" />,
      title: "Locally Sourced",
      text: "We partner with local farmers to bring you the freshest seasonal ingredients available.",
    },
  ];

  return (
    <section className="py-24 bg-[#fff1e6] border-y-2 border-black overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <AnimationWrapper>
            <span className="text-sm font-black uppercase tracking-[0.3em] text-black/30 mb-4 block">
              The Soul of the Bake
            </span>
            <h2 className="text-4xl md:text-6xl font-source-serif font-black uppercase leading-none mb-8">
              Why our <span className="text-[#f1b434] italic">{name}</span> is <br />
              <span className="underline decoration-black/10">Simply Exceptional</span>
            </h2>
            
            <div className="flex flex-col gap-8">
              {highlights.map((item, idx) => (
                <div key={idx} className="flex gap-6">
                  <div className="shrink-0 w-12 h-12 rounded-xl bg-white border-2 border-black flex items-center justify-center text-2xl shadow-neo-sm">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold uppercase mb-1">{item.title}</h4>
                    <p className="text-black/60 font-medium leading-relaxed max-w-md">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </AnimationWrapper>

          <AnimationWrapper animation="scaleIn" className="relative">
            <div className="bg-white border-2 border-black rounded-[40px] p-12 shadow-neo relative z-10">
              <h3 className="text-2xl font-black uppercase mb-8 border-b-2 border-black pb-4">
                What's Inside?
              </h3>
              <div className="flex flex-wrap gap-3">
                {ingredients.map((ingredient, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-2 bg-black text-white rounded-full text-sm font-bold uppercase tracking-widest hover:bg-yellow-500 hover:text-black transition-colors cursor-default"
                  >
                    {ingredient}
                  </span>
                ))}
              </div>
              <p className="mt-10 text-black/40 text-sm font-bold italic leading-relaxed">
                * Our kitchen handles nuts, gluten, and dairy. Please consult our allergen guide for specific dietary requirements.
              </p>
            </div>
            
            {/* Decorative background elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-yellow-500/10 rounded-full blur-3xl z-0" />
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-teal-500/10 rounded-full blur-[80px] z-0" />
          </AnimationWrapper>
        </div>
      </div>

      {/* Background patterns */}
      <div className="absolute inset-0 subtle-bakery-pattern opacity-[0.03] pointer-events-none" />
    </section>
  );
};

export default ProductStory;
