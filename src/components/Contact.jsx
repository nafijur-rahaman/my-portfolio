import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Send, CheckCircle2, AlertCircle, Loader2, Mail, MapPin } from "lucide-react";
import { send } from "@emailjs/browser";
import { contact, profile, socials } from "../portfolio.config";
import Section from "./ui/Section";
import Reveal from "./ui/Reveal";
import Button from "./ui/Button";

const EMAILJS = {
  serviceId: import.meta.env.VITE_SERVICE_ID,
  templateId: import.meta.env.VITE_TEMPLATE_ID,
  publicKey: import.meta.env.VITE_PUBLIC_KEY,
};
const emailjsReady = Object.values(EMAILJS).every(Boolean);

const empty = { name: "", email: "", message: "" };

const inputCls =
  "w-full rounded-xl border border-border bg-surface-2/60 px-4 py-3 text-fg placeholder:text-subtle transition focus:border-accent focus:outline-none focus:ring-4 focus:ring-accent/15";

export default function Contact() {
  const [form, setForm] = useState(empty);
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const onChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!emailjsReady) {
      const subject = encodeURIComponent(`Portfolio contact from ${form.name}`);
      const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
      window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
      return;
    }
    setStatus("sending");
    try {
      await send(EMAILJS.serviceId, EMAILJS.templateId, form, EMAILJS.publicKey);
      setStatus("sent");
      setForm(empty);
    } catch (err) {
      console.error("Email send error:", err);
      setStatus("error");
    }
  };

  return (
    <Section id="contact" eyebrow="Contact" title={contact.heading} description={contact.text}>
      <div className="grid gap-6 lg:grid-cols-5">
        <Reveal className="card space-y-6 p-6 sm:p-8 lg:col-span-2">
          <a href={`mailto:${profile.email}`} className="group flex items-center gap-4">
            <span className="grid h-12 w-12 place-items-center rounded-xl bg-accent/10 text-accent-ink">
              <Mail className="h-5 w-5" />
            </span>
            <span>
              <span className="block text-sm text-muted">Email</span>
              <span className="font-medium break-all transition group-hover:text-accent-ink">{profile.email}</span>
            </span>
          </a>
          {profile.location && (
            <div className="flex items-center gap-4">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-accent/10 text-accent-ink">
                <MapPin className="h-5 w-5" />
              </span>
              <span>
                <span className="block text-sm text-muted">Location</span>
                <span className="font-medium">{profile.location}</span>
              </span>
            </div>
          )}
          <div className="border-t border-border pt-6">
            <p className="mb-3 text-sm text-muted">Find me on</p>
            <div className="flex gap-2">
              {socials.map(({ href, label, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="grid h-11 w-11 place-items-center rounded-xl border border-border text-muted transition hover:-translate-y-0.5 hover:border-accent hover:text-accent-ink"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="card p-6 sm:p-8 lg:col-span-3">
          <form onSubmit={onSubmit} className="grid gap-4 sm:grid-cols-2">
            <label className="grid gap-2 text-sm font-medium">
              Name
              <input name="name" value={form.name} onChange={onChange} required autoComplete="name" placeholder="Jane Doe" className={inputCls} />
            </label>
            <label className="grid gap-2 text-sm font-medium">
              Email
              <input type="email" name="email" value={form.email} onChange={onChange} required autoComplete="email" placeholder="jane@company.com" className={inputCls} />
            </label>
            <label className="grid gap-2 text-sm font-medium sm:col-span-2">
              Message
              <textarea name="message" value={form.message} onChange={onChange} required rows={5} placeholder="Tell me about your project or role…" className={`${inputCls} resize-none`} />
            </label>

            <div className="flex flex-wrap items-center gap-4 sm:col-span-2">
              <Button type="submit" disabled={status === "sending"}>
                {status === "sending" ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" /> Sending…
                  </>
                ) : (
                  <>
                    Send Message <Send className="h-4 w-4" />
                  </>
                )}
              </Button>
              <AnimatePresence mode="wait">
                {status === "sent" && (
                  <motion.p key="sent" initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0 }} role="status" className="flex items-center gap-2 text-sm text-emerald-500">
                    <CheckCircle2 className="h-4 w-4" /> Thanks! I'll get back to you soon.
                  </motion.p>
                )}
                {status === "error" && (
                  <motion.p key="error" initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0 }} role="alert" className="flex items-center gap-2 text-sm text-rose-500">
                    <AlertCircle className="h-4 w-4" /> Something went wrong — please email me directly.
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          </form>
        </Reveal>
      </div>
    </Section>
  );
}
