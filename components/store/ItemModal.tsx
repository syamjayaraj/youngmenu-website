import {
  Carousel,
  CarouselControl,
  CarouselIndicators,
  Modal,
  ModalBody,
} from "reactstrap";
import { useRouter } from "next/router";

interface CustomProps {
  data: any;
  handleItemModalClose: any;
  storeDetails: any;
}

export function ItemModal({
  data,
  handleItemModalClose,
  storeDetails,
}: CustomProps) {
  return (
    <>
      <Modal isOpen={data?.name ? true : false} className="menu-modal">
        <ModalBody className="modal-body">
          <div className="modal-icon-container" onClick={handleItemModalClose}>
            <i className="mdi mdi-close"></i>
          </div>
          <div className="modal-body-details">
            <h3>{data?.name}</h3>
            <p>{data?.about} </p>
            <div className="price-card-container">
              {data?.variant?.map((item: any, index: number) => (
                <div className="price-card" key={index}>
                  {item?.variety ? (
                    <div className="price-card-section1">{item?.variety}</div>
                  ) : null}
                  <div className="price-card-section2">
                    <span>{storeDetails?.currency}</span>
                    {item?.price}
                  </div>
                </div>
              ))}
            </div>
            <a href={`tel:${data?.store?.phoneNumber}`} className="order-now">
              <i className="fas fa-phone-volume"></i>
              Order now
            </a>
          </div>
        </ModalBody>
      </Modal>
    </>
  );
}
