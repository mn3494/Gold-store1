"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Calculator } from "lucide-react";

import {
  calculateGoldPrice,
  goldPriceConfig,
  toEnglishDigits,
  toPersianDigits,
} from "@/lib/gold";

import { viewportOnce } from "@/lib/motion";


export default function WageCalculator() {
  const [weight, setWeight] = useState("5");
  const [wage, setWage] = useState("12");


  const result = useMemo(() => {
    const w =
      parseFloat(toEnglishDigits(weight)) || 0;

    const wg =
      parseFloat(toEnglishDigits(wage)) || 0;


    return calculateGoldPrice({
      weightGrams: w,
      wagePercent: wg,
      pricePerGram: goldPriceConfig.pricePerGram18k,
    });

  }, [weight, wage]);


  return (
    <motion.div
      id="wage-calculator"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewportOnce}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="glass-panel rounded-2xl p-6 sm:p-8"
    >

      <div className="flex items-center gap-2 text-gold-400">
        <Calculator className="h-4 w-4" />
        <p className="text-xs">
          ماشین‌حساب اجرت
        </p>
      </div>


      <p className="mt-3 font-display text-lg text-ivory">
        قیمت نهایی طلای ساخته‌شده را برآورد کنید
      </p>


      <div className="mt-6 grid grid-cols-2 gap-4">

        <label className="block">
          <span className="mb-2 block text-xs text-muted">
            وزن (گرم)
          </span>

          <input
            type="text"
            inputMode="decimal"
            dir="ltr"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            className="w-full rounded-xl border border-gold-600/20 bg-obsidian-500/60 px-4 py-3 text-left text-ivory"
          />
        </label>


        <label className="block">
          <span className="mb-2 block text-xs text-muted">
            اجرت ساخت (درصد)
          </span>

          <input
            type="text"
            inputMode="decimal"
            dir="ltr"
            value={wage}
            onChange={(e) => setWage(e.target.value)}
            className="w-full rounded-xl border border-gold-600/20 bg-obsidian-500/60 px-4 py-3 text-left text-ivory"
          />
        </label>

      </div>



      <div className="mt-6 flex flex-col gap-3 border-t border-gold-600/10 pt-5 text-sm">

        <div className="flex justify-between text-muted">
          <span>ارزش پایه طلا</span>
          <span dir="ltr">
            {toPersianDigits(result.bullionValue)}
          </span>
        </div>


        <div className="flex justify-between text-muted">
          <span>اجرت ساخت</span>
          <span dir="ltr">
            {toPersianDigits(result.wageValue)}
          </span>
        </div>


        <div className="flex justify-between text-muted">
          <span>سود فروش (۷٪)</span>
          <span dir="ltr">
            {toPersianDigits(result.profitValue)}
          </span>
        </div>


        <div className="flex justify-between text-muted">
          <span>مالیات بر ارزش‌افزوده (۹٪)</span>
          <span dir="ltr">
            {toPersianDigits(result.taxValue)}
          </span>
        </div>


        <div className="mt-3 flex justify-between border-t border-gold-600/15 pt-3">

          <span className="font-display text-ivory">
            مبلغ نهایی
          </span>

          <span
            className="font-display text-xl text-gradient-gold"
            dir="ltr"
          >
            {toPersianDigits(result.total)} تومان
          </span>

        </div>

      </div>


      <p className="mt-5 text-xs leading-6 text-muted">
        این محاسبه برآوردی و بر اساس عرف رایج بازار طلای ایران است.
        قیمت نهایی هر سفارش پس از استعلام از کارشناسان ما قطعی می‌شود.
      </p>


    </motion.div>
  );
}
