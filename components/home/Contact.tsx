"use client";
import { submitContactForm } from "@/apiService/apiService";
import { IContact, IContactItem, IFormData } from "@/model/models";
import { useState } from "react";
import RichText from "../RichText";

interface customProps {
  pageData: IContact;
}

export default function Contact({ pageData }: customProps) {
  const [formData, setFormData] = useState<IFormData>({
    name: "",
    email: "",
    phoneNumber: "",
    message: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleInputChange = (event: any) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmitContactForm = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    const response = await submitContactForm(formData);
    if (response) {
      setFormSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phoneNumber: "",
        message: "",
      });
    }
  };

  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="heading-box text-center">
              <h3 className="heading-title">
                <span className="fw-bold">{pageData?.title}</span>
              </h3>
              <div className="heading-desc text-muted mt-3">
                <RichText data={pageData?.description} />
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-5 pt-4">
          <div className="col-lg-3">
            <div className="mt-4">
              {pageData?.contactItem?.map(
                (item: IContactItem, index: number) => {
                  return (
                    <div className="mt-4" key={"contact-item" + index}>
                      <h5 className="f-17 mb-1">{item?.label}</h5>
                      <p className="text-muted">
                        <a href={item?.url} target={item?.target}>
                          {item?.value}
                        </a>
                      </p>
                    </div>
                  );
                }
              )}
            </div>
          </div>

          <div className="col-lg-8 offset-lg-1">
            <div className="custom-form mt-4">
              <form onSubmit={(event) => handleSubmitContactForm(event)}>
                <div className="row">
                  <div className="col-lg-12">
                    <div className="form-group mt-2">
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        placeholder="Name"
                        value={formData.name}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="form-group mt-2">
                      <input
                        name="email"
                        type="email"
                        className="form-control"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group mt-2">
                      <input
                        name="phoneNumber"
                        type="text"
                        className="form-control"
                        placeholder="Phone Number"
                        value={formData.phoneNumber}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-lg-12">
                    <div className="form-group mt-2">
                      <textarea
                        name="message"
                        rows={4}
                        className="form-control"
                        placeholder="Message"
                        value={formData.message}
                        onChange={handleInputChange}
                        style={{
                          resize: "none",
                        }}
                      ></textarea>
                    </div>
                  </div>
                </div>
                {formSubmitted && (
                  <div className="row mt-2">
                    <div className="col-lg-12">
                      <p className="text-muted">
                        <i
                          className="mdi mdi-check-circle"
                          style={{
                            color: "#1cb51c",
                            marginRight: ".3rem",
                            fontSize: "1.2em",
                          }}
                        ></i>
                        Your message has been successfully submitted
                      </p>
                    </div>
                  </div>
                )}
                <div className="row mt-2">
                  <div className="col-lg-12">
                    <button
                      type="submit"
                      name="send"
                      className="submit-button btn btn-rounded"
                    >
                      Send Message
                    </button>
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
