"use client";

export function ContactForm() {
  return (
    <form
      className="mt-7 space-y-4"
      onSubmit={(e) => e.preventDefault()}
      noValidate
    >
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
          htmlFor="cf-message"
          className="mb-1.5 block text-xs font-semibold uppercase tracking-widest"
          style={{ color: "rgba(255,255,255,0.42)" }}
        >
          Message{" "}
          <span style={{ color: "rgba(255,255,255,0.28)" }}>(optional)</span>
        </label>
        <textarea
          id="cf-message"
          rows={4}
          placeholder="Tell us about your restaurant or any questions..."
          className="form-field resize-none"
        />
      </div>

      <button
        type="submit"
        className="framed-button mt-2 w-full"
        data-tone="amber"
      >
        Send message
      </button>
    </form>
  );
}
