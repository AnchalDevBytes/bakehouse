"use client";
import Image from "next/image";
import { Link } from "next-view-transitions";
import { AnimationWrapper } from "@/components/ui/animation-wrapper";

const moments = [
  {
    id: "sunrise",
    title: "Sunrise Rituals",
    description:
      "Flaky, buttery gold to start your day with a crisp, artisan morning.",
    image: "/food/sunrise-rituals.png",
    link: "/shop?category=bread",
    className: "md:col-span-2 md:row-span-2 h-[300px] md:h-[600px]",
    titleSize: "text-3xl md:text-5xl",
  },
  {
    id: "celebration",
    title: "Grand Celebrations",
    description:
      "Multi-layered masterpieces, crafted for your most cherished milestones.",
    image: "/food/grand-celebrations.png",
    link: "/shop?category=cakepastry",
    className: "md:col-span-1 md:row-span-2 h-[300px] md:h-[600px]",
    titleSize: "text-2xl md:text-3xl",
  },
  {
    id: "afternoon",
    title: "Afternoon Escape",
    description:
      "Petite treats and savory bites for that perfect midday recharge.",
    image: "/food/afternoon-savory.png",
    link: "/shop?category=snacks",
    className: "md:col-span-1 md:row-span-1 h-[300px]",
    titleSize: "text-xl md:text-2xl",
  },
  {
    id: "twilight",
    title: "Twilight Indulgence",
    description:
      "Rich, decadent finishes for a day well-lived, from dark cocoa to silken creams.",
    image: "/food/twilight-dessert.png",
    link: "/shop?category=deserts",
    className: "md:col-span-2 md:row-span-1 h-[300px]",
    titleSize: "text-2xl md:text-3xl",
  },
];

const MenuMoments = () => {
  return (
    <section id="moments" className="py-14 md:py-24 bg-white px-6">
      <div className="max-w-7xl mx-auto flex flex-col gap-16 md:gap-24">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <AnimationWrapper className="flex flex-col gap-4 max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-[0.4em] text-[#f1b434]">
              Elevating Every Bite
            </span>
            <h2 className="text-4xl md:text-6xl font-source-serif font-black uppercase leading-[0.95]">
              A Moment for <br />
              <span className="text-[#f1b434] italic">Every Mood</span>
            </h2>
          </AnimationWrapper>
          <AnimationWrapper delay={0.02} className="md:w-1/3">
            <p className="text-lg md:text-xl font-medium leading-relaxed text-black/50 font-figtree">
              Whether it's a quiet morning coffee or a grand milestone, our
              collection is thoughtfully curated to add an artisan touch to
              every occasion.
            </p>
          </AnimationWrapper>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {moments.map((moment, idx) => (
            <AnimationWrapper
              key={moment.id}
              delay={idx * 0.02}
              className={`group relative overflow-hidden rounded-[40px] border-[1.5px] border-black shadow-neo-sm hover:shadow-neo transition-all ${moment.className}`}
            >
              <Link href={moment.link} className="absolute inset-0 block group">
                <Image
                  src={moment.image}
                  alt={moment.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700 brightness-[0.8] group-hover:brightness-100"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent p-8 md:p-12 flex flex-col justify-end gap-3 text-white">
                  <h3
                    className={`${moment.titleSize} font-shrikhand transition-all transform group-hover:-translate-y-2`}
                  >
                    {moment.title}
                  </h3>
                  <p className="text-sm md:text-base font-medium font-figtree opacity-0 group-hover:opacity-100 transition-all transform translate-y-4 group-hover:translate-y-0 text-white/80 max-w-xs">
                    {moment.description}
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-xs md:text-sm font-bold uppercase tracking-widest text-[#f1b434] transform translate-y-8 group-hover:translate-y-0 transition-all opacity-0 group-hover:opacity-100 group-hover:delay-100">
                    Explore Collection →
                  </div>
                </div>
              </Link>
            </AnimationWrapper>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuMoments;
