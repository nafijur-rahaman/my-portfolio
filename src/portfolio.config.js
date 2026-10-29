/**
 * ─────────────────────────────────────────────────────────────
 *  PORTFOLIO CONFIG
 *  Everything you see on the site comes from this one file.
 *  Edit the values below — no component code needs to change.
 * ─────────────────────────────────────────────────────────────
 */
import {
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiNextdotjs,
  SiPython,
  SiDjango,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiGit,
  SiLinux,
  SiDocker,
} from "react-icons/si";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

import profileImage from "./assets/profile.webp";
import ethicaldenLogo from "./assets/ethicalden.png";
import lifesureImg from "./assets/lifesure.webp";
import tuitionImg from "./assets/tuition.webp";
import triporaImg from "./assets/tripora.webp";
import donationImg from "./assets/donation.webp";

/* ── Theme ─────────────────────────────────────────────────── */
export const theme = {
  // "dark" | "light" | "system"
  defaultMode: "dark",
  // One of the keys in `accents` below
  defaultAccent: "cyan",
  // Show the theme switcher (mode + accent) in the navbar
  allowVisitorCustomization: true,
  // Animated particle network in the background
  particles: true,
  // Accent presets: [primary, secondary] used for buttons, gradients, highlights.
  // Add your own: any CSS color works.
  accents: {
    cyan: ["#22d3ee", "#3b82f6"],
    violet: ["#a78bfa", "#ec4899"],
    emerald: ["#34d399", "#14b8a6"],
    amber: ["#fbbf24", "#f97316"],
    rose: ["#fb7185", "#f43f5e"],
  },
};

/* ── Personal info ─────────────────────────────────────────── */
export const profile = {
  name: "Md. Nafijur Rahaman",
  shortName: "Nafis",
  initials: "N",
  title: "Full-Stack Developer",
  location: "Dhaka, Bangladesh",
  email: "tanjidnafis@gmail.com",
  image: profileImage,
  // File in /public. Set to null to hide every resume button.
  resume: "/Md. Nafijur Rahaman (Full).pdf",
  // Shows a "status" pill in the hero. Set to null to hide.
  availability: "Open to new opportunities",
};

export const socials = [
  { label: "GitHub", href: "https://github.com/nafijur-rahaman", icon: FaGithub },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/nafijur-rahaman", icon: FaLinkedin },
  { label: "Email", href: "mailto:tanjidnafis@gmail.com", icon: FaEnvelope },
];

/* ── Sections ──────────────────────────────────────────────── */
// Reorder or remove entries to change what appears on the page and in the navbar.
export const sections = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

/* ── Hero ──────────────────────────────────────────────────── */
export const hero = {
  // Rotating words typed out above the headline
  roles: ["Full-Stack Developer", "Backend Engineer", "React Developer"],
  // Wrap a word in *asterisks* to highlight it with the accent gradient
  headline: "Building *end-to-end* web products that scale.",
  description:
    "I design and build robust full-stack web apps with React, Django and Node.js — blending performance, clean architecture and thoughtful detail.",
  primaryCta: { label: "View Projects", href: "#projects" },
  secondaryCta: { label: "Get in Touch", href: "#contact" },
  stats: [
    { value: "1+", label: "Years Experience" },
    { value: "10+", label: "Projects Built" },
    { value: "15+", label: "Technologies" },
  ],
};

