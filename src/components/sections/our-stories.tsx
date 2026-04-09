"use client";
import { AnimationWrapper } from "@/components/ui/animation-wrapper";

const OurStories = () => {
  return (
    <section
      id="our-story"
      className="relative py-24 md:py-32 bg-[#fff1e6] border-y-[1.5px] border-black overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 subtle-bakery-pattern pointer-events-none opacity-40" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <AnimationWrapper className="flex flex-col items-start gap-4 lg:sticky lg:top-16">
            <span className="text-xs font-bold uppercase tracking-[0.4em] text-[#f1b434]">
              Our Heritage
            </span>
            <h2 className="text-4xl md:text-6xl xl:text-7xl font-shrikhand text-[#2a1b15] leading-[1.1]">
              The Alchemy of <br />
              <span className="italic relative">
                Flour & Water
                <div className="absolute -bottom-2 md:-bottom-4 left-0 w-full h-[6px] md:h-[10px] bg-[#f1b434] -z-10 -rotate-1 rounded-full opacity-30" />
              </span>
            </h2>

            <div className="mt-8 hidden lg:flex items-center gap-4">
              <div className="h-px w-20 bg-[#2a1b15]/30" />
              <span className="font-dancing-script text-3xl text-[#2a1b15]">
                Since 1995
              </span>
            </div>
          </AnimationWrapper>

          <div className="flex flex-col gap-10 md:gap-16">
            <AnimationWrapper
              delay={0.02}
              className="flex flex-col gap-8 max-w-2xl"
            >
              <p className="text-xl md:text-3xl font-source-serif leading-tight text-[#2a1b15] font-medium">
                For us, baking isn't just about ingredients; it's about the
                soul. Each loaf begins with a century-old starter, nurtured with
                patience and respect for nature.
              </p>
              <div className="h-px w-full bg-[#2a1b15]/10" />
              <p className="text-base md:text-lg font-figtree font-medium leading-loose text-[#2a1b15]/60">
                In a world of haste, we choose the slow path. Our ovens are
                fired by passion, and our hands are dusted with the heritage of
                generations. From the morning's first golden croissant to the
                evening's final chocolate-laced treat, every bite tells a story
                of craftsmanship, local sourcing, and the simple joy of sharing
                a meal made with love.
              </p>
            </AnimationWrapper>

            <AnimationWrapper delay={0.03} className="lg:hidden">
              <div className="flex items-center text-center gap-4">
                <div className="h-px w-12 md:w-20 bg-[#2a1b15]/30" />
                <span className="font-dancing-script text-2xl md:text-4xl text-[#2a1b15]">
                  Pure, Honest, Hand-crafted
                </span>
                <div className="h-px w-12 md:w-20 bg-[#2a1b15]/30" />
              </div>
            </AnimationWrapper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStories;
