import { IClient, IStore } from "@/model/models";
import RichText from "../RichText";
import Link from "next/link";
import imageUrl from "@/utils/generate-image-url";
import { CarouselComponent } from "../CarouselComponent";
interface customProps {
  pageData: IClient;
}

const Client = ({ pageData }: customProps) => {
  const testimonials = pageData?.testimonial ? pageData?.testimonial : [];

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
              <CarouselComponent data={testimonials} type="testimonial" />
            </div>
          </div>
        </div>
        <div className="row mt-5">
          {pageData?.store?.map((storeItem: IStore, index: number) => {
            return (
              <div className="col-lg-1 col-3" key={"store-item" + index}>
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
