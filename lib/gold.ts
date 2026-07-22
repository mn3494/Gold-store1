export const goldConfig = {
  pricePerGram18k: 6850000,
  lastUpdated: "۱۴۰۴/۰۵/۰۱",
  defaultWagePercent: 12,
  defaultProfitPercent: 7,
  taxPercent: 9,
};

export const toPersianDigits = (input: number | string): string => {
  const str = typeof input === "number" ? String(input) : input ?? "";

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
