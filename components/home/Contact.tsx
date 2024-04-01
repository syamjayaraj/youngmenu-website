"use client";

import { submitContactForm } from "@/apiService/apiService";
import { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const handleInputChange = (event: any) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmitContactForm = async () => {
    const response = await submitContactForm(formData);
    if (response) {
    }
  };

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
              <form onSubmit={handleSubmitContactForm}>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="form-group mt-2">
                      <input
                        name="name"
                        type="text"
                        className="form-control"
                        placeholder="Name"
                        value={formData.name}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group mt-2">
                      <input
                        name="email"
                        type="email"
                        className="form-control"
                        placeholder="Email"
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-12">
                    <div className="form-group mt-2">
                      <input
                        type="text"
                        name="phoneNumber"
                        className="form-control"
                        placeholder="Phone Number"
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
                      ></textarea>
                    </div>
                  </div>
                </div>
                <div className="row mt-2">
                  <div className="col-lg-12">
                    <button
                      type="submit"
                      name="send"
                      className="submitBnt btn btn-rounded btn-primary"
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
