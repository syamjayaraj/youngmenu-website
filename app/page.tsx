import {
  loadHomePage,
  loadNavigation,
  loadStoreSlugs,
} from "@/apiService/apiService";
import Navigation from "@/components/Navigation";
import Contact from "@/components/home/Contact";
import Header from "@/components/home/Header";
import Pricing from "@/components/home/Pricing";
import Products from "@/components/home/Products";
import SearchMenu from "@/components/home/SearchMenu";
import Client from "@/components/home/Client";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "YoungMenu - Elevate Your Restaurant or Home Bakery Business",
  description:
    "Manage your restaurant or bakery effortlessly with YoungMenu. Simplify operations, attract more customers, and enhance your culinary offerings with our easy-to-use platform tailored for restaurant owners and home bakers",
  keywords:
    "restaurant management, bakery management, business solutions, food industry, streamline operations",
  openGraph: {
    type: "website",
    url: `https://youngmenu.com`,
    title: "YoungMenu - Elevate Your Restaurant or Home Bakery Business",
    description:
      "Manage your restaurant or bakery effortlessly with YoungMenu. Simplify operations, attract more customers, and enhance your culinary offerings with our easy-to-use platform tailored for restaurant owners and home bakers",
    siteName: "YoungMenu",
  },
};

const Home = async () => {
  const homePageData: any = await loadHomePage("en");
  const navigationData: any = await loadNavigation("en");
  const { header, searchStore, products, client, pricing, contact } =
    homePageData;

  return (
    <>
      <Navigation data={navigationData} />
      <Header pageData={header} />
      <SearchMenu pageData={searchStore} />
      <Products pageData={products} />
      <Client pageData={client} />
      <Pricing pageData={pricing} />
      <Contact pageData={contact} />
    </>
  );
};

export default Home;
