import type { Metadata } from "next";
import Container from "@/app/Container";
import SkillSection from "@/pages/home/sections/SkillsSection";
import ProjectCardSection from "@/widgets/projects-section/ui/ProjectCardSection";
import GreetingSection from "@/pages/home/sections/GreetingSection";
import OwnCustomSection from "@/pages/home/sections/OwnCustomSection";

export const metadata: Metadata = {
  title: "Nathan Shalamberidze — Frontend Developer",
  description:
    "Frontend developer specializing in modern React, Next.js, and scalable web interfaces.",
};

export default function Home() {
  return (
    <Container>
      <GreetingSection />
      <OwnCustomSection />
      <ProjectCardSection />
      <SkillSection />
    </Container>
  );
}
