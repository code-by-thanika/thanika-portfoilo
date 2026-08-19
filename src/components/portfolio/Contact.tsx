import { useRef, useState, type FormEvent } from "react";
import { motion } from "motion/react";
import emailjs from "@emailjs/browser";
import { Mail, MapPin, Linkedin, Send, Github, ExternalLink } from "lucide-react";
import { EMAIL, GITHUB_URL, LINKEDIN_URL } from "./data";

const field =
  "w-full rounded-2xl border border-border bg-secondary/40 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground outline-none transition-colors focus:border-primary/70";

const SERVICE_ID = import.meta.env["VITE_EMAILJS_SERVICE_ID"] as string | undefined;
const TEMPLATE_ID = import.meta.env["VITE_EMAILJS_TEMPLATE_ID"] as string | undefined;
const PUBLIC_KEY = import.meta.env["VITE_EMAILJS_PUBLIC_KEY"] as string | undefined;

export function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      const data = new FormData(form);
      window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(
        String(data.get("subject") ?? ""),
      )}&body=${encodeURIComponent(
        `${String(data.get("message") ?? "")}\n\n— ${String(data.get("name") ?? "")} (${String(data.get("email") ?? "")})`,
      )}`;
      setStatus("sent");
      return;
    }

    setStatus("sending");
    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form, { publicKey: PUBLIC_KEY });
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="relative py-28">
      <div className="relative mx-auto max-w-6xl px-5">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">Contact</p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Get In Touch</h2>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-[1.2fr_1fr]">
          <motion.form
            ref={formRef}
            onSubmit={onSubmit}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass gradient-border space-y-4 rounded-4xl p-8"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <input required name="name" placeholder="Name" className={field} />
              <input required type="email" name="email" placeholder="Email" className={field} />
            </div>
            <input required name="subject" placeholder="Subject" className={field} />
            <textarea required name="message" rows={5} placeholder="Message" className={field} />
            <button
              type="submit"
              disabled={status === "sending"}
              className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-7 py-3 text-sm font-semibold uppercase tracking-wide text-primary-foreground shadow-[var(--shadow-glow)] transition-transform duration-200 hover:scale-105 disabled:opacity-60"
            >
              {status === "sending" ? "Sending..." : "Send Message"} <Send className="h-4 w-4" />
            </button>
            {status === "sent" && (
              <p className="text-sm text-primary">Thanks! Your message is on its way.</p>
            )}
            {status === "error" && (
              <p className="text-sm text-destructive">
                Something went wrong. Please email me directly at {EMAIL}.
              </p>
            )}
          </motion.form>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-5"
          >
            <div className="glass gradient-border space-y-6 rounded-4xl p-7">
              <h3 className="text-lg font-semibold">Contact Info</h3>

              <a href={`mailto:${EMAIL}`} className="group flex items-start gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-gradient-brand text-primary-foreground">
                  <Mail className="h-5 w-5" />
                </span>
                <span className="min-w-0">
                  <span className="block text-xs uppercase tracking-wider text-muted-foreground">
                    Email
                  </span>
                  <span className="block truncate text-sm transition-colors group-hover:text-primary">
                    {EMAIL}
                  </span>
                </span>
              </a>

              <div className="flex items-start gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-gradient-brand text-primary-foreground">
                  <MapPin className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-xs uppercase tracking-wider text-muted-foreground">
                    Location
                  </span>
                  <span className="block text-sm">India</span>
                </span>
              </div>

              <div className="flex items-start gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-gradient-brand text-primary-foreground">
                  <Linkedin className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="text-base font-semibold">LinkedIn</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Connect with me professionally
                  </p>
                </div>
              </div>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                title="View LinkedIn Profile"
                className="mt-5 inline-flex items-center gap-2 rounded-full bg-gradient-brand px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-transform duration-200 hover:scale-105"
              >
                View LinkedIn Profile <ExternalLink className="h-4 w-4" />
              </a>
            </div>

            <div className="glass gradient-border rounded-4xl p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-glow)]">
              <div className="flex items-start gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-gradient-brand text-primary-foreground">
                  <Github className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="text-base font-semibold">GitHub</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Explore my projects and source code
                  </p>
                </div>
              </div>
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                title="View GitHub"
                className="mt-5 inline-flex items-center gap-2 rounded-full bg-gradient-brand px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-transform duration-200 hover:scale-105"
              >
                View GitHub <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
