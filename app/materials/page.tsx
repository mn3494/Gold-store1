import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import PurchaseButton from "@/components/auth/PurchaseButton";
import { materialProducts } from "@/lib/data";

export const metadata: Metadata = {
  title: "نقره، فیروزه و مروارید",
  description: "مجموعه‌ی زیورآلات نقره، فیروزه نیشابوری و مروارید طبیعی زرین اطلس.",
};

export default function MaterialsPage() {
  return (
    <main className="pt-32">
      <section className="section-padding pt-0">
        <div className="mx-auto max-w-content">
          <SectionHeading
            eyebrow="فراتر از طلا"
            title="نقره، فیروزه و مروارید"
            description="برای روزهایی که دنبال چیزی سبک‌تر و متفاوت‌تر می‌گردید؛ اصالت و ظرافت، این‌بار در جنس‌های دیگر."
          />

          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {materialProducts.map((product) => (
              <div
                key={product.id}
                className="group overflow-hidden rounded-2xl border border-gold-600/10 bg-charcoal"
              >
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <span className="absolute right-3 top-3 rounded-full bg-obsidian-500/70 px-3 py-1 text-xs text-gold-400 backdrop-blur-sm">
                    {product.weight}
                  </span>
                </div>
                <div className="p-5">
                  <p className="text-xs text-gold-400">{product.material}</p>
                  <h3 className="mt-2 font-display text-base text-ivory">
                    {product.name}
                  </h3>
                  <p className="mt-2 text-xs leading-6 text-bone">
                    {product.description}
                  </p>
                  <PurchaseButton productName={product.name} className="mt-4 w-full" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
