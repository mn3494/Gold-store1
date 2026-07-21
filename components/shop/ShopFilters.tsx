"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, SlidersHorizontal, X } from "lucide-react";
import { toEnglishDigits } from "@/lib/gold";

export type SortOption = "newest" | "price-asc" | "price-desc" | "weight-asc" | "weight-desc";

export interface ShopFilterState {
  search: string;
  minPrice: string;
  maxPrice: string;
  minWeight: string;
  maxWeight: string;
  purities: string[];
  sort: SortOption;
}

interface ShopFiltersProps {
  filters: ShopFilterState;
  onChange: (filters: ShopFilterState) => void;
  resultCount: number;
}

const purityOptions = [
  { value: "18", label: "طلای ۱۸ عیار" },
  { value: "24", label: "طلای ۲۴ عیار" },
  { value: "925", label: "نقره ۹۲۵" },
];

const sortOptions: { value: SortOption; label: string }[] = [
  { value: "newest", label: "جدیدترین" },
  { value: "price-asc", label: "ارزان‌ترین" },
  { value: "price-desc", label: "گران‌ترین" },
  { value: "weight-asc", label: "کم‌وزن‌ترین" },
  { value: "weight-desc", label: "سنگین‌ترین" },
];

export default function ShopFilters({ filters, onChange, resultCount }: ShopFiltersProps) {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const update = (patch: Partial<ShopFilterState>) => onChange({ ...filters, ...patch });

  const togglePurity = (value: string) => {
    const next = filters.purities.includes(value)
      ? filters.purities.filter((p) => p !== value)
      : [...filters.purities, value];
    update({ purities: next });
  };

  const FilterBody = (
    <div className="flex flex-col gap-6">
      <div>
        <span className="mb-2 block text-xs text-muted">محدوده قیمت (تومان)</span>
        <div className="flex items-center gap-2">
          <input
            type="text"
            inputMode="numeric"
            placeholder="از"
            dir="ltr"
            value={filters.minPrice}
            onChange={(e) => update({ minPrice: toEnglishDigits(e.target.value).replace(/[^0-9]/g, "") })}
            className="w-full rounded-lg border border-gold-600/20 bg-obsidian-500/60 px-3 py-2 text-sm text-ivory focus:border-gold-400 focus:outline-none"
          />
          <span className="text-muted">−</span>
          <input
            type="text"
            inputMode="numeric"
            placeholder="تا"
            dir="ltr"
            value={filters.maxPrice}
            onChange={(e) => update({ maxPrice: toEnglishDigits(e.target.value).replace(/[^0-9]/g, "") })}
            className="w-full rounded-lg border border-gold-600/20 bg-obsidian-500/60 px-3 py-2 text-sm text-ivory focus:border-gold-400 focus:outline-none"
          />
        </div>
      </div>

      <div>
        <span className="mb-2 block text-xs text-muted">محدوده وزن (گرم)</span>
        <div className="flex items-center gap-2">
          <input
            type="text"
            inputMode="decimal"
            placeholder="از"
            dir="ltr"
            value={filters.minWeight}
            onChange={(e) => update({ minWeight: toEnglishDigits(e.target.value).replace(/[^0-9.]/g, "") })}
            className="w-full rounded-lg border border-gold-600/20 bg-obsidian-500/60 px-3 py-2 text-sm text-ivory focus:border-gold-400 focus:outline-none"
          />
          <span className="text-muted">−</span>
          <input
            type="text"
            inputMode="decimal"
            placeholder="تا"
            dir="ltr"
            value={filters.maxWeight}
            onChange={(e) => update({ maxWeight: toEnglishDigits(e.target.value).replace(/[^0-9.]/g, "") })}
            className="w-full rounded-lg border border-gold-600/20 bg-obsidian-500/60 px-3 py-2 text-sm text-ivory focus:border-gold-400 focus:outline-none"
          />
        </div>
      </div>

      <div>
        <span className="mb-2 block text-xs text-muted">عیار</span>
        <div className="flex flex-col gap-2">
          {purityOptions.map((opt) => (
            <label key={opt.value} className="flex cursor-pointer items-center gap-2 text-sm text-bone">
              <input
                type="checkbox"
                checked={filters.purities.includes(opt.value)}
                onChange={() => togglePurity(opt.value)}
                className="h-4 w-4 rounded border-gold-600/40 accent-[#c9a24c]"
              />
              {opt.label}
            </label>
          ))}
        </div>
      </div>

      <button
        onClick={() =>
          onChange({
            search: filters.search,
            minPrice: "",
            maxPrice: "",
            minWeight: "",
            maxWeight: "",
            purities: [],
            sort: "newest",
          })
        }
        className="text-xs text-gold-400 underline underline-offset-4"
      >
        پاک کردن فیلترها
      </button>
    </div>
  );

  return (
    <div>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <div className="relative flex-1">
          <Search className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
          <input
            type="text"
            value={filters.search}
            onChange={(e) => update({ search: e.target.value })}
            placeholder="جستجوی نام محصول..."
            className="w-full rounded-full border border-gold-600/20 bg-obsidian-500/60 py-3 pe-11 ps-4 text-sm text-ivory placeholder:text-muted focus:border-gold-400 focus:outline-none"
          />
        </div>

        <select
          value={filters.sort}
          onChange={(e) => update({ sort: e.target.value as SortOption })}
          className="rounded-full border border-gold-600/20 bg-obsidian-500/60 px-4 py-3 text-sm text-ivory focus:border-gold-400 focus:outline-none"
        >
          {sortOptions.map((opt) => (
            <option key={opt.value} value={opt.value} className="bg-charcoal">
              {opt.label}
            </option>
          ))}
        </select>

        <button
          onClick={() => setDrawerOpen(true)}
          className="inline-flex items-center justify-center gap-2 rounded-full border border-gold-600/40 px-5 py-3 text-sm text-ivory sm:hidden"
        >
          <SlidersHorizontal className="h-4 w-4" />
          فیلترها
        </button>
      </div>

      <p className="mt-4 text-xs text-muted">{resultCount} محصول یافت شد</p>

      <div className="mt-6 hidden rounded-2xl border border-gold-600/10 bg-charcoal p-6 sm:block">
        {FilterBody}
      </div>

      <AnimatePresence>
        {drawerOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setDrawerOpen(false)}
            className="fixed inset-0 z-[70] bg-obsidian-500/80 backdrop-blur-sm sm:hidden"
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="absolute inset-y-0 left-0 w-[85%] max-w-sm overflow-y-auto bg-charcoal p-6"
            >
              <div className="flex items-center justify-between">
                <p className="font-display text-lg text-ivory">فیلترها</p>
                <button onClick={() => setDrawerOpen(false)} aria-label="بستن">
                  <X className="h-5 w-5 text-ivory" />
                </button>
              </div>
              <div className="mt-6">{FilterBody}</div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
