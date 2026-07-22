// lib/gold.ts

export const goldPriceConfig = {
  lastUpdated: "۱۴۰۴/۰۵/۰۱",

  pricePerGram18k: 6850000,

  wagePercent: 12,
  profitPercent: 7,
  taxPercent: 9,

  trend: [
    { date: "شنبه", price: 6800000 },
    { date: "یکشنبه", price: 6820000 },
    { date: "دوشنبه", price: 6840000 },
    { date: "سه‌شنبه", price: 6830000 },
    { date: "چهارشنبه", price: 6850000 },
  ],
};

export const goldConfig = goldPriceConfig;


export function toPersianDigits(input: number | string): string {
  const str = typeof input === "number"
    ? String(Math.round(input))
    : input;

  const persianDigits = [
    "۰",
    "۱",
    "۲",
    "۳",
    "۴",
    "۵",
    "۶",
    "۷",
    "۸",
    "۹",
  ];

  return str.replace(
    /[0-9]/g,
    (d) => persianDigits[Number(d)] ?? d
  );
}


export function toEnglishDigits(input: string): string {
  const persianDigits = [
    "۰",
    "۱",
    "۲",
    "۳",
    "۴",
    "۵",
    "۶",
    "۷",
    "۸",
    "۹",
  ];

  let result = input;

  persianDigits.forEach((digit, index) => {
    result = result.replaceAll(digit, String(index));
  });

  return result;
}


export function gramsToToman(
  grams: number,
  pricePerGram = goldPriceConfig.pricePerGram18k
): number {
  return grams * pricePerGram;
}


export function tomanToGrams(
  toman: number,
  pricePerGram = goldPriceConfig.pricePerGram18k
): number {
  if (!pricePerGram) return 0;

  return toman / pricePerGram;
}


interface GoldPriceInput {
  weightGrams: number;
  pricePerGram: number;
  wagePercent?: number;
  profitPercent?: number;
  taxPercent?: number;
}


  taxPercent = goldPriceConfig.taxPercent,
}: GoldPriceInput) {
  const bullionValue = weightGrams * pricePerGram;

  const wageValue = bullionValue * (wagePercent / 100);
  const profitValue = (bullionValue + wageValue) * (profitPercent / 100);
  const taxValue = (wageValue + profitValue) * (taxPercent / 100);

  const total =
    bullionValue +
    wageValue +
    profitValue +
    taxValue;

  return {
    bullionValue,
    wageValue,
    profitValue,
    taxValue,
    total,

    // برای سازگاری با بقیه کامپوننت‌ها
    basePrice: bullionValue,
    wage: wageValue,
    profit: profitValue,
    tax: taxValue,
  };
}

export function estimatePrice(product: any): number {
  const weight = Number(product.weight ?? product.weightGrams ?? 0);
  const purity = Number(product.purity ?? 18);

  const pricePerGram =
    goldPriceConfig.pricePerGram18k * (purity / 18);

  return calculateGoldPrice({
    weightGrams: weight,
    pricePerGram,
  }).total;
}

export function purityLabel(purity: number): string {
  if (purity === 24) return "۲۴ عیار";
  if (purity === 18) return "۱۸ عیار";
  if (purity === 14) return "۱۴ عیار";
  return `${purity} عیار`;
}q
