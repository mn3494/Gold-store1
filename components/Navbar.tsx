"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Gem, User } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { useAuth } from "@/components/auth/AuthContext";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { user } = useAuth();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled ? "glass-panel shadow-soft" : "bg-transparent"
        }`}
      >
        <nav className="mx-auto flex max-w-content items-center justify-between px-6 py-4 sm:px-10 lg:px-16">
          <Link href="/" className="flex items-center gap-2 font-display text-xl text-ivory">
            <Gem className="h-5 w-5 text-gold-400" strokeWidth={1.5} />
            <span>{siteConfig.name}</span>
          </Link>

          <ul className="hidden items-center gap-6 xl:flex">
            {siteConfig.nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="group relative font-body text-sm text-bone transition-colors hover:text-ivory"
                >
                  {item.label}
                  <span className="absolute -bottom-1 right-0 h-px w-0 bg-gold-400 transition-all duration-300 group-hover:w-full" />
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden items-center gap-3 lg:flex">
            <Link
              href={user ? "/" : "/auth/login"}
              className="inline-flex items-center gap-2 rounded-full border border-gold-600/50 px-5 py-2.5 font-body text-sm text-ivory transition-all duration-300 hover:border-gold-400 hover:bg-gold-400/10"
            >
              <User className="h-4 w-4" />
              {user ? user.name : "ورود / ثبت‌نام"}
            </Link>
          </div>

          <button
            aria-label={menuOpen ? "بستن منو" : "باز کردن منو"}
            onClick={() => setMenuOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-gold-600/40 text-ivory xl:hidden"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 overflow-y-auto bg-obsidian-500/98 backdrop-blur-xl xl:hidden"
          >
            <motion.ul
              initial="hidden"
              animate="show"
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.06, delayChildren: 0.15 } },
              }}
              className="flex min-h-full flex-col items-center justify-center gap-6 px-6 py-24"
            >
              {siteConfig.nav.map((item) => (
                <motion.li
                  key={item.href}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    show: { opacity: 1, y: 0 },
                  }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="font-display text-xl text-ivory transition-colors hover:text-gold-400"
                  >
                    {item.label}
                  </Link>
                </motion.li>
              ))}
              <motion.li
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0 },
                }}
                className="mt-4"
              >
                <Link
                  href={user ? "/" : "/auth/login"}
                  onClick={() => setMenuOpen(false)}
                  className="btn-gold"
                >
                  {user ? user.name : "ورود / ثبت‌نام"}
                </Link>
              </motion.li>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
