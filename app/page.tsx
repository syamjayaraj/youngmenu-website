import { loadHomePage } from "@/apiService/apiService";
import { Contact } from "@/components/home/Contact";
import Header from "@/components/home/Header";
import { Pricing } from "@/components/home/Pricing";
import { Products } from "@/components/home/Products";
import SearchStores from "@/components/home/SearchStores";
import Testimonial from "@/components/home/Testimonial";

const Home = async () => {
  const homePageData: any = await loadHomePage("en");

  const { header, searchStore } = homePageData;

  return (
    <>
      <Header pageData={header} />
      <SearchStores pageData={searchStore} />
      <Products />
      <Testimonial />
      <Pricing />
      <Contact />
    </>
  );
};

export default Home;
