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
            {category?.items.map((item: any, itemIndex: number) => (
              <div
                className="row card"
                key={itemIndex}
                onClick={() => handleItemModalOpen(item)}
              >
                {/* {item.images.length !== 0 ? (
                <div className="col col-3 image-container">
                  <img
                    src={item.images && item.images[0]}
                    alt="..."
                    className={"card-img" + " card-image"}
                  />
                </div>
              ) : null} */}
                <div className="col col-8 card-right">
                  <h3 className={"card-title" + " card-title"}>{item.name}</h3>
                  <div className="price-card-container">
                    {item?.variant?.map((variant: any, priceIndex: number) => {
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
                    })}
                  </div>
                </div>
              </div>
            ))}
          </section>
        );
      })}
    </div>
  );
};

export default Menu;
