// این عدد را هر روز صبح، بر اساس نرخ لحظه‌ای بازار طلا به‌روزرسانی کنید.
// واحد: تومان به‌ازای هر گرم طلای ۱۸ عیار
export const goldConfig = {
  pricePerGram18k: 6850000,
  lastUpdated: "۱۴۰۴/۰۵/۰۱",
  defaultWagePercent: 12, // اجرت پیش‌فرض (درصد)
  defaultProfitPercent: 7, // سود پیش‌فرض (درصد)
  taxPercent: 9, // مالیات بر ارزش افزوده (درصد) — طبق قانون فقط روی اجرت و سود اعمال می‌شود
};

export const toPersianDigits = (value: number | string): string => {
  const str = typeof value === "number" ? Math.round(value).toLocaleString("en-US") : value;
  const persianDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
  return str.replace(/[0-9]/g, (d) => persianDigits[parseInt(d, 10)]);
};

export const toEnglishDigits = (value: string): string => {
  const persianDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
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

// فرمول رایج بازار طلای ایران:
// قیمت پایه = وزن × نرخ هر گرم
// اجرت = قیمت پایه × درصد اجرت
// سود = (قیمت پایه + اجرت) × درصد سود
// مالیات = (اجرت + سود) × درصد مالیات
// قیمت نهایی = قیمت پایه + اجرت + سود + مالیات
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

// محاسبه‌ی معکوس: از بودجه، وزن تقریبی قابل خرید را برمی‌گرداند
export function calculateWeightFromBudget({
  budget,
  pricePerGram,
  wagePercent,
  profitPercent,
  taxPercent,
}: Omit<GoldPriceInputs, "weightGrams"> & { budget: number }) {
  // ضریب مؤثر روی هر گرم طلای پایه
  const wageFactor = wagePercent / 100;
  const profitFactor = profitPercent / 100;
  const taxFactor = taxPercent / 100;

  // بازنویسی دقیق فرمول به‌صورت خطی بر حسب وزن:
  // total = base + wage + profit + tax
  // base = w * p
  // wage = base * wf
  // profit = (base + wage) * pf = base * (1+wf) * pf
  // tax = (wage + profit) * tf = (base*wf + base*(1+wf)*pf) * tf
  // total = base * [1 + wf + (1+wf)*pf + (wf + (1+wf)*pf) * tf]
  const multiplier =
    1 + wageFactor + (1 + wageFactor) * profitFactor + (wageFactor + (1 + wageFactor) * profitFactor) * taxFactor;

  const base = budget / multiplier;
  const weight = base / pricePerGram;

  return weight;
}
