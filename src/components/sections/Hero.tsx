import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroMesh from "@/assets/hero-mesh.jpg";

export const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden grain"
    >
      {/* Mesh gradient background */}
      <div className="absolute inset-0 mesh-bg" />
      <img
        src={heroMesh}
        alt=""
        aria-hidden="true"
        width={1920}
        height={1280}
        className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-screen"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/30 to-background" />

      {/* Floating shapes */}
      <div className="absolute top-1/4 -left-10 w-72 h-72 rounded-full bg-primary/30 blur-3xl animate-float-slow" />
      <div className="absolute bottom-1/4 -right-10 w-96 h-96 rounded-full bg-primary-glow/25 blur-3xl animate-float-slow" style={{ animationDelay: "2s" }} />
      <div className="absolute top-1/3 right-1/4 w-40 h-40 rounded-full bg-accent/20 blur-2xl animate-float" />

      <div className="container relative z-10 pt-32 pb-20 text-center">
        <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 mb-8 animate-fade-in">
          <Sparkles className="h-4 w-4 text-primary-glow" />
          <span className="text-sm text-foreground/80">A creative-tech studio for ambitious brands</span>
        </div>

        <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold leading-[1.05] max-w-5xl mx-auto animate-fade-in-up">
          We Build <span className="text-gradient">Digital Experiences</span> That Convert
        </h1>

        <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: "150ms", opacity: 0 }}>
          Web design, social media management and digital marketing — all in one studio. We turn pixels into pipeline and ideas into measurable growth.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: "300ms", opacity: 0 }}>
          <Button variant="hero" size="xl" asChild>
            <a href="#portfolio">
              See Our Work
              <ArrowRight className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="ghostGlow" size="xl" asChild>
            <a href="#contact">Talk to Us</a>
          </Button>
        </div>

        {/* Stats strip */}
        <div className="mt-20 grid grid-cols-3 gap-4 sm:gap-8 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: "450ms", opacity: 0 }}>
          {[
            { k: "120+", v: "Projects shipped" },
            { k: "4.9/5", v: "Client rating" },
            { k: "2.8x", v: "Avg. ROI lift" },
          ].map((s) => (
            <div key={s.v} className="glass rounded-2xl p-5">
              <div className="font-display text-2xl sm:text-3xl font-bold text-gradient-primary">{s.k}</div>
              <div className="text-xs sm:text-sm text-muted-foreground mt-1">{s.v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};