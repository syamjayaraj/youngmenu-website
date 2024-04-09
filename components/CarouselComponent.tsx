"use client";
import imageUrl from "@/utils/generate-image-url";
import { useState } from "react";
import {
  Carousel,
  CarouselControl,
  CarouselIndicators,
  CarouselItem,
} from "reactstrap";

interface customProps {
  data: any;
  type: "testimonial" | "item-slider";
}

export function CarouselComponent({ data, type }: customProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const onExiting = () => {
    setAnimating(true);
  };

  const onExited = () => {
    setAnimating(false);
  };

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === data?.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? data?.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex: number) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = data?.map((item: any, index: number) => {
    return (
      <CarouselItem
        onExiting={onExiting}
        onExited={onExited}
        key={"carousel-item" + index}
      >
        <>
          {type === "testimonial" && (
            <div className="client-item">
              <div className="row">
                <div className="col-lg-4">
                  <div className="mt-4">
                    <div className="testi-img">
                      <img
                        src={imageUrl(item?.image?.data?.attributes?.url)}
                        className="img-fluid"
                        alt="testimonial-image"
                      />
                    </div>

                    <div className="testi-icon bg-primary">
                      <i className="mdi mdi-format-quote-open text-white"></i>
                    </div>
                  </div>
                </div>
                <div className="col-lg-8">
                  <div className="testi-box mt-4 rounded">
                    <p className="testi-title text-muted mb-2">
                      {item?.description}
                    </p>
                    <div className="row align-items-center">
                      <div className="col-lg-6">
                        <div className="mt-4">
                          <h5 className="f-18 mb-0">{item?.name}</h5>
                          <p className="text-muted mb-0">- {item?.storeName}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          {type === "item-slider" && (
            <img
              src={item}
              alt="Item Image"
              className="modal-image"
              // layout={"fill"}
              // objectFit={"contain"}
            />
          )}
        </>
      </CarouselItem>
    );
  });

  return (
    <>
      {data?.length === 1 && type === "item-slider" && (
        <img
          src={data[0]}
          alt="Item Image"
          className="modal-image"
          // layout={"fill"}
          // objectFit={"contain"}
        />
      )}
      {(data?.length > 1 || (data?.length === 1 && type === "testimonial")) && (
        <Carousel activeIndex={activeIndex} next={next} previous={previous}>
          <CarouselIndicators
            items={data}
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
    </>
  );
}
