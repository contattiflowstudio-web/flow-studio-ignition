import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const CTA = () => {
  return (
    <section id="contact" className="relative py-28 md:py-36">
      <div className="container">
        <div className="relative overflow-hidden rounded-[2.5rem] p-10 md:p-20 text-center grain">
          <div className="absolute inset-0 bg-gradient-cta bg-[length:200%_200%] animate-gradient-shift" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(0_0%_100%/0.15),transparent_50%)]" />
          <div className="absolute -top-32 -left-20 w-96 h-96 rounded-full bg-primary-glow/40 blur-3xl animate-float-slow" />
          <div className="absolute -bottom-32 -right-20 w-96 h-96 rounded-full bg-primary/50 blur-3xl animate-float-slow" style={{ animationDelay: "3s" }} />

          <div className="relative reveal">
            <div className="inline-flex items-center gap-2 rounded-full bg-background/20 backdrop-blur-md border border-primary-foreground/20 px-4 py-1.5 mb-6">
              <span className="h-2 w-2 rounded-full bg-primary-foreground animate-pulse" />
              <span className="text-xs uppercase tracking-[0.2em] text-primary-foreground/90">Now booking — Q3 2025</span>
            </div>
            <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-extrabold text-primary-foreground leading-tight">
              Ready to elevate your brand?
            </h2>
            <p className="mt-6 text-lg md:text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              Let's build something great together. Tell us about your project and we'll come back within one business day.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                size="xl"
                className="bg-background text-foreground hover:bg-background/90 shadow-elegant"
                asChild
              >
                <a href="mailto:hello@flowstudio.co">
                  Get a Free Consultation
                  <ArrowRight className="h-5 w-5" />
                </a>
              </Button>
              <a href="#portfolio" className="text-primary-foreground/90 hover:text-primary-foreground underline-offset-4 hover:underline">
                or browse our work →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};