import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: "https://www.bizosto.com/",
      lastModified,
    },
    {
      url: "https://www.bizosto.com/product",
      lastModified,
    },
    {
      url: "https://www.bizosto.com/how-it-works",
      lastModified,
    },
    {
      url: "https://www.bizosto.com/pricing",
      lastModified,
    },
    {
      url: "https://www.bizosto.com/book-demo",
      lastModified,
    },
    {
      url: "https://www.bizosto.com/contact",
      lastModified,
    },
  ];
}
