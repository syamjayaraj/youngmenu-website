export function Products() {
  return (
    <section className="section bg-light" id="product">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="heading-box text-center">
              <h3 className="heading-title">
                <span className="fw-normal">
                  Streamline Your Hospitality Operations
                </span>
              </h3>
              <p className="heading-desc text-muted mt-3">
                Empower your restaurant or home bakery with our suite of
                innovative solutions tailored to enhance efficiency and elevate
                customer experience.
              </p>
            </div>
          </div>
        </div>

        <div className="row mt-5 pt-4 align-items-center">
          <div className="col-lg-5">
            <div className="mt-4">
              <div className="mt-4">
                <h3>
                  <span className="fw-normal">
                    Restaurant Table Ordering App for Waiters
                  </span>
                </h3>
              </div>

              <div className="mt-4 pt-3">
                <div className="d-flex">
                  <div className="features-count">
                    <h5 className="f-14 text-primary">01</h5>
                  </div>

                  <div className="flex-1 ps-3">
                    <h5 className="f-18 mt-1">
                      Real-time synchronization with kitchen
                    </h5>
                    <p className="text-muted mt-2">
                      Separated they live in Bookmarksgrove right at the coast
                      the Semantics, a large language ocean. A small river name
                      Duden flows by regelialia.
                    </p>
                  </div>
                </div>

                <div className="d-flex mt-3">
                  <div className="features-count">
                    <h5 className="f-14 text-primary">02</h5>
                  </div>

                  <div className="flex-1 ps-3">
                    <h5 className="f-18 mt-1">
                      Customizable order modifications and special requests
                    </h5>
                    <p className="text-muted mt-2 mb-0">
                      Separated they live in Bookmarksgrove right at the coast
                      of the Semantics, a large language ocean publishing web
                      page editors now.
                    </p>
                  </div>
                </div>
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

        <div className="row mt-5 pt-4 align-items-center">
          <div className="col-lg-6">
            <div className="mt-4 p-5">
              <img
                src="images/features/img-2.png"
                className="img-fluid"
                alt=""
              />
            </div>
          </div>

          <div className="col-lg-5 offset-lg-1">
            <div className="mt-4">
              <h3>
                <span className="fw-normal">Creative solutions to </span> expand
                your business!
              </h3>
            </div>

            <div className="mt-4 pt-3">
              <div className="d-flex">
                <div className="features-icon">
                  <i className="pe-7s-display2 text-primary"></i>
                </div>
                <div className="flex-1 ps-3">
                  <h5 className="f-18 mt-1">
                    We put a lot of effort in design.
                  </h5>
                  <p className="text-muted mt-2">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content. Moltin gives platform web
                    sites still in their infancy.
                  </p>
                </div>
              </div>

              <div className="d-flex mt-3">
                <div className="features-icon">
                  <i className="pe-7s-date text-primary"></i>
                </div>
                <div className="flex-1 ps-3">
                  <h5 className="f-18 mt-1">Submit Your Orgnization.</h5>
                  <p className="text-muted mt-2">
                    Credibly brand standards compliant on users without
                    extensible services. Anibh euismod tincidunt laoreet Ipsum
                    combined with a passage.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
