import {
  loadHomePage,
  loadHomePageSeo,
  loadNavigation,
} from "@/apiService/apiService";
import Navigation from "@/components/Navigation";
import Contact from "@/components/home/Contact";
import Header from "@/components/home/Header";
import Pricing from "@/components/home/Pricing";
import Products from "@/components/home/Products";
import VirtualMenu from "@/components/home/VirtualMenu";
import Client from "@/components/home/Client";
import { Metadata } from "next";
import { ISeo } from "@/model/models";
import imageUrl from "@/utils/generate-image-url";

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const seo: ISeo = await loadHomePageSeo("en");
  return {
    title: seo?.title,
    description: seo?.description,
    keywords: seo?.keywords,
    openGraph: {
      type: seo?.ogType ?? "website",
      url: seo?.ogUrl,
      title: seo?.ogTitle,
      description: seo?.ogDescription,
      siteName: seo?.ogSiteName,
      images: [imageUrl(seo?.ogImage?.data?.attributes?.url)],
    },
  };
}

const Home = async () => {
  const navigationData: any = await loadNavigation("en");
  const homePageData: any = await loadHomePage("en");
  const { header, searchStore, products, client, pricing, contact } =
    homePageData;
  return (
    <>
      <Navigation data={navigationData} />
      <Header pageData={header} />
      <VirtualMenu pageData={searchStore} />
      {/* <Products pageData={products} /> */}
      <Client pageData={client} />
      <Pricing pageData={pricing} />
      <Contact pageData={contact} />
    </>
  );
};

export default Home;

export const revalidate = 360;
