import Link from "next/link";

export default function GreetingSection() {
  return (
    <section className="justify-items-center">
        <h1 className="pointed text-text-primary">Hello, I'm Nathan Shalamberidze 👋</h1>
        <p className="pointed text-text-primary">Frontend developer</p>
        <div className="p-2">
          <Link href="/projects" className="px-2 py-1 pointed text-text-primary">
            Projects
          </Link>
          <Link href="/contact" className="px-2 py-1 pointed text-text-primary">
            Contact
          </Link>
        </div>
      </section>
  );
}