import HeroSection from "@/components/sections/hero-section";
import NewArrivals from "@/components/sections/new-arrival";

const HomePage = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <NewArrivals />
    </main>
  );
};

export default HomePage;
