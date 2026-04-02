"use client";
import { useState } from "react";
import ProductCard from "./product-card";

const products = [
  {
    id: 1,
    name: "Chocolate Cake",
    image: "/choco-cake.png",
    description:
      "Our signature rich, moist chocolate cake. A local favorite made with fresh cream and premium cocoa, perfect for celebrations.",
    ingredients: [
      "Premium cocoa",
      "fresh cream",
      "wheat flour",
      "refined sugar",
      "fresh farm eggs",
      "butter",
      "vanilla essence",
    ],
    price: "850",
    calories: "450",
    protein: "6G",
    carbs: "58G",
    bgColor: "#ff89c1",
  },
  {
    id: 2,
    name: "Classic Cookie",
    image: "/cookie.png",
    description:
      "Crunchy, golden-brown cookies packed with chocolate chips. A perfect tea-time snack for the whole family.",
    ingredients: [
      "Wheat flour",
      "brown sugar",
      "chocolate chips",
      "desi butter",
      "vanilla extract",
      "sea salt",
    ],
    price: "60",
    calories: "280",
    protein: "4G",
    carbs: "34G",
    bgColor: "#bcfc8e",
  },
  {
    id: 3,
    name: "Chocolate Donut",
    image: "/donut1.png",
    description:
      "Soft, fluffy donut dipped in a thick layer of melted milk chocolate. A sweet treat that melts in your mouth.",
    ingredients: [
      "Refined flour",
      "milk chocolate glaze",
      "milk",
      "sugar",
      "yeast",
      "butter",
      "chocolate sprinkles",
    ],
    price: "95",
    calories: "340",
    protein: "5G",
    carbs: "45G",
    bgColor: "#ffd400",
  },
  {
    id: 4,
    name: "Aloo Patties",
    image:
      "https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=1000&auto=format&fit=crop",
    description:
      "The soul of Jharkhand tea-time! Crispy, multilayered 'Pettis' filled with spicy potato masala.",
    ingredients: [
      "Puff pastry",
      "boiled potatoes",
      "green chilies",
      "ginger-garlic paste",
      "garam masala",
    ],
    price: "25",
    calories: "210",
    protein: "3G",
    carbs: "24G",
    bgColor: "#8acdfa",
  },
  {
    id: 5,
    name: "Vanilla Cupcake",
    image:
      "https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?q=80&w=1000&auto=format&fit=crop",
    description:
      "Classic vanilla sponge topped with a light and airy buttercream swirl.",
    ingredients: [
      "Refined flour",
      "vanilla bean extract",
      "buttercream",
      "milk",
      "sugar",
    ],
    price: "45",
    calories: "180",
    protein: "2G",
    carbs: "22G",
    bgColor: "#cbfd8e",
  },
  {
    id: 6,
    name: "Paneer Patties",
    image:
      "https://images.unsplash.com/photo-1626132646529-500637532537?q=80&w=1000&auto=format&fit=crop",
    description:
      "A premium savory puff filled with spicy crumbled paneer and peas.",
    ingredients: [
      "Flaky puff dough",
      "fresh paneer",
      "green peas",
      "onion",
      "local spices",
    ],
    price: "40",
    calories: "260",
    protein: "9G",
    carbs: "20G",
    bgColor: "#ffc6a5",
  },
];

const FeaturedSection = () => {
  const [selectedProduct, setSelectedProduct] = useState<
    (typeof products)[0] | null
  >(null);

  return (
    <section className="flex flex-col gap-12 px-4 md:px-20 py-24 mb-20">
      <div className="flex flex-col gap-3">
        <h2 className="font-source-serif text-3xl md:text-5xl font-semibold tracking-tight text-black">
          New Arrivals
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            image={product.image}
            ingredients={product.ingredients}
            price={product.price}
            calories={product.calories}
            protein={product.protein}
            bgColor={product.bgColor}
            onClick={() => setSelectedProduct(product)}
          />
        ))}
      </div>

      {/* <ProductDetailOverlay
        isOpen={!!selectedProduct}
        onClose={() => setSelectedProduct(null)}
        product={selectedProduct || products[0]}
      /> */}
    </section>
  );
};

export default FeaturedSection;
