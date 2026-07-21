import Link from "next/link";
import { Gem, MessageCircle, Instagram, Send, ShieldCheck, Lock, CreditCard } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

const legalLinks = [
  { label: "ضمانت اصالت", href: "/warranty" },
  { label: "شرایط بازگشت کالا", href: "/returns" },
  { label: "شرایط ارسال", href: "/shipping" },
  { label: "حریم خصوصی", href: "/privacy" },
  { label: "قوانین و مقررات", href: "/terms" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-gold-600/15 bg-obsidian-500">
      <div className="mx-auto max-w-content px-6 py-16 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="flex items-center gap-2 font-display text-xl text-ivory">
              <Gem className="h-5 w-5 text-gold-400" strokeWidth={1.5} />
              <span>{siteConfig.name}</span>
            </Link>
            <p className="mt-4 text-sm leading-7 text-muted">
              میراث زرگری ایرانی، بازآفرینی‌شده برای امروز.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href={siteConfig.contact.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="واتساپ"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gold-600/25 text-gold-400 transition-colors hover:border-gold-400"
              >
                <MessageCircle className="h-4 w-4" />
              </a>
              <a
                href={siteConfig.contact.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="اینستاگرام"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gold-600/25 text-gold-400 transition-colors hover:border-gold-400"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href={siteConfig.contact.telegram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="تلگرام"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gold-600/25 text-gold-400 transition-colors hover:border-gold-400"
              >
                <Send className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-display text-base text-ivory">دسترسی سریع</h3>
            <ul className="mt-5 flex flex-col gap-3">
              {siteConfig.nav.slice(0, 5).map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-muted transition-colors hover:text-gold-400">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-base text-ivory">اسناد و ضمانت‌ها</h3>
            <ul className="mt-5 flex flex-col gap-3">
              {legalLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-muted transition-colors hover:text-gold-400">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-base text-ivory">ارتباط با ما</h3>
            <p className="mt-5 text-sm text-muted" dir="ltr">
              {siteConfig.contact.phone}
            </p>
            <p className="mt-3 text-sm leading-7 text-muted">
              {siteConfig.contact.address}
            </p>
          </div>
        </div>

        <div className="gold-thread mt-14" />

        <div className="mt-8 flex flex-col-reverse items-center justify-between gap-6 sm:flex-row">
          <p className="text-xs text-muted">
            © {new Date().getFullYear()} {siteConfig.name}. تمامی حقوق محفوظ است.
          </p>
          <div className="flex items-center gap-5 text-muted">
            <span className="inline-flex items-center gap-1.5 text-xs">
              <ShieldCheck className="h-4 w-4 text-gold-400" />
              اصالت تضمینی
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs">
              <Lock className="h-4 w-4 text-gold-400" />
              پرداخت امن
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs">
              <CreditCard className="h-4 w-4 text-gold-400" />
              درگاه شاپرک
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
