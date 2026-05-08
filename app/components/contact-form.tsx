"use client";

import { useActionState } from "react";
import { submitContact, type ContactFormState } from "@/app/actions/submit-contact";

const initialState: ContactFormState = { status: "idle" };

export function ContactForm() {
  const [state, formAction, isPending] = useActionState(submitContact, initialState);

  if (state.status === "success") {
    return (
      <div
        className="mt-7 rounded-md border p-5 text-sm"
        style={{ borderColor: "var(--page-border)", color: "var(--page-fg)" }}
        role="status"
        aria-live="polite"
      >
        Thanks — we got your message. We&apos;ll be in touch shortly.
      </div>
    );
  }

  const fieldErrors =
    state.status === "error" ? state.fieldErrors ?? {} : {};

  return (
    <form className="mt-7 space-y-4" action={formAction} noValidate>
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        style={{ position: "absolute", left: "-10000px", width: "1px", height: "1px" }}
      />

      <div>
        <label
          htmlFor="cf-name"
          className="mb-1.5 block text-xs font-semibold uppercase tracking-widest"
          style={{ color: "var(--page-muted)" }}
        >
          Name
        </label>
        <input
          id="cf-name"
          name="name"
          type="text"
          autoComplete="name"
          placeholder="Your name"
          className="form-field"
          required
          aria-invalid={Boolean(fieldErrors.name) || undefined}
        />
        {fieldErrors.name ? (
          <p className="mt-1 text-xs" style={{ color: "#b34" }}>
            {fieldErrors.name}
          </p>
        ) : null}
      </div>

      <div>
        <label
          htmlFor="cf-email"
          className="mb-1.5 block text-xs font-semibold uppercase tracking-widest"
          style={{ color: "var(--page-muted)" }}
        >
          Email
        </label>
        <input
          id="cf-email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="you@example.com"
          className="form-field"
          required
          aria-invalid={Boolean(fieldErrors.email) || undefined}
        />
        {fieldErrors.email ? (
          <p className="mt-1 text-xs" style={{ color: "#b34" }}>
            {fieldErrors.email}
          </p>
        ) : null}
      </div>

      <div>
        <label
          htmlFor="cf-phone"
          className="mb-1.5 block text-xs font-semibold uppercase tracking-widest"
          style={{ color: "var(--page-muted)" }}
        >
          Phone
        </label>
        <input
          id="cf-phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          placeholder="+91 ..."
          className="form-field"
        />
      </div>

      <div>
        <label
          htmlFor="cf-message"
          className="mb-1.5 block text-xs font-semibold uppercase tracking-widest"
          style={{ color: "var(--page-muted)" }}
        >
          Message{" "}
          <span style={{ color: "rgba(122,101,87,0.70)" }}>(optional)</span>
        </label>
        <textarea
          id="cf-message"
          name="message"
          rows={4}
          maxLength={2000}
          placeholder="Tell us about your restaurant or any questions..."
          className="form-field resize-none"
          aria-invalid={Boolean(fieldErrors.message) || undefined}
        />
        {fieldErrors.message ? (
          <p className="mt-1 text-xs" style={{ color: "#b34" }}>
            {fieldErrors.message}
          </p>
        ) : null}
      </div>

      {state.status === "error" && !state.fieldErrors ? (
        <p className="text-sm" style={{ color: "#b34" }} role="alert">
          {state.message}
        </p>
      ) : null}

      <button
        type="submit"
        className="framed-button mt-2 w-full"
        data-tone="amber"
        disabled={isPending}
      >
        {isPending ? "Sending..." : "Send message"}
      </button>
    </form>
  );
}
