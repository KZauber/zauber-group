import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Mail, Phone, Globe, CheckCircle, Loader } from "lucide-react";

// ─── GHL Webhook ────────────────────────────────────────────────────────────
const GHL_WEBHOOK_URL = "https://services.leadconnectorhq.com/hooks/qbIo1Hf53VoXfYNozERj/webhook-trigger/4e2c81b8-6d45-45c6-8af9-710515f979ee";

// ─── Contact info ────────────────────────────────────────────────────────────
const CONTACT_EMAIL = "kelly@zaubergroup.com";
const CONTACT_PHONE_DISPLAY = "(512) 787-1186";
const CONTACT_PHONE_TEL = "+15127871186";

// ─── SMS consent (A2P 10DLC / TCR) ───────────────────────────────────────────
// The registered legal entity, which must match the carrier campaign registration
// and the published privacy policy. Zauber Group operates under 3 Angels Security.
const LEGAL_ENTITY = "3 Angels Security DBA Zauber Group";

// Stored verbatim with the lead so there's a durable record of what was agreed to.
const SMS_CONSENT_RECORD =
  `Consent given at zaubergroup.com contact form. Opt-in language: "I agree to receive ` +
  `Transactional SMS / Marketing SMS from ${LEGAL_ENTITY} at the number provided. ` +
  `Msg & data rates may apply. Message frequency varies. Reply STOP to unsubscribe, HELP for help." ` +
  `Consent is not a condition of purchase.`;

type FormState = {
  name: string;
  company: string;
  phone: string;
  email: string;
  tier: string;
  message: string;
  sms_transactional: boolean;
  sms_marketing: boolean;
};

const EMPTY: FormState = {
  name: "",
  company: "",
  phone: "",
  email: "",
  tier: "",
  message: "",
  sms_transactional: false,
  sms_marketing: false,
};

