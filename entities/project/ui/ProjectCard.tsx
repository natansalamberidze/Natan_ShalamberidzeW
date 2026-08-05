import Image from "next/image";
import { Project } from "@/entities/project/model/project_type";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="grid grid-cols-(--my-grid-cols) gap-1 hover:shadow-(--my-shadowform) rounded-2xl ">
      <div className="col-start-1 col-end-2 row-start-1 row-end-3 p-1">
        <Image
          className="h-full w-full object-cover border-2 border-purple-400 rounded-2xl hover:scale-200 "
          src={project.image}
          alt={project.title}
          width={500}
          height={500}
        />
      </div>
      <div className="place-content-center justify-items-center text-5xl">
        <h2 className="text-text-primary">{project.title}</h2>
      </div>
      <div className="content-center justify-items-center p-1">
        <p className="text-text-primary">{project.description}</p>
      </div>
      <div className="col-start-2 col-end-4 row-start-2 max-w-max">
        <ul className="flex justify-start rounded-4xl gap-1 p-1">
          {project.stack.map((tech) => (
            <li
              className="w-5 h-5 overflow-hidden rounded-full border-2 border-purple-400 flex-wrap p-1 hover:shadow-(--my-shadowinsideform)"
              key={tech.id}
              title={tech.name}
            >
              <Image
                className="w-full h-full object-cover"
                src={tech.icon}
                alt={tech.name}
                width={30}
                height={30}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
