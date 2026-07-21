import type { Metadata } from "next";
import GoldChart from "@/components/gold/GoldChart";
import GoldConverter from "@/components/gold/GoldConverter";
import WageCalculator from "@/components/gold/WageCalculator";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "قیمت لحظه‌ای طلا و ماشین‌حساب اجرت",
  description:
    "نرخ روز طلای ۱۸ عیار، نمودار روند هفتگی، مبدل وزن به قیمت و ماشین‌حساب اجرت ساخت زرین اطلس.",
};

export default function GoldPricePage() {
  return (
    <main className="pt-32">
      <section className="section-padding pt-0">
        <div className="mx-auto max-w-content">
          <SectionHeading
            eyebrow="بازار طلا"
            title="قیمت طلا و ابزارهای محاسبه"
            description="نرخ پایه طلا هر روز صبح به‌روزرسانی می‌شود. برای قیمت نهایی و قطعی هر سفارش، حتماً با کارشناسان ما تماس بگیرید."
          />

          <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-2">
            <div className="lg:col-span-2">
              <GoldChart />
            </div>
            <GoldConverter />
            <WageCalculator />
          </div>
        </div>
      </section>
    </main>
  );
}
