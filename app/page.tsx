import { loadHomePage, loadNavigation } from "@/apiService/apiService";
import Navigation from "@/components/Navigation";
import Contact from "@/components/home/Contact";
import Header from "@/components/home/Header";
import Pricing from "@/components/home/Pricing";
import Products from "@/components/home/Products";
import SearchMenu from "@/components/home/SearchMenu";
import Client from "@/components/home/Client";

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
