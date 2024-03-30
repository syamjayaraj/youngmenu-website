export function Contact() {
  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="heading-box text-center">
              <h3 className="heading-title">
                <span className="fw-normal">Let's talk about</span> everything!
              </h3>
              <p className="heading-desc text-muted mt-3">
                We thrive when coming up with innovative ideas but also
                understand that a smart concept should be supported with
                faucibus sapien odio measurable results.
              </p>
            </div>
          </div>
        </div>

        <div className="row mt-5 pt-4">
          <div className="col-lg-3">
            <div className="mt-4">
              <h5 className="f-17 mb-1 mt-4 pt-2">Email Address</h5>
              <p className="text-muted">info@floyet.com</p>
              <div className="mt-4">
                <h5 className="f-17 mb-1">Contact Number</h5>
                <p className="text-muted">+91 9746742650</p>
              </div>
              <div className="mt-4">
                <h5 className="f-17 mb-1">Office Address</h5>
                <p className="text-muted">
                  FLOYET Labs & Technologies, Room Number 7, Kozhikode, India
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-8 offset-lg-1">
            <div className="custom-form mt-4">
              <form action="#">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="form-group mt-2">
                      <input
                        name="name"
                        id="name"
                        type="text"
                        className="form-control"
                        placeholder="Your name"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group mt-2">
                      <input
                        name="email"
                        id="email"
                        type="email"
                        className="form-control"
                        placeholder="Your email"
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-12">
                    <div className="form-group mt-2">
                      <input
                        type="text"
                        className="form-control"
                        id="subject"
                        placeholder="Your Subject.."
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-12">
                    <div className="form-group mt-2">
                      <textarea
                        name="comments"
                        id="comments"
                        rows={4}
                        className="form-control"
                        placeholder="Your message..."
                      ></textarea>
                    </div>
                  </div>
                </div>
                <div className="row mt-2">
                  <div className="col-lg-12">
                    <input
                      type="submit"
                      id="submit"
                      name="send"
                      className="submitBnt btn btn-rounded btn-primary"
                      value="Send Message"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
