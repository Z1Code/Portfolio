"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { motion, AnimatePresence, type Variants } from "motion/react";
import { Menu, X, ArrowRight, Github, Clock } from "lucide-react";
import { FaWhatsapp, FaGithub } from "react-icons/fa";
import {
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiJavascript,
  SiPostgresql,
  SiGit,
  SiNvidia,
  SiAmd,
  SiIntel,
  SiAsus,
  SiClaude,
} from "react-icons/si";
import PortfolioVideo from "./PortfolioVideo";
import AvailabilityBanner from "./AvailabilityBanner";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslation } from "../i18n/LanguageContext";

const ChipScroll = dynamic(() => import("./ChipScroll"), { ssr: false });
const ChipScrollIvania = dynamic(() => import("./ChipScrollIvania"), {
  ssr: false,
});
const ChipScrollPLC = dynamic(() => import("./ChipScrollPLC"), {
  ssr: false,
});
const TerminalOAuth = dynamic(() => import("./TerminalOAuth"), {
  ssr: false,
});
const ContributionGrid = dynamic(() => import("./ContributionGrid"), {
  ssr: false,
});

/* ── Font shortcuts ── */
const fInter = "font-[var(--font-inter)]";
const fInstrument = "font-[var(--font-instrument)]";

/* ── Helpers ── */
function RepoAge({ created }: { created: string }) {
  const { t } = useTranslation();
  const [label, setLabel] = useState("");

  useEffect(() => {
    const diff = Date.now() - new Date(created).getTime();
    const totalDays = Math.floor(diff / (1000 * 60 * 60 * 24));
    const months = Math.floor(totalDays / 30);
    const days = totalDays - months * 30;

    const monthStr = months === 1 ? t.repoAge.month : t.repoAge.months;
    const dayStr = days === 1 ? t.repoAge.day : t.repoAge.days;
    const andStr = t.repoAge.and ? ` ${t.repoAge.and} ` : "";

    if (months > 0) {
      setLabel(
        `${months} ${monthStr}${andStr}${days} ${dayStr} ${t.repoAge.online}`
      );
    } else {
      setLabel(`${days} ${dayStr} ${t.repoAge.online}`);
    }
  }, [created, t]);

  if (!label) return null;

  return (
    <div className="mb-4 flex items-center gap-1.5 text-white/40">
      <Clock className="h-3 w-3" />
      <span className={`${fInter} text-[11px] tracking-[0.005em]`}>
        {label}
      </span>
    </div>
  );
}

/* ── Data ── */

const technologies = [
  { name: "React", icon: SiReact, color: "text-blue-500" },
  { name: "Next.js", icon: SiNextdotjs, color: "text-white" },
  { name: "Node.js", icon: SiNodedotjs, color: "text-green-500" },
  { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
  { name: "Git", icon: SiGit, color: "text-orange-500" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-400" },
  { name: "Claude", icon: SiClaude, color: "text-amber-300" },
];

const hardware = [
  { name: "NVIDIA | CUDA", icon: SiNvidia, color: "text-green-500" },
  { name: "AMD", icon: SiAmd, color: "text-red-500" },
  { name: "Intel", icon: SiIntel, color: "text-blue-500" },
  { name: "ASUS", icon: SiAsus, color: "text-red-600" },
];

/* ── Animations ── */

const stagger: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.15 + i * 0.15,
      duration: 0.7,
      ease: "easeOut" as const,
    },
  }),
};

const fadeInView = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" as const },
  transition: { duration: 0.7, ease: "easeOut" as const },
};

/* ── GlassFilters ── */

