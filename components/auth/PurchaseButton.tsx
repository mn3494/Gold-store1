"use client";

import { useRouter } from "next/navigation";
import { ShoppingBag, Lock } from "lucide-react";
import { useAuth } from "./AuthContext";

interface PurchaseButtonProps {
  productName?: string;
  className?: string;
}

export default function PurchaseButton({ productName, className = "" }: PurchaseButtonProps) {
  const { user, loading } = useAuth();
  const router = useRouter();

  const handleClick = () => {
    if (!user) {
      router.push(`/auth/login?redirect=1${productName ? `&item=${encodeURIComponent(productName)}` : ""}`);
      return;
    }
    router.push("/auth/login?success=1");
  };

  if (loading) return null;

  return (
    <button
      onClick={handleClick}
      className={`inline-flex items-center justify-center gap-2 rounded-full bg-gold-gradient bg-[length:200%_100%] px-6 py-3 font-body text-sm font-semibold text-obsidian-500 shadow-gold transition-all duration-500 hover:bg-right hover:shadow-gold-lg ${className}`}
    >
      {user ? (
        <>
          <ShoppingBag className="h-4 w-4" />
          استعلام و ثبت سفارش
        </>
      ) : (
        <>
          <Lock className="h-4 w-4" />
          برای خرید وارد شوید
        </>
      )}
    </button>
  );
}
