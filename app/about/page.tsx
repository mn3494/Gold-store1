import type { Metadata } from "next";
import About from "@/components/sections/About";
import Team from "@/components/sections/Team";
import WhyUs from "@/components/sections/WhyUs";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";

export const metadata: Metadata = {
  title: "درباره ما",
  description: "داستان زرین اطلس؛ از یک میز کار کوچک در پاساژ الماس تا کارگاهی با ۲۸ سال تجربه.",
};

export default function AboutPage() {
  return (
    <main className="pt-20">
      <About />
      <Team />
      <WhyUs />
      <Testimonials />
      <Contact />
    </main>
  );
}
