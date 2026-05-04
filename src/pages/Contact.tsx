import { Navbar } from "@/components/sections/Navbar";
import { CTA } from "@/components/sections/CTA";
import { Footer } from "@/components/sections/Footer";
import { useReveal } from "@/hooks/use-reveal";

const ContactPage = () => {
  useReveal();
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main className="pt-24">
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;