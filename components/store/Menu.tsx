import { IItem } from "@/model/models";
import imageUrl from "@/utils/generate-image-url";
import Image from "next/image";

interface CustomProps {
  data: any;
  handleItemModalOpen: any;
  storeDetails: any;
}

const Menu = ({ data, handleItemModalOpen, storeDetails }: CustomProps) => {
  return (
    <div className="card-container">
      {data?.map((category: any, categoryIndex: number) => {
        return (
          <section id={category?.name} key={categoryIndex}>
            <h2>{category?.name}</h2>
            {category?.items?.map((item: IItem, itemIndex: number) => {
              return (
                <div
                  className="row card d-flex flex-row"
                  key={itemIndex}
                  onClick={() => handleItemModalOpen(item)}
                >
                  {item?.image?.data[0]?.attributes?.url && (
                    <div className="col col-3">
                      <div className="image-container">
                        <Image
                          src={imageUrl(item?.image?.data[0]?.attributes?.url)}
                          alt="store-item-image"
                          className="card-image"
                          width={200}
                          height={200}
                          priority={true}
                        />
                      </div>
                    </div>
                  )}
                  <div className="col col-8">
                    <div className="card-right">
                      <h3 className="card-title">
                        {item?.veg && (
                          <span className="veg-icon">
                            <i className="mdi mdi-crop-square"></i>
                          </span>
                        )}
                        {item?.name}
                      </h3>
                      <p className="card-description text-muted">
                        {item?.shortDescription}
                      </p>
                      <div className="price-card-container">
                        {item?.variant?.length !== 0 &&
                          item?.variant?.map(
                            (variant: any, priceIndex: number) => {
                              return (
                                <div className="price-card" key={priceIndex}>
                                  {variant?.name ? (
                                    <div className="price-card-section1">
                                      {variant?.name}
                                    </div>
                                  ) : null}
                                  <div className="price-card-section2">
                                    <span>{storeDetails?.currency}</span>
                                    {variant?.price}
                                  </div>
                                </div>
                              );
                            }
                          )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </section>
        );
      })}
    </div>
  );
};

export default Menu;
