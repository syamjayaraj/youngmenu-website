import { Modal, ModalBody } from "reactstrap";
import imageUrl from "@/utils/generate-image-url";
import { CarouselComponent } from "../CarouselComponent";
import { IIngredient, IItem, IStoreDetails } from "@/model/models";
import RichText from "../RichText";
import Link from "next/link";

interface CustomProps {
  data: IItem;
  handleItemModalClose: any;
  storeDetails: IStoreDetails;
}

export function ItemModal({
  data,
  handleItemModalClose,
  storeDetails,
}: CustomProps) {
  const images = data?.image?.data
    ? data?.image?.data?.map(
        (item: any) => `${imageUrl(item?.attributes?.url)}`
      )
    : [];

  console.log(data?.ingredients?.data, "inc");

  return (
    <>
      <Modal isOpen={data?.name ? true : false} className="item-modal">
        <ModalBody className="modal-body">
          <div className="modal-icon-container" onClick={handleItemModalClose}>
            <i className="mdi mdi-close"></i>
          </div>
          <CarouselComponent data={images} type="item-slider" />
          <div className="modal-body-details">
            <h3 className="title">{data?.name}</h3>
            <div className="description">
              {data?.description ? (
                <RichText data={data?.description} />
              ) : (
                <p>{data?.shortDescription}</p>
              )}
            </div>
            <div className="ingredients">
              {data?.ingredients?.data?.map(
                (ingredient: IIngredient, index: number) => {
                  return (
                    <div className="ingredient" key={"ingredient" + index}>
                      {ingredient?.attributes?.name}
                    </div>
                  );
                }
              )}
            </div>
            <div className="price-card-container">
              {data?.variant?.map((item: any, index: number) => {
                return (
                  <div className="price-card" key={"variant" + index}>
                    <div className="price-card-section1">{item?.name}</div>
                    <div className="price-card-section2">
                      <span>{storeDetails?.currency}</span>
                      {item?.price}
                    </div>
                  </div>
                );
              })}
            </div>
            {storeDetails?.callButton?.absoluteUrl && (
              <a
                href={storeDetails?.callButton?.absoluteUrl}
                className="order-now"
              >
                <i className="fas fa-phone-volume"></i>
                {storeDetails?.callButton?.label}
              </a>
            )}
            {storeDetails?.callButton?.relativeUrl && (
              <Link
                href={storeDetails?.callButton?.relativeUrl}
                className="order-now"
              >
                <i className="fas fa-phone-volume"></i>
                {storeDetails?.callButton?.label}
              </Link>
            )}
          </div>
        </ModalBody>
      </Modal>
    </>
  );
}
