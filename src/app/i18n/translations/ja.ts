import type { Translations } from "./index";

const ja: Translations = {
  nav: {
    about: "\u6982\u8981",
    technologies: "\u6280\u8853",
    projects: "\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8",
    contact: "\u304A\u554F\u3044\u5408\u308F\u305B",
  },
  hero: {
    greeting: "\u3053\u3093\u306B\u3061\u306F\u3001",
    subtitle:
      "\u30E2\u30C0\u30F3\u306A\u6280\u8853\u3092\u4F7F\u7528\u3057\u3066\u3001\u30B9\u30B1\u30FC\u30E9\u30D6\u30EB\u3067\u52B9\u7387\u7684\u306A\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306E\u69CB\u7BC9\u3092\u5C02\u9580\u3068\u3059\u308B\u30D5\u30EB\u30B9\u30BF\u30C3\u30AF\u958B\u767A\u8005\u3002",
    cta: "\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3092\u898B\u308B",
    yearsExp: "\u5E74",
    projectsCount: "\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8",
  },
  availability: {
    highDemand: "\u9AD8\u9700\u8981",
    available: "\u5BFE\u5FDC\u53EF",
    moderate: "\u666E\u901A",
    busy: "\u591A\u5FD9",
    workload: "\u73FE\u5728\u306E\u4F5C\u696D\u91CF",
    rates: "料金",
    ratesFull: "プレミアム",
    availabilityBar: "空き状況",
    availabilityLow: "低い",
    limitedAvailability: "\u9650\u5B9A\u7684\u306A\u53D7\u4ED8",
    premiumRates: "\u30D7\u30EC\u30DF\u30A2\u30E0\u6599\u91D1",
    responseTime: "\u5FDC\u7B54\u6642\u9593\uFF1A48-72\u6642\u9593",
  },
  repoAge: {
    month: "\u30F6\u6708",
    months: "\u30F6\u6708",
    day: "\u65E5",
    days: "\u65E5",
    and: "",
    online: "\u30AA\u30F3\u30E9\u30A4\u30F3",
  },
  contributions: {
    title: "\u30B3\u30F3\u30C8\u30EA\u30D3\u30E5\u30FC\u30B7\u30E7\u30F3",
  },
  technologies: {
    title: "\u6280\u8853",
    subtitle:
      "\u512A\u308C\u305F\u30BD\u30EA\u30E5\u30FC\u30B7\u30E7\u30F3\u3092\u4F5C\u6210\u3059\u308B\u305F\u3081\u306B\u7FD2\u5F97\u3057\u305F\u30C4\u30FC\u30EB\u3068\u6280\u8853",
    hardware: "\u30CF\u30FC\u30C9\u30A6\u30A7\u30A2",
  },
  projects: {
    title: "\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8",
    velocity: {
      description:
        "\u30B2\u30FC\u30DF\u30F3\u30B0\u5411\u3051\u6700\u9069\u5316PC\u30D3\u30EB\u30C9\u306E\u8CA9\u58F2\u306B\u7279\u5316\u3057\u305F\u30A6\u30A7\u30D6\u30D7\u30E9\u30C3\u30C8\u30D5\u30A9\u30FC\u30E0\u3002",
      tags: ["React", "Next.js", "E\u30B3\u30DE\u30FC\u30B9"],
    },
    prolevelcode: {
      description:
        "\u30B3\u30FC\u30C9\u3092\u6B21\u306E\u30EC\u30D9\u30EB\u306B\u5F15\u304D\u4E0A\u3052\u308B\u30A6\u30A7\u30D6\u958B\u767A\u3068AI\u30B3\u30FC\u30B9\u30D7\u30E9\u30C3\u30C8\u30D5\u30A9\u30FC\u30E0\u3002",
      tags: ["React", "Next.js", "AI\u30B3\u30FC\u30B9"],
    },
    ivania: {
      description:
        "\u30C1\u30EA\u5168\u571F\u3078\u914D\u9001\u53EF\u80FD\u306A\u30B3\u30ED\u30F3\u30D3\u30A2\u88FD\u30D7\u30EC\u30DF\u30A2\u30E0\u30B7\u30A7\u30A4\u30D7\u30A6\u30A7\u30A2\u306E\u30AA\u30F3\u30E9\u30A4\u30F3\u30B9\u30C8\u30A2\u3002",
      tags: ["React", "Next.js", "E\u30B3\u30DE\u30FC\u30B9"],
    },
    l2j: {
      description:
        "Lineage IIのようなオンラインゲームサーバーを開発。永続ワールド、ログイン、ゲームプレイ、DB、ランチャー、マーケット、運用基盤まで対応。",
      tags: ["Java", "MMORPG", "MariaDB", "Game Server"],
    },
    gcpOauth: {
      description:
        "Playwright\u3092\u4F7F\u3063\u305FGoogle OAuth 2.0\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u4F5C\u6210\u306E\u81EA\u52D5\u5316\u2014\u30B3\u30DE\u30F3\u30C9\u4E00\u3064\u3067\u5B8C\u4E86\u3002",
      tags: ["Playwright", "Node.js", "GCP", "\u81EA\u52D5\u5316"],
    },
    garru: {
      description:
        "アンデスグマに着想を得たスペシャルティコーヒーショップのWeb体験・管理システム。",
      tags: ["Next.js", "PostgreSQL", "E-commerce", "Auth.js"],
    },
    doblez: {
      description:
        "テイクアウトとデリバリーに特化したブエノスアイレスのエンパナーダ店向けブランド体験、インタラクティブ店舗、運営ダッシュボード。",
      tags: ["Next.js", "TypeScript", "E-commerce", "UX/UI"],
    },
    pokescan: {
      description:
        "ポケモンカードの価格レーダー。毎日更新される14,000枚以上のカードからスパイクや掘り出し物を検出。プライベートアクセス。",
      tags: ["Python", "FastAPI", "PostgreSQL", "Data"],
    },
    sosvenezuela: {
      description:
        "ベネズエラM7.5地震（2026年6月24日）のリアルタイム協働マップ。地震後最初に公開されたWebアプリ。被害報告、行方不明者の捜索、避難所、応急処置情報。",
      tags: ["Next.js", "Leaflet", "ライブマップ", "災害対応"],
    },
    viewSite: "\u30B5\u30A4\u30C8\u3092\u898B\u308B",
    code: "\u30B3\u30FC\u30C9",
  },
  bots: {
    title: "\u81EA\u52D5\u5316Bot",
    subtitle: "Telegram Bot\u3068\u30D6\u30E9\u30A6\u30B6\u81EA\u52D5\u5316\u30A8\u30FC\u30B8\u30A7\u30F3\u30C8\u304C\u7E70\u308A\u8FD4\u3057\u306E\u30BF\u30B9\u30AF\u3092\u81EA\u52D5\u5316\u3057\u3001\u91CD\u8981\u306A\u3053\u3068\u306B\u96C6\u4E2D\u3067\u304D\u307E\u3059\u3002",
    hermes: {
      name: "Hermes Bot",
      description: "Playwright\u3068Sharp\u3092\u4F7F\u3063\u3066\u30B3\u30F3\u30C6\u30F3\u30C4\u53CE\u96C6\u3068AI\u5F37\u5316\u30E1\u30C7\u30A3\u30A2\u914D\u4FE1\u3092\u81EA\u52D5\u5316\u3059\u308BTelegram Bot\u3002",
    },
    tweetcurator: {
      name: "TweetCurator Bot",
      description: "AI\u3067\u30C8\u30EC\u30F3\u30C9\u30C4\u30A4\u30FC\u30C8\u3092\u30AD\u30E5\u30EC\u30FC\u30B7\u30E7\u30F3\u3057\u3001\u6BF5\u65E5\u30C0\u30A4\u30B8\u30A7\u30B9\u30C8\u3092Telegram\u306B\u914D\u4FE1\u3002",
    },
    messenger: {
      name: "Messenger Bot",
      description: "Anthropic AI\u3068Supabase\u3092\u4F7F\u3063\u3066\u30E1\u30C3\u30BB\u30FC\u30B8\u306B\u81EA\u52D5\u8FD4\u4FE1\u3059\u308BAI\u642D\u8F09Chrome\u62E1\u5F35\u6A5F\u80FD\u3002",
    },
    statusLabels: {
      operational: "\u7A3C\u50CD\u4E2D",
      development: "\u958B\u767A\u4E2D",
    },
    whatsappMessage: "\u3053\u3093\u306B\u3061\u306F\uFF01{bot}\u306B\u8208\u5473\u304C\u3042\u308A\u307E\u3059\u3002\u8A73\u3057\u304F\u6559\u3048\u3066\u3044\u305F\u3060\u3051\u307E\u3059\u304B\uFF1F",
    interested: "\u8208\u5473\u304C\u3042\u308A\u307E\u3059",
    ctaWhatsappMessage: "\u3053\u3093\u306B\u3061\u306F\uFF01\u30D3\u30B8\u30CD\u30B9\u5411\u3051\u306E\u30AB\u30B9\u30BF\u30E0\u81EA\u52D5\u5316Bot\u3092\u4F5C\u308A\u305F\u3044\u3067\u3059\u3002",
    cta: {
      title: "\u30AB\u30B9\u30BF\u30E0Bot\u304C\u5FC5\u8981\u3067\u3059\u304B\uFF1F",
      description: "\u30EF\u30FC\u30AF\u30D5\u30ED\u30FC\u306B\u5408\u308F\u305BTelegram Bot\u3068\u30D6\u30E9\u30A6\u30B6\u81EA\u52D5\u5316\u3092\u69CB\u7BC9\u3057\u307E\u3059\u3002\u304A\u554F\u3044\u5408\u308F\u305B\u304F\u3060\u3055\u3044\u3002",
      button: "WhatsApp\u3067\u9023\u7D61",
    },
  },
  contact: {
    title: "\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306E\u30A2\u30A4\u30C7\u30A2\u304C\u3042\u308A\u307E\u3059\u304B\uFF1F",
    subtitle:
      "\u65B0\u3057\u3044\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3084\u30B3\u30E9\u30DC\u30EC\u30FC\u30B7\u30E7\u30F3\u306E\u3054\u76F8\u8AC7\u3092\u304A\u5F85\u3061\u3057\u3066\u3044\u307E\u3059\uFF01",
  },
  footer: {
    copyright:
      "\u00A9 2026 Juan Fernandez. \u5168\u8457\u4F5C\u6A29\u6240\u6709\u3002",
  },
};

export default ja;
