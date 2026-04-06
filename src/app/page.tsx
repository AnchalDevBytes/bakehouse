import HeroSection from "@/components/sections/hero-section";
import NewArrivals from "@/components/sections/new-arrival";
import CategoryPreview from "@/components/sections/category-preview";
import products from "@/helpers/data.json";

const HomePage = () => {
  return (
    <main className="min-h-screen mb-20">
      <HeroSection />
      <NewArrivals />

      <CategoryPreview
        title="Cakes & Pastries"
        categoryId="cakepastry"
        products={products.filter((p) => p.category === "cakepastry")}
        cardType="minimal"
        gridCols="grid grid-cols-2 md:grid-cols-4 gap-8"
      />

      <CategoryPreview
        title="Fresh Breads"
        categoryId="bread"
        products={products.filter((p) => p.category === "bread")}
        cardType="minimal"
        gridCols="grid grid-cols-2 md:grid-cols-4 gap-8"
        withPattern={true}
      />

      <CategoryPreview
        title="Cupcakes"
        categoryId="cupcakes"
        products={products.filter((p) => p.category === "cupcakes")}
        cardType="minimal"
        gridCols="grid grid-cols-2 md:grid-cols-4 gap-8"
      />

      <CategoryPreview
        title="Quick Snacks"
        categoryId="snacks"
        products={products.filter((p) => p.category === "snacks")}
        cardType="minimal"
        gridCols="grid grid-cols-2 md:grid-cols-4 gap-8"
        withPattern={true}
      />

      <CategoryPreview
        title="Sweet Desserts"
        categoryId="deserts"
        products={products.filter((p) => p.category === "deserts")}
        cardType="minimal"
        gridCols="grid grid-cols-2 md:grid-cols-4 gap-8"
      />
    </main>
  );
};

export default HomePage;
