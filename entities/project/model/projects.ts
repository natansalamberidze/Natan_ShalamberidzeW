import { Project } from "@/entities/project/model/project_type";

export const projects: Project[] = [
  {
    id: 1,
    slug: "to-do-list",
    title: "To-Do List",
    description:
      "A custome to-do list app with a clean and intuitive user interface",
    stack: [
      { id: "JavaScript", name: "JavaScript", icon: "/icons/js.svg" },
      { id: "CSS", name: "CSS", icon: "/icons/css.svg" },
      { id: "HTML5", name: "HTML5", icon: "/icons/html5.svg" },
      { id: "React", name: "React", icon: "/icons/react.svg" },
      { id: "Vite", name: "Vite", icon: "/icons/vite.svg" },
      { id: "ESLint", name: "ESLint", icon: "/icons/eslint.svg" },
    ],
    image: "/images/todo.png",
  },
  {
    id: 2,
    slug: "Fitness page",
    title: "Fitness page",
    description:
      "Landing page for a fitness center, showcasing their services, trainers, and facilities",
    stack: [
      { id: "HTML5", name: "HTML5", icon: "/icons/html5.svg" },
      { id: "CSS", name: "CSS", icon: "/icons/css.svg" },
      { id: "Figma", name: "Figma", icon: "/icons/figma.svg" },
    ],
    image: "/images/fitnes.png",
  },
  {
    id: 3,
    slug: "Android app",
    title: "Android app",
    description:
      "A simple Android app for searching gifs with modern development practices, including clean architecture and MVVM pattern",
    stack: [
      { id: "Kotlin", name: "Kotlin", icon: "/icons/kotlin.svg" },
      { id: "Jetpack Compose", name: "Jetpack Compose", icon: "/icons/jetpackcompose.svg" },
    ],
    image: "/images/GifApp.png",
  },
  {
    id: 4,
    slug: "My Website Portfolio",
    title: "My Website Portfolio",
    description:
      "A personal portfolio website showcasing my projects, skills and information about me.",
    stack: [
      { id: "Next.js", name: "Next.js", icon: "/icons/nextjs.svg" },
      { id: "JavaScript", name: "JavaScript", icon: "/icons/js.svg" },
      { id: "TypeScript", name: "TypeScript", icon: "/icons/typescript.svg" },
      { id: "React", name: "React", icon: "/icons/react.svg" },
      { id: "HTML5", name: "HTML5", icon: "/icons/html5.svg" },
      { id: "CSS", name: "CSS", icon: "/icons/css.svg" },
      { id: "Tailwind CSS", name: "Tailwind CSS", icon: "/icons/tailwindcss.svg" },
      { id: "Postcss", name: "Postcss", icon: "/icons/postcss.svg" },
      { id: "ESLint", name: "ESLint", icon: "/icons/eslint.svg" },
    ],
    image: "/images/MyWeb.png",
  },
];