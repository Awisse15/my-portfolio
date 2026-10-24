"use client";

import Link from "next/link";
import { MotionConfig, motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  return (
    <MotionConfig reducedMotion="user">
      <section className="mx-auto max-w-6xl px-6 pb-12 pt-20 sm:pt-32">
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: "105%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease }}
            className="font-display text-[clamp(3.5rem,13vw,9.5rem)] font-bold leading-[0.95] tracking-tight"
          >
            Anne Echanes
          </motion.h1>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5, ease }}
          className="mt-8 max-w-xl text-xl sm:text-2xl"
        >
          I design and build websites, slide decks and ads.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65, ease }}
          className="mt-10 flex flex-wrap gap-3"
        >
          <Link
            href="/works"
            className="inline-flex items-center gap-2 rounded-full bg-raspberry px-6 py-3 font-medium text-white transition hover:bg-plum"
          >
            See my works <ArrowRight size={18} aria-hidden />
          </Link>
          <Link
            href="/about"
            className="rounded-full border border-plum/30 px-6 py-3 font-medium transition hover:bg-rose"
          >
            About me
          </Link>
        </motion.div>
      </section>
    </MotionConfig>
  );
}