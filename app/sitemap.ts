import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    { url: "https://www.bizosto.com/", lastModified },
    { url: "https://www.bizosto.com/product", lastModified },
    { url: "https://www.bizosto.com/integrations", lastModified },
    { url: "https://www.bizosto.com/use-cases", lastModified },
    { url: "https://www.bizosto.com/use-cases/agencies", lastModified },
    { url: "https://www.bizosto.com/use-cases/consulting", lastModified },
    { url: "https://www.bizosto.com/use-cases/operations", lastModified },
    { url: "https://www.bizosto.com/how-it-works", lastModified },
    { url: "https://www.bizosto.com/pricing", lastModified },
    { url: "https://www.bizosto.com/book-demo", lastModified },
    { url: "https://www.bizosto.com/contact", lastModified },
  ];
}
