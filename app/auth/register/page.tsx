"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { Gem, User, Phone } from "lucide-react";
import { useAuth } from "@/components/auth/AuthContext";

export default function RegisterPage() {
  const { login } = useAuth();
  const router = useRouter();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim().length < 2) {
      setError("نام و نام‌خانوادگی را وارد کنید.");
      return;
    }
    const digitsOnly = phone.replace(/[^۰-۹0-9]/g, "");
    if (digitsOnly.length < 10) {
      setError("شماره موبایل را کامل و صحیح وارد کنید.");
      return;
    }
    login(phone, name);
    router.push("/");
  };

  return (
    <div className="relative flex min-h-screen items-center justify-center bg-obsidian-500 px-6 py-20">
      <div className="absolute inset-0 bg-radial-fade" aria-hidden="true" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="glass-panel relative w-full max-w-md rounded-2xl p-8 sm:p-10"
      >
        <Link href="/" className="inline-flex items-center gap-2 font-display text-lg text-ivory">
          <Gem className="h-5 w-5 text-gold-400" />
          زرین اطلس
        </Link>

        <h1 className="mt-8 font-display text-2xl text-ivory">ساخت حساب کاربری</h1>
        <p className="mt-2 text-sm text-muted">
          عضویت رایگان است و فقط چند ثانیه طول می‌کشد.
        </p>

        <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-4">
          <div className="relative">
            <User className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
            <input
              type="text"
              placeholder="نام و نام‌خانوادگی"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-xl border border-gold-600/20 bg-obsidian-500/60 py-3.5 pe-11 ps-4 text-ivory placeholder:text-muted focus:border-gold-400 focus:outline-none"
            />
          </div>
          <div className="relative">
            <Phone className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
            <input
              type="tel"
              inputMode="numeric"
              dir="ltr"
              placeholder="09xxxxxxxxx"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full rounded-xl border border-gold-600/20 bg-obsidian-500/60 py-3.5 pe-11 ps-4 text-left text-ivory placeholder:text-muted focus:border-gold-400 focus:outline-none"
            />
          </div>
          {error && <p className="text-xs text-red-400">{error}</p>}
          <button type="submit" className="btn-gold justify-center">
            ثبت‌نام و ورود
          </button>
        </form>

        <p className="mt-6 text-center text-xs text-muted">
          قبلاً ثبت‌نام کرده‌اید؟{" "}
          <Link href="/auth/login" className="text-gold-400 hover:underline">
            وارد شوید
          </Link>
        </p>
      </motion.div>
    </div>
  );
}
