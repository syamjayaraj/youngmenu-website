"use client";

import { useState } from "react";

export function ContactForm() {
  const [businessType, setBusinessType] = useState("");

  return (
    <form
      className="mt-7 space-y-4"
      onSubmit={(e) => e.preventDefault()}
      noValidate
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label
            htmlFor="cf-name"
            className="mb-1.5 block text-xs font-semibold uppercase tracking-widest"
            style={{ color: "rgba(255,255,255,0.42)" }}
          >
            Name
          </label>
          <input
            id="cf-name"
            type="text"
            autoComplete="name"
            placeholder="Your name"
            className="form-field"
          />
        </div>
        <div>
          <label
            htmlFor="cf-biz"
            className="mb-1.5 block text-xs font-semibold uppercase tracking-widest"
            style={{ color: "rgba(255,255,255,0.42)" }}
          >
            Business name
          </label>
          <input
            id="cf-biz"
            type="text"
            autoComplete="organization"
            placeholder="Restaurant / cafe name"
            className="form-field"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="cf-email"
          className="mb-1.5 block text-xs font-semibold uppercase tracking-widest"
          style={{ color: "rgba(255,255,255,0.42)" }}
        >
          Email
        </label>
        <input
          id="cf-email"
          type="email"
          autoComplete="email"
          placeholder="you@example.com"
          className="form-field"
        />
      </div>

      <div>
        <label
          htmlFor="cf-phone"
          className="mb-1.5 block text-xs font-semibold uppercase tracking-widest"
          style={{ color: "rgba(255,255,255,0.42)" }}
        >
          Phone
        </label>
        <input
          id="cf-phone"
          type="tel"
          autoComplete="tel"
          placeholder="+91 ..."
          className="form-field"
        />
      </div>

      <div>
        <label
          htmlFor="cf-type"
          className="mb-1.5 block text-xs font-semibold uppercase tracking-widest"
          style={{ color: "rgba(255,255,255,0.42)" }}
        >
          Business type
        </label>
        <select
          id="cf-type"
          value={businessType}
          onChange={(e) => setBusinessType(e.target.value)}
          className="form-field"
          style={{ appearance: "none" }}
        >
          <option value="" disabled>Select your type</option>
          <option value="restaurant">Restaurant</option>
          <option value="cafe">Cafe</option>
          <option value="homebaker">Home baker</option>
          <option value="cloud">Cloud kitchen</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div>
        <label
          htmlFor="cf-message"
          className="mb-1.5 block text-xs font-semibold uppercase tracking-widest"
          style={{ color: "rgba(255,255,255,0.42)" }}
        >
          Message <span style={{ color: "rgba(255,255,255,0.28)" }}>(optional)</span>
        </label>
        <textarea
          id="cf-message"
          rows={3}
          placeholder="Tell us about your setup or any questions..."
          className="form-field resize-none"
        />
      </div>

      <button
        type="submit"
        className="framed-button mt-2 w-full"
        data-tone="amber"
      >
        Send request
      </button>
    </form>
  );
}
