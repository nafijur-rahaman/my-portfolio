import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Copy, Check, Loader2 } from "lucide-react";
import { send } from "@emailjs/browser";
import { profile, socials } from "../portfolio.config";
import Section from "./ui/Section";
import Reveal from "./ui/Reveal";
import Button from "./ui/Button";
import Arrow from "./ui/Arrow";

const EMAILJS = {
  serviceId: import.meta.env.VITE_SERVICE_ID,
  templateId: import.meta.env.VITE_TEMPLATE_ID,
  publicKey: import.meta.env.VITE_PUBLIC_KEY,
};
const emailjsReady = Object.values(EMAILJS).every(Boolean);

const empty = { name: "", email: "", message: "" };

const inputCls =
  "w-full border-0 border-b border-border bg-transparent px-0 py-3 text-lg text-fg placeholder:text-subtle transition focus:border-fg focus:outline-none focus-visible:outline-none";

export default function Contact({ id, number, label, title, intro }) {
  const [form, setForm] = useState(empty);
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const [copied, setCopied] = useState(false);

  const onChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

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
    <Section id={id} number={number} label={label} title={title} intro={intro}>
      <Reveal className="mb-20 flex flex-wrap items-center gap-4 md:pl-[25%]">
        <a
          href={`mailto:${profile.email}`}
          className="group inline-flex items-center gap-3 font-display text-[clamp(1.9rem,5.5vw,4.5rem)] leading-none break-all"
        >
          <span className="link-underline">{profile.email}</span>
          <Arrow className="h-8 w-8 text-accent md:h-12 md:w-12" />
        </a>
        <button
          onClick={copyEmail}
          className="label inline-flex items-center gap-2 rounded-full border border-border px-3 py-2 transition hover:border-fg hover:!text-fg"
        >
          {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
          {copied ? "Copied" : "Copy"}
        </button>
      </Reveal>

      <div className="grid gap-14 border-t border-border pt-12 md:grid-cols-12">
        <Reveal className="md:col-span-3">
          <p className="label mb-5">Elsewhere</p>
          <ul>
            {socials.map(({ href, label }) => (
              <li key={label} className="border-b border-border">
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between py-3 transition hover:text-accent-ink"
                >
                  {label} <Arrow className="h-3.5 w-3.5" />
                </a>
              </li>
            ))}
            {profile.resume && (
              <li className="border-b border-border">
                <a
                  href={profile.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between py-3 transition hover:text-accent-ink"
                >
                  Résumé (PDF) <Arrow className="h-3.5 w-3.5" />
                </a>
              </li>
            )}
          </ul>
        </Reveal>

        <Reveal delay={0.1} className="md:col-span-8 md:col-start-5">
          <p className="label mb-5">Or send a message</p>
          <form onSubmit={onSubmit} className="grid gap-8 sm:grid-cols-2">
            <label className="grid gap-1">
              <span className="sr-only">Name</span>
              <input name="name" value={form.name} onChange={onChange} required autoComplete="name" placeholder="Your name" className={inputCls} />
            </label>
            <label className="grid gap-1">
              <span className="sr-only">Email</span>
              <input type="email" name="email" value={form.email} onChange={onChange} required autoComplete="email" placeholder="Email address" className={inputCls} />
            </label>
            <label className="grid gap-1 sm:col-span-2">
              <span className="sr-only">Message</span>
              <textarea name="message" value={form.message} onChange={onChange} required rows={4} placeholder="Tell me about your project or role…" className={`${inputCls} resize-none`} />
            </label>

            <div className="flex flex-wrap items-center gap-5 sm:col-span-2">
              <Button type="submit" disabled={status === "sending"}>
                {status === "sending" ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" /> Sending…
                  </>
                ) : (
                  <>
                    Send message <Arrow className="h-3.5 w-3.5" />
                  </>
                )}
              </Button>
              <AnimatePresence mode="wait">
                {status === "sent" && (
                  <motion.p key="sent" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} role="status" className="text-sm text-emerald-600 dark:text-emerald-400">
                    Thanks — I'll be in touch soon.
                  </motion.p>
                )}
                {status === "error" && (
                  <motion.p key="error" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} role="alert" className="text-sm text-rose-600 dark:text-rose-400">
                    Something went wrong — please email me directly.
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
