import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Star } from "lucide-react";
import heroMesh from "@/assets/hero-mesh.jpg";
import { HeroVisual } from "@/components/HeroVisual";
import { HeroScene } from "@/components/HeroScene";
import { useLanguage } from "@/i18n/LanguageContext";

export const Hero = () => {
  const { t } = useLanguage();
  const rotatingWords = [
    t("hero.word.1"),
    t("hero.word.2"),
    t("hero.word.3"),
    t("hero.word.4"),
  ];
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-noise"
    >
      {/* Mesh gradient + grid background */}
      <div className="absolute inset-0 mesh-bg" />
      <div className="absolute inset-0 bg-grid opacity-60" />
      <img
        src={heroMesh}
        alt=""
        aria-hidden="true"
        width={1920}
        height={1280}
        className="absolute inset-0 w-full h-full object-cover opacity-50 mix-blend-screen"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/20 to-background" />

      {/* Animated visual: parallax orbs, flow paths, floating chips, stars */}
      <HeroVisual />

      {/* 3D animated abstract object */}
      <HeroScene />

      <div className="container relative z-10 pt-32 pb-20 text-center">
        {/* Badge with avatars */}
        <div className="inline-flex items-center gap-3 rounded-full glass px-4 py-2 mb-8 animate-fade-in shine">
          <span className="flex -space-x-2">
            {[1, 2, 3].map((i) => (
              <span
                key={i}
                className="h-6 w-6 rounded-full border-2 border-background bg-gradient-primary"
              />
            ))}
          </span>
          <div className="flex items-center gap-1 text-primary-glow">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-3 w-3 fill-current" />
            ))}
          </div>
          <span className="text-xs sm:text-sm text-foreground/80">{t("hero.badge")}</span>
        </div>

        <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-[7.5rem] font-extrabold leading-[1.02] max-w-6xl mx-auto animate-fade-in-up tracking-tighter">
          {t("hero.title.line1")}<br />
          {t("hero.title.line2")}{" "}
          <span className="relative inline-flex items-baseline">
            <span className="relative h-[1em] overflow-hidden align-baseline">
              <span className="flex flex-col text-gradient" style={{ animation: "tick 8s ease-in-out infinite" }}>
                {rotatingWords.map((w) => (
                  <span key={w} className="block leading-[1]">{w}.</span>
                ))}
                <span className="block leading-[1] text-gradient">{rotatingWords[0]}.</span>
              </span>
            </span>
          </span>
        </h1>

        <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: "150ms", opacity: 0 }}>
          {t("hero.subtitle")}
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: "300ms", opacity: 0 }}>
          <Button variant="hero" size="xl" className="group shine" asChild>
            <a href="#portfolio">
              <Sparkles className="h-5 w-5" />
              {t("hero.cta.primary")}
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
          <Button variant="ghostGlow" size="xl" asChild>
            <a href="#contact">{t("hero.cta.secondary")}</a>
          </Button>
        </div>

        {/* Stats strip */}
        <div className="mt-20 grid grid-cols-3 gap-4 sm:gap-8 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: "450ms", opacity: 0 }}>
          {[
            { k: t("hero.stat.1.k"), v: t("hero.stat.1.v") },
            { k: t("hero.stat.2.k"), v: t("hero.stat.2.v") },
            { k: t("hero.stat.3.k"), v: t("hero.stat.3.v") },
          ].map((s) => (
            <div key={s.v} className="glass rounded-2xl p-5 hover:shadow-glow-soft hover:-translate-y-1 transition-all duration-500">
              <div className="font-display text-2xl sm:text-3xl font-bold text-gradient-primary">{s.k}</div>
              <div className="text-xs sm:text-sm text-muted-foreground mt-1">{s.v}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-muted-foreground animate-float">
        <span className="text-[10px] uppercase tracking-[0.3em]">{t("hero.scroll")}</span>
        <div className="h-10 w-[1px] bg-gradient-to-b from-primary-glow to-transparent" />
      </div>
    </section>
  );
};