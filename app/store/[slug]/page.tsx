import { loadStoreDetails } from "@/apiService/apiService";
import { IStoreDetails } from "@/model/models";
import StorePageContainer from "@/components/store/StorePageContainer";

const Store = async ({ params }: { params: { slug: string } }) => {
  // const [activeIndex, setActiveIndex] = useState(0);
  // const [animating, setAnimating] = useState(false);

  // const items =
  //   itemPopup.images && itemPopup.images.length !== 0 ? itemPopup.images : [];
  // let onExiting = () => {
  //   setAnimating(true);
  // };

  // let onExited = () => {
  //   setAnimating(false);
  // };

  // let next = () => {
  //   if (animating) return;
  //   const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
  //   setActiveIndex(nextIndex);
  // };

  // let previous = () => {
  //   if (animating) return;
  //   const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
  //   setActiveIndex(nextIndex);
  // };

  // let goToIndex = (newIndex: number) => {
  //   if (animating) return;
  //   setActiveIndex(newIndex);
  // };

  // const slides = items.map((item, index: number) => {
  //   return (
  //     <CarouselItem onExiting={onExiting} onExited={onExited} key={index + 123}>
  //       <img src={item} className={styles.modalImage} />
  //     </CarouselItem>
  //   );
  // });

  const storeData: IStoreDetails = await loadStoreDetails(params?.slug);

  return (
    <>
      <StorePageContainer data={storeData} />
    </>
  );
};

export default Store;
