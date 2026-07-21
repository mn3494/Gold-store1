"use client";

import { motion } from "framer-motion";
import { Phone, MapPin, MessageCircle, Instagram, Send } from "lucide-react";
import SectionHeading from "../SectionHeading";
import { siteConfig } from "@/lib/site-config";
import { fadeUp, viewportOnce } from "@/lib/motion";

const contactLinks = [
  {
    icon: Phone,
    label: "تماس تلفنی",
    value: siteConfig.contact.phone,
    href: `tel:${siteConfig.contact.phoneHref}`,
  },
  {
    icon: MessageCircle,
    label: "واتساپ",
    value: "ارسال پیام مستقیم",
    href: siteConfig.contact.whatsapp,
  },
  {
    icon: Send,
    label: "تلگرام",
    value: "عضویت در کانال",
    href: siteConfig.contact.telegram,
  },
  {
    icon: Instagram,
    label: "اینستاگرام",
    value: "مشاهده گالری آثار",
    href: siteConfig.contact.instagram,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="section-padding bg-charcoal">
      <div className="mx-auto max-w-content">
        <SectionHeading
          eyebrow="در ارتباط باشید"
          title="تماس با ما"
          description="تیم ما آماده‌ی پاسخ‌گویی و مشاوره‌ی رایگان برای انتخاب بهترین قطعه است."
        />

        <div className="mt-16 grid grid-cols-1 gap-10 lg:grid-cols-5">
          <motion.div
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-1"
          >
            {contactLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                variants={fadeUp}
                whileHover={{ x: -6, borderColor: "rgba(201,162,76,0.5)" }}
                className="flex items-center gap-4 rounded-2xl border border-gold-600/15 bg-obsidian-500/60 p-6 transition-colors duration-300"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gold-400/10 text-gold-400">
                  <link.icon className="h-5 w-5" strokeWidth={1.5} />
                </span>
                <span>
                  <span className="block text-xs text-muted">{link.label}</span>
                  <span className="mt-1 block font-body text-base text-ivory" dir="ltr">
                    {link.value}
                  </span>
                </span>
              </motion.a>
            ))}

            <motion.div
              variants={fadeUp}
              className="flex items-start gap-4 rounded-2xl border border-gold-600/15 bg-obsidian-500/60 p-6"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gold-400/10 text-gold-400">
                <MapPin className="h-5 w-5" strokeWidth={1.5} />
              </span>
              <span>
                <span className="block text-xs text-muted">آدرس نمایشگاه</span>
                <span className="mt-1 block text-sm leading-7 text-ivory">
                  {siteConfig.contact.address}
                </span>
              </span>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={viewportOnce}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden rounded-2xl border border-gold-600/15 lg:col-span-3"
          >
            <iframe
              title="موقعیت نمایشگاه زرین اطلس روی نقشه گوگل"
              src={siteConfig.contact.mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: 420 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale-[40%] contrast-[1.1]"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
