'use client';
import ProjectCard from "@/entities/project/ui/ProjectCard";
import { projects } from "@/entities/project/model/projects";
import ReusableButton from "@/shared/ui/ReusableButton";
import { useState } from "react";
import ImageLightbox from "@/shared/ui/ImageLightbox";

export default function ProjectCardSection() {
  const featuredProjects = projects.slice(0, 2);

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="projects" className="py-2 grid gap-1 scroll-mt-14">
      <div className="flex gap-2 p-1">
        <ReusableButton href="/projects" text="See all projects" 
          className="" 
        />
      </div>
      <ImageLightbox 
        src={selectedImage} 
        onClose={() => setSelectedImage(null)} 
      />
      {featuredProjects.map((project) => (
        <ProjectCard 
          key={project.id} 
          project={project}
          onImageClick={(url) => setSelectedImage(url)}
        />
      ))}
    </section>
  )
}