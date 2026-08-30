export interface ProjectTranslation {
  description: string;
  tags: string[];
}

export interface Translations {
  nav: {
    about: string;
    technologies: string;
    projects: string;
    contact: string;
  };
  hero: {
    greeting: string;
    subtitle: string;
    cta: string;
    yearsExp: string;
    projectsCount: string;
  };
  availability: {
    highDemand: string;
    available: string;
    moderate: string;
    busy: string;
    workload: string;
    rates: string;
    ratesFull: string;
    availabilityBar: string;
    availabilityLow: string;
    limitedAvailability: string;
    premiumRates: string;
    responseTime: string;
  };
  repoAge: {
    month: string;
    months: string;
    day: string;
    days: string;
    and: string;
    online: string;
  };
  contributions: {
    title: string;
  };
  technologies: {
    title: string;
    subtitle: string;
    hardware: string;
  };
  projects: {
    title: string;
    velocity: ProjectTranslation;
    prolevelcode: ProjectTranslation;
    ivania: ProjectTranslation;
    l2j: ProjectTranslation;
    gcpOauth: ProjectTranslation;
    garru: ProjectTranslation;
    pokescan: ProjectTranslation;
    sosvenezuela: ProjectTranslation;
    viewSite: string;
    code: string;
  };
  bots: {
    title: string;
    subtitle: string;
    hermes: { name: string; description: string };
    tweetcurator: { name: string; description: string };
    messenger: { name: string; description: string };
    statusLabels: { operational: string; development: string };
    whatsappMessage: string;
    interested: string;
    ctaWhatsappMessage: string;
    cta: { title: string; description: string; button: string };
  };
  contact: {
    title: string;
    subtitle: string;
  };
  footer: {
    copyright: string;
  };
}

import en from "./en";
import es from "./es";
import zh from "./zh";
import ja from "./ja";
import pt from "./pt";

export const translations: Record<string, Translations> = {
  en,
  es,
  zh,
  ja,
  pt,
};

export const languageNames: Record<string, string> = {
  en: "English",
  es: "Espa\u00F1ol",
  zh: "\u4E2D\u6587",
  ja: "\u65E5\u672C\u8A9E",
  pt: "Portugu\u00EAs",
};

export const defaultLocale = "en";
