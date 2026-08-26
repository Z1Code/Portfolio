"use client";

import { motion } from "motion/react";
import { useTranslation } from "../i18n/LanguageContext";

const WORKLOAD = 70;
const RATES = 100;
const AVAILABILITY = 30;

export default function AvailabilityBanner() {
  const { t } = useTranslation();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="availability-glow glass-card mx-auto w-full max-w-2xl rounded-2xl border-t border-amber-500/40"
    >
      {/* Amber accent line at top */}
      <div className="h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent" />

      <div className="p-5">
        {/* Header: pulse dot + HIGH DEMAND */}
        <div className="mb-4 flex items-center gap-2.5">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-75" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-amber-500" />
          </span>
          <span className="font-[var(--font-inter)] text-xs font-bold uppercase tracking-widest text-amber-400">
            {t.availability.highDemand}
          </span>
        </div>

        {/* Workload bar */}
        <div className="mb-3">
          <div className="mb-1.5 flex items-center justify-between">
            <span className="font-[var(--font-inter)] text-xs text-white/50">
              {t.availability.workload}
            </span>
            <span className="font-[var(--font-inter)] text-xs font-semibold text-amber-400">
              {WORKLOAD}%
            </span>
          </div>
          <div className="h-2 overflow-hidden rounded-full bg-white/[0.06] ring-1 ring-white/[0.04]">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${WORKLOAD}%` }}
              transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
              className="bar-shimmer relative h-full rounded-full bg-gradient-to-r from-amber-500 to-red-500"
            />
          </div>
        </div>

        {/* Rates bar */}
        <div className="mb-3">
          <div className="mb-1.5 flex items-center justify-between">
            <span className="font-[var(--font-inter)] text-xs text-white/50">
              {t.availability.rates}
            </span>
            <span className="font-[var(--font-inter)] text-xs font-semibold text-purple-400">
              {t.availability.ratesFull}
            </span>
          </div>
          <div className="h-2 overflow-hidden rounded-full bg-white/[0.06] ring-1 ring-white/[0.04]">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${RATES}%` }}
              transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
              className="bar-shimmer relative h-full rounded-full bg-gradient-to-r from-purple-500 to-pink-500"
            />
          </div>
        </div>

        {/* Availability bar */}
        <div>
          <div className="mb-1.5 flex items-center justify-between">
            <span className="font-[var(--font-inter)] text-xs text-white/50">
              {t.availability.availabilityBar}
            </span>
            <span className="font-[var(--font-inter)] text-xs font-semibold text-emerald-400">
              {AVAILABILITY}% · {t.availability.availabilityLow}
            </span>
          </div>
          <div className="h-2 overflow-hidden rounded-full bg-white/[0.06] ring-1 ring-white/[0.04]">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${AVAILABILITY}%` }}
              transition={{ duration: 1.2, delay: 0.7, ease: "easeOut" }}
              className="bar-shimmer relative h-full rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500"
            />
          </div>
        </div>

      </div>
    </motion.div>
  );
}
