export const siteConfig = {
  name: "زرین اطلس",
  nameEn: "Zarrin Atlas",
  tagline: "میراث طلا، برای نسل‌های آینده",
  description:
    "زرین اطلس؛ خانه‌ی زیورآلات طلای لوکس، ساخته‌شده با دقت استادکاران ایرانی و طراحی الهام‌گرفته از هنر کهن پارسی. هر قطعه، روایتی است که برای نسل‌ها باقی می‌ماند.",
  url: "https://zarrinatlas.com",
  ogImage: "/images/og-cover.jpg",
  locale: "fa_IR",
  themeColor: "#0a0906",
  contact: {
    phone: "۰۲۱-۸۸۷۷۶۶۵۵",
    phoneHref: "+982188776655",
    whatsapp: "https://wa.me/982188776655",
    instagram: "https://instagram.com/zarrinatlas",
    telegram: "https://t.me/zarrinatlas",
    address: "تهران، خیابان ولیعصر، بالاتر از میدان ونک، پاساژ الماس، طبقه دوم، واحد ۱۲",
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.0!2d51.4!3d35.75!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzXCsDQ1JzAwLjAiTiA1McKwMjQnMDAuMCJF!5e0!3m2!1sen!2s!4v1700000000000",
  },
  nav: [
    { label: "خانه", href: "/" },
    { label: "فروشگاه", href: "/shop" },
    { label: "درباره ما", href: "/about" },
    { label: "دسته‌بندی‌ها", href: "/categories" },
    { label: "نقره، فیروزه و مروارید", href: "/materials" },
    { label: "قیمت طلا و ماشین‌حساب", href: "/gold-price" },
    { label: "آموزش طلاسازی", href: "/courses" },
    { label: "ابزار طلاسازی", href: "/tools" },
    { label: "مقالات و اخبار بازار", href: "/articles" },
    { label: "تماس با ما", href: "/contact" },
  ],
};

export type SiteConfig = typeof siteConfig;
