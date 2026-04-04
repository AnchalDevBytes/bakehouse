import { Link } from "next-view-transitions";
import ProductCard from "./product-card";
import productsData from "@/helpers/data.json";

type Product = (typeof productsData)[0];

interface CategoryPreviewProps {
  title: string;
  categoryId: string;
  products: Product[];
}

export default function CategoryPreview({
  title,
  categoryId,
  products,
}: CategoryPreviewProps) {
  const previewProducts = products.slice(0, 4);

  if (previewProducts.length === 0) return null;

  return (
    <section className="flex flex-col gap-12 sm:gap-20 py-12 sm:py-16 px-4 sm:px-6 lg:px-0">
      <div className="flex items-center justify-between gap-6 px-4 md:px-20 w-full min-w-0">
        <h4 className="text-3xl sm:text-4xl md:text-5xl font-source-serif text-black leading-tight">
          {title}
        </h4>
        <Link
          href={`/shop?category=${categoryId}`}
          className="px-4 sm:px-8 py-1 bg-[#2a1b15] text-white rounded-xl font-bold flex items-center gap-2 hover:bg-[#3d2921] transition-all duration-300 w-fit shrink-0"
        >
          See All <span className="text-xl -translate-y-1">→</span>
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 md:px-20 pb-4 place-items-center">
        {previewProducts.map((product) => (
          <div
            key={product.id}
            className="w-full flex items-center justify-center lg:w-[380px]"
          >
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
    </section>
  );
}
