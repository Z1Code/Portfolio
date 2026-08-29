"use client";

import { motion, type Variants } from "motion/react";
import { Bot, MessageSquare, Send, Sparkles } from "lucide-react";
import { FaWhatsapp, FaTelegram } from "react-icons/fa";
import { useTranslation } from "../i18n/LanguageContext";

/* ── Font shortcuts ── */
const fInter = "font-[var(--font-inter)]";
const fInstrument = "font-[var(--font-instrument)]";

/* ── Animations ── */

const fadeInView = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" as const },
  transition: { duration: 0.7, ease: "easeOut" as const },
};

/* ── Status indicator ── */

type BotStatus = "operational" | "development" | "offline";

function StatusBadge({ status, label }: { status: BotStatus; label: string }) {
  const colors: Record<BotStatus, { dot: string; text: string; bg: string }> = {
    operational: {
      dot: "bg-green-400",
      text: "text-green-400/80",
      bg: "bg-green-400/10 ring-green-400/20",
    },
    development: {
      dot: "bg-purple-400",
      text: "text-purple-400/80",
      bg: "bg-purple-400/10 ring-purple-400/20",
    },
    offline: {
      dot: "bg-red-400",
      text: "text-red-400/80",
      bg: "bg-red-400/10 ring-red-400/20",
    },
  };

  const c = colors[status];

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 ring-1 ${c.bg}`}
    >
      <span className={`relative flex h-2 w-2`}>
        {status === "operational" && (
          <span
            className={`absolute inline-flex h-full w-full animate-ping rounded-full ${c.dot} opacity-75`}
          />
        )}
        <span className={`relative inline-flex h-2 w-2 rounded-full ${c.dot}`} />
      </span>
      <span className={`${fInter} text-[11px] font-medium tracking-wide uppercase ${c.text}`}>
        {label}
      </span>
    </span>
  );
}

/* ── WhatsApp link helper ── */

const WHATSAPP_NUMBER = "56900000000"; // placeholder: +56 9 XXXX XXXX

function whatsappUrl(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

/* ── Bot card icons ── */

const botIcons: Record<string, typeof Bot> = {
  "hermes-bot": Send,
  "tweetcurator-bot": Sparkles,
  "messenger-bot": MessageSquare,
};

/* ── Main component ── */

export default function BotsSection() {
  const { t } = useTranslation();

  const bots = [
    {
      id: "hermes-bot",
      name: t.bots.hermes.name,
      description: t.bots.hermes.description,
      tech: ["Telegraf", "Playwright", "Sharp", "Anthropic AI"],
      status: "operational" as BotStatus,
      statusLabel: t.bots.statusLabels.operational,
      gradient: "from-emerald-500 to-teal-500",
      hoverColor: "group-hover:text-emerald-400",
      iconColor: "text-emerald-400",
    },
    {
      id: "tweetcurator-bot",
      name: t.bots.tweetcurator.name,
      description: t.bots.tweetcurator.description,
      tech: ["Telegraf", "Playwright", "Claude Haiku", "Neon Postgres"],
      status: "operational" as BotStatus,
      statusLabel: t.bots.statusLabels.operational,
      gradient: "from-sky-500 to-blue-500",
      hoverColor: "group-hover:text-sky-400",
      iconColor: "text-sky-400",
    },
    {
      id: "messenger-bot",
      name: t.bots.messenger.name,
      description: t.bots.messenger.description,
      tech: ["Chrome Extension", "WebSocket", "Anthropic AI", "Supabase"],
      status: "development" as BotStatus,
      statusLabel: t.bots.statusLabels.development,
      gradient: "from-purple-500 to-violet-500",
      hoverColor: "group-hover:text-purple-400",
      iconColor: "text-purple-400",
    },
  ];

  return (
    <section id="bots" className="px-6 py-12">
      <motion.div {...fadeInView} className="mx-auto max-w-6xl">
        <h2 className={`${fInter} type-headline mb-4 text-center text-white`}>
          {t.bots.title}
        </h2>
        <p
          className={`${fInter} type-body mx-auto mb-8 max-w-lg text-center text-white/50`}
        >
          {t.bots.subtitle}
        </p>

        {/* Bot cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {bots.map((bot, i) => {
            const Icon = botIcons[bot.id] ?? Bot;

            return (
              <motion.div
                key={bot.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: i * 0.12,
                  duration: 0.6,
                  ease: "easeOut",
                }}
                className="glass-card group overflow-hidden rounded-2xl transition-all duration-300 hover:-translate-y-2"
              >
                {/* Icon header area */}
                <div className="relative flex h-40 items-center justify-center overflow-hidden rounded-t-2xl bg-gradient-to-br from-white/[0.02] to-white/[0.06]">
                  {/* Animated gradient orb */}
                  <div
                    className={`absolute h-24 w-24 rounded-full bg-gradient-to-r ${bot.gradient} opacity-15 blur-2xl transition-all duration-500 group-hover:opacity-30 group-hover:scale-150`}
                  />
                  <div className="relative flex flex-col items-center gap-3">
                    <div
                      className={`rounded-2xl border border-white/10 bg-white/[0.05] p-4 backdrop-blur-sm transition-transform duration-300 group-hover:scale-110`}
                    >
                      <Icon className={`h-8 w-8 ${bot.iconColor}`} />
                    </div>
                    <div className="flex items-center gap-2">
                      <FaTelegram className="h-3.5 w-3.5 text-white/30" />
                      <span
                        className={`${fInter} text-[11px] font-medium tracking-wide text-white/30`}
                      >
                        Telegram Bot
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div
                    className={`absolute top-0 left-0 h-px w-0 bg-gradient-to-r ${bot.gradient} transition-all duration-500 group-hover:w-full`}
                  />

                  {/* Title + Status */}
                  <div className="mb-3 flex items-start justify-between gap-2">
                    <h3
                      className={`${fInter} type-card-title text-white transition-colors ${bot.hoverColor}`}
                    >
                      {bot.name}
                    </h3>
                    <StatusBadge status={bot.status} label={bot.statusLabel} />
                  </div>

                  {/* Description */}
                  <p className={`${fInter} type-card-body mb-4 text-white/50`}>
                    {bot.description}
                  </p>

                  {/* Tech tags */}
                  <div className="mb-4 flex flex-wrap gap-2">
                    {bot.tech.map((tag) => (
                      <span
                        key={tag}
                        className="glass-pill type-label rounded-full px-3 py-1 text-white/60"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Interested button */}
                  <a
                    href={whatsappUrl(
                      t.bots.whatsappMessage.replace("{bot}", bot.name)
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${fInter} type-caption inline-flex items-center gap-1.5 font-medium text-white/60 transition-colors hover:text-green-400`}
                  >
                    <FaWhatsapp className="h-3.5 w-3.5" />
                    {t.bots.interested}
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.7, ease: "easeOut" }}
          className="mt-10"
        >
          <a
            href={whatsappUrl(t.bots.ctaWhatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card group block overflow-hidden rounded-2xl transition-all duration-300 hover:-translate-y-1"
          >
            <div className="relative px-6 py-8 text-center sm:px-10">
              {/* Background glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 via-emerald-500/5 to-teal-500/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <div className="relative">
                <div className="mb-3 flex items-center justify-center gap-2">
                  <Bot className="h-5 w-5 text-emerald-400" />
                  <h3
                    className={`${fInter} type-card-title text-white transition-colors group-hover:text-emerald-400`}
                  >
                    {t.bots.cta.title}
                  </h3>
                </div>
                <p
                  className={`${fInter} type-card-body mx-auto mb-5 max-w-md text-white/50`}
                >
                  {t.bots.cta.description}
                </p>
                <span
                  className={`${fInter} type-button inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#25D366] to-[#128C7E] px-7 py-3 text-white shadow-lg transition-transform group-hover:scale-[1.03]`}
                >
                  <span className="pointer-events-none absolute inset-0 rounded-full border-[1.5px] border-white/20" />
                  <FaWhatsapp className="h-4 w-4" />
                  {t.bots.cta.button}
                </span>
              </div>
            </div>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
