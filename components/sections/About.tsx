"use client";

import { motion } from "framer-motion";
import { fadeUp, viewportOnce } from "@/lib/motion";
import AnimatedCounter from "../AnimatedCounter";

export default function About() {
  return (
    <section id="about" className="section-padding relative overflow-hidden bg-charcoal">
      <div className="mx-auto grid max-w-content items-center gap-16 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative order-2 lg:order-1"
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-gold-lg">
            <img
              src="https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?q=80&w=1200&auto=format&fit=crop"
              alt="استادکار زرگر ایرانی در حال ساخت زیورآلات طلا"
              loading="lazy"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian-500/70 via-transparent to-transparent" />
          </div>
          <motion.div
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="glass-panel absolute -bottom-8 -right-6 rounded-2xl px-8 py-6 shadow-gold sm:-right-10"
          >
            <p className="font-display text-3xl text-gradient-gold">۲۸+</p>
            <p className="mt-1 text-xs text-muted">سال تجربه استادکاران</p>
          </motion.div>
        </motion.div>

        <div className="order-1 lg:order-2">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
          >
            <span className="eyebrow">درباره زرین اطلس</span>
            <h2 className="mt-4 font-display text-3xl leading-tight text-ivory sm:text-4xl lg:text-5xl">
              کارگاهی که با یک میز کار کوچک شروع شد
            </h2>
            <div className="mt-6 h-px w-24 bg-gold-gradient" />
            <p className="mt-8 text-base leading-8 text-bone sm:text-lg">
              زرین اطلس را استاد رضا کریمیان، با یک میز کار کوچک در پاساژ الماس
              تهران شروع کرد؛ جایی که هنوز هم بیشتر طرح‌های ما همان‌جا شکل
              می‌گیرند. چیزی که این کارگاه را از خیلی جاهای دیگر جدا می‌کند این
              است که هر سفارش را از صفر، با شنیدن حرف مشتری شروع می‌کنیم — نه از
              روی یک کاتالوگ آماده.
            </p>
            <p className="mt-4 text-base leading-8 text-bone sm:text-lg">
              گاهی یک مشتری با عکسی از انگشتر مادربزرگش می‌آید و می‌خواهد همان
              حس را در طرحی تازه پیدا کند. گاهی هم فقط یک ایده‌ی مبهم دارد و کار
              ما همین‌جا شروع می‌شود: نشستن، طراحی، اصلاح، و ساختن چیزی که واقعاً
              مال خودش باشد. همین رفتار، طی این سال‌ها، بیشتر مشتری‌های ما را از
              دهان‌به‌دهان و معرفی دوستان به کارگاه رسانده، نه از تبلیغات.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.15 } } }}
            className="mt-12 grid grid-cols-3 gap-6 border-t border-gold-600/15 pt-10"
          >
            <AnimatedCounter target={28} suffix="+" label="سال تجربه" />
            <AnimatedCounter target={12000} suffix="+" label="مشتری راضی" />
            <AnimatedCounter target={195} suffix="" label="طرح اختصاصی" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
