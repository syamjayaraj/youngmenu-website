import { loadStoreSlugs } from "@/apiService/apiService";

const Sitemap = async () => {
  const storeSlugs = await loadStoreSlugs("en");
  console.log(storeSlugs, "sitemap");

  const storeSlugsSitemap = storeSlugs?.map((item: any) => {
    const sitemapItemFormatted = {
      url: `https://youngmenu.com/store/${item?.attributes?.slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    };
    return sitemapItemFormatted;
  });

  return [
    {
      url: `https://youngmenu.com`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    ...storeSlugsSitemap,
  ];
};
export default Sitemap;
