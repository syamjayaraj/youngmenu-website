"use client";
import { submitContactForm } from "@/apiService/apiService";
import { IContact, IContactItem, IFormData } from "@/model/models";
import { useState } from "react";
import RichText from "../RichText";
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";

interface Props {
  pageData: IContact;
}

interface FormValues {
  name: string;
  email: string;
  phoneNumber: string;
  message: string;
}

export default function Contact({ pageData }: Props) {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmitContactForm = async (
    formData: FormValues,
    { resetForm }: FormikHelpers<FormValues>
  ) => {
    const response = await submitContactForm(formData);
    if (response) {
      setFormSubmitted(true);
      resetForm();
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
              <Formik<FormValues>
                initialValues={{
                  name: "",
                  email: "",
                  phoneNumber: "",
                  message: "",
                }}
                validate={(values) => {
                  const errors: Partial<FormValues> = {};
                  if (!values.name) {
                    errors.name = "Name is required";
                  }
                  if (!values.email) {
                    errors.email = "Email is required";
                  } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                      values.email
                    )
                  ) {
                    errors.email = "Invalid email address";
                  }
                  // Add more validation rules as needed
                  return errors;
                }}
                onSubmit={async (values, actions) => {
                  await handleSubmitContactForm(values, actions);
                  actions?.setSubmitting(false);
                }}
              >
                {({ isSubmitting }) => (
                  <Form>
                    {/* Name */}
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="form-group mt-2">
                          <Field
                            type="text"
                            name="name"
                            className="form-control"
                            placeholder="Name"
                          />
                          <ErrorMessage
                            name="name"
                            component="div"
                            className="error-message text-danger"
                          />
                        </div>
                      </div>
                    </div>
                    {/* Email */}
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="form-group mt-2">
                          <Field
                            type="email"
                            name="email"
                            className="form-control"
                            placeholder="Email"
                          />
                          <ErrorMessage
                            name="email"
                            component="div"
                            className="error-message text-danger"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group mt-2">
                          <Field
                            type="text"
                            name="phoneNumber"
                            className="form-control"
                            placeholder="Phone Number"
                          />
                        </div>
                      </div>
                    </div>
                    {/* Message */}
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="form-group mt-2">
                          <Field
                            as="textarea"
                            name="message"
                            rows={4}
                            className="form-control"
                            placeholder="Message"
                            style={{ resize: "none" }}
                          />
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
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? "Sending..." : "Send Message"}
                        </button>
                      </div>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