function GlassFilters() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="0"
      height="0"
      style={{ position: "absolute", overflow: "hidden" }}
      aria-hidden
    >
      <defs>
        <filter
          id="glass-refract"
          x="-5%"
          y="-5%"
          width="110%"
          height="110%"
          colorInterpolationFilters="sRGB"
        >
          <feGaussianBlur in="SourceGraphic" stdDeviation="0.3" result="preblur" />
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.015 0.012"
            numOctaves="2"
            seed="42"
            result="noise"
          />
          <feGaussianBlur in="noise" stdDeviation="3" result="smooth" />
          <feDisplacementMap
            in="preblur"
            in2="smooth"
            scale="8"
            xChannelSelector="R"
            yChannelSelector="G"
            result="displaced"
          />
          <feColorMatrix in="displaced" type="saturate" values="1.3" />
        </filter>

        <filter
          id="glass-refract-strong"
          x="-5%"
          y="-5%"
          width="110%"
          height="110%"
          colorInterpolationFilters="sRGB"
        >
          <feGaussianBlur in="SourceGraphic" stdDeviation="0.4" result="preblur" />
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.012 0.010"
            numOctaves="3"
            seed="42"
            result="noise"
          />
          <feGaussianBlur in="noise" stdDeviation="4" result="smooth" />
          <feDisplacementMap
            in="preblur"
            in2="smooth"
            scale="16"
            xChannelSelector="R"
            yChannelSelector="G"
            result="displaced"
          />
          <feColorMatrix in="displaced" type="saturate" values="1.5" />
        </filter>
      </defs>
    </svg>
  );
}

/* ── Navbar ── */

