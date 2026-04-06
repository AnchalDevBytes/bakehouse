import { Suspense } from "react";
import ShopContent from "@/app/shop/shop-content";
import PageHero from "@/components/ui/page-hero";

export default function ShopPage() {
  return (
    <main className="min-h-screen bg-[#fdfcfb]">
      <PageHero
        title="Our Menu"
        subtitle="Explore our selection of handcrafted artisan goods, baked fresh daily with love and precision."
        breadcrumb={{ label: "Home", href: "/" }}
      />
      <div className="pb-24">
        <Suspense
          fallback={
            <div className="text-center py-20 text-xl font-source-serif">
              Loading delicious items...
            </div>
          }
        >
          <ShopContent />
        </Suspense>
      </div>
    </main>
  );
}

