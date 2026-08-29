import type { Translations } from "./index";

const ja: Translations = {
  nav: {
    about: "\u6982\u8981",
    technologies: "\u6280\u8853",
    projects: "\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8",
    bots: "ボット",
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
    trumark: {
      description: "Trumark\u306E\u8A8D\u8A3C\u30FB\u8CA9\u58F2\u30D7\u30E9\u30C3\u30C8\u30D5\u30A9\u30FC\u30E0\u3002\u88FD\u54C1\u7BA1\u7406\u3068\u76F4\u63A5\u9023\u7D61\u6A5F\u80FD\u3002",
      tags: ["React", "Next.js", "\u30D7\u30E9\u30C3\u30C8\u30D5\u30A9\u30FC\u30E0"],
    },
    fashionmodel: {
      description: "\u30E2\u30C7\u30EB\u3068\u30D6\u30E9\u30F3\u30C9\u5411\u3051\u306EAI\u30D5\u30A1\u30C3\u30B7\u30E7\u30F3\u5199\u771F\u30B8\u30A7\u30CD\u30EC\u30FC\u30BF\u30FC\u3002",
      tags: ["React", "Next.js", "AI"],
    },
    camisas: {
      description: "\u30EC\u30C8\u30ED\u30FB\u30AA\u30EB\u30BF\u30CA\u30C6\u30A3\u30D6\u30B5\u30C3\u30AB\u30FC\u30B7\u30E3\u30C4\u306EE\u30B3\u30DE\u30FC\u30B9\u3002\u72EC\u5360\u30C7\u30B6\u30A4\u30F3\u3002",
      tags: ["React", "Next.js", "E\u30B3\u30DE\u30FC\u30B9"],
    },
    viewSite: "\u30B5\u30A4\u30C8\u3092\u898B\u308B",
    code: "\u30B3\u30FC\u30C9",
  },
  community: {
    title: "\u30B3\u30DF\u30E5\u30CB\u30C6\u30A3\u3078\u306E\u8CA2\u732E",
    subtitle: "\u958B\u767A\u8005\u30B3\u30DF\u30E5\u30CB\u30C6\u30A3\u5411\u3051\u306E\u30AA\u30FC\u30D7\u30F3\u30BD\u30FC\u30B9\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8",
    glassRefraction: {
      description: "CSS\u3068SVG\u30D5\u30A3\u30EB\u30BF\u30FC\u3067iOS 26\u306E\u30AC\u30E9\u30B9\u5C48\u6298\u52B9\u679C\u3092\u518D\u73FE\u3059\u308B\u30E9\u30A4\u30D6\u30E9\u30EA\u3002",
      tags: ["CSS", "SVG", "iOS 26", "\u30AA\u30FC\u30D7\u30F3\u30BD\u30FC\u30B9"],
    },
    viewRepo: "\u30EA\u30DD\u30B8\u30C8\u30EA\u3092\u898B\u308B",
    stars: "\u30B9\u30BF\u30FC",
  },
  contact: {
    title: "\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306E\u30A2\u30A4\u30C7\u30A2\u304C\u3042\u308A\u307E\u3059\u304B\uFF1F",
    subtitle:
      "\u65B0\u3057\u3044\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3084\u30B3\u30E9\u30DC\u30EC\u30FC\u30B7\u30E7\u30F3\u306E\u3054\u76F8\u8AC7\u3092\u304A\u5F85\u3061\u3057\u3066\u3044\u307E\u3059\uFF01",
  },
  bots: {
    "title": "Agentic ボットと自動化",
    "subtitle": "AI搭載のTelegramボットで実際のビジネスワークフローを自動化——マーケットプレイス出品からSNSキュレーションまで。",
    "statusLabels": {
        "operational": "稼働中",
        "development": "開発中",
        "offline": "オフライン"
    },
    "hermes": {
        "name": "Agentic Marketplace Publisher",
        "description": "Facebook Marketplaceへの出品を自動化——PC構成の作成、写真への透かし追加、説明文の生成、Telegramから直接出品。"
    },
    "tweetcurator": {
        "name": "Agentic TweetCurator",
        "description": "キュレーターからのGitHubトレンドリポジトリコンテンツを、クリエイターの独自の声とスタイルに合わせたパーソナライズされたツイートに変換。AIでキュレーション・書き換えし、Telegram経由で全パイプラインを自動化。"
    },
    "messenger": {
        "name": "Agentic Marketplace Responder",
        "description": "AI搭載のチャットボットがFacebook Marketplaceの問い合わせに自動応答、価格交渉、リアルタイムでの顧客対話管理を行います。"
    },
    "interested": "興味がありますか？",
    "whatsappMessage": "こんにちは、{bot}ボットに興味があります",
    "ctaWhatsappMessage": "こんにちは、AI Agentic Bot Marketplaceに興味があります",
    "cta": {
        "title": "AIエージェントボットマーケットプレイス",
        "description": "ビジネスを自動化するカスタムボットが必要ですか？アイデアからデプロイまで一緒に構築しましょう。",
        "button": "相談する"
    }
},
  footer: {
    copyright:
      "\u00A9 2026 Juan Fernandez. \u5168\u8457\u4F5C\u6A29\u6240\u6709\u3002",
  },
};

export default ja;
