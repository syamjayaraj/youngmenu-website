import { loadStoreSlugs } from "@/apiService/apiService";
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const storeSlugs = loadStoreSlugs();

  return [
    {
      url: "https://acme.com",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
