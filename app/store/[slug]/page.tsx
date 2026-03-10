import { loadStoreDetails, loadStoresPath } from "@/apiService/apiService";
import StorePageContainer from "@/components/store/StorePageContainer";
import ComingSoon from "@/components/home/ComingSoon";

type Props = {
  params: { slug: string };
};

export const revalidate = 60;

export async function generateStaticParams() {
  return [];
}

export default async function Store({ params }: Props) {
  let storeData = null;
  try {
    storeData = await loadStoreDetails(params?.slug);
  } catch (error) {
    console.error("Error loading store details:", error);
  }

  if (!storeData) {
    return <ComingSoon />;
  }

  return (
    <>
      <StorePageContainer data={storeData} />
    </>
  );
}
