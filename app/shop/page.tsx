import type { Metadata } from "next";
import ShopClient from "@/components/shop/ShopClient";

export const metadata: Metadata = {
  title: "فروشگاه",
  description: "همه‌ی محصولات زرین اطلس با امکان جستجو، فیلتر عیار و وزن، مقایسه و نمای سریع.",
};

export default function ShopPage() {
  return <ShopClient />;
}
