import { skills } from '@/entities/skill/model/skills'
import SkillsColumn from "@/pages/home/sections/SkillsColumn"
import ReusableButton from '@/shared/ui/ReusableButton'

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
      <div className="gap-2 p-1 text-2xl">
        <ReusableButton href="/contact" text="About me!" className=""/>
      </div>
    </section>
  )
}