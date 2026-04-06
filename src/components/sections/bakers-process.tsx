"use client";
import { AnimationWrapper } from "@/components/ui/animation-wrapper";
import { HiFire, HiHeart, HiStar } from "react-icons/hi2";

const steps = [
  {
    icon: <HiHeart className="text-pink-500" />,
    title: "Hand-Picked Ingredients",
    description:
      "We source only the finest organic flour, farm-fresh eggs, and seasonal fruits from local producers.",
    color: "bg-[#ffe5ea]",
    border: "border-pink-200",
  },
  {
    icon: <HiFire className="text-orange-500" />,
    title: "Slow Fermentation",
    description:
      "Our sourdough and artisan breads undergo a 24-hour slow fermentation process for depth of flavor.",
    color: "bg-[#fff3da]",
    border: "border-orange-200",
  },
  {
    icon: <HiStar className="text-teal-500" />,
    title: "Baked with Precision",
    description:
      "Every item is hand-shaped and baked in our traditional stone deck ovens for that perfect golden crust.",
    color: "bg-[#d7f5f7]",
    border: "border-teal-200",
  },
];

const BakersProcess = () => {
  return (
    <section className="py-24 bg-white border-y-2 border-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-20">
        <AnimationWrapper className="flex flex-col items-center text-center mb-16">
          <span className="text-sm font-black uppercase tracking-[0.3em] text-black/30 mb-4">
            The Artisan Way
          </span>
          <h2 className="text-4xl md:text-6xl font-source-serif font-black uppercase leading-none">
            Our 3-Step <span className="text-yellow-500 italic">Magic</span>
          </h2>
        </AnimationWrapper>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step, idx) => (
            <AnimationWrapper
              key={idx}
              delay={idx * 0.1}
              className={`p-10 rounded-[40px] border-2 border-black shadow-neo hover:-translate-y-2 transition-all ${step.color}`}
            >
              <div className="w-16 h-16 rounded-2xl bg-white border-2 border-black flex items-center justify-center text-3xl mb-8 shadow-neo-sm">
                {step.icon}
              </div>
              <h3 className="text-2xl font-black uppercase mb-4 leading-tight">
                {step.title}
              </h3>
              <p className="text-black/70 font-medium leading-relaxed">
                {step.description}
              </p>
            </AnimationWrapper>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BakersProcess;
