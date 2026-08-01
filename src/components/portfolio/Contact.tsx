import { useState, type FormEvent } from "react";
import { motion } from "motion/react";
import { Mail, MapPin, Linkedin, Send } from "lucide-react";
import { EMAIL, LINKEDIN_URL } from "./data";

const field =
  "w-full rounded-2xl border border-border bg-secondary/40 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground outline-none transition-colors focus:border-primary/70";

export function Contact() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
    e.currentTarget.reset();
  };

  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-6xl px-5">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">Contact</p>
        <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Get In Touch</h2>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1.2fr_1fr]">
          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass space-y-4 rounded-4xl p-7"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <input required name="name" placeholder="Name" className={field} />
              <input required type="email" name="email" placeholder="Email" className={field} />
            </div>
            <input required name="subject" placeholder="Subject" className={field} />
            <textarea required name="message" rows={5} placeholder="Message" className={field} />
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-7 py-3 text-sm font-semibold uppercase tracking-wide text-primary-foreground shadow-[var(--shadow-glow)] transition-transform duration-200 hover:scale-105"
            >
              Send Message <Send className="h-4 w-4" />
            </button>
            {sent && (
              <p className="text-sm text-primary">Thanks! Your message has been noted.</p>
            )}
          </motion.form>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass space-y-6 rounded-4xl p-7"
          >
            <h3 className="text-lg font-semibold">Contact Info</h3>

            <a href={`mailto:${EMAIL}`} className="flex items-start gap-4 group">
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

            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noreferrer"
              className="flex items-start gap-4 group"
            >
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-gradient-brand text-primary-foreground">
                <Linkedin className="h-5 w-5" />
              </span>
              <span>
                <span className="block text-xs uppercase tracking-wider text-muted-foreground">
                  LinkedIn
                </span>
                <span className="block text-sm transition-colors group-hover:text-primary">
                  LinkedIn Profile
                </span>
              </span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
