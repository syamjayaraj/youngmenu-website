"use server";

export type ContactFormState =
  | { status: "idle" }
  | { status: "success" }
  | { status: "error"; message: string; fieldErrors?: Record<string, string> };

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const CMS_URL = process.env.CMS_URL ?? "http://127.0.0.1:1337";

export async function submitContact(
  _prev: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const honeypot = String(formData.get("website") ?? "").trim();
  if (honeypot) {
    return { status: "success" };
  }

  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const phoneNumber = String(formData.get("phone") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  const fieldErrors: Record<string, string> = {};
  if (!name) fieldErrors.name = "Please enter your name.";
  if (!email) fieldErrors.email = "Please enter your email.";
  else if (!EMAIL_RE.test(email)) fieldErrors.email = "That email looks invalid.";
  if (message.length > 2000) fieldErrors.message = "Message is too long (max 2000 chars).";

  if (Object.keys(fieldErrors).length > 0) {
    return { status: "error", message: "Please fix the highlighted fields.", fieldErrors };
  }

  try {
    const res = await fetch(`${CMS_URL}/api/contacts`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        data: { name, email, phoneNumber, message },
      }),
      cache: "no-store",
    });

    if (!res.ok) {
      const text = await res.text().catch(() => "");
      console.error("[submit-contact] CMS rejected submission", res.status, text);
      return {
        status: "error",
        message: "We couldn't submit your message. Please try again shortly.",
      };
    }

    return { status: "success" };
  } catch (err) {
    console.error("[submit-contact] network error", err);
    return {
      status: "error",
      message: "Network error. Please try again.",
    };
  }
}
