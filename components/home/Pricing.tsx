import { IPlan, IPoint, IPricing } from "@/model/models";
import RichText from "../RichText";
interface Props {
  pageData: IPricing;
}
const Pricing = ({ pageData }: Props) => {
  return (
    <section className="section" id="pricing">
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
          {[pageData?.plan[0]].map((planItem: IPlan, index: number) => {
            return (
              <div className="col-lg-4" key={"plan" + index}>
                <div className="pricing-box bg-white text-center mt-4 hover-effect">
                  {planItem?.badge && (
                    <div className="pricing-lable">
                      <span className="lable-name text-uppercase">
                        {planItem?.badge}
                      </span>
                    </div>
                  )}
                  <div className="pricing-plan">
                    <h5 className="mb-0">{planItem?.name}</h5>
                  </div>
                  <div className="pricing-price bg-light">
                    <h1 className="mb-1">₹{planItem?.amount}</h1>
                    <p className="text-uppercase text-muted f-13 mb-0">
                      {planItem?.term}
                    </p>
                  </div>
                  <div className="pricing-features">
                    <div>
                      {planItem?.point?.map(
                        (pointItem: IPoint, index: number) => {
                          return <p key={"point" + index}>{pointItem?.name}</p>;
                        }
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default Pricing;
