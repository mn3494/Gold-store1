import {
  ProductCategory,
  FeaturedProduct,
  Testimonial,
  FaqItem,
  MaterialProduct,
  Course,
  ToolProduct,
  Article,
} from "@/types";

export const categories: ProductCategory[] = [
  {
    id: "rings",
    title: "انگشتر",
    description: "تلفیق ظرافت و اقتدار در هر قطعه",
    image:
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=1200&auto=format&fit=crop",
    count: "۴۸ طرح",
  },
  {
    id: "necklaces",
    title: "گردنبند",
    description: "روایتی طلایی بر گردی گردن",
    image:
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=1200&auto=format&fit=crop",
    count: "۳۶ طرح",
  },
  {
    id: "bracelets",
    title: "دستبند",
    description: "زنجیره‌ای از سلیقه و اصالت",
    image:
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=1200&auto=format&fit=crop",
    count: "۲۹ طرح",
  },
  {
    id: "earrings",
    title: "گوشواره",
    description: "درخششی که چهره را کامل می‌کند",
    image:
      "https://images.unsplash.com/photo-1633810542706-3af4a1f8c58e?q=80&w=1200&auto=format&fit=crop",
    count: "۴۲ طرح",
  },
  {
    id: "coins",
    title: "سکه طلا",
    description: "سرمایه‌ای ماندگار، سنتی جاودان",
    image:
      "https://images.unsplash.com/photo-1610375461369-d613b564f4c4?q=80&w=1200&auto=format&fit=crop",
    count: "۱۸ نوع",
  },
  {
    id: "wedding",
    title: "ست عروس",
    description: "برای روزی که تکرار نمی‌شود",
    image:
      "https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?q=80&w=1200&auto=format&fit=crop",
    count: "۲۲ ست",
  },
];

export const featuredProducts: FeaturedProduct[] = [
  {
    id: "p1",
    name: "انگشتر آفتاب پارسی",
    category: "انگشتر طلای ۱۸ عیار",
    weight: "۴.۲ گرم",
    description:
      "الهام‌گرفته از نقش‌برجسته‌های تخت جمشید، با تراش خورشیدی مرکزی و حاشیه‌ای از نگین‌های ریز دست‌چین.",
    image:
      "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "p2",
    name: "گردنبند بانوی شیراز",
    category: "گردنبند طلای ۱۸ عیار",
    weight: "۹.۸ گرم",
    description:
      "زنجیری ظریف با آویزی به شکل گل نیلوفر، ساخته‌شده با تکنیک ریخته‌گری دستی استادکاران اصفهانی.",
    image:
      "https://images.unsplash.com/photo-1611085583191-a3b181a88401?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "p3",
    name: "دستبند رود سیمین",
    category: "دستبند طلای ۱۸ عیار",
    weight: "۷.۵ گرم",
    description:
      "طراحی موج‌گونه که جریان آب را در طلا به تصویر می‌کشد؛ نرم، سیال و بی‌وزن روی مچ.",
    image:
      "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "p4",
    name: "گوشواره ستاره شرق",
    category: "گوشواره طلای ۱۸ عیار",
    weight: "۳.۱ گرم",
    description:
      "آویزهایی سبک با طرح شش‌پر، برگرفته از کاشی‌کاری‌های مسجد شیخ‌لطف‌الله.",
    image:
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "p5",
    name: "سکه طلای اطلس",
    category: "سکه طلای ۲۴ عیار",
    weight: "۸.۱۳۶ گرم",
    description:
      "ضرب‌شده با استانداردهای بین‌المللی؛ انتخابی مطمئن برای حفظ ارزش و هدیه‌ای ماندگار.",
    image:
      "https://images.unsplash.com/photo-1610375461369-d613b564f4c4?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "p6",
    name: "ست عروس مرمر سفید",
    category: "ست کامل طلای ۱۸ عیار",
    weight: "۲۶.۴ گرم",
    description:
      "شامل گردنبند، دستبند، گوشواره و انگشتر؛ هماهنگ در طرح، برای شبی که برای همیشه به یاد می‌ماند.",
    image:
      "https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?q=80&w=1200&auto=format&fit=crop",
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "نگار احمدی",
    city: "تهران",
    quote:
      "کیفیت کار و ظرافت طرح‌ها واقعاً در سطح برندهای جهانی بود. انگشتری که سفارش دادم دقیقاً همون چیزی بود که توی ذهنم داشتم.",
    rating: 5,
  },
  {
    id: "t2",
    name: "علی رستمی",
    city: "اصفهان",
    quote:
      "ست عروس همسرم رو از زرین اطلس گرفتیم. از لحظه‌ی سفارش تا تحویل، همه چیز حرفه‌ای و محترمانه بود.",
    rating: 5,
  },
  {
    id: "t3",
    name: "مریم کریمی",
    city: "شیراز",
    quote:
      "گردنبندی که خریدم بعد از یک سال هنوز مثل روز اول می‌درخشه. اصالت طلا و دقت ساخت کاملاً مشهوده.",
    rating: 5,
  },
  {
    id: "t4",
    name: "حسین طاهری",
    city: "مشهد",
    quote:
      "برای سرمایه‌گذاری سکه خریدم، هم قیمت منصفانه بود هم اعتماد کامل به اصالت کالا. حتماً باز هم خرید می‌کنم.",
    rating: 5,
  },
];

