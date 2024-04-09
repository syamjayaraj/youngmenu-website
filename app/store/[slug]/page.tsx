import { loadStoreDetails, loadStorePageSeo } from "@/apiService/apiService";
import { ISeo, IStoreDetails } from "@/model/models";
import StorePageContainer from "@/components/store/StorePageContainer";
import { Metadata } from "next";

type Props = {
  params: { slug: string };
};

const Store = async ({ params }: Props) => {
  const storeData: IStoreDetails = await loadStoreDetails(params?.slug);
  console.log(storeData, "store");

  return (
    <>
      <StorePageContainer data={storeData} />
    </>
  );
};

export default Store;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const seo: ISeo = await loadStorePageSeo(params?.slug);
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
    },
  };
}

// export const revalidate = 360;
