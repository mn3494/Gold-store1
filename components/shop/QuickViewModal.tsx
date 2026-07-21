"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X, Heart, Scale } from "lucide-react";
import { ShopProduct } from "@/lib/data";
import { estimatePrice, purityLabel, toPersianDigits } from "@/lib/gold";
import { useShopStore, MAX_COMPARE_ITEMS } from "./ShopStoreContext";
import PurchaseButton from "@/components/auth/PurchaseButton";

interface QuickViewModalProps {
  product: ShopProduct | null;
  onClose: () => void;
}

export default function QuickViewModal({ product, onClose }: QuickViewModalProps) {
  const { isWishlisted, toggleWishlist, isCompared, toggleCompare } = useShopStore();

  return (
    <AnimatePresence>
      {product && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-obsidian-500/85 p-4 backdrop-blur-sm"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 10 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="glass-panel relative grid w-full max-w-2xl grid-cols-1 gap-0 overflow-hidden rounded-2xl sm:grid-cols-2"
          >
            <button
              onClick={onClose}
              aria-label="بستن"
              className="absolute left-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-obsidian-500/70 text-ivory"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="aspect-square sm:aspect-auto">
              <img
                src={product.image}
                alt={product.name}
                className="h-full w-full object-cover"
              />
            </div>

            <div className="flex flex-col p-6 sm:p-8">
              <p className="text-xs text-gold-400">{purityLabel(product.purity)}</p>
              <h3 className="mt-2 font-display text-xl text-ivory">{product.name}</h3>
              <p className="mt-3 text-sm leading-7 text-bone">{product.description}</p>

              <div className="mt-5 flex items-center gap-4 text-sm text-muted">
                <span>وزن: {toPersianDigits(product.weightGrams)} گرم</span>
                <span>دسته: {product.category}</span>
              </div>

              <p className="mt-4 font-display text-2xl text-gradient-gold">
                {toPersianDigits(estimatePrice(product.weightGrams, product.purity))} تومان
              </p>

              <PurchaseButton productName={product.name} className="mt-6 w-full" />

              <div className="mt-4 flex gap-3">
                <button
                  onClick={() => toggleWishlist(product.id)}
                  className={`inline-flex flex-1 items-center justify-center gap-2 rounded-full border px-4 py-2.5 text-xs transition-colors ${
                    isWishlisted(product.id)
                      ? "border-gold-400 bg-gold-400/10 text-gold-400"
                      : "border-gold-600/25 text-muted hover:text-gold-400"
                  }`}
                >
                  <Heart className="h-3.5 w-3.5" fill={isWishlisted(product.id) ? "currentColor" : "none"} />
                  علاقه‌مندی
                </button>
                <button
                  onClick={() => {
                    const added = toggleCompare(product.id);
                    if (!added) alert(`می‌توانید حداکثر ${MAX_COMPARE_ITEMS} محصول را مقایسه کنید.`);
                  }}
                  className={`inline-flex flex-1 items-center justify-center gap-2 rounded-full border px-4 py-2.5 text-xs transition-colors ${
                    isCompared(product.id)
                      ? "border-gold-400 bg-gold-400/10 text-gold-400"
                      : "border-gold-600/25 text-muted hover:text-gold-400"
                  }`}
                >
                  <Scale className="h-3.5 w-3.5" />
                  مقایسه
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
