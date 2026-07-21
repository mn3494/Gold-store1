import Hero from "@/components/sections/Hero";
import TrustBadges from "@/components/TrustBadges";
import About from "@/components/sections/About";
import Categories from "@/components/sections/Categories";
import FeaturedProducts from "@/components/sections/FeaturedProducts";
import WhyUs from "@/components/sections/WhyUs";
import Testimonials from "@/components/sections/Testimonials";
import Faq from "@/components/sections/Faq";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <div className="relative z-10 -mt-10 sm:-mt-14">
        <TrustBadges />
      </div>
      <About />
      <Categories />
      <FeaturedProducts />
      <WhyUs />
      <Testimonials />
      <Faq />
      <Contact />
    </main>
  );
}
