"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Scale, X } from "lucide-react";
import { shopProducts } from "@/lib/data";
import { estimatePrice, purityLabel, toPersianDigits } from "@/lib/gold";
import { useShopStore } from "./ShopStoreContext";

export default function CompareBar() {
  const { compareList, clearCompare, toggleCompare } = useShopStore();
  const [open, setOpen] = useState(false);

  const items = compareList
    .map((id) => shopProducts.find((p) => p.id === id))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  if (items.length === 0) return null;

  return (
    <>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        className="fixed inset-x-0 bottom-0 z-50 border-t border-gold-600/20 bg-charcoal/95 backdrop-blur-lg"
      >
        <div className="mx-auto flex max-w-content items-center justify-between gap-4 px-6 py-4">
          <div className="flex items-center gap-2 text-sm text-ivory">
            <Scale className="h-4 w-4 text-gold-400" />
            {toPersianDigits(items.length)} محصول برای مقایسه انتخاب شده
          </div>
          <div className="flex items-center gap-3">
            <button onClick={() => setOpen(true)} className="btn-outline-gold px-5 py-2 text-xs">
              مشاهده مقایسه
            </button>
            <button onClick={clearCompare} className="text-xs text-muted hover:text-gold-400">
              پاک کردن
            </button>
          </div>
        </div>
      </motion.div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-[80] flex items-center justify-center bg-obsidian-500/85 p-4 backdrop-blur-sm"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="glass-panel relative w-full max-w-3xl overflow-x-auto rounded-2xl p-6"
            >
              <button
                onClick={() => setOpen(false)}
                className="absolute left-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-obsidian-500/70 text-ivory"
                aria-label="بستن"
              >
                <X className="h-4 w-4" />
              </button>
              <h3 className="font-display text-xl text-ivory">مقایسه محصولات</h3>

              <table className="mt-6 w-full min-w-[500px] border-collapse text-sm">
                <thead>
                  <tr>
                    <td className="pb-3 text-muted"></td>
                    {items.map((item) => (
                      <td key={item.id} className="pb-3 text-center">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="mx-auto h-20 w-20 rounded-xl object-cover"
                        />
                        <p className="mt-2 font-display text-sm text-ivory">{item.name}</p>
                        <button
                          onClick={() => toggleCompare(item.id)}
                          className="mt-1 text-[10px] text-muted hover:text-gold-400"
                        >
                          حذف
                        </button>
                      </td>
                    ))}
                  </tr>
                </thead>
                <tbody className="text-center">
                  <tr className="border-t border-gold-600/10">
                    <td className="py-3 text-start text-muted">عیار</td>
                    {items.map((item) => (
                      <td key={item.id} className="py-3 text-bone">
                        {purityLabel(item.purity)}
                      </td>
                    ))}
                  </tr>
                  <tr className="border-t border-gold-600/10">
                    <td className="py-3 text-start text-muted">وزن</td>
                    {items.map((item) => (
                      <td key={item.id} className="py-3 text-bone">
                        {toPersianDigits(item.weightGrams)} گرم
                      </td>
                    ))}
                  </tr>
                  <tr className="border-t border-gold-600/10">
                    <td className="py-3 text-start text-muted">دسته</td>
                    {items.map((item) => (
                      <td key={item.id} className="py-3 text-bone">
                        {item.category}
                      </td>
                    ))}
                  </tr>
                  <tr className="border-t border-gold-600/10">
                    <td className="py-3 text-start text-muted">قیمت تقریبی</td>
                    {items.map((item) => (
                      <td key={item.id} className="py-3 font-display text-gradient-gold">
                        {toPersianDigits(estimatePrice(item.weightGrams, item.purity))}
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
