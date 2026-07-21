"use client";

import { motion } from "framer-motion";
import { shopProducts } from "@/lib/data";
import { useShopStore } from "./ShopStoreContext";

interface RecentlyViewedProps {
  onSelect: (id: string) => void;
}

export default function RecentlyViewed({ onSelect }: RecentlyViewedProps) {
  const { recentlyViewed } = useShopStore();
  const items = recentlyViewed
    .map((id) => shopProducts.find((p) => p.id === id))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  if (items.length === 0) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="mt-14"
    >
      <p className="text-xs text-muted">بازدیدهای اخیر شما</p>
      <div className="mt-3 flex gap-3 overflow-x-auto pb-2">
        {items.map((item) => (
          <button
            key={item.id}
            onClick={() => onSelect(item.id)}
            className="group flex shrink-0 flex-col items-center gap-2"
          >
            <div className="h-16 w-16 overflow-hidden rounded-xl border border-gold-600/15">
              <img
                src={item.image}
                alt={item.name}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <span className="max-w-[4.5rem] truncate text-[10px] text-muted">{item.name}</span>
          </button>
        ))}
      </div>
    </motion.div>
  );
}
