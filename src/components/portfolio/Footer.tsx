import { Github, Linkedin, Mail } from "lucide-react";
import { EMAIL, GITHUB_URL, LINKEDIN_URL } from "./data";

const socials = [
  { icon: Github, href: GITHUB_URL, label: "GitHub" },
  { icon: Linkedin, href: LINKEDIN_URL, label: "LinkedIn" },
  { icon: Mail, href: `mailto:${EMAIL}`, label: "Email" },
];

export function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-5 sm:flex-row sm:justify-between">
        <div className="text-center sm:text-left">
          <span className="font-display text-2xl font-bold text-gradient">T.</span>
          <p className="mt-1 text-sm text-muted-foreground">© 2026 Thanika S</p>
          <p className="text-xs text-muted-foreground">Made with React &amp; Tailwind CSS</p>
        </div>

        <div className="flex gap-3">
          {socials.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              target="_blank"
              rel="noreferrer"
              className="glass grid h-11 w-11 place-items-center rounded-2xl text-muted-foreground transition-all duration-200 hover:scale-110 hover:text-foreground"
            >
              <Icon className="h-5 w-5" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
