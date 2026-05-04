import { Navbar } from "@/components/sections/Navbar";
import { Services } from "@/components/sections/Services";
import { CTA } from "@/components/sections/CTA";
import { Footer } from "@/components/sections/Footer";
import { useReveal } from "@/hooks/use-reveal";

const ServicesPage = () => {
  useReveal();
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main className="pt-24">
        <Services />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default ServicesPage;