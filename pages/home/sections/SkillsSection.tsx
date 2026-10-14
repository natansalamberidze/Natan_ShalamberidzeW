import { skills } from '@/entities/skill/model/skills'
import SkillsColumn from "@/pages/home/sections/SkillsColumn"

export default function SkillsSection() {
  return (
    <section id="skills" className="pt-5 scroll-mt-2">
      <div className="grid md:grid-cols-2 gap-6">
        {skills.map(category => (
          <SkillsColumn
            key={category.title}
            category={category}
          />
        ))}
      </div>
    </section>
  )
}