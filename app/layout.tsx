import './global.css';
import Footer from "@/widgets/layout/Footer";
import Header from "@/widgets/layout/Header";

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
      <html lang="en">
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
