import type { Translations } from "./index";

const zh: Translations = {
  nav: {
    about: "\u5173\u4E8E",
    technologies: "\u6280\u672F",
    projects: "\u9879\u76EE",
    contact: "\u8054\u7CFB",
  },
  hero: {
    greeting: "\u4F60\u597D\uFF0C\u6211\u662F",
    subtitle:
      "\u5168\u6808\u5F00\u53D1\u8005\uFF0C\u4E13\u6CE8\u4E8E\u4F7F\u7528\u73B0\u4EE3\u6280\u672F\u6784\u5EFA\u53EF\u6269\u5C55\u4E14\u9AD8\u6548\u7684\u5E94\u7528\u7A0B\u5E8F\u3002",
    cta: "\u67E5\u770B\u9879\u76EE",
    yearsExp: "\u5E74",
    projectsCount: "\u4E2A\u9879\u76EE",
  },
  availability: {
    highDemand: "\u9AD8\u9700\u6C42",
    available: "\u53EF\u7528",
    moderate: "\u4E2D\u7B49",
    busy: "\u5FD9\u788C",
    workload: "\u5F53\u524D\u5DE5\u4F5C\u91CF",
    rates: "费率",
    ratesFull: "高端",
    availabilityBar: "可用性",
    availabilityLow: "低",
    limitedAvailability: "\u6709\u9650\u53EF\u7528\u6027",
    premiumRates: "\u9AD8\u7EA7\u8D39\u7387",
    responseTime: "\u54CD\u5E94\u65F6\u95F4\uFF1A48-72\u5C0F\u65F6",
  },
  repoAge: {
    month: "\u4E2A\u6708",
    months: "\u4E2A\u6708",
    day: "\u5929",
    days: "\u5929",
    and: "",
    online: "\u5728\u7EBF",
  },
  contributions: {
    title: "\u8D21\u732E",
  },
  technologies: {
    title: "\u6280\u672F",
    subtitle: "\u6211\u638C\u63E1\u7684\u5DE5\u5177\u548C\u6280\u672F\uFF0C\u7528\u4E8E\u521B\u5EFA\u5353\u8D8A\u7684\u89E3\u51B3\u65B9\u6848",
    hardware: "\u786C\u4EF6",
  },
  projects: {
    title: "\u9879\u76EE",
    velocity: {
      description: "\u4E13\u6CE8\u4E8E\u9500\u552E\u6E38\u620F\u4F18\u5316PC\u914D\u7F6E\u7684\u7F51\u7EDC\u5E73\u53F0\u3002",
      tags: ["React", "Next.js", "\u7535\u5B50\u5546\u52A1"],
    },
    prolevelcode: {
      description:
        "\u7F51\u7EDC\u5F00\u53D1\u548CAI\u8BFE\u7A0B\u5E73\u53F0\uFF0C\u5C06\u4F60\u7684\u4EE3\u7801\u63D0\u5347\u5230\u65B0\u6C34\u5E73\u3002",
      tags: ["React", "Next.js", "AI\u8BFE\u7A0B"],
    },
    ivania: {
      description: "\u54E5\u4F26\u6BD4\u4E9A\u9AD8\u7AEF\u5851\u8EAB\u8863\u5728\u7EBF\u5546\u5E97\uFF0C\u53D1\u8D27\u81F3\u667A\u5229\u5168\u5883\u3002",
      tags: ["React", "Next.js", "\u7535\u5B50\u5546\u52A1"],
    },
    l2j: {
      description:
        "开发类似 Lineage II 的在线游戏服务器，涵盖持久世界、登录、玩法、数据库、启动器、交易市场和生产基础设施。",
      tags: ["Java", "MMORPG", "MariaDB", "Game Server"],
    },
    gcpOauth: {
      description:
        "\u4F7F\u7528Playwright\u81EA\u52A8\u5316GCP\u4E2D\u7684Google OAuth 2.0\u521B\u5EFA\u2014\u4E00\u4E2A\u547D\u4EE4\uFF0C\u96F6\u624B\u52A8\u64CD\u4F5C\u3002",
      tags: ["Playwright", "Node.js", "GCP", "\u81EA\u52A8\u5316"],
    },
    garru: {
      description:
        "受安第斯熊启发的精品咖啡店网站体验与管理系统。",
      tags: ["Next.js", "PostgreSQL", "E-commerce", "Auth.js"],
    },
    pokescan: {
      description:
        "宝可梦卡牌价格雷达：每日更新14,000+张卡牌，追踪价格飙升与隐藏宝石。私人访问。",
      tags: ["Python", "FastAPI", "PostgreSQL", "Data"],
    },
    sosvenezuela: {
      description:
        "委内瑞拉M7.5地震（2026年6月24日）实时协作地图——震后首个上线的Web应用。灾损报告、寻人、避难所与急救信息。",
      tags: ["Next.js", "Leaflet", "实时地图", "危机响应"],
    },
    viewSite: "\u67E5\u770B\u7F51\u7AD9",
    code: "\u4EE3\u7801",
  },
  bots: {
    title: "\u81EA\u52A8\u5316\u673A\u5668\u4EBA",
    subtitle: "Telegram\u673A\u5668\u4EBA\u548C\u6D4F\u89C8\u5668\u81EA\u52A8\u5316\u4EE3\u7406\uFF0C\u81EA\u52A8\u5316\u91CD\u590D\u4EFB\u52A1\uFF0C\u8BA9\u60A8\u4E13\u6CE8\u4E8E\u91CD\u8981\u7684\u4E8B\u60C5\u3002",
    hermes: {
      name: "Hermes Bot",
      description: "\u4F7F\u7528Playwright\u548CSharp\u81EA\u52A8\u5316\u5185\u5BB9\u6293\u53D6\u548CAI\u589E\u5F3A\u5A92\u4F53\u4EA4\u4ED8\u7684Telegram\u673A\u5668\u4EBA\u3002",
    },
    tweetcurator: {
      name: "TweetCurator Bot",
      description: "\u901A\u8FC7AI\u7B5B\u9009\u548C\u603B\u7ED3\u70ED\u95E8\u63A8\u6587\uFF0C\u6BCF\u65E5\u5C06\u6458\u8981\u53D1\u9001\u5230Telegram\u3002",
    },
    messenger: {
      name: "Messenger Bot",
      description: "\u4F7F\u7528Anthropic AI\u548CSupabase\u81EA\u52A8\u56DE\u590D\u6D88\u606F\u7684AI\u9A71\u52A8Chrome\u6269\u5C55\u3002",
    },
    statusLabels: {
      operational: "\u8FD0\u884C\u4E2D",
      development: "\u5F00\u53D1\u4E2D",
    },
    whatsappMessage: "\u60A8\u597D\uFF01\u6211\u5BF9{bot}\u611F\u5174\u8DA3\u3002\u80FD\u544A\u8BC9\u6211\u66F4\u591A\u5417\uFF1F",
    interested: "\u6211\u611F\u5174\u8DA3",
    ctaWhatsappMessage: "\u60A8\u597D\uFF01\u6211\u60F3\u8981\u4E00\u4E2A\u9002\u5408\u6211\u4E1A\u52A1\u7684\u81EA\u5B9A\u4E49\u81EA\u52A8\u5316\u673A\u5668\u4EBA\u3002",
    cta: {
      title: "\u9700\u8981\u5B9A\u5236\u673A\u5668\u4EBA\uFF1F",
      description: "\u6211\u6784\u5EFATelegram\u673A\u5668\u4EBA\u548C\u6D4F\u89C8\u5668\u81EA\u52A8\u5316\uFF0C\u91CF\u8EAB\u5B9A\u5236\u60A8\u7684\u5DE5\u4F5C\u6D41\u7A0B\u3002\u8BF7\u8054\u7CFB\u6211\u3002",
      button: "\u901A\u8FC7WhatsApp\u8054\u7CFB",
    },
  },
  contact: {
    title: "\u6709\u9879\u76EE\u60F3\u6CD5\uFF1F",
    subtitle: "\u6211\u53EF\u4EE5\u63A5\u53D7\u65B0\u9879\u76EE\u548C\u5408\u4F5C\u3002\u8BA9\u6211\u4EEC\u804A\u804A\uFF01",
  },
  footer: {
    copyright: "\u00A9 2026 Juan Fernandez. \u7248\u6743\u6240\u6709\u3002",
  },
};

export default zh;
