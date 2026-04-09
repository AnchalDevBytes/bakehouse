import HeroSection from "@/components/sections/hero-section";
import NewArrivals from "@/components/sections/new-arrival";
import OurStories from "@/components/sections/our-stories";
import MenuMoments from "@/components/sections/menu-moments";
import FaqSection from "@/components/sections/faq-section";

const HomePage = () => {
  return (
    <main className="min-h-screen mb-20">
      <HeroSection />
      <NewArrivals />
      <OurStories />
      <MenuMoments />
      <FaqSection />
    </main>
  );
};

export default HomePage;
