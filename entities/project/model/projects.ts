import { Project } from "@/entities/project/model/project_type";

export const projects: Project[] = [
  {
    id: 1,
    slug: "to-do-list",
    title: "To-Do List",
    description:
      "A custome to-do list app with a clean and intuitive user interface",
    stack: [
      { id: "react", name: "React", icon: "/images/react.svg" },
      { id: "next", name: "Next.js", icon: "/images/react.svg" },
      { id: "ts", name: "TypeScript", icon: "/images/react.svg" },
      { id: "gg", name: "TypeScript", icon: "/images/react.svg" },
      { id: "gh", name: "TypeScript", icon: "/images/react.svg" },
      { id: "gj", name: "TypeScript", icon: "/images/react.svg" },
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
      { id: "react", name: "React", icon: "/images/react.svg" },
      { id: "next", name: "Next.js", icon: "/images/react.svg" },
      { id: "ts", name: "TypeScript", icon: "/images/react.svg" },
      { id: "td", name: "TypeScript", icon: "/images/react.svg" },
      { id: "ta", name: "TypeScript", icon: "/images/react.svg" },
    ],
    image: "/images/fitnes.png",
  },
];
