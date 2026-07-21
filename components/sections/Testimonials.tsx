"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import SectionHeading from "../SectionHeading";
import { testimonials } from "@/lib/data";
import { staggerContainer, fadeUp, viewportOnce } from "@/lib/motion";

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-padding bg-charcoal">
      <div className="mx-auto max-w-content">
        <SectionHeading
          eyebrow="اعتماد شما، افتخار ماست"
          title="نظرات مشتریان"
          description="بخشی از تجربه‌ی مشتریانی که همراه زرین اطلس بوده‌اند."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {testimonials.map((t) => (
            <motion.div
              key={t.id}
              variants={fadeUp}
              whileHover={{ y: -8 }}
              className="flex flex-col rounded-2xl border border-gold-600/10 bg-obsidian-500/60 p-7"
            >
              <Quote className="h-6 w-6 text-gold-600/50" />
              <p className="mt-4 flex-1 text-sm leading-7 text-bone">
                {t.quote}
              </p>
              <div className="mt-6 flex items-center gap-1" aria-label={`${t.rating} از ۵ ستاره`}>
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-gold-400 text-gold-400" />
                ))}
              </div>
              <div className="mt-4 border-t border-gold-600/10 pt-4">
                <p className="font-display text-base text-ivory">{t.name}</p>
                <p className="text-xs text-muted">{t.city}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
