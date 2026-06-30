import { Skill } from '@/entities/skill/skills_type'

interface SkillItemProps {
  skill: Skill
}

export default function SkillItem({ skill }: SkillItemProps) {
  return (
    <li className="rounded-xl bg-zinc-900 p-1 hover:shadow-xl">
      <p className="text-zinc-200 relative pl-3 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:h-1 before:w-1 before:rounded-full before:bg-accent-pink">
        {skill.text}
      </p>
    </li>
  )
}