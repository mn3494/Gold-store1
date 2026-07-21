"use client";

import { motion } from "framer-motion";
import { fadeUp, viewportOnce } from "@/lib/motion";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "center" | "start";
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: SectionHeadingProps) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      className={`mx-auto max-w-2xl ${align === "center" ? "text-center" : "text-start"}`}
    >
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="mt-4 font-display text-3xl leading-tight text-ivory sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      <div
        className={`mt-6 h-px w-24 bg-gold-gradient ${align === "center" ? "mx-auto" : ""}`}
      />
      {description && (
        <p className="mt-6 text-base leading-8 text-bone sm:text-lg">
          {description}
        </p>
      )}
    </motion.div>
  );
}
