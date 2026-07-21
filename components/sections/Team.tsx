"use client";

import { motion } from "framer-motion";
import SectionHeading from "../SectionHeading";
import { teamMembers } from "@/lib/data";
import { staggerContainer, fadeUp, viewportOnce } from "@/lib/motion";

export default function Team() {
  return (
    <section className="section-padding bg-charcoal">
      <div className="mx-auto max-w-content">
        <SectionHeading
          eyebrow="آدم‌های پشت زرین اطلس"
          title="تیمی که هر روز پای میز کارن"
          description="این چهره‌ها رو احتمالاً وقتی برای بازدید بیایید، همون‌جا توی کارگاه می‌بینید — نه پشت یه دفتر بسته."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3"
        >
          {teamMembers.map((member) => (
            <motion.div key={member.id} variants={fadeUp} className="text-center">
              <div className="mx-auto h-28 w-28 overflow-hidden rounded-full border-2 border-gold-600/30 sm:h-32 sm:w-32">
                <img
                  src={member.image}
                  alt={member.name}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
              <h3 className="mt-5 font-display text-lg text-ivory">{member.name}</h3>
              <p className="mt-1 text-xs text-gold-400">{member.role}</p>
              <p className="mx-auto mt-3 max-w-xs text-sm leading-6 text-bone">
                {member.bio}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
