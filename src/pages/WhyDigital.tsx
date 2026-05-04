import { Navbar } from "@/components/sections/Navbar";
import { WhyDigital } from "@/components/sections/WhyDigital";
import { Process } from "@/components/sections/Process";
import { CTA } from "@/components/sections/CTA";
import { Footer } from "@/components/sections/Footer";
import { useReveal } from "@/hooks/use-reveal";

const WhyDigitalPage = () => {
  useReveal();
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main className="pt-24">
        <WhyDigital />
        <Process />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default WhyDigitalPage;