"use client";
import {
  Carousel,
  CarouselControl,
  CarouselIndicators,
  CarouselItem,
  Modal,
  ModalBody,
} from "reactstrap";
import { useState } from "react";
import imageUrl from "@/utils/generate-image-url";

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
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const images = data?.image?.data
    ? data?.image?.data?.map(
        (item: any) => `${imageUrl(item?.attributes?.url)}`
      )
    : [];

  const onExiting = () => {
    setAnimating(true);
  };

  const onExited = () => {
    setAnimating(false);
  };

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === images?.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? images?.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex: number) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = images?.map((item: any, index: number) => {
    return (
      <CarouselItem
        onExiting={onExiting}
        onExited={onExited}
        key={"carousel-item" + index}
      >
        <img
          src={item}
          alt="Item Image"
          className="modal-image"
          // layout={"fill"}
          // objectFit={"contain"}
        />
      </CarouselItem>
    );
  });

  return (
    <>
      <Modal isOpen={data?.name ? true : false} className="menu-modal">
        <ModalBody className="modal-body">
          <div className="modal-icon-container" onClick={handleItemModalClose}>
            <i className="mdi mdi-close"></i>
          </div>
          <div>
            {images?.length > 1 && (
              <Carousel
                activeIndex={activeIndex}
                next={next}
                previous={previous}
              >
                <CarouselIndicators
                  items={images}
                  activeIndex={activeIndex}
                  onClickHandler={goToIndex}
                />
                {slides}
                <CarouselControl
                  direction="prev"
                  directionText="Previous"
                  onClickHandler={previous}
                />
                <CarouselControl
                  direction="next"
                  directionText="Next"
                  onClickHandler={next}
                />
              </Carousel>
            )}
            {images?.length === 1 && (
              <img
                src={images[0]}
                alt="Item Image"
                className="modal-image"
                // layout={"fill"}
                // objectFit={"contain"}
              />
            )}
          </div>
          <div className="modal-body-details">
            <h3>{data?.name}</h3>
            <p>{data?.about} </p>
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
            <a href={`tel:${storeDetails?.phoneNumber}`} className="order-now">
              <i className="fas fa-phone-volume"></i>
              Order now
            </a>
          </div>
        </ModalBody>
      </Modal>
    </>
  );
}
