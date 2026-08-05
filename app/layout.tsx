import './global.css';
import Footer from "@/widgets/layout/ui/Footer";
import Header from "@/widgets/layout/ui/Header";
import { Figtree } from "next/font/google";
import { cn } from "@/shared/lib/utils";

const figtree = Figtree({subsets:['latin'],variable:'--font-sans'});

const homeLinks = [
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Find me", href: "#find-me" },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
      <html lang="en" className={cn("font-sans", figtree.variable)}>
        <body className="pt-7 bg-bg-primary ">
          <Header 
            links={homeLinks}
          />
            <main className="min-h-32 ">
              {children}
            </main>
          <Footer />
        </body>
      </html>
  );
}
