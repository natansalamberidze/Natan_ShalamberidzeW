import ProjectCard from "@/entities/project/ui/ProjectCard";
import { projects } from "@/entities/project/model/projects";
import ReusableButton from "@/shared/ui/ReusableButton";


export default function ProjectCardSection() {
  return (
    <section id="projects" className="py-2 grid gap-1 scroll-mt-14">
      <div className="flex gap-2 p-1">
        <ReusableButton href="/projects" text="See all projects" 
          className="" 
        />
      </div>
      {projects.map((project) => (
        <ProjectCard 
          key={project.id} 
          project={project} />
      ))}
    </section>
  )
}