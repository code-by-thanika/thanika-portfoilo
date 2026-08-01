import { motion } from "motion/react";
import { ArrowRight, Linkedin } from "lucide-react";
import heroImage from "@/assets/hero-dev.jpg";
import { LINKEDIN_URL } from "./data";

const stats = [
  { value: "10+", label: "Projects" },
  { value: "4+", label: "UI/UX Designs" },
  { value: "2nd", label: "Year B.Tech" },
];

export function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden pt-36 pb-24">
      <div className="pointer-events-none absolute -top-40 -left-32 h-[26rem] w-[26rem] rounded-full bg-primary/25 blur-[120px]" />
      <div className="pointer-events-none absolute -right-32 top-24 h-[26rem] w-[26rem] rounded-full bg-accent/25 blur-[120px]" />

      <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium text-muted-foreground">
            <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
            Open to Opportunities
          </span>

          <h1 className="mt-6 text-4xl font-bold leading-[1.1] sm:text-5xl lg:text-6xl">
            HI, I&apos;M <span className="text-gradient">THANIKA</span> 👋
          </h1>

          <p className="mt-5 text-lg font-medium text-foreground/90">
            Passionate Software Developer and second-year B.Tech IT student.
          </p>
          <p className="mt-3 max-w-lg text-base leading-relaxed text-muted-foreground">
            Building web apps and UI/UX designs with a love for data structures and cloud
            fundamentals.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition-transform duration-200 hover:scale-105"
            >
              View Portfolio <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noreferrer"
              className="glass inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-transform duration-200 hover:scale-105"
            >
              <Linkedin className="h-4 w-4" /> LinkedIn
            </a>
          </div>

          <div className="mt-12 grid max-w-md grid-cols-3 gap-4">
            {stats.map((s) => (
              <div key={s.label} className="glass rounded-2xl px-4 py-5 text-center">
                <div className="font-display text-2xl font-bold text-gradient">{s.value}</div>
                <div className="mt-1 text-xs text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
          className="relative"
        >
          <motion.div
            animate={{ y: [0, -18, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="glass relative overflow-hidden rounded-4xl p-3"
          >
            <img
              src={heroImage}
              alt="Illustration of a developer working at a futuristic glass desk"
              width={1024}
              height={1024}
              className="w-full rounded-3xl"
            />
          </motion.div>

          <motion.div
            animate={{ y: [0, 24, 0], rotate: [0, 12, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="glass absolute -left-6 top-10 h-16 w-16 rounded-2xl"
          />
          <motion.div
            animate={{ y: [0, -22, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-6 right-8 h-20 w-20 rounded-full bg-gradient-brand opacity-70 blur-md"
          />
        </motion.div>
      </div>
    </section>
  );
}
