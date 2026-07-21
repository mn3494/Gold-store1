"use client";

import { motion } from "framer-motion";
import { Heart, Scale, Eye } from "lucide-react";
import { ShopProduct } from "@/lib/data";
import { estimatePrice, purityLabel, toPersianDigits } from "@/lib/gold";
import { useShopStore, MAX_COMPARE_ITEMS } from "./ShopStoreContext";
import PurchaseButton from "@/components/auth/PurchaseButton";

interface ProductCardProps {
  product: ShopProduct;
  onQuickView: (product: ShopProduct) => void;
}

export default function ProductCard({ product, onQuickView }: ProductCardProps) {
  const { isWishlisted, toggleWishlist, isCompared, toggleCompare } = useShopStore();
  const wishlisted = isWishlisted(product.id);
  const compared = isCompared(product.id);
  const price = estimatePrice(product.weightGrams, product.purity);

  const handleCompareClick = () => {
    const added = toggleCompare(product.id);
    if (!added) {
      alert(`می‌توانید حداکثر ${MAX_COMPARE_ITEMS} محصول را هم‌زمان مقایسه کنید.`);
    }
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.4 }}
      className="group relative overflow-hidden rounded-2xl border border-gold-600/10 bg-charcoal"
    >
      <div className="relative aspect-square overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-obsidian-500/70 to-transparent" />

        <div className="absolute right-3 top-3 flex flex-col gap-2">
          <button
            onClick={() => toggleWishlist(product.id)}
            aria-label="افزودن به علاقه‌مندی‌ها"
            className={`flex h-9 w-9 items-center justify-center rounded-full backdrop-blur-sm transition-colors ${
              wishlisted ? "bg-gold-400 text-obsidian-500" : "bg-obsidian-500/60 text-ivory hover:text-gold-400"
            }`}
          >
            <Heart className="h-4 w-4" fill={wishlisted ? "currentColor" : "none"} />
          </button>
          <button
            onClick={handleCompareClick}
            aria-label="افزودن به مقایسه"
            className={`flex h-9 w-9 items-center justify-center rounded-full backdrop-blur-sm transition-colors ${
              compared ? "bg-gold-400 text-obsidian-500" : "bg-obsidian-500/60 text-ivory hover:text-gold-400"
            }`}
          >
            <Scale className="h-4 w-4" />
          </button>
        </div>

        <button
          onClick={() => onQuickView(product)}
          className="absolute bottom-3 left-1/2 inline-flex -translate-x-1/2 translate-y-2 items-center gap-2 rounded-full bg-obsidian-500/80 px-4 py-2 text-xs text-ivory opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
        >
          <Eye className="h-3.5 w-3.5" />
          نمای سریع
        </button>

        <span className="absolute right-3 bottom-3 rounded-full bg-obsidian-500/70 px-3 py-1 text-xs text-gold-400 backdrop-blur-sm">
          {toPersianDigits(product.weightGrams)} گرم
        </span>
      </div>

      <div className="p-5">
        <p className="text-xs text-gold-400">{purityLabel(product.purity)}</p>
        <h3 className="mt-1.5 font-display text-base text-ivory">{product.name}</h3>
        <p className="mt-2 line-clamp-2 text-xs leading-6 text-bone">{product.description}</p>
        <p className="mt-3 text-sm text-muted">
          قیمت تقریبی: <span className="font-display text-gradient-gold">{toPersianDigits(price)} تومان</span>
        </p>
        <PurchaseButton productName={product.name} className="mt-4 w-full" />
      </div>
    </motion.div>
  );
}
