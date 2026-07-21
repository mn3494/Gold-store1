"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeftRight } from "lucide-react";
import { toPersianDigits, toEnglishDigits, gramsToToman, tomanToGrams } from "@/lib/gold";
import { viewportOnce } from "@/lib/motion";

export default function GoldConverter() {
  const [grams, setGrams] = useState("1");
  const [toman, setToman] = useState(() => String(gramsToToman(1)));
  const [lastEdited, setLastEdited] = useState<"grams" | "toman">("grams");

  const handleGramsChange = (value: string) => {
    const clean = toEnglishDigits(value).replace(/[^0-9.]/g, "");
    setGrams(clean);
    setLastEdited("grams");
    const num = parseFloat(clean);
    setToman(!isNaN(num) ? String(Math.round(gramsToToman(num))) : "");
  };

  const handleTomanChange = (value: string) => {
    const clean = toEnglishDigits(value).replace(/[^0-9]/g, "");
    setToman(clean);
    setLastEdited("toman");
    const num = parseFloat(clean);
    setGrams(!isNaN(num) ? tomanToGrams(num).toFixed(3) : "");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewportOnce}
      transition={{ duration: 0.8, delay: 0.1 }}
      className="glass-panel rounded-2xl p-6 sm:p-8"
    >
      <div className="flex items-center gap-2 text-gold-400">
        <ArrowLeftRight className="h-4 w-4" />
        <p className="text-xs">مبدل وزن طلا و قیمت</p>
      </div>
      <p className="mt-3 font-display text-lg text-ivory">
        وزن طلا را به قیمت روز تبدیل کنید
      </p>

      <div className="mt-6 flex flex-col gap-4">
        <label className="block">
          <span className="mb-2 block text-xs text-muted">وزن (گرم طلای ۱۸ عیار)</span>
          <input
            type="text"
            inputMode="decimal"
            value={lastEdited === "toman" ? grams : grams}
            onChange={(e) => handleGramsChange(e.target.value)}
            dir="ltr"
            className="w-full rounded-xl border border-gold-600/20 bg-obsidian-500/60 px-4 py-3.5 text-left font-display text-lg text-ivory focus:border-gold-400 focus:outline-none"
            placeholder="۰"
          />
        </label>

        <div className="mx-auto flex h-9 w-9 items-center justify-center rounded-full border border-gold-600/30 text-gold-400">
          <ArrowLeftRight className="h-4 w-4" />
        </div>

        <label className="block">
          <span className="mb-2 block text-xs text-muted">مبلغ (تومان)</span>
          <input
            type="text"
            inputMode="numeric"
            value={toman ? toPersianDigits(toman) : ""}
            onChange={(e) => handleTomanChange(e.target.value)}
            dir="ltr"
            className="w-full rounded-xl border border-gold-600/20 bg-obsidian-500/60 px-4 py-3.5 text-left font-display text-lg text-gradient-gold focus:border-gold-400 focus:outline-none"
            placeholder="۰"
          />
        </label>
      </div>

      <p className="mt-5 text-xs leading-6 text-muted">
        این مبلغ صرفاً بر اساس نرخ پایه طلا محاسبه شده و شامل اجرت ساخت، سود و مالیات نیست. برای قیمت نهایی از{" "}
        <a href="#wage-calculator" className="text-gold-400 hover:underline">
          ماشین‌حساب اجرت
        </a>{" "}
        استفاده کنید.
      </p>
    </motion.div>
  );
}
