"use client";

import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import SectionHeading from "../SectionHeading";
import { categories } from "@/lib/data";
import { staggerContainer, scaleIn, viewportOnce } from "@/lib/motion";

export default function Categories() {
  return (
    <section id="categories" className="section-padding bg-obsidian-500">
      <div className="mx-auto max-w-content">
        <SectionHeading
          eyebrow="مجموعه‌ها"
          title="دسته‌بندی محصولات"
          description="از انگشتری که برای همیشه به یاد می‌ماند تا سکه‌ای که ارزشش را حفظ می‌کند؛ هر دسته، دنیایی از ظرافت است."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {categories.map((cat) => (
            <motion.a
              key={cat.id}
              href="#featured"
              variants={scaleIn}
              whileHover="hover"
              className="group relative aspect-[4/5] overflow-hidden rounded-2xl"
            >
              <motion.img
                src={cat.image}
                alt={cat.title}
                loading="lazy"
                variants={{ hover: { scale: 1.1 } }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian-500 via-obsidian-500/40 to-obsidian-500/10 transition-opacity duration-500 group-hover:from-obsidian-500/95" />

              <div className="absolute inset-x-0 bottom-0 flex flex-col p-7">
                <span className="text-xs text-gold-400">{cat.count}</span>
                <h3 className="mt-2 font-display text-2xl text-ivory">
                  {cat.title}
                </h3>
                <p className="mt-1 text-sm text-bone opacity-0 transition-all duration-500 group-hover:opacity-100">
                  {cat.description}
                </p>
                <motion.span
                  variants={{ hover: { x: -6, opacity: 1 } }}
                  initial={{ opacity: 0 }}
                  className="mt-4 inline-flex w-fit items-center gap-2 text-sm text-gold-400"
                >
                  مشاهده محصولات
                  <ArrowLeft className="h-4 w-4" />
                </motion.span>
              </div>

              <div className="absolute inset-0 rounded-2xl border border-gold-600/0 transition-colors duration-500 group-hover:border-gold-600/40" />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
