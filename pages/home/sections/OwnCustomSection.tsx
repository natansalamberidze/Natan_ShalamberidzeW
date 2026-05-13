import Image from "next/image";

export default function OwnCustomSection() {
  return (
    <section className="relative">
      <div className="tear absolute">
        <div className="bg-text-primary rounded-full w-9 h-9 rounded-bl-4xl"></div>
      </div>
      <div className="relative">
        <Image
          src="/images/alien.svg"
          alt="alien"
          className="absolute pt-3"
          width={100}
          height={100}
        />
        <h2 className="relative left-1 pt-6 text-4xl font-bold text-cyan-500">
          <span className="text-cyan-300 [-webkit-text-stroke-color:rgb(12,1,1)] [-webkit-text-stroke-width:2px]">
            PERSONAL
          </span>
          PROJECTS
        </h2>
      </div>
    </section>
  );
}