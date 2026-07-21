import { Vazirmatn, Noto_Naskh_Arabic } from "next/font/google";

// Body / UI typeface — clean, modern, excellent Persian + Latin support
export const sansFa = Vazirmatn({
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-sans-fa",
  display: "swap",
});

// Display typeface — elegant calligraphic touch for headlines, used with restraint
export const serifFa = Noto_Naskh_Arabic({
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-serif-fa",
  display: "swap",
});
