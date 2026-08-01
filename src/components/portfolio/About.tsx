import { motion } from "motion/react";
import { skills } from "./data";

const paragraphs = [
  "Passionate Software Developer and second-year B.Tech IT student with foundational experience in Python and Java.",
  "Skilled in building web applications and UI/UX design.",
  "Strong interest in data structures, problem-solving, and cloud fundamentals.",
  "Actively working on innovative projects in web development.",
];

export function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="mx-auto max-w-6xl px-5">
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-sm font-semibold uppercase tracking-[0.25em] text-primary"
        >
          About Me
        </motion.p>

        <div className="mt-4 grid gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold sm:text-4xl">Who I Am</h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
              {paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass rounded-4xl p-7"
          >
            <h3 className="text-lg font-semibold">Skills</h3>
            <div className="mt-5 flex flex-wrap gap-3">
              {skills.map((s) => (
                <span
                  key={s}
                  className="rounded-full border border-border bg-secondary/60 px-4 py-2 text-sm font-medium text-muted-foreground transition-all duration-200 hover:-translate-y-1 hover:border-primary/60 hover:text-foreground hover:shadow-[var(--shadow-glow)]"
                >
                  {s}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
