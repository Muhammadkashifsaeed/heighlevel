import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://grow-heigh-level.vercel.app";

  return [
    { url: baseUrl, changeFrequency: "daily", priority: 1 },
    { url: `${baseUrl}/services`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/services/ai-chatbot-agents`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/services/crm-done-for-you`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/services/n8n-automation`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/services/website-funnel`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/services/media-buyer`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/services/white-label`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/grow-saas`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/hire-expert`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/testimonials`, changeFrequency: "weekly", priority: 0.7 },
    { url: `${baseUrl}/portfolio`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/blogs`, changeFrequency: "weekly", priority: 0.7 },
    { url: `${baseUrl}/contact`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/faq`, changeFrequency: "monthly", priority: 0.6 },
  ];
}
