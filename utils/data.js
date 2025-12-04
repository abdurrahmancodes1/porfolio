import {
  Code2,
  GraduationCap,
  Briefcase,
  Award,
  Rocket,
  Heart,
  Coffee,
  BookOpen,
  Zap,
  Database,
  Server,
  School,
  Cloud,
  Mail,
  MapPin,
  Phone,
  Users,
  ToolCase,
} from "lucide-react";
import { FiGithub, FiInstagram, FiLinkedin, FiTwitter } from "react-icons/fi";
// Public assets are served from `/assets/...` by Vite (placed in `public/assets`)
const PROJECT_IMAGE_1 = "/assets/portfolio.png";
const PROJECT_IMAGE_2 = "/assets/jobportal.png";
const PROJECT_IMAGE_3 = "/assets/interviewPrep.png";
const PROJECT_IMAGE_4 = "/assets/resumebuilder.png";
const ROFILE_PIC =
  "https://ik.imagekit.io/arcodes/PORTFOLIO/profileImage.png?updatedAt=1764524117367";

// SKILLS CATEGORY
export const SKILLS_CATEGORY = [
  {
    title: "Frontend",
    icon: Code2,
    description: "Crafting beautiful, responsive user interfaces",
    skills: [
      { name: "React", level: 70, color: "bg-blue-500" },
      { name: "Tailwind CSS", level: 65, color: "bg-cyan-500" },
      { name: "Framer Motion", level: 40, color: "bg-gray-800" },
      { name: "HTML/CSS", level: 75, color: "bg-orange-400" },
      { name: "JavaScript (ES6+)", level: 70, color: "bg-yellow-500" },
    ],
  },
  {
    title: "Backend",
    icon: Server,
    description: "Building efficient server-side logic and APIs",
    skills: [
      { name: "Node.js", level: 60, color: "bg-green-500" },
      { name: "Express.js", level: 55, color: "bg-gray-600" },
      { name: "REST APIs", level: 60, color: "bg-indigo-500" },
      { name: "JWT Authentication", level: 50, color: "bg-red-500" },
    ],
  },
  {
    title: "Database",
    icon: Database,
    description: "Storing and managing data efficiently",
    skills: [
      { name: "MongoDB", level: 60, color: "bg-green-700" },
      { name: "Mongoose", level: 55, color: "bg-purple-500" },
    ],
  },
  {
    title: "Tools & Others",
    icon: ToolCase,
    description: "Tools and workflows that make development smoother",
    skills: [
      { name: "Git/GitHub", level: 70, color: "bg-gray-700" },
      { name: "VS Code", level: 80, color: "bg-blue-400" },
      { name: "Postman", level: 65, color: "bg-orange-500" },
      { name: "Vite / Webpack", level: 55, color: "bg-pink-500" },
    ],
  },
];

// TECH STACK FLAT
export const TECH_STACK = [
  "React",
  "Tailwind CSS",
  "Framer Motion",
  "HTML",
  "CSS",
  "JavaScript (ES6+)",
  "Node.js",
  "Express.js",
  "REST APIs",
  "JWT Authentication",
  "MongoDB",
  "Mongoose",
  "Git / GitHub",
  "VS Code",
  "Postman",
  "Vite",
];

