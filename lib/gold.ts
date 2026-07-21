// قیمت پایه طلا — این عدد را هر روز به‌صورت دستی با نرخ روز بازار به‌روزرسانی کنید.
// واحد: تومان به‌ازای هر گرم طلای ۱۸ عیار
export const goldPriceConfig = {
  pricePerGram18k: 6850000,
  pricePerGram24k: 9133000,
  pricePerGramSilver925: 92000,
  lastUpdated: "۱۴۰۴/۰۵/۰۱",
  // روند ۷ روز اخیر برای نمودار (نمونه — با نرخ واقعی جایگزین کنید)
  trend: [
    { day: "شنبه", price: 6720000 },
    { day: "یکشنبه", price: 6755000 },
    { day: "دوشنبه", price: 6690000 },
    { day: "سه‌شنبه", price: 6810000 },
    { day: "چهارشنبه", price: 6790000 },
    { day: "پنجشنبه", price: 6830000 },
    { day: "جمعه", price: 6850000 },
  ],
};

export function toPersianDigits(input: number | string): string {
  const str = typeof input === "number" ? Math.round(input).toLocaleString("en-US") : input;
  const persianDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
  return str.replace(/[0-9]/g, (d) => persianDigits[parseInt(d, 10)]);
}

export function toEnglishDigits(input: string): string {
  const persianDigits = "۰۱۲۳۴۵۶۷۸۹";
  return input.replace(/[۰-۹]/g, (d) => String(persianDigits.indexOf(d)));
}

export function formatToman(amount: number): string {
  return `${toPersianDigits(amount)} تومان`;
}

/**
 * محاسبه قیمت نهایی بر اساس وزن (گرم)، اجرت ساخت (درصد)، و سود+مالیات طبق عرف بازار.
 */
export function calculateGoldPrice({
  weightGrams,
  wagePercent,
  profitPercent = 7,
  taxPercent = 9,
}: {
  weightGrams: number;
  wagePercent: number;
  profitPercent?: number;
  taxPercent?: number;
}) {
  const bullionValue = weightGrams * goldPriceConfig.pricePerGram18k;
  const wageValue = bullionValue * (wagePercent / 100);
  const subtotal = bullionValue + wageValue;
  const profitValue = subtotal * (profitPercent / 100);
  const beforeTax = subtotal + profitValue;
  const taxValue = (wageValue + profitValue) * (taxPercent / 100);
  const total = beforeTax + taxValue;

  return {
    bullionValue,
    wageValue,
    profitValue,
    taxValue,
    total,
  };
}

/** تبدیل مبلغ تومانی به وزن معادل طلای ۱۸ عیار (گرم) */
export function tomanToGrams(amountToman: number): number {
  if (!goldPriceConfig.pricePerGram18k) return 0;
  return amountToman / goldPriceConfig.pricePerGram18k;
}

/** تبدیل وزن (گرم) به مبلغ تومانی بر اساس نرخ پایه (بدون اجرت) */
export function gramsToToman(grams: number): number {
  return grams * goldPriceConfig.pricePerGram18k;
}

export type GoldPurity = "18" | "24" | "925";

const pricePerGramByPurity: Record<GoldPurity, number> = {
  "18": goldPriceConfig.pricePerGram18k,
  "24": goldPriceConfig.pricePerGram24k,
  "925": goldPriceConfig.pricePerGramSilver925,
};

/** برآورد تقریبی قیمت برای نمایش در فروشگاه (شامل ۱۵٪ اجرت متوسط) */
export function estimatePrice(weightGrams: number, purity: GoldPurity, wagePercent = 15): number {
  const base = weightGrams * pricePerGramByPurity[purity];
  return Math.round(base * (1 + wagePercent / 100));
}

export function purityLabel(purity: GoldPurity): string {
  if (purity === "18") return "طلای ۱۸ عیار";
  if (purity === "24") return "طلای ۲۴ عیار";
  return "نقره ۹۲۵";
}
