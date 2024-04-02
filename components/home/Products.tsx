import { IProduct, IProductItem } from "@/model/models";
import RichText from "../RichText";

interface customProps {
  pageData: IProduct;
}
export default function Products({ pageData }: customProps) {
  return (
    <section className="section bg-light" id="products">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="heading-box text-center">
              <h3 className="heading-title">
                <span className="fw-normal">{pageData?.title}</span>
              </h3>
              <div className="heading-desc text-muted mt-3">
                <RichText data={pageData?.description} />
              </div>
            </div>
          </div>
        </div>
        {pageData?.productItem?.map(
          (productItem: IProductItem, index: number) => {
            return (
              <div
                className={`row mt-5 pt-4 align-items-center ${
                  index % 2 !== 0 ? "flex-row-reverse" : ""
                }`}
              >
                <div className="col-lg-5">
                  <div className="mt-4">
                    <div className="mt-4">
                      <h3>
                        <span className="fw-normal">{productItem?.title}</span>
                      </h3>
                    </div>
                    <div className="mt-4 pt-3">
                      {productItem?.productFeature?.map(
                        (productFeature, index: number) => {
                          return (
                            <div
                              className="d-flex"
                              key={"product-feature" + index}
                            >
                              <div className="features-count">
                                <h5 className="f-14 text-primary">
                                  {productFeature?.number}
                                </h5>
                              </div>

                              <div className="flex-1 ps-3">
                                <h5 className="f-18 mt-1">
                                  {productFeature?.title}
                                </h5>
                                <p className="text-muted mt-2">
                                  {productFeature?.description}
                                </p>
                              </div>
                            </div>
                          );
                        }
                      )}
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 offset-lg-1">
                  <div className="mt-4 p-5">
                    <img
                      src="images/features/img-1.png"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            );
          }
        )}
      </div>
    </section>
  );
}
