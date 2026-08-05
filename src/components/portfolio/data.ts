export type Project = {
  title: string;
  badge: string;
  filter: "Web" | "UI/UX";
  featured?: boolean;
  description: string;
  tech: string[];
  liveUrl?: string;
  githubUrl?: string;
};

export const projects: Project[] = [
  {
    title: "MindCare Haven",
    badge: "AI + Web",
    filter: "Web",
    featured: true,
    description:
      "AI-powered mental wellness platform featuring mood tracking, AI chatbot, journaling, meditation tools and secure authentication.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Firebase", "Gemini AI"],
    liveUrl: "https://mindcare-haven.vercel.app",
  },
  {
    title: "Guard Truth AI",
    badge: "AI + Web",
    filter: "Web",
    featured: true,
    description:
      "AI-powered fake news detection platform that analyzes news using artificial intelligence.",
    tech: ["React", "TypeScript", "Tailwind CSS", "AI", "Lovable"],
    liveUrl: "https://guard-truth-ai.lovable.app/detect",
  },
  {
    title: "Brain Boost Hub",
    badge: "Web + UI/UX",
    filter: "Web",
    description:
      "An interactive platform offering quizzes, puzzles, and learning tools to improve cognitive skills and knowledge.",
    tech: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://brain-boost-hub.vercel.app/",
  },
  {
    title: "BidNova",
    badge: "Web + UI/UX",
    filter: "Web",
    description:
      "A real-time online auction platform where users can place bids, track items, and compete dynamically.",
    tech: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://bidvault-8x1.caffeine.xyz/",
  },
  {
    title: "Glow Brain Lab",
    badge: "Web + UI/UX",
    filter: "Web",
    description:
      "A visually engaging brain-training app with games and analytics to track mental performance.",
    tech: ["HTML", "CSS", "JavaScript"],
    liveUrl:
      "https://glow-brain-ygmanac9p-thanika19112006-maxs-projects.vercel.app/",
  },
  {
    title: "Daily Plan",
    badge: "Web App",
    filter: "Web",
    description:
      "A productivity web app that helps users organize tasks, set goals, and manage daily schedules efficiently.",
    tech: ["HTML", "CSS", "JavaScript", "Local Storage"],
    liveUrl: "https://daily-calendar-planning-notes-app-vr4.caffeine.xyz/",
  },
  {
    title: "Cipher Vault",
    badge: "Security + Web",
    filter: "Web",
    description:
      "A secure web application for encrypting and storing sensitive data using modern cryptographic techniques.",
    tech: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://cipher-vault-hrlu.vercel.app/",
  },
  {
    title: "EMC Website",
    badge: "UI/UX + Web",
    filter: "Web",
    description:
      "A responsive institutional website showcasing courses, events and resources.",
    tech: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://emc-website-gamma.vercel.app/",
  },
  {
    title: "Events",
    badge: "UI/UX + Web",
    filter: "Web",
    description:
      "Dynamic event management website where users can explore, register and track upcoming events.",
    tech: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://events-5ugs.vercel.app/",
  },
  {
    title: "Tourism",
    badge: "Web",
    filter: "Web",
    description:
      "A tourism website that helps users explore famous destinations, discover travel ideas, and plan memorable trips with ease.",
    tech: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://tourism-dlan.vercel.app/",
  },
  {
    title: "FinWise Pro",
    badge: "Web",
    filter: "Web",
    description:
      "Smart income & expense tracker with AI chatbot, custom emoji categories, interactive charts and monthly insights to help users save smarter.",
    tech: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://finwise-tracker-esgz.vercel.app/",
  },
  {
    title: "GentleCart Commerce",
    badge: "Web + UI/UX",
    filter: "Web",
    description:
      "A modern e-commerce web application with product browsing, smart search, cart management and secure checkout experience.",
    tech: ["HTML", "CSS", "JavaScript"],
    liveUrl:
      "https://gentlecart-commerce-bvv5uvbql-thanika19112006-maxs-projects.vercel.app/",
  },
  {
    title: "KFC Website",
    badge: "UI/UX",
    filter: "UI/UX",
    description: "Modern KFC website redesign with improved user experience.",
    tech: ["Figma"],
    liveUrl:
      "https://www.figma.com/design/rAf5ssDcxW94jmXsMKczwe/KFC-Website?node-id=1-2&t=tLeJB2QOUFMiquYq-0",
  },
  {
    title: "Instagram App",
    badge: "UI/UX",
    filter: "UI/UX",
    description: "Modern Instagram mobile app redesign.",
    tech: ["Figma"],
    liveUrl:
      "https://www.figma.com/design/JHN0bj8m1bL0nZ4iUZ3qUt/instagram-app?t=tLeJB2QOUFMiquYq-0",
  },
  {
    title: "Furniture App",
    badge: "UI/UX",
    filter: "UI/UX",
    description: "Modern furniture shopping application design.",
    tech: ["Figma"],
    liveUrl:
      "https://www.figma.com/design/M4mZP50YEyr4o0wYgEasj1/furniture-app?t=tLeJB2QOUFMiquYq-0",
  },
  {
    title: "Red Bus Website",
    badge: "UI/UX",
    filter: "UI/UX",
    description: "Modern Red Bus booking website redesign.",
    tech: ["Figma"],
    liveUrl:
      "https://www.figma.com/design/oFCffuShELQvpxEJyBaVhK/red-Bus?t=tLeJB2QOUFMiquYq-0",
  },
];

export const skills = [
  "Python",
  "Java",
  "JavaScript",
  "HTML/CSS",
  "Data Structures",
  "Cloud Fundamentals",
];

export const roles = ["Developer", "Designer", "Creative Thinker", "GDG Member"];

export const LINKEDIN_URL =
  "https://www.linkedin.com/in/thanika-senthilkumar-49075a327/";
export const LINKEDIN_FEED_URL = "https://www.linkedin.com/feed/";
export const GITHUB_URL = "https://github.com/thanika19112006-max";
export const EMAIL = "thanika19112006@gmail.com";
