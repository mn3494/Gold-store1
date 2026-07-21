# زرین اطلس | Zarrin Atlas — Luxury Iranian Gold Jewelry

سایت لوکس زیورآلات طلای ایرانی، ساخته‌شده با Next.js (App Router), TypeScript, Tailwind CSS و Framer Motion.

## اجرا روی سیستم شما

```bash
npm install
npm run dev
```

سپس در مرورگر آدرس `http://localhost:3000` را باز کنید.

## بیلد نهایی (production)

```bash
npm run build
npm run start
```

## استقرار روی Vercel

1. این پوشه را در یک ریپازیتوری گیت (GitHub/GitLab) قرار دهید.
2. در [vercel.com](https://vercel.com) پروژه جدید بسازید و ریپازیتوری را وصل کنید.
3. Vercel به‌صورت خودکار فریم‌ورک Next.js را تشخیص می‌دهد؛ نیازی به تنظیم خاصی نیست.
4. بعد از دیپلوی، آدرس واقعی دامنه را در `lib/site-config.ts` (فیلد `url`) جایگزین کنید تا SEO/OpenGraph درست کار کند.

## جایگزینی تصاویر

تمام تصاویر فعلی از Unsplash به‌عنوان placeholder با کیفیت بالا استفاده شده‌اند. برای جایگزینی با عکس‌های واقعی محصولات:

- فایل `lib/data.ts` — فیلدهای `image` در `categories` و `featuredProducts`
- `components/sections/Hero.tsx` — تصویر پس‌زمینه هیرو
- `components/sections/About.tsx` — تصویر بخش درباره ما

می‌توانید مسیر آدرس تصویر را به فایل داخل `/public/images` یا لینک CDN خودتان تغییر دهید.

## ساختار پروژه

```
app/                  مسیرهای Next.js App Router (layout, page, sitemap, robots)
components/           کامپوننت‌های قابل استفاده مجدد
  sections/           سکشن‌های اصلی صفحه (Hero, About, ...)
lib/                  تنظیمات سایت، دیتای محصولات، فونت‌ها، انیمیشن‌ها
types/                تایپ‌های TypeScript
public/images/        تصاویر استاتیک (در صورت جایگزینی placeholder ها)
```

## اطلاعات تماس

برای ویرایش شماره تلفن، واتساپ، تلگرام، اینستاگرام و آدرس، فقط کافیست فایل `lib/site-config.ts` را ویرایش کنید — همه‌ی این مقادیر در سراسر سایت (فوتر، بخش تماس، JSON-LD) از همین یک فایل خوانده می‌شوند.
