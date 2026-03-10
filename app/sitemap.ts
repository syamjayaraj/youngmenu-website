const Sitemap = async () => {
  return [
    {
      url: `https://youngmenu.com`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
  ];
};
export default Sitemap;
