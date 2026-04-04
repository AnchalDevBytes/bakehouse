import Image from "next/image";
import { Link } from "next-view-transitions";
import { notFound } from "next/navigation";
import { HiArrowLeft } from "react-icons/hi2";
import productsData from "@/helpers/data.json";
import AddToCartForm from "./add-to-cart-form";

export async function generateStaticParams() {
  return productsData.map((product) => ({
    id: product.id.toString(),
  }));
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = await params;
  const product = productsData.find(
    (p) => p.id.toString() === resolvedParams.id,
  );

  if (!product) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#fdfcfb] pt-32 pb-24">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Back Navigation */}
        <Link
          href={`/shop?category=${product.category}`}
          className="inline-flex items-center gap-2 mb-12 text-black hover:opacity-70 transition-opacity font-medium uppercase tracking-widest text-sm"
        >
          <HiArrowLeft size={20} /> Back to {product.category}
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-20 items-start">
          <div
            className="rounded-[40px] aspect-square flex items-center justify-center p-12 border-[3px] border-black shadow-neo"
            style={{ backgroundColor: product.bgColor }}
          >
            <div className="relative w-full h-full">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-contain hover:scale-105 transition-transform duration-500 hover:-rotate-3"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </div>

          <div className="flex flex-col gap-8 py-4 font-figtree">
            <div className="flex flex-col gap-4">
              <h1 className="text-3xl md:text-5xl font-source-serif text-[#1a1a1a] uppercase leading-none">
                {product.name}
              </h1>
              <p className="text-lg md:text-xl text-black/70 leading-snug">
                {product.description}
              </p>
              <div className="flex items-center gap-4 text-sm font-bold uppercase tracking-widest text-black/50 mt-6">
                <span>Calories: {product.calories}</span>
                <span>|</span>
                <span>Protein: {product.protein}</span>
                <span>|</span>
                <span>Carbs: {product.carbs}</span>
              </div>
            </div>

            <AddToCartForm product={product} />

            <div className="flex flex-col border-t-[3px] border-black/10 pt-8 gap-8">
              <div className="flex flex-col gap-4">
                <div className="flex justify-between items-center">
                  <h4 className="text-xl font-bold uppercase">Ingredients</h4>
                </div>
                <p className="text-lg text-black/60 leading-relaxed italic">
                  {product.ingredients.join(", ")}
                  <span className="opacity-50">...</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
