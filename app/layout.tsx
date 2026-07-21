import type { Metadata, Viewport } from "next";
import { sansFa, serifFa } from "@/lib/fonts";
import { siteConfig } from "@/lib/site-config";
import { AuthProvider } from "@/components/auth/AuthContext";
import { ShopStoreProvider } from "@/components/shop/ShopStoreContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "طلافروشی لوکس",
    "زیورآلات طلا",
    "طلا و جواهر ایرانی",
    "انگشتر طلا",
    "گردنبند طلا",
    "دستبند طلا",
    "سکه طلا",
    "ست عروس طلا",
    "زرین اطلس",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteConfig.url,
    languages: {
      "fa-IR": siteConfig.url,
    },
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} | ${siteConfig.tagline}`,
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | ${siteConfig.tagline}`,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: siteConfig.themeColor,
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "JewelryStore",
  name: siteConfig.name,
  description: siteConfig.description,
  url: siteConfig.url,
  telephone: siteConfig.contact.phoneHref,
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.contact.address,
    addressLocality: "تهران",
    addressCountry: "IR",
  },
  priceRange: "$$$",
  image: `${siteConfig.url}${siteConfig.ogImage}`,
  sameAs: [siteConfig.contact.instagram, siteConfig.contact.telegram],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl" className={`${sansFa.variable} ${serifFa.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-body bg-obsidian-500 text-ivory antialiased">
        <AuthProvider>
          <ShopStoreProvider>
            <Navbar />
            {children}
            <Footer />
          </ShopStoreProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
