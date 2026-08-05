import { SkillCategory } from '@/entities/skill/model/skills_type'

export const skills: SkillCategory [] = [
  {
    title: "Hard Skills",
    skills: [
      { id: "1", text: "JavaScript, TypeScript, Basic PHP" },
      { id: "2", text: "HTML (HTML5), JSX" },
      { id: "3", text: "CSS (CSS3), SCSS, Tailwind, Simple Animations" },
      { id: "4", text: "React, React Hooks, React Router" },
      { id: "5", text: "Redux (Redux Toolkit)" },
      { id: "6", text: "Vite" },
      { id: "7", text: "Next.js" },
      { id: "8", text: "BEM, Feature-Sliced Design, UX" },
      { id: "9", text: "REST APIs, JSON Server" },
      { id: "10", text: "Git (GitHub, GitLab), Bash" },
      { id: "11", text: "Figma" },
      { id: "12", text: "Agile, SCRUM, Waterfall" },
      { id: "13", text: "MySQL, Oracle DB, PL/SQL" },
    ]
  },
  {
    title: "Soft Skills",
    skills: [
      { id: "1", text: "I know how to work in a team, and I can also work independently" },
      { id: "2", text: "I am responsible for deadlines and details" },
      { id: "3", text: "I break down complex problems and focus on practical solutions" },
      { id: "4", text: "I always try to write clean code, so it is easy to understand what it does" },
      { id: "5", text: "I adapt quickly to new tools, project requirements, and work environments" },
      { id: "6", text: "I am able to work remotely" },
      { id: "7", text: "I am not afraid to ask questions to avoid problems in the future" },
      { id: "8", text: "I am open to criticism and would be happy to hear a solution that is better than mine" },
      { id: "9", text: "I am improving my skills and constantly learning about new technologies in the IT field" },
    ]
  }
]