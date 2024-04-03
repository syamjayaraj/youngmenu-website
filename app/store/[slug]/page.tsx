import { loadStoreDetails } from "@/apiService/apiService";
import { IStoreDetails } from "@/model/models";
import StorePageContainer from "@/components/store/StorePageContainer";
import { Metadata } from "next";

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const storeSeoDetails: IStoreDetails = await loadStoreDetails(params?.slug);
  const keywords = `${storeSeoDetails?.name}, ${storeSeoDetails?.address}, ${storeSeoDetails?.slug}`;
  return {
    title: `${storeSeoDetails?.name} - YoungMenu`,
    description: storeSeoDetails?.about,
    keywords: keywords,
    openGraph: {
      type: "website",
      url: `https://youngmenu.com/${storeSeoDetails?.slug}`,
      title: storeSeoDetails?.name,
      description: storeSeoDetails?.about,
      siteName: "YoungMenu",
    },
  };
}

const Store = async ({ params }: { params: { slug: string } }) => {
  const storeData: IStoreDetails = await loadStoreDetails(params?.slug);

  return (
    <>
      <StorePageContainer data={storeData} />
    </>
  );
};

export default Store;
