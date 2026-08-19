import { motion } from "motion/react";
import { Code2, Cloud, Palette, Brain } from "lucide-react";
import { skills } from "./data";

const paragraphs = [
  "Passionate Software Developer and third-year B.Tech IT student with foundational experience in Python and Java. Skilled in building web applications and UI/UX designs, with a strong interest in artificial intelligence, data structures, problem-solving, and cloud computing. Actively working on innovative software projects and continuously improving my technical skills.",
];

const highlights = [
  { icon: Code2, title: "Development", text: "Web apps with clean, maintainable code." },
  { icon: Palette, title: "UI/UX Design", text: "Figma prototypes and design systems." },
  { icon: Brain, title: "Problem Solving", text: "Data structures and algorithms practice." },
  { icon: Cloud, title: "Cloud Basics", text: "Deployments and cloud fundamentals." },
];

export function About() {
  return (
    <section id="about" className="relative py-28">
      <div className="relative mx-auto max-w-6xl px-5">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">About Me</p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Who I Am</h2>
        </motion.div>

        <div className="mt-14 grid gap-8 lg:grid-cols-[1.1fr_1fr]">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass gradient-border rounded-4xl p-8 transition-transform duration-300 hover:-translate-y-1"
          >
            <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
              {paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>

            <h3 className="mt-8 text-lg font-semibold">Skills</h3>
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

          <div className="grid gap-5 sm:grid-cols-2">
            {highlights.map((h, i) => (
              <motion.div
                key={h.title}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="glass gradient-border rounded-3xl p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-[var(--shadow-glow)]"
              >
                <span className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-brand text-primary-foreground">
                  <h.icon className="h-5 w-5" />
                </span>
                <h4 className="mt-4 text-base font-semibold">{h.title}</h4>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{h.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
