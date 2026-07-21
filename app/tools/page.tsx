import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import PurchaseButton from "@/components/auth/PurchaseButton";
import { toolProducts } from "@/lib/data";

export const metadata: Metadata = {
  title: "ابزار طلاسازی",
  description: "ابزار و تجهیزات حرفه‌ای طلاسازی برای استادکاران و هنرجویان.",
};

export default function ToolsPage() {
  return (
    <main className="pt-32">
      <section className="section-padding pt-0">
        <div className="mx-auto max-w-content">
          <SectionHeading
            eyebrow="برای اهل حرفه"
            title="ابزار طلاسازی"
            description="ابزاری که خودمان هر روز در کارگاه استفاده می‌کنیم؛ برای استادکاران و هنرجویانی که می‌خواهند دست‌به‌کار شوند."
          />

          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {toolProducts.map((tool) => (
              <div
                key={tool.id}
                className="overflow-hidden rounded-2xl border border-gold-600/10 bg-charcoal"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={tool.image}
                    alt={tool.name}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-lg text-ivory">{tool.name}</h3>
                  <p className="mt-2 text-sm leading-6 text-bone">{tool.description}</p>
                  <PurchaseButton productName={tool.name} className="mt-5 w-full" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
