import type { MetadataRoute } from "next";

const SITE_URL = "https://didnthappen-web.vercel.app";
const lastModified = new Date("2026-06-06");

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
];

export default function sitemap(): MetadataRoute.Sitemap {
  return staticRoutes.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified,
    changeFrequency: path === "" ? "weekly" : "yearly",
    priority: path === "" ? 1 : 0.4,
  }));
}
