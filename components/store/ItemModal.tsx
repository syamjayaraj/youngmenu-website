import {
  Carousel,
  CarouselControl,
  CarouselIndicators,
  Modal,
  ModalBody,
} from "reactstrap";
import Link from "next/link";
import { useRouter } from "next/router";

export function ItemModal(props) {
  let { showMenu, setShowMenu, categories, styles } = props;
  const router = useRouter();

  return (
    <Modal isOpen={modalData._id ? true : false} className={styles.modal}>
      <ModalBody className={styles.modalBody}>
        <div className={styles.modalIconContainer} onClick={handleModalClose}>
          <i className={["fas fa-times" + " " + styles.modalIcon]}></i>
        </div>
        {items.length === 0 ? null : items.length === 1 ? (
          <img src={items[0]} className={styles.modalImage} />
        ) : (
          <div>
            <Carousel activeIndex={activeIndex} next={next} previous={previous}>
              <CarouselIndicators
                items={items}
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
          </div>
        )}

        <div className={styles.modalBodyDetails}>
          <h3>{modalData.name}</h3>
          <p>{modalData.about} </p>
          <div className={styles.priceCardContainer}>
            {modalData.prices.length !== 0 &&
              modalData.prices[0].price !== "" &&
              modalData.prices.map((price, priceIndex) => {
                return (
                  <div className={styles.priceCard} key={priceIndex}>
                    {price.variety ? (
                      <div className={styles.priceCardSection1}>
                        {price.variety}
                      </div>
                    ) : null}
                    <div className={styles.priceCardSection2}>
                      <span>{modalData.store.currencySign}</span>
                      {price.price}
                    </div>
                  </div>
                );
              })}
          </div>
          {modalData.store && modalData.store.orderNow ? (
            <a href={`tel:${store.phoneNumber}`} className={styles.orderNow}>
              <i className="fas fa-phone-volume"></i>
              Order now
            </a>
          ) : null}
        </div>
      </ModalBody>
    </Modal>
  );
}
