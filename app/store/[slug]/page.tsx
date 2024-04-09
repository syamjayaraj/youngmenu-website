import { loadStoreDetails } from "@/apiService/apiService";
import { IStoreDetails } from "@/model/models";
import StorePageContainer from "@/components/store/StorePageContainer";

type Props = {
  params: { slug: string };
};

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
