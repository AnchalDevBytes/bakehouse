import HeroSection from "@/components/sections/hero-section";
import NewArrivals from "@/components/sections/new-arrival";
import CategoryPreview from "@/components/sections/category-preview";
import products from "@/helpers/data.json";

const HomePage = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <NewArrivals />

      <CategoryPreview
        title="Cakes & Pastries"
        categoryId="cakepastry"
        products={products.filter((p) => p.category === "cakepastry")}
      />

      <CategoryPreview
        title="Fresh Breads"
        categoryId="bread"
        products={products.filter((p) => p.category === "bread")}
      />

      <CategoryPreview
        title="Cupcakes"
        categoryId="cupcakes"
        products={products.filter((p) => p.category === "cupcakes")}
      />

      <CategoryPreview
        title="Quick Snacks"
        categoryId="snacks"
        products={products.filter((p) => p.category === "snacks")}
      />

      <CategoryPreview
        title="Sweet Desserts"
        categoryId="deserts"
        products={products.filter((p) => p.category === "deserts")}
      />
    </main>
  );
};

export default HomePage;
