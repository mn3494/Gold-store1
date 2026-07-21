import type { Metadata } from "next";
import { Calendar } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { articles } from "@/lib/data";

export const metadata: Metadata = {
  title: "مقالات و اخبار بازار طلا",
  description: "تازه‌ترین اخبار بازار طلا و مقالات آموزشی خرید طلا از زرین اطلس.",
};

export default function ArticlesPage() {
  return (
    <main className="pt-32">
      <section className="section-padding pt-0">
        <div className="mx-auto max-w-content">
          <SectionHeading
            eyebrow="وبلاگ زرین اطلس"
            title="مقالات و اخبار بازار"
            description="نگاهی به نوسانات بازار طلای ایران و جهان، در کنار راهنماهای عملی برای خرید و نگهداری طلا."
          />

          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {articles.map((article) => (
              <article
                key={article.id}
                className="group overflow-hidden rounded-2xl border border-gold-600/10 bg-charcoal"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <span className="rounded-full bg-gold-400/10 px-3 py-1 text-xs text-gold-400">
                      {article.category}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-xs text-muted">
                      <Calendar className="h-3 w-3" />
                      {article.date}
                    </span>
                  </div>
                  <h3 className="mt-4 font-display text-lg leading-8 text-ivory">
                    {article.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-bone">{article.excerpt}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
