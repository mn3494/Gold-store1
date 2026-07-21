"use client";

import { motion } from "framer-motion";
import SectionHeading from "../SectionHeading";
import PurchaseButton from "../auth/PurchaseButton";
import { featuredProducts } from "@/lib/data";
import { staggerContainer, fadeUp, viewportOnce } from "@/lib/motion";

export default function FeaturedProducts() {
  return (
    <section id="featured" className="section-padding bg-charcoal">
      <div className="mx-auto max-w-content">
        <SectionHeading
          eyebrow="منتخب استادکاران"
          title="محصولات ویژه"
          description="نمونه‌هایی از دست‌ساخته‌های زرین اطلس؛ هرکدام با روایتی خاص از هنر و اصالت ایرانی."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {featuredProducts.map((product) => (
            <motion.div
              key={product.id}
              variants={fadeUp}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.4 }}
              className="group overflow-hidden rounded-2xl border border-gold-600/10 bg-obsidian-500/60"
            >
              <div className="relative aspect-square overflow-hidden">
                <motion.img
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-obsidian-500/80 to-transparent" />
                <span className="absolute right-4 top-4 rounded-full bg-obsidian-500/70 px-3 py-1 text-xs text-gold-400 backdrop-blur-sm">
                  {product.weight}
                </span>
              </div>
              <div className="p-6">
                <p className="text-xs text-gold-400">{product.category}</p>
                <h3 className="mt-2 font-display text-xl text-ivory">
                  {product.name}
                </h3>
                <p className="mt-3 text-sm leading-7 text-bone">
                  {product.description}
                </p>
                <PurchaseButton productName={product.name} className="mt-5 w-full" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={viewportOnce}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="mt-14 text-center"
        >
          <a
            href={"#contact"}
            className="btn-outline-gold"
          >
            مشاهده کاتالوگ کامل
          </a>
        </motion.div>
      </div>
    </section>
  );
}
