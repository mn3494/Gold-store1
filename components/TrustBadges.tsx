"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Lock, RotateCcw, Award } from "lucide-react";
import { staggerContainer, fadeUp, viewportOnce } from "@/lib/motion";

const badges = [
  {
    icon: ShieldCheck,
    title: "ضمانت اصالت",
    description: "همراه با گواهی عیارسنجی رسمی",
  },
  {
    icon: Lock,
    title: "پرداخت امن",
    description: "درگاه بانکی متصل به شاپرک",
  },
  {
    icon: RotateCcw,
    title: "بازگشت ۷ روزه",
    description: "بدون قید و شرط پیچیده",
  },
  {
    icon: Award,
    title: "۲۸ سال سابقه",
    description: "در بازار طلا و جواهر تهران",
  },
];

export default function TrustBadges() {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      className="mx-auto grid max-w-content grid-cols-2 gap-4 px-6 sm:grid-cols-4 sm:px-10 lg:px-16"
    >
      {badges.map((badge) => (
        <motion.div
          key={badge.title}
          variants={fadeUp}
          className="flex flex-col items-center gap-2 rounded-2xl border border-gold-600/10 bg-charcoal/60 px-4 py-6 text-center"
        >
          <badge.icon className="h-5 w-5 text-gold-400" strokeWidth={1.5} />
          <p className="font-display text-sm text-ivory">{badge.title}</p>
          <p className="text-[11px] leading-5 text-muted">{badge.description}</p>
        </motion.div>
      ))}
    </motion.div>
  );
}
