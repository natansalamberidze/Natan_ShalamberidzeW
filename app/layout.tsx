import './global.css';
import Footer from "@/widgets/layout/Footer";
import Header from "@/widgets/layout/Header";

export const metadata = {
  title: "Mr Nathan Shalamberidze — Portfolio",
  description: "Frontend Developer Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
      <html lang="en">
        <body className="pt-7 bg-bg-primary ">
          <Header />
            <main className="min-h-32 ">
              {children}
            </main>
          <Footer />
        </body>
      </html>
  );
}
