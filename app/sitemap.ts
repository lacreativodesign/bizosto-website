import type { MetadataRoute } from "next";
import { getAllSlugs } from "@/lib/blog-posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const blogUrls = getAllSlugs().map((slug) => ({
    url: `https://www.bizosto.com/blog/${slug}`,
    lastModified,
  }));

  return [
    { url: "https://www.bizosto.com/", lastModified },
    { url: "https://www.bizosto.com/product", lastModified },
    { url: "https://www.bizosto.com/integrations", lastModified },
    { url: "https://www.bizosto.com/use-cases", lastModified },
    { url: "https://www.bizosto.com/use-cases/agencies", lastModified },
    { url: "https://www.bizosto.com/use-cases/consulting", lastModified },
    { url: "https://www.bizosto.com/use-cases/operations", lastModified },
    { url: "https://www.bizosto.com/how-it-works", lastModified },
    { url: "https://www.bizosto.com/ai-workforce", lastModified },
    { url: "https://www.bizosto.com/pricing", lastModified },
    { url: "https://www.bizosto.com/blog", lastModified },
    ...blogUrls,
    { url: "https://www.bizosto.com/book-demo", lastModified },
    { url: "https://www.bizosto.com/contact", lastModified },
    { url: "https://www.bizosto.com/about", lastModified },
    { url: "https://www.bizosto.com/privacy", lastModified },
    { url: "https://www.bizosto.com/terms", lastModified },
    { url: "https://www.bizosto.com/refund-policy", lastModified },
    { url: "https://www.bizosto.com/cookies", lastModified },
    { url: "https://www.bizosto.com/security", lastModified },
  ];
}
