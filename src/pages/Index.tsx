import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { WhyDigital } from "@/components/sections/WhyDigital";
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
        <Services />
        <WhyDigital />
        <Portfolio />
        <SocialProof />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