// PROJECTS
export const PROJECTS = [
  {
    id: 1,
    title: "JobHunt Portal",
    description:
      "A full-stack MERN job portal with user, company, and admin dashboards. Features authentication, profile management, job applications, admin controls, and state management with Redux Toolkit.",
    image:
      "https://ik.imagekit.io/arcodes/PORTFOLIO/jobportal.png?updatedAt=1764524116964", // replace with your actual image import
    tags: [
      "React",
      "Tailwind CSS",
      "Redux Toolkit",
      "Node.js",
      "Express",
      "MongoDB",
      "Multer",
      "Framer Motion",
    ],
    // liveUrl: "#", // add your deployed link
    githubUrl: "#", // add your repo link
    featured: true,
    category: "Full Stack",
  },
  {
    id: 2,
    title: "Personal Portfolio",
    description:
      "A modern responsive portfolio website built with React, Tailwind, and Framer Motion featuring dark/light mode, skill showcase, animated sections, contact form, and scheduling call feature.",
    image:
      "https://ik.imagekit.io/arcodes/PORTFOLIO/portfolio.png?updatedAt=1764524117186",
    tags: ["React", "Tailwind CSS", "Framer Motion", "EmailJS"],
    // liveUrl: "#", // your portfolio live link
    githubUrl: "#", // your portfolio repo link
    featured: true,
    category: "Frontend",
  },
  {
    id: 3,
    title: "Interview Preparation AI App",
    description:
      "AI-powered full-stack web app to help users prepare for interviews. Includes authentication, AI-generated questions, session tracking, and MongoDB-backed storage for personalized learning.",
    image:
      "https://ik.imagekit.io/arcodes/PORTFOLIO/interviewPrep.png?updatedAt=1764524117152",
    tags: [
      "React",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "MongoDB",
      "OpenAI API",
      "Axios",
    ],
    // liveUrl: "#", // coming soon or placeholder
    githubUrl: "#",
    featured: false,
    category: "Full Stack",
  },
  {
    id: 4,
    title: "AI Resume Builder",
    description:
      "An online resume builder app where users can create, manage, and share professional resumes. Includes live preview, AI-powered resume optimization using Google Gemini, image background removal, and multiple customizable templates. Uses ImageKit for image storage and a full MERN stack for backend integration.",
    image:
      "https://ik.imagekit.io/arcodes/PORTFOLIO/resumebuilder.png?updatedAt=1764524117173", // replace with your actual image import
    tags: [
      "React",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "MongoDB",
      "Google Gemini AI",
      "ImageKit",
    ],
    liveUrl: "#", // add your deployed link
    githubUrl: "#", // add your repo link
    featured: true,
    category: "Full Stack",
  },
];

// JOURNEY / EDUCATION
export const JOURNEY_STEPS = [
  {
    year: "2026",
    title: "B.Tech in Electrical Engineering",
    school: "MIT Muzaffarpur",
    description: "Completed B.Tech with 7.5 CGPA, Insha Allah",
    icon: GraduationCap,
    color: "bg-blue-500",
  },
  {
    year: "2021",
    title: "Senior Secondary (Class 12, BSEB)",
    school: "Vanijya Inter College, Muzaffarpur",
    description: "Completed Class 12 with 79% (Distinction)",
    icon: Award,
    color: "bg-green-500",
  },
  {
    year: "2019",
    title: "Secondary (Class 10, CBSE)",
    school: "DAV Public School, Muzaffarpur",
    description: "Completed Class 10 with 90.6% marks",
    icon: School,
    color: "bg-yellow-500",
  },
];

// PASSIONS / INTERESTS
export const PASSIONS = [
  {
    icon: Heart,
    title: "User Experience",
    description: "Crafting intuitive interfaces that users love",
  },
  {
    icon: Coffee,
    title: "Problem Solving",
    description: "Turning complex challenges into elegant solutions",
  },
  {
    icon: BookOpen,
    title: "Continuous Learning",
    description: "Always exploring new technologies and best practices",
  },
  {
    icon: Users,
    title: "Knowledge Sharing",
    description:
      "Passionate about teaching and mentoring, helping others grow while reinforcing my own understanding.",
  },
];

// SOCIAL LINKS
export const SOCIAL_LINKS = [
  {
    name: "Github",
    icon: FiGithub,
    url: "#",
    color: "hover:text-gray-400",
    bgColor: "hover:bg-gray-800",
  },
  {
    name: "LinkedIn",
    icon: FiLinkedin,
    url: "https://www.linkedin.com/in/abdur1rahman/",
    color: "hover:text-blue-400",
    bgColor: "hover:bg-blue-800",
  },
  {
    name: "Instagram",
    icon: FiInstagram,
    url: "https://www.instagram.com/ar_codes01/",
    color: "hover:text-sky-400",
    bgColor: "hover:bg-sky-800",
  },
];

// CONTACT INFO
export const CONTACT_INFO = [
  { icon: MapPin, label: "Location", value: "Muzaffarpur, Bihar" },
  { icon: Mail, label: "Email", value: "abdurrahman.codes@gmail.com" },
  { icon: Phone, label: "Phone", value: "+919525178092" },
];

// EXPERIENCE
export const EXPERIENCE_STEPS = [
  {
    year: "2019 - Present",
    title: "Private Tutor (Part-time)",
    school: "Muzaffarpur",
    description:
      "Taught Mathematics and Science to high school students (Class 9–12). Developed strong communication, problem-solving, and time management skills while balancing studies and work.",
    icon: BookOpen,
    color: "bg-purple-500",
  },
];
