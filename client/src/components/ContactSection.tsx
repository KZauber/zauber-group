import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Mail, Phone, Globe, CheckCircle, Loader } from "lucide-react";

// ─── GHL Webhook ────────────────────────────────────────────────────────────
const GHL_WEBHOOK_URL = "https://services.leadconnectorhq.com/hooks/qbIo1Hf53VoXfYNozERj/webhook-trigger/58dfda30-6716-4a51-a616-e379ef1c66dc";

// ─── Contact info ────────────────────────────────────────────────────────────
const CONTACT_EMAIL = "kelly@zaubergroup.com";
const CONTACT_PHONE_DISPLAY = "(512) 787-1186";
const CONTACT_PHONE_TEL = "+15127871186";

type FormState = {
  name: string;
  company: string;
  phone: string;
  email: string;
  tier: string;
  message: string;
};

const EMPTY: FormState = {
  name: "",
  company: "",
  phone: "",
  email: "",
  tier: "",
  message: "",
};

export default function ContactSection() {
  const { ref: sectionRef, isVisible } = useScrollAnimation(0.1);
  const [form, setForm] = useState<FormState>(EMPTY);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    const payload = {
      ...form,
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
        await new Promise((r) => setTimeout(r, 900));
      }
      setStatus("success");
      setForm(EMPTY);
    } catch {
      setStatus("error");
    }
  };

  const inputClass =
    "w-full bg-white border border-[#E0DDD8] text-[#0A1628] text-sm px-4 py-3 " +
    "focus:outline-none focus:border-[#C9A84C] focus:ring-1 focus:ring-[#C9A84C]/30 " +
    "placeholder:text-[#BBBBBB] transition-colors duration-200";

  const labelClass = "block text-xs font-medium tracking-[0.12em] uppercase text-[#888] mb-1.5";

  return (
    <section id="contact" className="py-24 sm:py-32 bg-white">
      <div className="container">
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
              <h2 className="font-serif text-4xl sm:text-5xl font-semibold text-[#0A1628] leading-[1.15] mb-6">
                Ready to Stop
                <br />
                <span className="text-[#C9A84C]">Chasing Work?</span>
              </h2>
              <p className="text-[#555] text-lg leading-relaxed mb-12 max-w-lg">
                Whether you're a custom home builder or a commercial contractor,
                let's talk about getting BuilderFlow™ working for your business.
                No pressure — just a real conversation about what's possible.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-5">
                  <div className="flex-shrink-0 w-12 h-12 border border-[#C9A84C]/30 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-[#C9A84C]" />
                  </div>
                  <div>
                    <p className="text-sm text-[#999] tracking-wide uppercase mb-1">Email</p>
                    <a href={`mailto:${CONTACT_EMAIL}`} className="text-[#0A1628] text-lg hover:text-[#C9A84C] transition-colors">
                      {CONTACT_EMAIL}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="flex-shrink-0 w-12 h-12 border border-[#C9A84C]/30 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-[#C9A84C]" />
                  </div>
                  <div>
                    <p className="text-sm text-[#999] tracking-wide uppercase mb-1">Phone</p>
                    <a href={`tel:${CONTACT_PHONE_TEL}`} className="text-[#0A1628] text-lg hover:text-[#C9A84C] transition-colors">
                      {CONTACT_PHONE_DISPLAY}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="flex-shrink-0 w-12 h-12 border border-[#C9A84C]/30 flex items-center justify-center">
                    <Globe className="w-5 h-5 text-[#C9A84C]" />
                  </div>
                  <div>
                    <p className="text-sm text-[#999] tracking-wide uppercase mb-1">Service Area</p>
                    <p className="text-[#0A1628] text-lg">Nationwide</p>
                  </div>
                </div>
              </div>
            </div>

            {/* ── Right: Contact form ── */}
            <div>
              {status === "success" ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-16 border border-[#C9A84C]/20 bg-[#F8F6F1]">
                  <CheckCircle className="w-12 h-12 text-[#C9A84C] mb-5" />
                  <h3 className="font-serif text-2xl font-semibold text-[#0A1628] mb-3">
                    Message received.
                  </h3>
                  <p className="text-[#555] leading-relaxed max-w-sm">
                    We'll be in touch within one business day to schedule your discovery call. Talk soon.
                  </p>
                  <button onClick={() => setStatus("idle")} className="mt-8 text-xs tracking-[0.15em] uppercase text-[#C9A84C] hover:text-[#0A1628] transition-colors">
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className={labelClass}>Your Name *</label>
                      <input type="text" name="name" required value={form.name} onChange={handleChange} placeholder="First & last name" className={inputClass} />
                    </div>
                    <div>
                      <label className={labelClass}>Company Name *</label>
                      <input type="text" name="company" required value={form.company} onChange={handleChange} placeholder="Your business name" className={inputClass} />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className={labelClass}>Phone Number *</label>
                      <input type="tel" name="phone" required value={form.phone} onChange={handleChange} placeholder="(555) 000-0000" className={inputClass} />
                    </div>
                    <div>
                      <label className={labelClass}>Email Address *</label>
                      <input type="email" name="email" required value={form.email} onChange={handleChange} placeholder="you@yourcompany.com" className={inputClass} />
                    </div>
                  </div>
                  <div>
                    <label className={labelClass}>Which plan are you interested in?</label>
                    <select name="tier" value={form.tier} onChange={handleChange} className={inputClass}>
                      <option value="">Not sure yet — let's talk</option>
                      <option value="Starter — $1,500/mo">Starter — $1,500/mo (Social Media Autopilot)</option>
                      <option value="Growth — $2,500/mo">Growth — $2,500/mo (+ Website / SEO / GEO)</option>
                      <option value="BuilderFlow Full — $3,500/mo">BuilderFlow™ Full — $3,500/mo (Most Popular)</option>
                      <option value="Premium — $5,000/mo">Premium — $5,000/mo (+ Meta Ads)</option>
                    </select>
                  </div>
                  <div>
                    <label className={labelClass}>Anything else we should know?</label>
                    <textarea name="message" rows={4} value={form.message} onChange={handleChange} placeholder="Tell us about your business, your market, or what you're looking to achieve..." className={`${inputClass} resize-none`} />
                  </div>
                  {status === "error" && (
                    <p className="text-sm text-red-600">
                      Something went wrong. Please email us directly at{" "}
                      <a href={`mailto:${CONTACT_EMAIL}`} className="underline">{CONTACT_EMAIL}</a>.
                    </p>
                  )}
                  <button type="submit" disabled={status === "sending"} className="w-full flex items-center justify-center gap-3 px-10 py-4 bg-[#0A1628] text-white text-sm font-semibold tracking-[0.1em] uppercase hover:bg-[#C9A84C] hover:text-[#0A1628] transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed">
                    {status === "sending" ? (
                      <><Loader className="w-4 h-4 animate-spin" />Sending…</>
                    ) : (
                      "Get BuilderFlow™"
                    )}
                  </button>
                  <p className="text-xs text-[#AAAAAA] text-center">We respond within one business day. No spam, ever.</p>
                </form>
              )}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
    }
