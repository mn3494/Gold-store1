"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Gem, Sparkles, Truck } from "lucide-react";
import SectionHeading from "../SectionHeading";
import { staggerContainer, fadeUp, viewportOnce } from "@/lib/motion";

const reasons = [
  {
    icon: ShieldCheck,
    title: "اصالت تضمینی",
    description:
      "تمامی محصولات دارای گواهی عیارسنجی رسمی و مهر ضمانت اصالت هستند.",
  },
  {
    icon: Gem,
    title: "طراحی منحصربه‌فرد",
    description:
      "هر طرح توسط تیم طراحی داخلی ما خلق می‌شود؛ ترکیبی از هنر کهن و مد روز.",
  },
  {
    icon: Sparkles,
    title: "ساخت دستی استادکاران",
    description:
      "بدون تولید انبوه؛ هر قطعه با دقت و صبر دست‌های ماهر شکل می‌گیرد.",
  },
  {
    icon: Truck,
    title: "ارسال ایمن سراسری",
    description:
      "بسته‌بندی مطمئن و ارسال بیمه‌شده به تمام نقاط ایران، بدون نگرانی.",
  },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="section-padding relative overflow-hidden bg-obsidian-500">
      <div className="absolute inset-0 bg-radial-fade opacity-60" aria-hidden="true" />
      <div className="relative mx-auto max-w-content">
        <SectionHeading
          eyebrow="تعهد ما"
          title="چرا زرین اطلس؟"
          description="چهار اصلی که در هر سفارش، بدون استثنا رعایت می‌کنیم."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {reasons.map((reason) => (
            <motion.div
              key={reason.title}
              variants={fadeUp}
              whileHover={{ y: -8, borderColor: "rgba(201,162,76,0.5)" }}
              className="glass-panel rounded-2xl p-8 text-center transition-colors duration-500"
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gold-400/10">
                <reason.icon className="h-6 w-6 text-gold-400" strokeWidth={1.5} />
              </div>
              <h3 className="mt-6 font-display text-lg text-ivory">
                {reason.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-bone">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