export const faqItems: FaqItem[] = [
  {
    id: "f1",
    question: "آیا عیار طلای محصولات شما تضمین می‌شود؟",
    answer:
      "بله، تمامی محصولات زرین اطلس دارای مهر عیارسنجی رسمی و گواهی اصالت هستند. هر قطعه پیش از تحویل توسط کارشناسان مستقل آزمایش می‌شود.",
  },
  {
    id: "f2",
    question: "امکان سفارش طرح اختصاصی وجود دارد؟",
    answer:
      "بله، تیم طراحی ما آماده‌ی همکاری برای ساخت طرح‌های سفارشی بر اساس سلیقه و درخواست شماست. کافیست از طریق واتساپ یا تلگرام با ما در ارتباط باشید.",
  },
  {
    id: "f3",
    question: "آیا امکان تعویض یا بازخرید محصولات هست؟",
    answer:
      "تمامی محصولات مطابق با نرخ روز طلا قابل بازخرید یا تعویض هستند. شرایط دقیق در زمان خرید و بر اساس فاکتور رسمی توضیح داده می‌شود.",
  },
  {
    id: "f4",
    question: "ارسال به شهرستان‌ها چگونه انجام می‌شود؟",
    answer:
      "ارسال به سراسر کشور از طریق پست پیشتاز بیمه‌شده انجام می‌شود و بسته‌بندی محصولات کاملاً ایمن و بدون درز است.",
  },
  {
    id: "f5",
    question: "آیا می‌توان قبل از خرید محصول را از نزدیک دید؟",
    answer:
      "بله، مشتریان عزیز می‌توانند با هماهنگی قبلی از نمایشگاه ما در تهران بازدید کرده و محصولات را از نزدیک مشاهده کنند.",
  },
];

export const materialProducts: MaterialProduct[] = [
  {
    id: "m1",
    name: "دستبند نقره طرح بافت",
    material: "نقره عیار ۹۲۵",
    weight: "۱۸ گرم",
    description: "بافتی ظریف و مردانه، مناسب استفاده روزمره بدون نگرانی از تیرگی زودرس.",
    image:
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "m2",
    name: "انگشتر فیروزه نیشابوری",
    material: "نقره و فیروزه اصل",
    weight: "۹ گرم",
    description: "فیروزه‌ای با رگه‌های طبیعی، دست‌چین‌شده از معادن نیشابور.",
    image:
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "m3",
    name: "گردنبند مروارید غلتان",
    material: "مروارید طبیعی و نقره",
    weight: "۲۲ گرم",
    description: "رشته‌ای از مرواریدهای هم‌اندازه، مناسب مجالس رسمی و عروسی.",
    image:
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "m4",
    name: "گوشواره نقره و فیروزه",
    material: "نقره عیار ۹۲۵",
    weight: "۶ گرم",
    description: "طرحی سبک و آویزان، برای استفاده در طول روز بدون خستگی گوش.",
    image:
      "https://images.unsplash.com/photo-1633810542706-3af4a1f8c58e?q=80&w=1200&auto=format&fit=crop",
  },
];

export const courses: Course[] = [
  {
    id: "c1",
    title: "دوره جامع طلاسازی و ساخت زیورآلات",
    level: "مقدماتی تا پیشرفته",
    duration: "۶ ماه، حضوری",
    description:
      "از شناخت ابزار و آلیاژها تا ساخت انگشتر و گردنبند با دست؛ همراه با کارآموزی عملی در کارگاه.",
    image:
      "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "c2",
    title: "دوره تخصصی سنگ‌نشانی و جواهرسازی",
    level: "پیشرفته",
    duration: "۳ ماه، حضوری",
    description:
      "تکنیک‌های نشاندن نگین، تراش سنگ‌های قیمتی و اصول طراحی جواهرات سنگین.",
    image:
      "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "c3",
    title: "دوره کسب‌وکار طلافروشی و مدیریت ویترین",
    level: "مقدماتی",
    duration: "۶ هفته، آنلاین و حضوری",
    description:
      "اصول قیمت‌گذاری، خرید و فروش، مدیریت موجودی و راه‌اندازی یک طلافروشی سودآور.",
    image:
      "https://images.unsplash.com/photo-1611085583191-a3b181a88401?q=80&w=1200&auto=format&fit=crop",
  },
];

