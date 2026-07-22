// lib/gold.ts

export const goldPriceConfig = {
  pricePerGram18k: 6850000,
  wagePercent: 12,
  profitPercent: 7,
  taxPercent: 9,
};

export const goldConfig = goldPriceConfig;

export const toPersianDigits = (input: number | string): string => {
  const str = typeof input === "number" ? String(Math.round(input)) : input ?? "";

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

  return str.replace(/[0-9]/g, (d) => persianDigits[Number(d)] ?? d);
};

export const toEnglishDigits = (input: string): string => {
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
};


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
  taxPercent = goldPriceConfig.taxPercent,
}: GoldPriceInput) {

  const basePrice = weightGrams * pricePerGram;

  const wage =
    basePrice * (wagePercent / 100);

  const profit =
    (basePrice + wage) * (profitPercent / 100);

  const tax =
    (wage + profit) * (taxPercent / 100);

  const total =
    basePrice + wage + profit + tax;

  return {
    basePrice,
    wage,
    profit,
    tax,
    total,
  };
}


export function estimatePrice(product: any): number {

  const weight =
    Number(product.weight ?? product.weightGrams ?? 0);

  const purity =
    Number(product.purity ?? 18);

  const price =
    goldPriceConfig.pricePerGram18k *
    (purity / 18);

  return calculateGoldPrice({
    weightGrams: weight,
    pricePerGram: price,
  }).total;
}


export function purityLabel(purity: number): string {

  if (purity === 24) return "۲۴ عیار";

  if (purity === 18) return "۱۸ عیار";

  if (purity === 14) return "۱۴ عیار";

  return `${purity} عیار`;
}
