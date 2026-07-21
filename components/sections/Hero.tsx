"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import GoldParticles from "./GoldParticles";
import { siteConfig } from "@/lib/site-config";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-obsidian-500"
    >
      {/* Ambient radial glow */}
      <div className="absolute inset-0 bg-radial-fade" aria-hidden="true" />

      {/* Background image with dark overlay */}
      <div className="absolute inset-0" aria-hidden="true">
        <img
          src="https://images.unsplash.com/photo-1617038220319-276d3cfab638?q=80&w=2000&auto=format&fit=crop"
          alt=""
          className="h-full w-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-obsidian-500/60 via-obsidian-500/70 to-obsidian-500" />
      </div>

      <GoldParticles count={30} />

      {/* Floating decorative ring outline */}
      <motion.div
        className="pointer-events-none absolute -left-24 top-1/4 h-64 w-64 rounded-full border border-gold-600/20 sm:-left-16"
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        aria-hidden="true"
      />
      <motion.div
        className="pointer-events-none absolute -right-20 bottom-1/4 h-48 w-48 rounded-full border border-gold-600/15"
        animate={{ rotate: -360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        aria-hidden="true"
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 mx-auto flex max-w-content flex-col items-center px-6 text-center"
      >
        <motion.span variants={item} className="eyebrow">
          خانه‌ی زیورآلات طلای لوکس
        </motion.span>

        <motion.h1
          variants={item}
          className="mt-8 font-display text-4xl leading-[1.3] text-ivory sm:text-6xl sm:leading-[1.25] lg:text-7xl"
        >
          طلایی که
          <span className="text-gradient-gold"> روایت </span>
          می‌شود،
          <br />
          نه فقط ساخته
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-8 max-w-xl text-base leading-8 text-bone sm:text-lg"
        >
          {siteConfig.description}
        </motion.p>

        <motion.div
          variants={item}
          className="mt-12 flex flex-col items-center gap-4 sm:flex-row"
        >
          <a href="#featured" className="btn-gold">
            مشاهده مجموعه‌ها
          </a>
          <a href="#about" className="btn-outline-gold">
            آشنایی با زرین اطلس
          </a>
        </motion.div>
      </motion.div>

      <motion.a
        href="#about"
        aria-label="پیمایش به بخش بعدی"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="absolute bottom-10 left-1/2 z-10 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-gold-600/40 text-gold-400"
        >
          <ArrowDown className="h-4 w-4" />
        </motion.div>
      </motion.a>
    </section>
  );
}
