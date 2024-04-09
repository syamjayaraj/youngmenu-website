import { loadStoreDetails } from "@/apiService/apiService";
import { IStoreDetails } from "@/model/models";
import StorePageContainer from "@/components/store/StorePageContainer";

type Props = {
  params: { slug: string };
};

export default async function Store({ params }: Props) {
  const storeData: IStoreDetails = await loadStoreDetails(params?.slug);

  return (
    <>
      <StorePageContainer data={storeData} />
    </>
  );
}
