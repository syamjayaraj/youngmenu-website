import { loadStoreDetails } from "@/apiService/apiService";
import StorePageContainer from "@/components/store/StorePageContainer";

type Props = {
  params: { slug: string };
};

export const revalidate = 3600;

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
