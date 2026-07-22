export const goldConfig = {
  pricePerGram18k: 6850000,
  lastUpdated: "۱۴۰۴/۰۵/۰۱",
  defaultWagePercent: 12,
  defaultProfitPercent: 7,
  taxPercent: 9,
};

export const toPersianDigits = (value: number | string): string => {
  const str = typeof value === "number"
    ? Math.round(value).toLocaleString("en-US")
    : value;

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

export const toEnglishDigits = (value: string): string => {
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

  let result = value;

  persianDigits.forEach((p, i) => {
    result = result.replaceAll(p, String(i));
  });

  return result;
};

interface GoldPriceInputs {
  weightGrams: number;
  pricePerGram: number;
  wagePercent: number;
  profitPercent: number;
  taxPercent: number;
}

export function calculateGoldPrice({
  weightGrams,
  pricePerGram,
  wagePercent,
  profitPercent,
  taxPercent,
}: GoldPriceInputs) {
  const basePrice = weightGrams * pricePerGram;
  const wage = basePrice * (wagePercent / 100);
  const profit = (basePrice + wage) * (profitPercent / 100);
  const tax = (wage + profit) * (taxPercent / 100);
  const total = basePrice + wage + profit + tax;

  return { basePrice, wage, profit, tax, total };
}

export function calculateWeightFromBudget({
  budget,
  pricePerGram,
  wagePercent,
  profitPercent,
  taxPercent,
}: Omit<GoldPriceInputs, "weightGrams"> & { budget: number }) {

  const wageFactor = wagePercent / 100;
  const profitFactor = profitPercent / 100;
  const taxFactor = taxPercent / 100;

  const multiplier =
    1 +
    wageFactor +
    (1 + wageFactor) * profitFactor +
    (wageFactor + (1 + wageFactor) * profitFactor) * taxFactor;

  const base = budget / multiplier;
  const weight = base / pricePerGram;

  return weight;
}
