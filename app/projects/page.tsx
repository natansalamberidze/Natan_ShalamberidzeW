'use client';
import Container from "@/app/Container";
import ProjectCard from "@/entities/project/ui/ProjectCard";
import { projects } from "@/entities/project/model/projects";
import Header from "@/widgets/layout/ui/Header";
import { useState } from "react";
import ImageLightbox from "@/shared/ui/ImageLightbox";

const projectLinks = [
  { label: "Contacts", href: "/contact" }, 
];

export default function ProjectsPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  return (
    <Container>
      <Header links={projectLinks}/>
      <h1 className="text-center text-3xl font-bold text-white py-3">
        All my personal projects what I have done so far. You can click on each projects preview to see more details about it.
      </h1>
      <div className="py-3 grid gap-2">
        {projects.map((project) => (
          <ProjectCard 
            key={project.slug} 
            project={project}
            onImageClick={(url) => setSelectedImage(url)}
          />
        ))}
      </div>
      <ImageLightbox 
        src={selectedImage} 
        onClose={() => setSelectedImage(null)} 
      />
    </Container>
  );
}