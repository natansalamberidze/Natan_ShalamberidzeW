import Link from "next/link";
import { Button } from "@/shared/ui/button"
import RobotMouth from "@/shared/ui/RobotMouth";

export default function GreetingSection() {
  return (
    <section id="contact" className="justify-items-center scroll-mt-10">
      <h1 className="pointed text-text-primary">Hello, I'm Nathan Shalamberidze 👋</h1>
      <p className="pointed text-text-primary">Frontend developer</p>
      <div className="p-2 ">
        <Button variant="default">
          <Link href="/projects" className="border-4 border-purple-400 px-2 py-1 pointed text-text-primary">
            Projects
          </Link>
        </Button>
        <Button variant="default">
          <Link href="/contact" className="border-4 border-purple-400 px-2 py-1 pointed text-text-primary">
            Contact
          </Link>
        </Button>
      </div>
      <RobotMouth />
    </section>
  );
}