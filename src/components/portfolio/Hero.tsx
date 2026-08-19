import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-dev.jpg";
import { roles } from "./data";
import { GitHubButton, LinkedInButton } from "./SocialButtons";

const stats = [
  { value: "16+", label: "Projects" },
  { value: "4+", label: "UI/UX Designs" },
  { value: "3rd", label: "Year B.Tech" },
];

function useTypedRole() {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const full = roles[index % roles.length] ?? "";
    const done = !deleting && text === full;
    const cleared = deleting && text === "";

    const timeout = setTimeout(
      () => {
        if (done) return setDeleting(true);
        if (cleared) {
          setDeleting(false);
          setIndex((i) => (i + 1) % roles.length);
          return;
        }
        setText(deleting ? full.slice(0, text.length - 1) : full.slice(0, text.length + 1));
      },
      done ? 1400 : deleting ? 45 : 95,
    );

    return () => clearTimeout(timeout);
  }, [text, deleting, index]);

  return text;
}

export function Hero() {
  const typed = useTypedRole();

  return (
    <section id="hero" className="relative overflow-hidden pt-40 pb-28">
      <div className="relative mx-auto grid max-w-6xl items-center gap-16 px-5 lg:grid-cols-2">
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
            HI, I&apos;M <span className="animate-gradient-text">THANIKA</span> 👋
          </h1>

          <p className="mt-5 text-xl font-semibold text-foreground/90">
            I&apos;m a{" "}
            <span className="text-primary">{typed}</span>
            <span className="ml-0.5 inline-block h-6 w-[2px] translate-y-1 animate-pulse bg-primary align-middle" />
          </p>
          <p className="mt-4 max-w-lg text-base leading-relaxed text-muted-foreground">
            Passionate Software Developer and third-year B.Tech IT student building web
            applications, AI-powered solutions, and modern UI/UX experiences.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition-transform duration-300 hover:scale-105"
            >
              View Portfolio <ArrowRight className="h-4 w-4" />
            </a>
            <LinkedInButton />
            <GitHubButton />
          </div>

          <div className="mt-14 grid max-w-md grid-cols-3 gap-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="glass gradient-border rounded-2xl px-4 py-5 text-center transition-transform duration-300 hover:-translate-y-1"
              >
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
            animate={{ y: [0, 14, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="glass absolute -bottom-8 -left-4 flex items-center gap-3 rounded-3xl p-3 pr-5 sm:-left-8"
          >
            <span className="grid h-16 w-16 place-items-center rounded-2xl bg-gradient-brand font-display text-2xl font-bold text-primary-foreground">
              TS
            </span>
            <span>
              <span className="block text-sm font-semibold">Thanika S</span>
              <span className="block text-xs text-muted-foreground">Software Developer</span>
            </span>
          </motion.div>

          <motion.div
            animate={{ y: [0, -22, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-6 right-6 h-20 w-20 rounded-full bg-gradient-brand opacity-60 blur-md"
          />
        </motion.div>
      </div>
    </section>
  );
}
