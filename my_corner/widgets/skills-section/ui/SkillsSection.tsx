import { skills } from '@/entities/skill/model/skills'
import SkillsColumn from "@/widgets/skills-section/ui/SkillsColumn"

export default function SkillsSection() {
  return (
    <section 
      id="skills" 
      className="py-5"
    >
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