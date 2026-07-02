import Container from "@/app/Container";
import ProjectCard from "@/entities/project/ui/ProjectCard";
import { projects } from "@/entities/project/model/projects";
import Header from "@/widgets/layout/Header";

const projectLinks = [
  { label: "Contacts", href: "/contact" }, 
];

export default function ProjectsPage() {
  return (
    <Container>
      <Header links={projectLinks}/>

      <h1 className="text-center text-3xl font-bold text-purple-400">
        All my personal projects what I have done so far, and I am proud of them. You can click on each project to see more details about it.
      </h1>

      <div className="py-3 grid gap-2">
        {projects.map((project) => (
          <ProjectCard 
            key={project.slug} 
            project={project} 
          />
        ))}
      </div>
    </Container>
  );
}