export default function ContactSection() {
  const { ref: sectionRef, isVisible } = useScrollAnimation(0.1);
  const [form, setForm] = useState<FormState>(EMPTY);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const target = e.target;
    const value =
      target instanceof HTMLInputElement && target.type === "checkbox"
        ? target.checked
        : target.value;
    setForm((prev) => ({ ...prev, [target.name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    const gaveSmsConsent = form.sms_transactional || form.sms_marketing;

    const payload = {
      ...form,
      // Send consent as explicit strings — GHL tags read more reliably than booleans,
      // and the record needs to be legible to a human reviewing an opt-in dispute.
      sms_transactional: form.sms_transactional ? "yes" : "no",
      sms_marketing: form.sms_marketing ? "yes" : "no",
      sms_consent_text: gaveSmsConsent ? SMS_CONSENT_RECORD : "",
      sms_consent_at: gaveSmsConsent ? new Date().toISOString() : "",
      source: "zaubergroup.com — Contact Form",
      submitted_at: new Date().toISOString(),
    };

    try {
      if (GHL_WEBHOOK_URL) {
        const res = await fetch(GHL_WEBHOOK_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
        if (!res.ok) throw new Error("Webhook error");
      } else {
        // No webhook yet — simulate success so the form still works on the front end
        await new Promise((r) => setTimeout(r, 900));
      }
      setStatus("success");
      setForm(EMPTY);
    } catch {
      setStatus("error");
    }
  };

  const inputClass =
    "w-full bg-white dark:bg-white/5 border border-[#E0DDD8] dark:border-white/15 text-[#0A1628] dark:text-white text-sm px-4 py-3 rounded-md " +
    "focus:outline-none focus:border-[#C9A84C] focus:ring-1 focus:ring-[#C9A84C]/30 " +
    "placeholder:text-[#BBBBBB] dark:placeholder:text-white/35 transition-colors duration-200";

  const labelClass = "block text-xs font-medium tracking-[0.12em] uppercase text-[#6B6B6B] dark:text-white/55 mb-1.5";

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="container relative z-10">
        <div
          ref={sectionRef}
          className={`fade-up ${isVisible ? "visible" : ""}`}
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="gold-line" />
            <span className="text-[#C9A84C] text-sm font-medium tracking-[0.2em] uppercase">
              Get Started
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

            {/* ── Left: CTA + contact details ── */}
            <div>
              <h2 className="font-serif text-4xl sm:text-5xl font-semibold text-[#0A1628] dark:text-white leading-[1.15] mb-6">
                Ready to Stop
                <br />
                <span className="text-[#C9A84C]">Chasing Work?</span>
              </h2>
              <p className="text-[#555] dark:text-white/60 text-lg leading-relaxed mb-12 max-w-lg">
                Whether you run a roofing crew, a med spa, or a construction
                company, let's talk about getting LocalEdge™ working for your
                business. No pressure — just a real conversation about what's
                possible.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-5">
                  <div className="flex-shrink-0 w-12 h-12 border border-[#C9A84C]/30 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-[#C9A84C]" />
                  </div>
                  <div>
                    <p className="text-sm text-[#999] dark:text-white/45 tracking-wide uppercase mb-1">Email</p>
                    <a
                      href={`mailto:${CONTACT_EMAIL}`}
                      className="text-[#0A1628] dark:text-white text-lg hover:text-[#C9A84C] transition-colors"
                    >
                      {CONTACT_EMAIL}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="flex-shrink-0 w-12 h-12 border border-[#C9A84C]/30 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-[#C9A84C]" />
                  </div>
                  <div>
                    <p className="text-sm text-[#999] dark:text-white/45 tracking-wide uppercase mb-1">Phone</p>
                    <a
                      href={`tel:${CONTACT_PHONE_TEL}`}
                      className="text-[#0A1628] dark:text-white text-lg hover:text-[#C9A84C] transition-colors"
                    >
                      {CONTACT_PHONE_DISPLAY}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="flex-shrink-0 w-12 h-12 border border-[#C9A84C]/30 flex items-center justify-center">
                    <Globe className="w-5 h-5 text-[#C9A84C]" />
                  </div>
                  <div>
                    <p className="text-sm text-[#999] dark:text-white/45 tracking-wide uppercase mb-1">Service Area</p>
                    <p className="text-[#0A1628] dark:text-white text-lg">Nationwide</p>
                  </div>
                </div>
              </div>
            </div>

            {/* ── Right: Contact form ── */}
            <div className="zg-surface rounded-2xl p-8 lg:p-10">
              {status === "success" ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-16 rounded-xl border border-[#C9A84C]/20 dark:border-[#C9A84C]/30 bg-[#F8F6F1] dark:bg-[#0e1d33]/60">
                  <CheckCircle className="w-12 h-12 text-[#C9A84C] mb-5" />
                  <h3 className="font-serif text-2xl font-semibold text-[#0A1628] dark:text-white mb-3">
                    Message received.
                  </h3>
                  <p className="text-[#555] dark:text-white/60 leading-relaxed max-w-sm">
                    We'll be in touch within one business day to schedule your
                    discovery call. Talk soon.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="mt-8 text-xs tracking-[0.15em] uppercase text-[#C9A84C] hover:text-[#0A1628] transition-colors"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">

                  {/* Row 1: Name + Company */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className={labelClass}>Your Name *</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="First & last name"
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className={labelClass}>Company Name *</label>
                      <input
                        type="text"
                        name="company"
                        required
                        value={form.company}
                        onChange={handleChange}
                        placeholder="Your business name"
                        className={inputClass}
                      />
                    </div>
                  </div>

                  {/* Row 2: Phone + Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className={labelClass}>Phone Number *</label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="(555) 000-0000"
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className={labelClass}>Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="you@yourcompany.com"
                        className={inputClass}
                      />
                    </div>
                  </div>

                  {/* Row 3: Tier interest */}
                  <div>
                    <label className={labelClass}>Which program are you interested in?</label>
                    <select
                      name="tier"
                      value={form.tier}
                      onChange={handleChange}
                      className={inputClass}
                    >
                      <option value="">Not sure yet — let's talk</option>
                      <option value="Get Found — $500/mo">Get Found — $500/mo (Google, SEO &amp; Reviews)</option>
                      <option value="Get Seen — $500/mo">Get Seen — $500/mo (Social on Autopilot)</option>
                      <option value="Get Booked — $500/mo">Get Booked — $500/mo (Lead Engine)</option>
                      <option value="Complete LocalEdge — $1,500/mo">Complete LocalEdge™ — $1,500/mo (All Three)</option>
                    </select>
                  </div>

                  {/* Row 4: Message */}
                  <div>
                    <label className={labelClass}>Anything else we should know?</label>
                    <textarea
                      name="message"
                      rows={4}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell us about your business, your market, or what you're looking to achieve..."
                      className={`${inputClass} resize-none`}
                    />
                  </div>

                  {/* ── SMS consent (A2P 10DLC / TCR) ──
                      Two separate opt-ins, each unchecked by default and neither
                      required to submit — consent can never be a condition of
                      service. Kept legible rather than greyed out, because
                      consent language has to be conspicuous to be valid. */}
                  <div className="pt-2 space-y-3">
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        name="sms_transactional"
                        checked={form.sms_transactional}
                        onChange={handleChange}
                        className="mt-[3px] w-4 h-4 flex-shrink-0 accent-[#C9A84C] cursor-pointer"
                      />
                      <span className="text-[11.5px] leading-[1.55] text-[#5F5F5F] dark:text-white/60">
                        I agree to receive{" "}
                        <strong className="font-semibold text-[#0A1628] dark:text-white">
                          Transactional SMS
                        </strong>{" "}
                        from {LEGAL_ENTITY} (appointment reminders, scheduling, and
                        service updates) at the number provided, approximately 2 to 6
                        messages per month. Msg &amp; data rates may apply. Reply STOP to
                        unsubscribe, HELP for help.
                      </span>
                    </label>

                    <label className="flex items-start gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        name="sms_marketing"
                        checked={form.sms_marketing}
                        onChange={handleChange}
                        className="mt-[3px] w-4 h-4 flex-shrink-0 accent-[#C9A84C] cursor-pointer"
                      />
                      <span className="text-[11.5px] leading-[1.55] text-[#5F5F5F] dark:text-white/60">
                        I agree to receive{" "}
                        <strong className="font-semibold text-[#0A1628] dark:text-white">
                          Marketing SMS
                        </strong>{" "}
                        from {LEGAL_ENTITY} (offers, announcements, and promotions) at
                        the number provided, approximately 2 to 4 messages per month. Msg
                        &amp; data rates may apply. Reply STOP to unsubscribe, HELP for
                        help.
                      </span>
                    </label>

                    <p className="text-[10.5px] leading-[1.5] text-[#6B6B6B] dark:text-white/55">
                      By providing your phone number and checking the box(es) above, you
                      consent to receive text messages from {LEGAL_ENTITY} at the number
                      provided. Consent is not a condition of purchase. Message and data
                      rates may apply. Message frequency varies. Reply STOP to unsubscribe
                      or HELP for help.
                    </p>

                    <p className="text-[11.5px] text-center text-[#6B6B6B] dark:text-white/55">
                      <a
                        href="/privacy-policy.html"
                        className="text-[#7E6216] dark:text-[#D9BC6B] underline underline-offset-2"
                      >
                        Privacy Policy
                      </a>
                      <span className="mx-2">|</span>
                      <a
                        href="/terms.html"
                        className="text-[#7E6216] dark:text-[#D9BC6B] underline underline-offset-2"
                      >
                        Terms of Service
                      </a>
                    </p>
                  </div>

                  {/* Error */}
                  {status === "error" && (
                    <p className="text-sm text-red-600">
                      Something went wrong. Please email us directly at{" "}
                      <a href={`mailto:${CONTACT_EMAIL}`} className="underline">
                        {CONTACT_EMAIL}
                      </a>
                      .
                    </p>
                  )}

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="w-full flex items-center justify-center gap-3 px-10 py-4 rounded-md bg-[#0A1628] dark:bg-[#C9A84C] text-white dark:text-[#0A1628] text-sm font-semibold tracking-[0.1em] uppercase hover:bg-[#C9A84C] hover:text-[#0A1628] dark:hover:bg-[#d4b65e] transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {status === "sending" ? (
                      <>
                        <Loader className="w-4 h-4 animate-spin" />
                        Sending…
                      </>
                    ) : (
                      "Get LocalEdge™"
                    )}
                  </button>

                  <p className="text-xs text-[#6B6B6B] dark:text-white/55 text-center">
                    We respond within one business day. No spam, ever.
                  </p>
                </form>
              )}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
