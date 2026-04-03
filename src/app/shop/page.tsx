import { Suspense } from "react";
import ShopContent from "@/app/shop/shop-content";

export default function ShopPage() {
  return (
    <main className="min-h-screen pt-32 pb-24">
      <Suspense
        fallback={
          <div className="text-center text-xl font-source-serif">
            Loading delicious items...
          </div>
        }
      >
        <ShopContent />
      </Suspense>
    </main>
  );
}
