import ProjectCard from "@/entities/project/ui/ProjectCard";
import { projects } from "@/entities/project/model/projects";


export default function ProjectCardSection() {
  return (
    <section 
      id="projects" 
      className="py-2 grid gap-4"
    >
      {projects.map((project) => (
        <ProjectCard 
          key={project.id} 
          project={project} />
      ))}
    </section>
  )
}