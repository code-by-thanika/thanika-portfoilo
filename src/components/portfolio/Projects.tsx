import { useState } from "react";
import { motion } from "motion/react";
import { ArrowUpRight, ExternalLink, Code2 } from "lucide-react";
import { projects, type Project } from "./data";

const filters = ["All", "Web", "UI/UX"] as const;

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: (index % 3) * 0.08 }}
      className="glass group flex flex-col overflow-hidden rounded-4xl transition-all duration-300 hover:-translate-y-2 hover:border-primary/50 hover:shadow-[var(--shadow-glow)]"
    >
      <div className="relative grid h-44 place-items-center overflow-hidden bg-gradient-brand/10">
        <div className="absolute inset-0 bg-gradient-brand opacity-20 transition-opacity duration-300 group-hover:opacity-35" />
        <Code2 className="relative h-10 w-10 text-foreground/70" />
        <span className="relative mt-2 font-display text-lg font-semibold">{project.title}</span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
          {project.category}
        </span>
        <h3 className="mt-2 text-xl font-bold">{project.title}</h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
          {project.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs text-muted-foreground"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href={project.liveUrl ?? "#projects"}
            {...(project.liveUrl ? { target: "_blank", rel: "noreferrer" } : {})}
            className="inline-flex items-center gap-1.5 rounded-full bg-gradient-brand px-4 py-2 text-xs font-semibold text-primary-foreground transition-transform duration-200 hover:scale-105"
          >
            View Project <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-border px-4 py-2 text-xs font-semibold text-muted-foreground transition-all duration-200 hover:scale-105 hover:text-foreground"
            >
              Live Demo <ExternalLink className="h-3.5 w-3.5" />
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}

export function Projects() {
  const [active, setActive] = useState<(typeof filters)[number]>("All");
  const visible = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="projects" className="relative py-24">
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-96 w-96 -translate-x-1/2 rounded-full bg-accent/15 blur-[140px]" />
      <div className="relative mx-auto max-w-6xl px-5">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">My Work</p>
        <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Featured Projects</h2>

        <div className="mt-8 flex flex-wrap gap-3">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition-all duration-200 hover:scale-105 ${
                active === f
                  ? "bg-gradient-brand text-primary-foreground shadow-[var(--shadow-glow)]"
                  : "glass text-muted-foreground hover:text-foreground"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
