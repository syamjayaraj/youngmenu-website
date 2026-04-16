"use client";

export function ContactForm() {
  return (
    <form
      className="mt-8 space-y-4"
      onSubmit={(e) => e.preventDefault()}
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.24em] text-white/50">
            Name
          </label>
          <input
            type="text"
            placeholder="Your name"
            className="w-full rounded-[1rem] border border-white/10 bg-white/[0.06] px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition focus:border-[rgba(201,160,93,0.5)] focus:bg-white/[0.08]"
          />
        </div>
        <div>
          <label className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.24em] text-white/50">
            Business name
          </label>
          <input
            type="text"
            placeholder="Restaurant / cafe name"
            className="w-full rounded-[1rem] border border-white/10 bg-white/[0.06] px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition focus:border-[rgba(201,160,93,0.5)] focus:bg-white/[0.08]"
          />
        </div>
      </div>
      <div>
        <label className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.24em] text-white/50">
          Email
        </label>
        <input
          type="email"
          placeholder="you@example.com"
          className="w-full rounded-[1rem] border border-white/10 bg-white/[0.06] px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition focus:border-[rgba(201,160,93,0.5)] focus:bg-white/[0.08]"
        />
      </div>
      <div>
        <label className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.24em] text-white/50">
          Phone
        </label>
        <input
          type="tel"
          placeholder="+91 ..."
          className="w-full rounded-[1rem] border border-white/10 bg-white/[0.06] px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition focus:border-[rgba(201,160,93,0.5)] focus:bg-white/[0.08]"
        />
      </div>
      <div>
        <label className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.24em] text-white/50">
          Business type
        </label>
        <select
          className="w-full rounded-[1rem] border border-white/10 bg-[#1a1512] px-4 py-3 text-sm text-white/75 outline-none transition focus:border-[rgba(201,160,93,0.5)]"
          defaultValue=""
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
        <label className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.24em] text-white/50">
          Message (optional)
        </label>
        <textarea
          rows={3}
          placeholder="Tell us about your setup or any questions..."
          className="w-full resize-none rounded-[1rem] border border-white/10 bg-white/[0.06] px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition focus:border-[rgba(201,160,93,0.5)] focus:bg-white/[0.08]"
        />
      </div>
      <button
        type="submit"
        className="framed-button mt-2 w-full justify-center"
        data-tone="amber"
      >
        Send request
      </button>
    </form>
  );
}