/* ── About ─────────────────────────────────────────────────── */
export const about = {
  // Wrap words in *asterisks* to highlight them
  paragraphs: [
    "Hi, I'm *Nafis*! I'm a full-stack developer who loves turning ideas into smooth, scalable web applications. I focus on building apps that just work — efficient, reliable, and a joy to use.",
    "I've built my skills across *React*, *Django REST*, *Node.js* and *PostgreSQL*, and I enjoy learning new technologies and figuring out how they can solve real problems.",
    "When I'm not coding, you'll find me exploring AI integrations, contributing to open source, or tinkering with ways to make workflows smarter and faster.",
  ],
  highlights: [
    { title: "Clean Architecture", text: "Maintainable, well-tested code built to grow." },
    { title: "API Design", text: "RESTful services with secure auth and clear contracts." },
    { title: "Polished UI", text: "Responsive, accessible interfaces with smooth motion." },
  ],
  journeyTitle: "My Journey",
  journey: [
    {
      year: "2023",
      title: "Started CSE Journey",
      description:
        "Began my Bachelor of Computer Science degree at Bangladesh University of Business and Technology (BUBT).",
    },
    {
      year: "2024",
      title: "CSE Fundamentals with Phitron",
      description:
        "Learned programming fundamentals, data structures, algorithms, OOP, databases, Django and Django REST Framework.",
    },
    {
      year: "2025",
      title: "Complete Web Development with Programming Hero",
      description: "Mastered MERN stack development.",
    },
    {
      year: "Next",
      title: "Building Impactful Products",
      description: "Focusing on scalable, AI-powered apps that solve real-world problems.",
    },
  ],
};

/* ── Skills ────────────────────────────────────────────────── */
// `icon` is any react-icons component (browse https://react-icons.github.io/react-icons).
// `color` is optional; it's the brand color shown on hover.
export const skills = [
  {
    title: "Front-End",
    items: [
      { name: "React", icon: SiReact, color: "#61dafb" },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "TypeScript", icon: SiTypescript, color: "#3178c6" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38bdf8" },
    ],
  },
  {
    title: "Back-End",
    items: [
      { name: "Python", icon: SiPython, color: "#3776ab" },
      { name: "Django REST", icon: SiDjango, color: "#44b78b" },
      { name: "Node.js", icon: SiNodedotjs, color: "#5fa04e" },
      { name: "Express.js", icon: SiExpress },
    ],
  },
  {
    title: "Databases",
    items: [
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169e1" },
      { name: "MySQL", icon: SiMysql, color: "#4479a1" },
      { name: "MongoDB", icon: SiMongodb, color: "#47a248" },
    ],
  },
  {
    title: "Tools & DevOps",
    items: [
      { name: "Git", icon: SiGit, color: "#f05032" },
      { name: "Linux", icon: SiLinux, color: "#fcc624" },
      { name: "Docker (Basic)", icon: SiDocker, color: "#2496ed" },
    ],
  },
];

/* ── Experience ────────────────────────────────────────────── */
export const experience = [
  {
    role: "Junior Backend Developer",
    company: "Ethical Den",
    logo: ethicaldenLogo,
    url: null,
    period: "Mar 2025 — Present",
    location: null, // e.g. "Remote"
    type: null, // e.g. "Full-time"
    description:
      "Building and maintaining backend services for internal applications with Django and Django REST Framework.",
    achievements: [
      "Designed and implemented RESTful endpoints consumed by internal web apps.",
      "Integrated PostgreSQL and MySQL databases, modelling schemas and optimizing queries.",
      "Implemented OAuth authentication and real-time features with WebSockets and Firebase.",
    ],
    tech: ["Django REST", "PostgreSQL", "Python", "Firebase", "WebSockets", "MySQL", "OAuth", "Git"],
  },
];

