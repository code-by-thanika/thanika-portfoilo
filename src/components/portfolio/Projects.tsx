import { useRef, useState, type MouseEvent } from "react";
import { motion } from "motion/react";
import { ExternalLink, Github, Sparkles } from "lucide-react";
import { projects, type Project } from "./data";

const filters = ["All", "Web", "UI/UX"] as const;

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    setTilt({ x: -py * 8, y: px * 10 });
  };

  const hue = (index * 47) % 360;

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: (index % 3) * 0.07 }}
      className="[perspective:1200px]"
    >
      <div
        ref={ref}
        onMouseMove={onMove}
        onMouseLeave={() => setTilt({ x: 0, y: 0 })}
        style={{ transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)` }}
        className="glass gradient-border group flex h-full flex-col overflow-hidden rounded-4xl shadow-[0_20px_50px_-30px_rgba(0,0,0,0.9)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[var(--shadow-glow)]"
      >
        <div className="relative grid h-48 place-items-center overflow-hidden">
          <div
            className="absolute inset-0 opacity-70 transition-opacity duration-300 group-hover:opacity-95"
            style={{
              background: `linear-gradient(135deg, oklch(0.45 0.13 ${170 + (hue % 40)}), oklch(0.32 0.11 ${140 + (hue % 60)}))`,
            }}
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.18),transparent_60%)]" />
          <span className="relative px-6 text-center font-display text-2xl font-bold text-foreground drop-shadow">
            {project.title}
          </span>
          {project.featured && (
            <span className="absolute left-4 top-4 inline-flex items-center gap-1 rounded-full bg-background/70 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-primary backdrop-blur">
              <Sparkles className="h-3 w-3" /> Featured
            </span>
          )}
          <span className="absolute right-4 top-4 rounded-full border border-border bg-background/70 px-3 py-1 text-[11px] font-semibold text-foreground backdrop-blur">
            {project.badge}
          </span>
        </div>

        <div className="flex flex-1 flex-col p-6">
          <h3 className="text-xl font-bold">{project.title}</h3>
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
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full bg-gradient-brand px-4 py-2 text-xs font-semibold text-primary-foreground transition-transform duration-200 hover:scale-105"
              >
                Live Demo <ExternalLink className="h-3.5 w-3.5" />
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-border px-4 py-2 text-xs font-semibold text-muted-foreground transition-all duration-200 hover:scale-105 hover:text-foreground"
              >
                View Code <Github className="h-3.5 w-3.5" />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export function Projects() {
  const [active, setActive] = useState<(typeof filters)[number]>("All");
  const visible = active === "All" ? projects : projects.filter((p) => p.filter === active);

  return (
    <section id="projects" className="relative py-28">
      <div className="relative mx-auto max-w-6xl px-5">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">My Work</p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Featured Projects</h2>
          <p className="mt-3 text-sm text-muted-foreground">{projects.length} projects and counting</p>
        </div>

        <div className="mt-9 flex flex-wrap justify-center gap-3">
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

        <div className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
