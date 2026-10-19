import Container from "@/app/Container";
import Header from "@/widgets/layout/ui/Header";

const contactLinks = [
  { label: "Projects", href: "/projects" }, 
];

export default function ContactPage() {
  return (
    <Container>
    <Header links={contactLinks}/>
      <h1 className="text-3xl text-(--color-text-primary)">
        <p><strong>A little about me to get to know me better.</strong></p>
        <br/>
        <p>I am a web engineer with a systematic approach to my work and a genuine passion for creating user-friendly and functional web products. 
          My journey began with a solid educational foundation. I graduated from Riga Technical University with a degree in Computer Systems, 
          which gave me a strong engineering foundation, an understanding of algorithms, and the ability to solve complex technical problems. 
          It’s important to me to write clean, scalable code—and, most importantly, to understand what’s going on under the hood.</p>
        <br/>
        <p><strong>Sports and Balance: Padel and Fitness</strong></p>
        <br/>
        <p>I spend my time away from coding on the court. My main passions are padel and fitness. 
          Padel is all about dynamics—it’s like a fast-paced game of chess on the court with constant interaction. 
          It teaches you to make split-second decisions in changing conditions, 
          stay focused, and greatly develops tactical thinking and the ability to adapt quickly to different situations.</p>
        <br/>
        <p><strong>Hobbies: Movies and TV Shows</strong></p>
        <br/>
        <p>Ever since I was a child, I’ve loved movies. 
          Sometimes they help me escape the daily grind and look beyond the confines of ordinary life, 
          to feel that there’s something greater out there—something a person might never encounter in their entire life due to life’s limitations. 
          Watching movies can immerse a person in a dazzling abyss where they can encounter their true self in a situation completely foreign to them
          and ask themselves many questions they would never have asked otherwise.</p>
      </h1>
      <p className="max-w-xl text-gray-400">
        If you'd like to discuss a project, collaboration, or just say hello —
        feel free to reach out.
      </p>
    </Container>
  );
}