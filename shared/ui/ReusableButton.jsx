import Link from "next/link";

export default function Button({ 
  href = '',
  text = '', 
  className = ''
}) {
  return (
    <Link
      href={href}
      className={`group relative inline-flex items-center justify-center px-4 py-1 text-white  rounded-full cursor-pointer overflow-hidden bg-white/5  
        shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_5px_15px_rgba(0,0,0,0.3)]
        ${className}`
      }
    >
    <div className="absolute inset-0 rounded-full border-y-4 border-light-blue scale-x-0 transition-all duration-500 group-hover:scale-x-100"/>
    <span className="">
      {text}
    </span>
    </Link>
  );
}