export type Project = {
  title: string;
  category: "Web" | "UI/UX";
  description: string;
  tech: string[];
  liveUrl?: string;
};

export const projects: Project[] = [
  {
    title: "MindCare Haven",
    category: "Web",
    description:
      "An AI-powered mental wellness platform that helps users track their daily mood, chat with an AI assistant, practice mindfulness, maintain a personal journal, and access mental health resources through a secure, responsive, and user-friendly interface.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Firebase", "Gemini AI"],
    liveUrl: "https://mindcare-haven.vercel.app",
  },
  {
    title: "Guard Truth AI",
    category: "Web",
    description:
      "An AI-powered fake news and misinformation detection platform that analyzes news articles and text using artificial intelligence and natural language processing to identify trustworthy information and help users detect misleading content.",
    tech: ["React", "TypeScript", "Tailwind CSS", "AI/ML", "Lovable"],
    liveUrl: "https://guard-truth-ai.lovable.app/detect",
  },
  {
    title: "Brain Boost Hub",
    category: "Web",
    description:
      "Interactive platform offering quizzes, puzzles, and learning tools to improve cognitive skills and knowledge.",
    tech: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "BidNova",
    category: "Web",
    description:
      "Real-time online auction platform where users can place bids, track items, and compete dynamically.",
    tech: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Glow Brain Lab",
    category: "Web",
    description:
      "Visually engaging brain-training app with games and analytics to track mental performance.",
    tech: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Daily Plan",
    category: "Web",
    description:
      "Productivity web app that helps users organize tasks, set goals, and manage daily schedules efficiently.",
    tech: ["HTML", "CSS", "JavaScript", "Local Storage"],
  },
  {
    title: "Cipher Vault",
    category: "Web",
    description:
      "Secure web application for encrypting and storing sensitive data using modern cryptographic techniques.",
    tech: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "EMC Website",
    category: "Web",
    description:
      "Responsive institutional website showcasing courses, events, and resources for an EMC organization.",
    tech: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Events",
    category: "Web",
    description:
      "Dynamic event management website where users can explore, register, and track upcoming events.",
    tech: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Tourism",
    category: "Web",
    description:
      "A tourism website that helps users explore famous destinations, discover travel ideas, and plan memorable trips with ease.",
    tech: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "FinWise Pro",
    category: "Web",
    description:
      "Smart income & expense tracker with AI chatbot, custom emoji categories, interactive charts, and monthly insights.",
    tech: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "GentleCart Commerce",
    category: "Web",
    description: "Clean e-commerce platform with intuitive product browsing and smooth checkout.",
    tech: ["HTML", "CSS", "JavaScript"],
  },
  { title: "KFC Website", category: "UI/UX", description: "Modern UI redesign concept.", tech: ["Figma"] },
  { title: "Instagram App", category: "UI/UX", description: "Modern UI/UX redesign.", tech: ["Figma"] },
  {
    title: "Furniture App",
    category: "UI/UX",
    description: "Furniture shopping application design.",
    tech: ["Figma"],
  },
  {
    title: "Red Bus Website",
    category: "UI/UX",
    description: "Bus booking website redesign.",
    tech: ["Figma"],
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

export const LINKEDIN_URL = "https://www.linkedin.com/in/thanika-s";
export const GITHUB_URL = "https://github.com/";
export const EMAIL = "thanika19112006@gmail.com";
