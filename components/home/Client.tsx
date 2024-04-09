import { IClient, IStore, ITestimonial } from "@/model/models";
import RichText from "../RichText";
import Link from "next/link";
import imageUrl from "@/utils/generate-image-url";

interface customProps {
  pageData: IClient;
}

const Client = ({ pageData }: customProps) => {
  return (
    <section className="section bg-light" id="clients">
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

        <div className="row mt-5 pt-4">
          <div className="col-lg-12">
            <div className="client-slider">
              {pageData?.testimonial?.map(
                (testimonial: ITestimonial, index: number) => {
                  return (
                    <div className="client-item" key={"testimonial" + index}>
                      <div className="row">
                        <div className="col-lg-4">
                          <div className="mt-4">
                            <div className="testi-img">
                              <img
                                src={imageUrl(
                                  testimonial?.image?.data?.attributes?.url
                                )}
                                className="img-fluid"
                                alt=""
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
                              {testimonial?.description}
                            </p>
                            <div className="row align-items-center">
                              <div className="col-lg-6">
                                <div className="mt-4">
                                  <h5 className="f-18 mb-0">
                                    {testimonial?.name}
                                  </h5>
                                  <p className="text-muted mb-0">
                                    - {testimonial?.storeName}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                }
              )}
            </div>
          </div>
        </div>
        <div className="row mt-5">
          {pageData?.store?.map((storeItem: IStore, index: number) => {
            return (
              <div className="col-lg-3" key={"store-item" + index}>
                <div className="client-images mt-4">
                  {storeItem?.relativeUrl && (
                    <Link href={storeItem?.relativeUrl} target="_blank">
                      <img
                        src={imageUrl(storeItem?.logo?.data?.attributes?.url)}
                        alt="logo-img"
                        className="mx-auto img-fluid d-block"
                      />
                    </Link>
                  )}
                  {storeItem?.absoluteUrl && (
                    <a href={storeItem?.absoluteUrl} target="_blank">
                      <img
                        src={imageUrl(storeItem?.logo?.data?.attributes?.url)}
                        alt="logo-img"
                        className="mx-auto img-fluid d-block"
                      />
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default Client;
