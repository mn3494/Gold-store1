import type { Metadata } from "next";
import Categories from "@/components/sections/Categories";

export const metadata: Metadata = {
  title: "دسته‌بندی محصولات",
  description: "دسته‌بندی کامل محصولات زرین اطلس؛ انگشتر، گردنبند، دستبند، گوشواره، سکه طلا و ست عروس.",
};

export default function CategoriesPage() {
  return (
    <main className="pt-20">
      <Categories />
    </main>
  );
}
