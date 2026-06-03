/**
 * Single source of truth for all site content.
 *
 * Edit the values below to personalize the site — no component changes needed.
 * Each branch you build on top of this base can extend these types as the
 * site grows (e.g. add a `blog` array, `testimonials`, etc.).
 */

export type NavItem = {
  label: string;
  href: string; // in-page anchor, e.g. "#experience"
};

export type SocialLink = {
  label: string;
  href: string;
  /** lucide-react icon name handled in the component (see site-footer/contact). */
  icon: "github" | "linkedin" | "mail" | "twitter";
};

export type ExperienceItem = {
  role: string;
  company: string;
  period: string; // e.g. "2022 — Present"
  location?: string;
  summary: string;
  highlights: string[];
};

export type SkillGroup = {
  category: string;
  items: string[];
};

export const site = {
  name: "Matthew Everett",
  role: "Software Engineering Student & Intern",
  /** Short, punchy hero tagline. */
  tagline:
    "Building software that improves everyday experiences — with a focus on clean, testable backend code.",
  /** Used for <title>, og, etc. */
  description:
    "Personal website of Matthew Everett — a software engineering student at Rose-Hulman Institute of Technology focused on backend development.",
  location: "Greater Indianapolis, IN",
  email: "mattroyeve@gmail.com",
  /** Path under /public for the about/hero portrait. Leave "" for a placeholder. */
  avatar: "",
  resumeUrl: "", // e.g. "/resume.pdf"
};

export const nav: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export const socials: SocialLink[] = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/matthewroyeverett/",
    icon: "linkedin",
  },
  { label: "Email", href: "mailto:mattroyeve@gmail.com", icon: "mail" },
];

export const about = {
  heading: "About",
  /** Each string is its own paragraph. */
  paragraphs: [
    "I'm a Software Engineering student at Rose-Hulman Institute of Technology with a strong interest in building software that improves everyday experiences. I gravitate toward backend development and care about writing clean, testable code.",
    "During a software engineering internship with Cotton Crafters, I helped migrate a legacy hardware-based database to a cloud-based PostgreSQL solution, strengthened security and user account management, and contributed to documentation and testing. I've also built an AI-powered Mental Health Assistant, where I led backend development and learned to present my work to investors and peers, write effective documentation, and tell a clear story about what I built.",
    "Beyond coursework, I serve as a Sophomore Advisor and hold an officer role in the Volleyball Club. I enjoy helping others succeed — whether that's mentoring freshmen through their schedules and classwork or helping a peer finally click with tricky course material. I'm currently pursuing software engineering opportunities where I can keep applying and sharpening my skills.",
  ],
  /** Quick facts shown alongside the bio. */
  facts: [
    { label: "Based in", value: "Greater Indianapolis, IN" },
    { label: "School", value: "Rose-Hulman Institute of Technology" },
    { label: "Focus", value: "Backend · Software Engineering" },
    { label: "Currently", value: "SWE Intern @ SerraFi" },
  ],
};

export const experience: ExperienceItem[] = [
  {
    role: "Software Engineering Intern",
    company: "SerraFi",
    period: "Summer 2026",
    summary:
      "Software engineering intern contributing to the engineering team.",
    highlights: [],
  },
  {
    role: "Sophomore Advisor",
    company: "Rose-Hulman Institute of Technology",
    period: "",
    location: "Terre Haute, IN",
    summary:
      "Mentor incoming freshmen as they adapt to life and coursework at Rose-Hulman.",
    highlights: [
      "Guide freshmen through scheduling, classes, and coursework.",
      "Help students adjust to Rose-Hulman's pace and lifestyle.",
      "Break down difficult course content so it clicks for peers.",
    ],
  },
  {
    role: "Software Engineering Intern",
    company: "Cotton Crafters",
    period: "",
    location: "India",
    summary:
      "Helped modernize the company's data platform and account systems.",
    highlights: [
      "Migrated a legacy hardware-based database to a cloud-based PostgreSQL solution.",
      "Enhanced security and user account management.",
      "Contributed to documentation and testing.",
    ],
  },
];

export const skills: SkillGroup[] = [
  {
    category: "Backend & Data",
    items: ["PostgreSQL", "SQL", "Cloud Databases", "Database Migration"],
  },
  {
    category: "Engineering",
    items: [
      "Backend Development",
      "Testing",
      "Technical Documentation",
      "Security & Account Management",
    ],
  },
  {
    category: "Interests",
    items: ["AI Applications", "Software Architecture"],
  },
  {
    category: "Leadership & Communication",
    items: ["Mentoring", "Technical Presentations", "Collaboration"],
  },
];