function Navbar() {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);

  const navLinks = [
    { label: t.nav.about, href: "#about" },
    { label: t.nav.technologies, href: "#technologies" },
    { label: t.nav.projects, href: "#projects" },
    { label: t.nav.contact, href: "#contact" },
  ];

  return (
    <nav className="fixed inset-x-0 top-0 z-50 px-4 pt-3">
      <div className="glass mx-auto max-w-7xl rounded-[20px]">
        <div className="relative flex h-[62px] items-center px-5 sm:px-6">
          {/* Brand */}
          <a
            href="#about"
            className={`${fInter} type-nav-brand text-white`}
          >
            Portfolio
          </a>

          {/* Center nav */}
          <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2">
            <div className="flex items-center gap-1">
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className={`${fInter} type-nav-link inline-flex h-9 items-center rounded-xl px-4 text-white/60 transition hover:bg-white/[0.07] hover:text-white`}
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>

          {/* Right: Language + GitHub */}
          <div className="ml-auto hidden lg:flex items-center gap-2">
            <LanguageSwitcher />
            <a
              href="https://github.com/Z1Code"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center rounded-full bg-white/[0.04] p-2.5 text-white/60 ring-1 ring-white/[0.08] transition hover:bg-white/[0.08] hover:text-white"
              aria-label="GitHub"
            >
              <Github className="h-4 w-4" />
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen((o) => !o)}
            className="ml-auto lg:hidden rounded-xl bg-white/[0.04] p-2.5 text-white/70 ring-1 ring-white/[0.1] transition hover:bg-white/[0.08]"
            aria-label="Menu"
          >
            {open ? (
              <X className="h-4.5 w-4.5" />
            ) : (
              <Menu className="h-4.5 w-4.5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile panel */}
      <AnimatePresence>
        {open && (
          <>
            <motion.button
              onClick={() => setOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
              aria-label="Close"
            />
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
              className="glass relative z-50 mx-auto mt-2 max-w-7xl rounded-[20px]"
            >
              <div className="relative p-3">
                {navLinks.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className={`${fInter} block rounded-xl px-3 py-3 text-[15px] font-medium tracking-[-0.016em] text-white/70 transition hover:bg-white/[0.07] hover:text-white`}
                  >
                    {l.label}
                  </a>
                ))}
                <div className="my-2 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                <div className="flex items-center justify-between px-3 py-2">
                  <LanguageSwitcher />
                  <a
                    href="https://github.com/Z1Code"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${fInter} inline-flex items-center gap-2.5 rounded-xl px-3 py-2 text-[15px] font-medium tracking-[-0.016em] text-white/70 transition hover:bg-white/[0.07] hover:text-white`}
                  >
                    <Github className="h-4 w-4" /> GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}

/* ── Hero ── */

function HeroSection() {
  const { t } = useTranslation();

  return (
    <section
      id="about"
      className="relative mx-auto flex min-h-[85vh] max-w-4xl flex-col items-center justify-center px-6 pt-28 text-center"
    >
      {/* Floating ambient particles */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <div
            key={i}
            className={`ambient-particle ambient-particle-${i} absolute rounded-full bg-amber-400/20`}
          />
        ))}
      </div>

      {/* Headline */}
      <motion.h1
        custom={0}
        variants={stagger}
        initial="hidden"
        animate="show"
        className={`${fInter} type-hero text-white`}
      >
        {t.hero.greeting}{" "}
        <span className={`${fInstrument} font-normal italic`}>
          Juan Fernandez
        </span>
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        custom={1}
        variants={stagger}
        initial="hidden"
        animate="show"
        className={`${fInter} type-body-lg mx-auto mt-5 max-w-lg text-white/55`}
      >
        {t.hero.subtitle}
      </motion.p>

      {/* Availability Banner */}
      <motion.div
        custom={2}
        variants={stagger}
        initial="hidden"
        animate="show"
        className="mt-7 w-full"
      >
        <AvailabilityBanner />
      </motion.div>

      {/* CTA Buttons */}
      <motion.div
        custom={3}
        variants={stagger}
        initial="hidden"
        animate="show"
        className="mt-7 flex flex-wrap items-center justify-center gap-4"
      >
        {/* WhatsApp */}
        <a
          href="https://wa.me/56937111513?text=%C2%A1Hola!%20Me%20interesa%20contactarte%20para%20un%20proyecto."
          target="_blank"
          rel="noopener noreferrer"
          className="group relative inline-flex items-center justify-center"
        >
          <div className="absolute inset-0 rounded-full bg-green-500 opacity-20 blur-lg transition-opacity duration-300 group-hover:opacity-50" />
          <span
            className={`${fInter} type-button relative z-10 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#25D366] to-[#128C7E] px-7 py-3.5 text-white shadow-lg transition-transform hover:scale-[1.03] active:scale-[0.98]`}
          >
            <span className="pointer-events-none absolute inset-0 rounded-full border-[1.5px] border-white/20" />
            <FaWhatsapp className="h-4 w-4" />
            WhatsApp
            <ArrowRight className="h-4 w-4 -translate-x-3 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
          </span>
        </a>

        {/* View Projects */}
        <a
          href="#projects"
          className={`${fInter} type-button rounded-full border border-white/[0.14] bg-white/[0.04] px-7 py-3.5 text-white backdrop-blur-sm transition-all hover:border-white/25 hover:bg-white/[0.08] hover:scale-[1.03] active:scale-[0.98]`}
        >
          {t.hero.cta}
        </a>
      </motion.div>

      {/* Stats */}
      <motion.div
        custom={4}
        variants={stagger}
        initial="hidden"
        animate="show"
        className={`${fInter} type-stat mt-8 flex flex-wrap items-center justify-center gap-6 text-white/40 sm:gap-8`}
      >
        <span>
          <span className="font-semibold text-white/70">1</span>{" "}
          {t.hero.yearsExp}
        </span>
        <span className="hidden h-4 w-px bg-white/15 sm:block" />
        <span>
          <span className="font-semibold text-white/70">8</span>{" "}
          {t.hero.projectsCount}
        </span>
      </motion.div>
    </section>
  );
}

/* ── Contributions ── */

function ContributionsSection() {
  const { t } = useTranslation();

  return (
    <section id="contributions" className="px-6 py-12">
      <motion.div {...fadeInView} className="mx-auto max-w-3xl">
        <h2
          className={`${fInter} type-headline mb-6 text-center text-white`}
        >
          {t.contributions.title}
        </h2>

        <div className="glass-card overflow-hidden rounded-2xl px-5 py-4">
          <ContributionGrid />
        </div>
      </motion.div>
    </section>
  );
}

/* ── Technologies ── */

function TechnologiesSection() {
  const { t } = useTranslation();

  return (
    <section id="technologies" className="px-6 py-12">
      <motion.div {...fadeInView} className="mx-auto max-w-6xl">
        <h2
          className={`${fInter} type-headline mb-4 text-center text-white`}
        >
          {t.technologies.title}
        </h2>
        <p
          className={`${fInter} type-body mx-auto mb-6 max-w-md text-center text-white/50`}
        >
          {t.technologies.subtitle}
        </p>

        {/* Dev stack */}
        <div className="grid grid-cols-3 gap-4 sm:gap-6 md:grid-cols-6">
          {technologies.map((tech, i) => {
            const Icon = tech.icon;
            return (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  delay: i * 0.08,
                  duration: 0.5,
                  ease: "easeOut",
                }}
                className="glass-card group rounded-2xl p-5 transition-all duration-300 hover:-translate-y-2 hover:scale-105"
              >
                <div className="flex flex-col items-center gap-3">
                  <Icon
                    className={`text-3xl ${tech.color} transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12`}
                  />
                  <span
                    className={`${fInter} type-label text-white/60 transition-colors group-hover:text-white/90`}
                  >
                    {tech.name}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Hardware */}
        <h3
          className={`${fInter} type-eyebrow mb-5 mt-8 text-center text-white/80`}
        >
          {t.technologies.hardware}
        </h3>
        <div className="mx-auto grid max-w-2xl grid-cols-2 gap-4 sm:gap-6 md:grid-cols-4">
          {hardware.map((hw, i) => {
            const Icon = hw.icon;
            return (
              <motion.div
                key={hw.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  delay: i * 0.08,
                  duration: 0.5,
                  ease: "easeOut",
                }}
                className="glass-card group rounded-2xl p-5 transition-all duration-300 hover:-translate-y-2 hover:scale-105"
              >
                <div className="flex flex-col items-center gap-3">
                  <Icon
                    className={`text-3xl ${hw.color} transition-transform duration-300 group-hover:scale-125 group-hover:-rotate-6`}
                  />
                  <span
                    className={`${fInter} type-label text-white/60 transition-colors group-hover:text-white/90`}
                  >
                    {hw.name}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}

/* ── Projects ── */

function ProjectsSection() {
  const { t } = useTranslation();

  return (
    <section id="projects" className="px-6 py-12">
      <motion.div {...fadeInView} className="mx-auto max-w-6xl">
        <h2
          className={`${fInter} type-headline mb-6 text-center text-white`}
        >
          {t.projects.title}
        </h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* VelocitySetups */}
          <div className="glass-card group overflow-hidden rounded-2xl transition-all duration-300 hover:-translate-y-2">
            <div className="relative h-48 overflow-hidden rounded-t-2xl">
              <ChipScroll />
            </div>
            <div className="p-6">
              <div className="absolute top-0 left-0 h-px w-0 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-500 group-hover:w-full" />
              <h3
                className={`${fInter} type-card-title mb-3 text-white transition-colors group-hover:text-blue-400`}
              >
                VelocitySetups
              </h3>
              <p
                className={`${fInter} type-card-body mb-4 text-white/50`}
              >
                {t.projects.velocity.description}
              </p>
              <div className="mb-3 flex flex-wrap gap-2">
                {t.projects.velocity.tags.map((tag) => (
                  <span
                    key={tag}
                    className="glass-pill type-label rounded-full px-3 py-1 text-white/60"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <RepoAge created="2025-12-31T15:12:10Z" />
              <div className="flex gap-4">
                <a
                  href="https://velocitysetups.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${fInter} type-caption font-medium text-white/60 transition-colors hover:text-white`}
                >
                  {t.projects.viewSite}
                </a>
                <a
                  href="https://github.com/Z1Code/velocity-ecommerce"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${fInter} type-caption inline-flex items-center gap-1.5 font-medium text-white/60 transition-colors hover:text-white`}
                >
                  <FaGithub className="h-3.5 w-3.5" /> {t.projects.code}
                </a>
              </div>
            </div>
          </div>

          {/* ProLevelCode */}
          <div className="glass-card group overflow-hidden rounded-2xl transition-all duration-300 hover:-translate-y-2">
            <div className="relative h-48 overflow-hidden rounded-t-2xl">
              <ChipScrollPLC />
            </div>
            <div className="p-6">
              <div className="absolute top-0 left-0 h-px w-0 bg-gradient-to-r from-cyan-500 to-purple-500 transition-all duration-500 group-hover:w-full" />
              <h3
                className={`${fInter} type-card-title mb-3 text-white transition-colors group-hover:text-cyan-400`}
              >
                ProLevelCode
              </h3>
              <p
                className={`${fInter} type-card-body mb-4 text-white/50`}
              >
                {t.projects.prolevelcode.description}
              </p>
              <div className="mb-3 flex flex-wrap gap-2">
                {t.projects.prolevelcode.tags.map((tag) => (
                  <span
                    key={tag}
                    className="glass-pill type-label rounded-full px-3 py-1 text-white/60"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <RepoAge created="2026-02-08T03:17:07Z" />
              <div className="flex gap-4">
                <a
                  href="https://prolevelcode.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${fInter} type-caption font-medium text-white/60 transition-colors hover:text-white`}
                >
                  {t.projects.viewSite}
                </a>
                <a
                  href="https://github.com/Z1Code/prolevelcode"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${fInter} type-caption inline-flex items-center gap-1.5 font-medium text-white/60 transition-colors hover:text-white`}
                >
                  <FaGithub className="h-3.5 w-3.5" /> {t.projects.code}
                </a>
              </div>
            </div>
          </div>

          {/* IvaniaBeauty */}
          <div className="glass-card group overflow-hidden rounded-2xl transition-all duration-300 hover:-translate-y-2">
            <div className="relative h-48 overflow-hidden rounded-t-2xl">
              <ChipScrollIvania />
            </div>
            <div className="p-6">
              <div className="absolute top-0 left-0 h-px w-0 bg-gradient-to-r from-pink-500 to-fuchsia-500 transition-all duration-500 group-hover:w-full" />
              <h3
                className={`${fInter} type-card-title mb-3 text-white transition-colors group-hover:text-pink-400`}
              >
                IvaniaBeauty
              </h3>
              <p
                className={`${fInter} type-card-body mb-4 text-white/50`}
              >
                {t.projects.ivania.description}
              </p>
              <div className="mb-3 flex flex-wrap gap-2">
                {t.projects.ivania.tags.map((tag) => (
                  <span
                    key={tag}
                    className="glass-pill type-label rounded-full px-3 py-1 text-white/60"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <RepoAge created="2026-02-04T15:57:53Z" />
              <div className="flex gap-4">
                <a
                  href="https://ivaniabeauty.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${fInter} type-caption font-medium text-white/60 transition-colors hover:text-white`}
                >
                  {t.projects.viewSite}
                </a>
                <a
                  href="https://github.com/Z1Code/ivaniabeauty"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${fInter} type-caption inline-flex items-center gap-1.5 font-medium text-white/60 transition-colors hover:text-white`}
                >
                  <FaGithub className="h-3.5 w-3.5" /> {t.projects.code}
                </a>
              </div>
            </div>
          </div>

          {/* gcp-oauth-automator */}
          <div className="glass-card group overflow-hidden rounded-2xl transition-all duration-300 hover:-translate-y-2">
            <div className="relative h-48 overflow-hidden rounded-t-2xl">
              <TerminalOAuth />
            </div>
            <div className="p-6">
              <div className="absolute top-0 left-0 h-px w-0 bg-gradient-to-r from-emerald-500 to-teal-400 transition-all duration-500 group-hover:w-full" />
              <h3
                className={`${fInter} type-card-title mb-3 text-white transition-colors group-hover:text-emerald-400`}
              >
                gcp-oauth-automator
              </h3>
              <p
                className={`${fInter} type-card-body mb-4 text-white/50`}
              >
                {t.projects.gcpOauth.description}
              </p>
              <div className="mb-3 flex flex-wrap gap-2">
                {t.projects.gcpOauth.tags.map((tag) => (
                  <span
                    key={tag}
                    className="glass-pill type-label rounded-full px-3 py-1 text-white/60"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <RepoAge created="2026-05-01T00:00:00Z" />
              <div className="flex gap-4">
                <a
                  href="https://github.com/Z1Code/gcp-oauth-automator"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${fInter} type-caption inline-flex items-center gap-1.5 font-medium text-white/60 transition-colors hover:text-white`}
                >
                  <FaGithub className="h-3.5 w-3.5" /> {t.projects.code}
                </a>
              </div>
            </div>
          </div>
          {/* Garru */}
          <div className="glass-card group overflow-hidden rounded-2xl transition-all duration-300 hover:-translate-y-2">
            <div className="relative h-48 overflow-hidden rounded-t-2xl">
              <Image
                src="/garru-hero-bear.png"
                alt="Garru, oso andino sosteniendo un vaso de cafe"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            </div>
            <div className="p-6">
              <div className="absolute top-0 left-0 h-px w-0 bg-gradient-to-r from-amber-300 to-emerald-700 transition-all duration-500 group-hover:w-full" />
              <h3 className={`${fInter} type-card-title mb-3 text-white transition-colors group-hover:text-amber-300`}>
                Garru
              </h3>
              <p className={`${fInter} type-card-body mb-4 text-white/50`}>
                {t.projects.garru.description}
              </p>
              <div className="mb-3 flex flex-wrap gap-2">
                {t.projects.garru.tags.map((tag) => (
                  <span key={tag} className="glass-pill type-label rounded-full px-3 py-1 text-white/60">
                    {tag}
                  </span>
                ))}
              </div>
              <RepoAge created="2026-08-29T00:00:00Z" />
              <div className="flex gap-4">
                <a href="https://7uanf.com/garru" target="_blank" rel="noopener noreferrer" className={`${fInter} type-caption font-medium text-white/60 transition-colors hover:text-white`}>
                  {t.projects.viewSite}
                </a>
                <a href="https://github.com/Z1Code/garru-web" target="_blank" rel="noopener noreferrer" className={`${fInter} type-caption inline-flex items-center gap-1.5 font-medium text-white/60 transition-colors hover:text-white`}>
                  <FaGithub className="h-3.5 w-3.5" /> {t.projects.code}
                </a>
              </div>
            </div>
          </div>

          {/* SOS Venezuela 2026 */}
          <div className="glass-card group overflow-hidden rounded-2xl transition-all duration-300 hover:-translate-y-2">
            <div className="relative h-48 overflow-hidden rounded-t-2xl">
              <Image
                src="/sosvenezuela-banner.png"
                alt="Infografia de SOS Venezuela para reconectar familias tras el terremoto"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-6">
              <div className="absolute top-0 left-0 h-px w-0 bg-gradient-to-r from-yellow-400 via-blue-500 to-red-500 transition-all duration-500 group-hover:w-full" />
              <h3
                className={`${fInter} type-card-title mb-3 text-white transition-colors group-hover:text-red-400`}
              >
                SOS Venezuela 2026
              </h3>
              <p
                className={`${fInter} type-card-body mb-4 text-white/50`}
              >
                {t.projects.sosvenezuela.description}
              </p>
              <div className="mb-3 flex flex-wrap gap-2">
                {t.projects.sosvenezuela.tags.map((tag) => (
                  <span
                    key={tag}
                    className="glass-pill type-label rounded-full px-3 py-1 text-white/60"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <RepoAge created="2026-06-24T00:00:00Z" />
              <div className="flex gap-4">
                <a
                  href="https://sosvenezuela2026.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${fInter} type-caption font-medium text-white/60 transition-colors hover:text-white`}
                >
                  {t.projects.viewSite}
                </a>
              </div>
            </div>
          </div>

          {/* PokeScan */}
          <div className="glass-card group overflow-hidden rounded-2xl transition-all duration-300 hover:-translate-y-2">
            <div className="relative h-48 overflow-hidden rounded-t-2xl">
              <div className="flex h-full items-center justify-center bg-gradient-to-br from-red-950 via-slate-900 to-blue-950">
                <span className="text-6xl transition-transform duration-500 group-hover:scale-110">🎴</span>
                <span className="absolute right-6 bottom-4 animate-pulse text-2xl">📈</span>
              </div>
            </div>
            <div className="p-6">
              <div className="absolute top-0 left-0 h-px w-0 bg-gradient-to-r from-yellow-400 to-red-500 transition-all duration-500 group-hover:w-full" />
              <h3
                className={`${fInter} type-card-title mb-3 text-white transition-colors group-hover:text-yellow-400`}
              >
                PokeScan
              </h3>
              <p
                className={`${fInter} type-card-body mb-4 text-white/50`}
              >
                {t.projects.pokescan.description}
              </p>
              <div className="mb-3 flex flex-wrap gap-2">
                {t.projects.pokescan.tags.map((tag) => (
                  <span
                    key={tag}
                    className="glass-pill type-label rounded-full px-3 py-1 text-white/60"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <RepoAge created="2026-06-28T00:00:00Z" />
              <div className="flex gap-4">
                <a
                  href="https://7uanf.com/pokemon/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${fInter} type-caption font-medium text-white/60 transition-colors hover:text-white`}
                >
                  {t.projects.viewSite}
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

/* ── Contact ── */

function ContactSection() {
  const { t } = useTranslation();

  return (
    <section id="contact" className="px-6 py-12">
      <motion.div {...fadeInView} className="mx-auto max-w-2xl text-center">
        <h2
          className={`${fInter} type-headline mb-4 text-white`}
        >
          {t.contact.title}
        </h2>
        <p className={`${fInter} type-body-lg mb-6 text-white/50`}>
          {t.contact.subtitle}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          {/* WhatsApp */}
          <a
            href="https://wa.me/56937111513?text=%C2%A1Hola!%20Me%20interesa%20contactarte%20para%20un%20proyecto."
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center"
          >
            <div className="absolute inset-0 rounded-full bg-green-500 opacity-20 blur-lg transition-opacity duration-300 group-hover:opacity-50" />
            <span
              className={`${fInter} type-button relative z-10 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#25D366] to-[#128C7E] px-7 py-3.5 text-white shadow-lg transition-transform hover:scale-[1.03]`}
            >
              <span className="pointer-events-none absolute inset-0 rounded-full border-[1.5px] border-white/20" />
              <FaWhatsapp className="h-4 w-4" />
              WhatsApp
            </span>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/Z1Code"
            target="_blank"
            rel="noopener noreferrer"
            className={`${fInter} type-button inline-flex items-center gap-2 rounded-full border border-white/[0.14] bg-white/[0.04] px-7 py-3.5 text-white backdrop-blur-sm transition-all hover:border-white/25 hover:bg-white/[0.08] hover:scale-[1.03]`}
          >
            <Github className="h-4 w-4" />
            GitHub
          </a>
        </div>
      </motion.div>
    </section>
  );
}

/* ── Footer ── */

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="px-4 pb-4">
      <div className="glass mx-auto max-w-7xl rounded-[20px] px-6 py-8">
        <div className="relative z-10 text-center">
          <p className={`${fInter} type-caption text-white/35`}>
            {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}

/* ── Main export ── */

export default function PortfolioHome() {
  return (
    <div className={`${fInter} relative min-h-screen`}>
      <GlassFilters />
      <PortfolioVideo />
      <div className="relative z-10">
        <Navbar />
        <HeroSection />
        <ContributionsSection />
        <TechnologiesSection />
        <ProjectsSection />
        <ContactSection />
        <Footer />
      </div>
    </div>
  );
}
