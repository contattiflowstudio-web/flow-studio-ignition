import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Marquee } from "@/components/sections/Marquee";
import { Services } from "@/components/sections/Services";
import { WhyDigital } from "@/components/sections/WhyDigital";
import { Process } from "@/components/sections/Process";
import { Portfolio } from "@/components/sections/Portfolio";
import { SocialProof } from "@/components/sections/SocialProof";
import { CTA } from "@/components/sections/CTA";
import { Footer } from "@/components/sections/Footer";
import { useReveal } from "@/hooks/use-reveal";

const Index = () => {
  useReveal();
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Services />
        <WhyDigital />
        <Process />
        <Portfolio />
        <SocialProof />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
