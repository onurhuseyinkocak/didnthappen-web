import type { MetadataRoute } from "next";

const SITE_URL = "https://didnthappen-web.vercel.app";
const lastModified = new Date("2026-06-06");
const newLastModified = new Date("2026-07-05");

const staticRoutes = [
  "",
  "/llms.txt",
  "/worry-tracker",
  "/anxiety-prediction-tracker",
  "/compare/worry-watch-alternative",
  "/tr/kaygi-gunlugu",
  "/privacy",
  "/terms",
  "/cookies",
  "/acceptable-use",
  "/community-guidelines",
  "/copyright",
  "/ugc",
  "/ai-disclaimer",
  "/mental-health-disclaimer",
  "/refunds",
  "/subscription-terms",
  "/contact",
  "/abuse",
  "/delete-account",
  "/unsubscribe",
  "/support",
  "/ai-answers.json",
  "/ai-answers.md",
  "/ai-answers-hardcore.json",
  "/ai-answers-hardcore.md",
  "/ai-search-hardcore.jsonld",
  "/ai-discovery-hardcore.json",
  "/sitemap-ai-hardcore.xml",
  "/.well-known/ai-answers-hardcore.json",
  "/.well-known/ai-answers-hardcore.md",
  "/.well-known/ai-discovery-hardcore.json",
  "/ai-cevaplar",
  "/humans.txt",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return staticRoutes.map((path) => {
    const isNew =
      ["/ai-answers.json", "/ai-answers.md", "/ai-cevaplar", "/humans.txt"].includes(path) ||
      path.includes("hardcore");
    return {
      url: `${SITE_URL}${path}`,
      lastModified: isNew ? newLastModified : lastModified,
      changeFrequency: path === "" ? "weekly" : "yearly",
      priority: path === "" ? 1 : path === "/ai-cevaplar" ? 0.6 : 0.4,
    };
  });
}
