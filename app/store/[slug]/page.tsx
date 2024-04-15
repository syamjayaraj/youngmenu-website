import { loadStoreDetails, loadStoresPath } from "@/apiService/apiService";
import StorePageContainer from "@/components/store/StorePageContainer";

type Props = {
  params: { slug: string };
};

export const revalidate = 360;

export async function generateStaticParams() {
  const storesPath = await loadStoresPath();
  return storesPath?.map((store: any) => ({
    slug: store?.attributes?.slug,
  }));
}

export default async function Store({ params }: Props) {
  let storeData = null;
  do {
    storeData = await loadStoreDetails(params?.slug);
  } while (!storeData);

  return (
    <>
      <StorePageContainer data={storeData} />
    </>
  );
}
