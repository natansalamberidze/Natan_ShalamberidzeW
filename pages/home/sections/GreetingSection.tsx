import Link from "next/link";

export default function GreetingSection() {
  return (
    <section id="contact" className="justify-items-center scroll-mt-10">
      <h1 className="pointed text-text-primary">Hello, I'm Nathan Shalamberidze 👋</h1>
      <p className="pointed text-text-primary">Frontend developer</p>
      <div className="p-2">
        <Link href="/projects" className="border-4 border-blue-500 px-2 py-1 pointed text-text-primary">
          Projects
        </Link>
        <Link href="/contact" className="border-4 px-2 py-1 pointed text-text-primary">
          Contact
        </Link>
      </div>
    </section>
  );
}