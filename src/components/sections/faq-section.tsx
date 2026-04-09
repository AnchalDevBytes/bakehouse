"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { AnimationWrapper } from "@/components/ui/animation-wrapper";
import { FiPlus } from "react-icons/fi";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "Do you use organic or locally sourced ingredients?",
    answer:
      "Absolutely. We believe that great baking starts with the soil. We partner with local regenerative farms for our heirloom wheat and use only organic, grass-fed dairy. Every ingredient is chosen for its flavor profile and ethical footprint.",
  },
  {
    question: "How far in advance should I order a celebration cake?",
    answer:
      "For our signature celebration cakes, we typically require at least 48 to 72 hours notice. This allows our pastry chefs to hand-craft each layer and ensure the flavors have matured perfectly before they reach your table.",
  },
  {
    question: "Do you offer vegan or gluten-free options?",
    answer:
      "We offer a selection of vegan pastries and gluten-friendly sweets. However, as an artisan bakery specializing in traditional sourdough and wheat-based breads, our kitchen handles a significant amount of flour. We recommend those with severe celiac disease exercise caution.",
  },
  {
    question: "How do I keep my artisan bread fresh for longer?",
    answer:
      "Artisan bread is best stored in a paper bag or a linen bread box at room temperature. For longer storage, we recommend slicing and freezing it immediately. Avoid the refrigerator, as it actually accelerates the staling process!",
  },
  {
    question: "Do you deliver to my area?",
    answer:
      "We currently offer local delivery within a 10km radius of our flagship bakehouse. For orders further afield, we provide a convenient 'Click & Collect' service from our boutique daily.",
  },
];

const FaqItem = ({
  question,
  answer,
  isOpen,
  onClick,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}) => {
  return (
    <div className="border-b border-[#2a1b15]/10 last:border-0">
      <button
        onClick={onClick}
        className="w-full py-6 md:py-8 flex items-center justify-between text-left group transition-all"
      >
        <span className="text-lg md:text-2xl font-source-serif font-semibold text-[#2a1b15] group-hover:text-[#f1b434] transition-colors pr-8">
          {question}
        </span>
        <div
          className={cn(
            "shrink-0 w-8 h-8 rounded-full border border-[#2a1b15]/20 flex items-center justify-center transition-all duration-300",
            isOpen
              ? "bg-[#f1b434] border-[#f1b434] rotate-45"
              : "group-hover:border-[#f1b434]",
          )}
        >
          <FiPlus
            className={cn(
              "w-5 h-5 transition-colors",
              isOpen
                ? "text-black"
                : "text-[#2a1b15]/40 group-hover:text-[#f1b434]",
            )}
          />
        </div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
            className="overflow-hidden"
          >
            <p className="pb-8 text-base md:text-lg font-figtree leading-loose text-[#2a1b15]/70 max-w-2xl">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-14 md:py-24 bg-white px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          {/* Left Side: Headers */}
          <div className="lg:col-span-4 flex flex-col gap-6 lg:sticky lg:top-32 h-fit">
            <AnimationWrapper className="flex flex-col gap-4">
              <span className="text-xs font-bold uppercase tracking-[0.4em] text-[#f1b434]">
                Inquisitive Minds
              </span>
              <h2 className="text-4xl md:text-6xl font-shrikhand text-[#2a1b15] leading-tight">
                Curious <br />
                <span className="italic font-normal text-[#f1b434]">
                  Kneads?
                </span>
              </h2>
            </AnimationWrapper>
            <AnimationWrapper delay={0.02}>
              <p className="text-lg font-figtree font-medium text-[#2a1b15]/50 leading-relaxed">
                Everything you ever wanted to know about our craft, our process,
                and our commitment to the artisan way.
              </p>
              <div className="mt-8 flex items-center gap-4">
                <div className="h-px w-10 bg-[#f1b434]" />
                <span className="font-dancing-script text-2xl text-[#2a1b15]">
                  Baked with Transparency
                </span>
              </div>
            </AnimationWrapper>
          </div>

          {/* Right Side: Accordion */}
          <div className="lg:col-span-8">
            <AnimationWrapper delay={0.03}>
              <div className="flex flex-col">
                {faqs.map((faq, index) => (
                  <FaqItem
                    key={index}
                    question={faq.question}
                    answer={faq.answer}
                    isOpen={openIndex === index}
                    onClick={() =>
                      setOpenIndex(openIndex === index ? null : index)
                    }
                  />
                ))}
              </div>
            </AnimationWrapper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