export const toolProducts: ToolProduct[] = [
  {
    id: "tl1",
    name: "دستگاه نقطه‌جوش طلا",
    description: "مناسب اتصال دقیق قطعات ظریف بدون آسیب به ساختار فلز.",
    image:
      "https://images.unsplash.com/photo-1581092160607-ee22731c9c8c?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "tl2",
    name: "ست کامل سوهان و قلم طلاسازی",
    description: "شامل ۲۴ ابزار دست‌ساز برای فرم‌دهی و پرداخت نهایی.",
    image:
      "https://images.unsplash.com/photo-1520333789090-1afc82db536a?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "tl3",
    name: "ترازوی دیجیتال طلا (دقت ۰.۰۱ گرم)",
    description: "برای وزن‌کشی دقیق طلا و سنگ‌های قیمتی در کارگاه.",
    image:
      "https://images.unsplash.com/photo-1518544866330-4d55f0f9f2fa?q=80&w=1200&auto=format&fit=crop",
  },
];

export const articles: Article[] = [
  {
    id: "a1",
    title: "چرا نرخ طلا در هفته‌های اخیر نوسان بیشتری داشته؟",
    category: "اخبار بازار",
    date: "۱۴۰۴/۰۴/۲۸",
    excerpt:
      "بررسی رابطه‌ی نرخ دلار، انس جهانی و تقاضای داخلی در نوسانات اخیر بازار طلای ایران.",
    image:
      "https://images.unsplash.com/photo-1610375461369-d613b564f4c4?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "a2",
    title: "راهنمای خرید طلا برای مراسم عروسی؛ از عیار تا اجرت",
    category: "راهنمای خرید",
    date: "۱۴۰۴/۰۴/۲۰",
    excerpt: "نکاتی که پیش از خرید ست عروس باید بدانید تا خریدی مطمئن و بی‌دردسر داشته باشید.",
    image:
      "https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "a3",
    title: "تفاوت طلای ۱۸ عیار و ۲۴ عیار در چیست؟",
    category: "آموزشی",
    date: "۱۴۰۴/۰۴/۱۰",
    excerpt: "توضیحی ساده درباره‌ی عیار طلا، دوام آن در استفاده روزمره و کاربردهای هرکدام.",
    image:
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "a4",
    title: "نوسانات بازار جهانی طلا و تأثیر آن بر اقتصاد ایران",
    category: "اخبار اقتصادی",
    date: "۱۴۰۴/۰۳/۳۰",
    excerpt: "نگاهی به سیاست‌های بانک‌های مرکزی بزرگ دنیا و تأثیر آن بر قیمت طلا در ایران.",
    image:
      "https://images.unsplash.com/photo-1611085583191-a3b181a88401?q=80&w=1200&auto=format&fit=crop",
  },
];

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: "team1",
    name: "استاد رضا صادقی",
    role: "بنیان‌گذار و استادکار ارشد",
    bio: "بیش از ۲۸ سال تجربه در طراحی و ساخت زیورآلات؛ آموزش‌دیده در کارگاه‌های سنتی اصفهان.",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "team2",
    name: "مهسا رستمی",
    role: "سرپرست طراحی",
    bio: "فارغ‌التحصیل طراحی جواهر، مسئول ترکیب هنر سنتی ایرانی با خطوط مدرن در طرح‌های جدید.",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "team3",
    name: "امیر حسینی",
    role: "کارشناس فروش و مشاوره",
    bio: "همراه مشتریان از لحظه‌ی انتخاب طرح تا تحویل نهایی؛ پاسخگوی سوالات شما در واتساپ و تلگرام.",
    image:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=800&auto=format&fit=crop",
  },
];

export interface ShopProduct {
  id: string;
  name: string;
  category: string;
  purity: "18" | "24" | "925";
  weightGrams: number;
  image: string;
  description: string;
}

