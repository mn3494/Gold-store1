"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import ProductCard from "./ProductCard";
import ShopFilters, { ShopFilterState } from "./ShopFilters";
import QuickViewModal from "./QuickViewModal";
import CompareBar from "./CompareBar";
import RecentlyViewed from "./RecentlyViewed";
import { shopProducts, ShopProduct } from "@/lib/data";
import { estimatePrice, toEnglishDigits } from "@/lib/gold";
import { useShopStore } from "./ShopStoreContext";

const defaultFilters: ShopFilterState = {
  search: "",
  minPrice: "",
  maxPrice: "",
  minWeight: "",
  maxWeight: "",
  purities: [],
  sort: "newest",
};

export default function ShopClient() {
  const [filters, setFilters] = useState<ShopFilterState>(defaultFilters);
  const [quickViewProduct, setQuickViewProduct] = useState<ShopProduct | null>(null);
  const { addRecentlyViewed } = useShopStore();

  const filtered = useMemo(() => {
    let list = shopProducts.map((p) => ({ ...p, price: estimatePrice(p.weightGrams, p.purity) }));

    if (filters.search.trim()) {
      const q = filters.search.trim().toLowerCase();
      list = list.filter((p) => p.name.toLowerCase().includes(q) || p.category.includes(filters.search.trim()));
    }
    if (filters.minPrice) {
      list = list.filter((p) => p.price >= parseFloat(toEnglishDigits(filters.minPrice)));
    }
    if (filters.maxPrice) {
      list = list.filter((p) => p.price <= parseFloat(toEnglishDigits(filters.maxPrice)));
    }
    if (filters.minWeight) {
      list = list.filter((p) => p.weightGrams >= parseFloat(toEnglishDigits(filters.minWeight)));
    }
    if (filters.maxWeight) {
      list = list.filter((p) => p.weightGrams <= parseFloat(toEnglishDigits(filters.maxWeight)));
    }
    if (filters.purities.length > 0) {
      list = list.filter((p) => filters.purities.includes(p.purity));
    }

    switch (filters.sort) {
      case "price-asc":
        list.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        list.sort((a, b) => b.price - a.price);
        break;
      case "weight-asc":
        list.sort((a, b) => a.weightGrams - b.weightGrams);
        break;
      case "weight-desc":
        list.sort((a, b) => b.weightGrams - a.weightGrams);
        break;
      default:
        break;
    }

    return list;
  }, [filters]);

  const handleQuickView = (product: ShopProduct) => {
    setQuickViewProduct(product);
    addRecentlyViewed(product.id);
  };

  const handleRecentSelect = (id: string) => {
    const product = shopProducts.find((p) => p.id === id);
    if (product) setQuickViewProduct(product);
  };

  return (
    <main className="pt-32 pb-24">
      <section className="section-padding pt-0">
        <div className="mx-auto max-w-content">
          <SectionHeading
            eyebrow="فروشگاه زرین اطلس"
            title="همه محصولات"
            description="با فیلتر عیار، وزن و قیمت، دقیقاً همان قطعه‌ای را پیدا کنید که دنبالش هستید."
          />

          <div className="mt-12">
            <ShopFilters filters={filters} onChange={setFilters} resultCount={filtered.length} />
          </div>

          <motion.div layout className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <AnimatePresence>
              {filtered.map((product) => (
                <ProductCard key={product.id} product={product} onQuickView={handleQuickView} />
              ))}
            </AnimatePresence>
          </motion.div>

          {filtered.length === 0 && (
            <p className="mt-16 text-center text-sm text-muted">
              محصولی با این فیلترها پیدا نشد. فیلترها را تغییر دهید یا پاک کنید.
            </p>
          )}

          <RecentlyViewed onSelect={handleRecentSelect} />
        </div>
      </section>

      <QuickViewModal product={quickViewProduct} onClose={() => setQuickViewProduct(null)} />
      <CompareBar />
    </main>
  );
}
