import SkillItem from '@/entities/skill/ui/SkillItem'
import { SkillCategory } from '@/entities/skill/skills_type'

interface SkillsColumnProps {
  category: SkillCategory
}

export default function SkillsColumn({ category }: SkillsColumnProps) {
  return (
    <div className="flex flex-col gap-3">

      <h2 className="text-3xl font-semibold text-text-secondary">
        {category.title}
      </h2>

      <ul className="flex flex-col gap-2">

        {category.skills.map(skill => (
          <SkillItem
            key={skill.id}
            skill={skill}
          />
        ))}

      </ul>
    </div>
  )
}