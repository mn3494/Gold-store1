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


export function calculateGoldPrice({
  weightGrams,
  pricePerGram,
  wagePercent = goldPriceConfig.wagePercent,
  profitPercent = goldPriceConfig.profitPercent,
  taxPercent = goldPriceConfig
