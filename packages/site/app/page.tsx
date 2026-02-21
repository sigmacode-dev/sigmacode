import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Demo } from "@/components/Demo";
import { Features } from "@/components/Features";
import { SourceCode } from "@/components/SourceCode";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Demo />
        <Features />
        <SourceCode />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