/* ── Projects ──────────────────────────────────────────────── */
// `category` powers the filter tabs. `featured: true` shows a badge.
export const projects = [
  {
    title: "LifeSure",
    subtitle: "Modern Life Insurance Platform",
    category: "MERN",
    featured: true,
    image: lifesureImg,
    description:
      "A life insurance tech platform bringing transparency and trust to the industry. Users explore policies, generate personalized quotes, connect with agents, and manage claims and payments in one place.",
    frontend: ["React", "Tailwind CSS", "Framer Motion", "Axios", "Firebase Auth"],
    backend: ["Node.js", "Express.js", "MongoDB", "JWT & RBAC", "Stripe"],
    links: {
      demo: "https://lifesure-client.vercel.app/",
      frontend: "https://github.com/nafijur-rahaman/Lifesure-Client",
      backend: "https://github.com/nafijur-rahaman/Lifesure-Server",
    },
    features: [
      "Policy exploration with detailed descriptions",
      "Instant quote generation",
      "Agent connect for calls or chat",
      "Dashboard overview of policies, payments and claims",
      "Secure JWT & role-based authentication",
      "Online payments via Stripe",
      "Premium notifications & reminders",
      "Claims processing and admin control panel",
      "Analytics dashboard",
    ],
  },
  {
    title: "Tuition Media",
    subtitle: "Student–Tutor Matching Platform",
    category: "Django",
    featured: true,
    image: tuitionImg,
    description:
      "A platform connecting students with tutors. Students post tuition requests, browse tutor listings, leave reviews and manage profiles, while admins moderate users and posts.",
    frontend: ["HTML5", "CSS", "Bootstrap", "JavaScript", "jQuery / AJAX"],
    backend: ["Django REST Framework", "PostgreSQL", "Token & RBAC", "Docker", "Cloudinary"],
    links: {
      demo: "https://tuitionmedia.netlify.app/",
      frontend: "https://github.com/nafijur-rahaman/Tution-Media-platform-frontend",
      backend: "https://github.com/nafijur-rahaman/Tution-Media-Platform-Backend-",
    },
    features: [
      "User authentication & role-based access",
      "Profile management for students and tutors",
      "Create and manage tuition posts",
      "Tutor listings with search & filters",
      "Reviews & ratings",
      "Admin management of users and posts",
    ],
  },
  {
    title: "Tripora",
    subtitle: "Travel Package Management",
    category: "MERN",
    image: triporaImg,
    description:
      "A full-stack travel package management system with secure authentication, CRUD for packages, booking and category management, and smooth animated UI.",
    frontend: ["React", "Tailwind CSS", "Framer Motion", "React Router", "Axios"],
    backend: ["Node.js", "Express.js", "MongoDB Atlas", "Firebase Admin", "JWT"],
    links: {
      demo: "https://tripora-amber.vercel.app/",
      frontend: "https://github.com/nafijur-rahaman/Tripora-Frontend",
      backend: "https://github.com/nafijur-rahaman/Tripora-Backend",
    },
    features: [
      "User authentication with Firebase",
      "CRUD operations for travel packages",
      "Package booking management",
      "Category management",
      "Token-protected APIs",
      "Interactive carousels and animations",
    ],
  },
  {
    title: "Donation Platform",
    subtitle: "Fundraising Campaigns & Payments",
    category: "Django",
    image: donationImg,
    description:
      "Browse donation campaigns, contribute securely and track donation history. Donors, organizers and admins manage accounts and campaigns with integrated payment processing.",
    frontend: ["HTML5", "Tailwind CSS", "JavaScript", "jQuery / AJAX"],
    backend: ["Django", "PostgreSQL", "Cloudinary", "Docker", "SSLCommerz"],
    links: {
      demo: "https://donation-platform.netlify.app/",
      frontend: "https://github.com/nafijur-rahaman/Donation-platofrm-frontend",
      backend: "https://github.com/nafijur-rahaman/Donation-platform-backend",
    },
    features: [
      "Role-based access for donors, organizers and admins",
      "Create, update and manage donation campaigns",
      "Browse and filter campaigns with progress tracking",
      "Secure donations via SSLCommerz",
      "Donation history with receipts",
      "Cloud media storage via Cloudinary",
    ],
  },
];

/* ── Contact ───────────────────────────────────────────────── */
export const contact = {
  heading: "Let's build something together",
  text: "Have a project in mind, a role to fill, or just want to say hi? My inbox is always open — I'll get back to you as soon as I can.",
  // Messages are sent with EmailJS when VITE_SERVICE_ID, VITE_TEMPLATE_ID and
  // VITE_PUBLIC_KEY are set (see .env.example). Otherwise the form opens the
  // visitor's email app addressed to `profile.email`.
};

export const footer = {
  tagline: "Designed & built with React, Tailwind CSS and Motion.",
};
