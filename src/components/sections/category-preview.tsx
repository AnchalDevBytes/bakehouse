import { Link } from "next-view-transitions";
import productsData from "@/helpers/data.json";
import CardStandard from "@/components/cards/card-standard";
import CardHorizontal from "@/components/cards/card-horizontal";
import CardMinimal from "@/components/cards/card-minimal";

type Product = (typeof productsData)[0];

interface CategoryPreviewProps {
  title: string;
  categoryId: string;
  products: Product[];
  cardType: "standard" | "horizontal" | "minimal";
  gridCols: string;
  withPattern?: boolean;
}

export default function CategoryPreview({
  title,
  categoryId,
  products,
  cardType,
  gridCols,
  withPattern = false,
}: CategoryPreviewProps) {
  const previewProducts = products.slice(0, 4);

  if (previewProducts.length === 0) return null;

  return (
    <section className="relative flex flex-col gap-12 py-10 px-6 lg:px-20 overflow-hidden">
      {/* Background pattern if requested */}
      {withPattern && (
        <div className="absolute inset-0 subtle-bakery-pattern opacity-40 -z-10" />
      )}

      <div className="flex items-end justify-between gap-6 w-full max-w-7xl mx-auto">
        <div className="flex flex-col gap-2">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#f1b434]">
            Browse
          </span>
          <h4 className="text-3xl md:text-4xl font-source-serif text-[#2a1b15] leading-none">
            {title}
          </h4>
        </div>
        <Link
          href={`/shop?category=${categoryId}`}
          className="text-sm font-bold border-b-[1.5px] border-black pb-1 hover:text-[#f1b434] hover:border-[#f1b434] transition-all"
        >
          View Collection →
        </Link>
      </div>

      <div className={`${gridCols} w-full max-w-7xl mx-auto`}>
        {previewProducts.map((product) => (
          <div
            key={product.id}
            className="w-full flex items-center justify-center"
          >
            {cardType === "standard" && (
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
            )}
            {cardType === "horizontal" && (
              <CardHorizontal
                id={product.id}
                name={product.name}
                image={product.image}
                ingredients={product.ingredients}
                price={product.price}
                calories={product.calories}
                bgColor={product.bgColor}
              />
            )}
            {cardType === "minimal" && (
              <CardMinimal
                id={product.id}
                name={product.name}
                image={product.image}
                price={product.price}
                bgColor={product.bgColor}
              />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