export const shopProducts: ShopProduct[] = [
  {
    id: "sp1",
    name: "انگشتر آفتاب پارسی",
    category: "انگشتر",
    purity: "18",
    weightGrams: 4.2,
    image:
      "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?q=80&w=1200&auto=format&fit=crop",
    description:
      "الهام‌گرفته از نقش‌برجسته‌های تخت جمشید، با تراش خورشیدی مرکزی و حاشیه‌ای از نگین‌های ریز دست‌چین.",
  },
  {
    id: "sp2",
    name: "گردنبند بانوی شیراز",
    category: "گردنبند",
    purity: "18",
    weightGrams: 9.8,
    image:
      "https://images.unsplash.com/photo-1611085583191-a3b181a88401?q=80&w=1200&auto=format&fit=crop",
    description:
      "زنجیری ظریف با آویزی به شکل گل نیلوفر، ساخته‌شده با تکنیک ریخته‌گری دستی استادکاران اصفهانی.",
  },
  {
    id: "sp3",
    name: "دستبند رود سیمین",
    category: "دستبند",
    purity: "18",
    weightGrams: 7.5,
    image:
      "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?q=80&w=1200&auto=format&fit=crop",
    description: "طراحی موج‌گونه که جریان آب را در طلا به تصویر می‌کشد؛ نرم، سیال و بی‌وزن روی مچ.",
  },
  {
    id: "sp4",
    name: "گوشواره ستاره شرق",
    category: "گوشواره",
    purity: "18",
    weightGrams: 3.1,
    image:
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=1200&auto=format&fit=crop",
    description: "آویزهایی سبک با طرح شش‌پر، برگرفته از کاشی‌کاری‌های مسجد شیخ‌لطف‌الله.",
  },
  {
    id: "sp5",
    name: "سکه طلای اطلس",
    category: "سکه طلا",
    purity: "24",
    weightGrams: 8.136,
    image:
      "https://images.unsplash.com/photo-1610375461369-d613b564f4c4?q=80&w=1200&auto=format&fit=crop",
    description: "ضرب‌شده با استانداردهای بین‌المللی؛ انتخابی مطمئن برای حفظ ارزش و هدیه‌ای ماندگار.",
  },
  {
    id: "sp6",
    name: "ست عروس مرمر سفید",
    category: "ست عروس",
    purity: "18",
    weightGrams: 26.4,
    image:
      "https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?q=80&w=1200&auto=format&fit=crop",
    description: "شامل گردنبند، دستبند، گوشواره و انگشتر؛ هماهنگ در طرح، برای شبی که برای همیشه به یاد می‌ماند.",
  },
  {
    id: "sp7",
    name: "دستبند نقره طرح بافت",
    category: "دستبند",
    purity: "925",
    weightGrams: 18,
    image:
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=1200&auto=format&fit=crop",
    description: "بافتی ظریف و مردانه، مناسب استفاده روزمره بدون نگرانی از تیرگی زودرس.",
  },
  {
    id: "sp8",
    name: "انگشتر فیروزه نیشابوری",
    category: "انگشتر",
    purity: "925",
    weightGrams: 9,
    image:
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=1200&auto=format&fit=crop",
    description: "فیروزه‌ای با رگه‌های طبیعی، دست‌چین‌شده از معادن نیشابور.",
  },
  {
    id: "sp9",
    name: "گردنبند مروارید غلتان",
    category: "گردنبند",
    purity: "925",
    weightGrams: 22,
    image:
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=1200&auto=format&fit=crop",
    description: "رشته‌ای از مرواریدهای هم‌اندازه، مناسب مجالس رسمی و عروسی.",
  },
  {
    id: "sp10",
    name: "گوشواره نقره و فیروزه",
    category: "گوشواره",
    purity: "925",
    weightGrams: 6,
    image:
      "https://images.unsplash.com/photo-1633810542706-3af4a1f8c58e?q=80&w=1200&auto=format&fit=crop",
    description: "طرحی سبک و آویزان، برای استفاده در طول روز بدون خستگی گوش.",
  },
  {
    id: "sp11",
    name: "انگشتر ساده مینیمال",
    category: "انگشتر",
    purity: "18",
    weightGrams: 2.4,
    image:
      "https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?q=80&w=1200&auto=format&fit=crop",
    description: "یک حلقه‌ی ساده و باریک برای استفاده‌ی روزمره یا ست کردن با انگشترهای دیگر.",
  },
  {
    id: "sp12",
    name: "دستبند تنیس نگین‌دار",
    category: "دستبند",
    purity: "18",
    weightGrams: 11.2,
    image:
      "https://images.unsplash.com/photo-1611085583191-a3b181a88401?q=80&w=1200&auto=format&fit=crop",
    description: "ردیفی از نگین‌های هم‌اندازه که در نور، مثل یک رشته الماس ظریف می‌درخشد.",
  },
];
