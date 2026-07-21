"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";

interface ShopStoreContextType {
  wishlist: string[];
  compareList: string[];
  recentlyViewed: string[];
  toggleWishlist: (id: string) => void;
  toggleCompare: (id: string) => boolean; // returns false if compare list is full
  clearCompare: () => void;
  addRecentlyViewed: (id: string) => void;
  isWishlisted: (id: string) => boolean;
  isCompared: (id: string) => boolean;
}

const ShopStoreContext = createContext<ShopStoreContextType | undefined>(undefined);

const WISHLIST_KEY = "zarrin-atlas-wishlist";
const COMPARE_KEY = "zarrin-atlas-compare";
const RECENT_KEY = "zarrin-atlas-recent";
const MAX_COMPARE = 3;
const MAX_RECENT = 8;

function readList(key: string): string[] {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function ShopStoreProvider({ children }: { children: ReactNode }) {
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [compareList, setCompareList] = useState<string[]>([]);
  const [recentlyViewed, setRecentlyViewed] = useState<string[]>([]);

  useEffect(() => {
    setWishlist(readList(WISHLIST_KEY));
    setCompareList(readList(COMPARE_KEY));
    setRecentlyViewed(readList(RECENT_KEY));
  }, []);

  const persist = (key: string, value: string[]) => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch {
      // ignore storage errors
    }
  };

  const toggleWishlist = (id: string) => {
    setWishlist((prev) => {
      const next = prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id];
      persist(WISHLIST_KEY, next);
      return next;
    });
  };

  const toggleCompare = (id: string): boolean => {
    let didAdd = true;
    setCompareList((prev) => {
      if (prev.includes(id)) {
        const next = prev.filter((x) => x !== id);
        persist(COMPARE_KEY, next);
        return next;
      }
      if (prev.length >= MAX_COMPARE) {
        didAdd = false;
        return prev;
      }
      const next = [...prev, id];
      persist(COMPARE_KEY, next);
      return next;
    });
    return didAdd;
  };

  const clearCompare = () => {
    setCompareList([]);
    persist(COMPARE_KEY, []);
  };

  const addRecentlyViewed = (id: string) => {
    setRecentlyViewed((prev) => {
      const next = [id, ...prev.filter((x) => x !== id)].slice(0, MAX_RECENT);
      persist(RECENT_KEY, next);
      return next;
    });
  };

  return (
    <ShopStoreContext.Provider
      value={{
        wishlist,
        compareList,
        recentlyViewed,
        toggleWishlist,
        toggleCompare,
        clearCompare,
        addRecentlyViewed,
        isWishlisted: (id) => wishlist.includes(id),
        isCompared: (id) => compareList.includes(id),
      }}
    >
      {children}
    </ShopStoreContext.Provider>
  );
}

export function useShopStore() {
  const ctx = useContext(ShopStoreContext);
  if (!ctx) throw new Error("useShopStore must be used within ShopStoreProvider");
  return ctx;
}

export const MAX_COMPARE_ITEMS = MAX_COMPARE;
