"use client";
import {
  Col,
  Row,
  Modal,
  ModalBody,
  Carousel,
  CarouselControl,
  CarouselIndicators,
  CarouselItem,
} from "reactstrap";
import styles from "@/css/Store.module.css";
import { useState } from "react";
import MenuModal from "@/components/store/MenuModal";
import { ItemModal } from "@/components/store/ItemModal";
import { StoreDetails } from "@/components/store/StoreDetails";

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [modalData, setModalData] = useState({
    prices: [],
  });
  const [showMenu, setShowMenu] = useState(false);

  const items =
    modalData.images && modalData.images.length !== 0 ? modalData.images : [];
  let onExiting = () => {
    setAnimating(true);
  };

  let onExited = () => {
    setAnimating(false);
  };

  let next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  let previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  let goToIndex = (newIndex: number) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item, index: number) => {
    return (
      <CarouselItem onExiting={onExiting} onExited={onExited} key={index + 123}>
        <img src={item} className={styles.modalImage} />
      </CarouselItem>
    );
  });

  let handleModalOpen = (item) => {
    setModalData(item);
  };

  let handleModalClose = () => {
    setModalData({
      prices: [],
    });
  };

  return (
    <>
      <div>
        <ItemModal />

        <MenuModal
          showMenu={showMenu}
          setShowMenu={setShowMenu}
          categories={categories}
          styles={styles}
        />

        <div className={styles.restaurant}>
          <div className={styles.menuIcon} onClick={() => setShowMenu(true)}>
            <i className="fas fa-bars"></i>
          </div>

          <StoreDetails />

          <div className={styles.cardContainer}>
            {categories &&
              categories.length !== 0 &&
              categories.map((category, categoryIndex) => {
                return (
                  <section id={category.category.name} key={categoryIndex}>
                    <h2>{category.category.name}</h2>
                    {category.items.map((item) => {
                      return (
                        <Row
                          className={styles.card}
                          key={item._id}
                          onClick={() => handleModalOpen(item)}
                        >
                          {/* <div className={styles.addIconContainer}>
                          <i className="fas fa-plus"></i>{" "}
                        </div> */}
                          {item.images.length !== 0 ? (
                            <Col
                              lg={3}
                              md={3}
                              xs={3}
                              className={styles.imageContainer}
                            >
                              <img
                                src={item.images && item.images[0]}
                                alt="..."
                                className={[
                                  "card-img" + " " + styles.cardImage,
                                ]}
                              />
                            </Col>
                          ) : null}
                          <Col
                            lg={8}
                            md={8}
                            xs={8}
                            className={styles.cardRight}
                          >
                            <h3
                              className={[
                                "card-title" + " " + styles.cardTitle,
                              ]}
                            >
                              {item.name}
                            </h3>
                            {/* <p
                              className={["card-text" + " " + styles.cardTitle]}
                            >
                              {item.about}
                            </p> */}
                            <div className={styles.priceCardContainer}>
                              {item.prices.length !== 0 &&
                                item.prices[0].price !== "" &&
                                item.prices.map((price, priceIndex) => {
                                  return (
                                    <div
                                      className={styles.priceCard}
                                      key={priceIndex}
                                    >
                                      {price.variety ? (
                                        <div
                                          className={styles.priceCardSection1}
                                        >
                                          {price.variety}
                                        </div>
                                      ) : null}
                                      <div className={styles.priceCardSection2}>
                                        <span>{item.store.currencySign}</span>
                                        {price.price}
                                      </div>
                                    </div>
                                  );
                                })}
                            </div>
                          </Col>
                        </Row>
                      );
                    })}
                  </section>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
}
