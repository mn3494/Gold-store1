"use client";

import { Suspense, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { Gem, Phone, ArrowLeft } from "lucide-react";
import { useAuth } from "@/components/auth/AuthContext";

function LoginForm() {
  const { login, user } = useAuth();
  const router = useRouter();
  const params = useSearchParams();
  const [phone, setPhone] = useState("");
  const [step, setStep] = useState<"phone" | "code">("phone");
  const [code, setCode] = useState("");
  const [error, setError] = useState("");

  const redirect = params.get("redirect");
  const item = params.get("item");
  const alreadyBought = params.get("success");

  const handleSendCode = (e: React.FormEvent) => {
    e.preventDefault();
    const digitsOnly = phone.replace(/[^۰-۹0-9]/g, "");
    if (digitsOnly.length < 10) {
      setError("شماره موبایل را کامل و صحیح وارد کنید.");
      return;
    }
    setError("");
    setStep("code");
  };

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    if (code.length < 4) {
      setError("کد تأیید را کامل وارد کنید.");
      return;
    }
    login(phone);
    if (redirect) {
      router.push(item ? `/auth/login?success=1&item=${item}` : "/auth/login?success=1");
    } else {
      router.push("/");
    }
  };

  if (user && alreadyBought) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-obsidian-500 px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="glass-panel w-full max-w-md rounded-2xl p-10 text-center"
        >
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gold-400/10">
            <Gem className="h-7 w-7 text-gold-400" />
          </div>
          <h1 className="mt-6 font-display text-2xl text-ivory">
            درخواست شما ثبت شد
          </h1>
          <p className="mt-3 text-sm leading-7 text-bone">
            {item ? `درخواست استعلام برای «${item}» ثبت شد. ` : ""}
            کارشناسان ما به‌زودی برای هماهنگی نهایی با شما تماس می‌گیرند.
          </p>
          <Link href="/" className="btn-outline-gold mt-8 inline-flex">
            بازگشت به صفحه اصلی
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-obsidian-500 px-6 py-20">
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

        <h1 className="mt-8 font-display text-2xl text-ivory">
          {step === "phone" ? "ورود یا ثبت‌نام" : "کد تأیید"}
        </h1>
        <p className="mt-2 text-sm text-muted">
          {step === "phone"
            ? "برای مشاهده قیمت‌ها، ثبت سفارش و استفاده از امکانات اختصاصی، شماره موبایل خود را وارد کنید."
            : `کد ۴ رقمی ارسال‌شده به ${phone} را وارد کنید.`}
        </p>

        {step === "phone" ? (
          <form onSubmit={handleSendCode} className="mt-8 flex flex-col gap-4">
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
              دریافت کد تأیید
            </button>
          </form>
        ) : (
          <form onSubmit={handleVerify} className="mt-8 flex flex-col gap-4">
            <input
              type="text"
              inputMode="numeric"
              dir="ltr"
              placeholder="- - - -"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              maxLength={4}
              className="w-full rounded-xl border border-gold-600/20 bg-obsidian-500/60 py-3.5 px-4 text-center text-2xl tracking-[0.5em] text-ivory placeholder:text-muted focus:border-gold-400 focus:outline-none"
            />
            {error && <p className="text-xs text-red-400">{error}</p>}
            <button type="submit" className="btn-gold justify-center">
              تأیید و ورود
            </button>
            <button
              type="button"
              onClick={() => setStep("phone")}
              className="inline-flex items-center justify-center gap-2 text-xs text-muted transition-colors hover:text-gold-400"
            >
              <ArrowLeft className="h-3 w-3" />
              ویرایش شماره موبایل
            </button>
          </form>
        )}
      </motion.div>
    </div>
  );
}

export default function LoginPage() {
  return (
    <Suspense fallback={null}>
      <LoginForm />
    </Suspense>
  );
}
