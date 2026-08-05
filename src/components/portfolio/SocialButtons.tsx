import { Github, Linkedin } from "lucide-react";
import { GITHUB_URL, LINKEDIN_URL } from "./data";

const base =
  "group relative inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 hover:scale-105";

function Tooltip({ label }: { label: string }) {
  return (
    <span className="pointer-events-none absolute -bottom-9 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-lg border border-border bg-popover px-3 py-1 text-xs text-popover-foreground opacity-0 transition-opacity duration-200 group-hover:opacity-100">
      {label}
    </span>
  );
}

export function LinkedInButton() {
  return (
    <a href={LINKEDIN_URL} target="_blank" rel="noreferrer" className={`glass ${base} hover:shadow-[var(--shadow-glow)]`}>
      <Linkedin className="h-4 w-4" /> LinkedIn
      <Tooltip label="Connect on LinkedIn" />
    </a>
  );
}

export function GitHubButton() {
  return (
    <a href={GITHUB_URL} target="_blank" rel="noreferrer" className={`glass ${base} hover:shadow-[var(--shadow-glow)]`}>
      <Github className="h-4 w-4" /> GitHub
      <Tooltip label="View my GitHub" />
    </a>
  );
}
