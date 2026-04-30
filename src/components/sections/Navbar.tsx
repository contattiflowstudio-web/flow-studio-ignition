import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import logo from "@/assets/flow-logo.png";
import logo40 from "@/assets/flow-logo-40.png";
import logo80 from "@/assets/flow-logo-80.png";
import logo120 from "@/assets/flow-logo-120.png";
import { useLanguage } from "@/i18n/LanguageContext";
import { LanguageToggle } from "@/components/LanguageToggle";

const linkDefs = [
  { key: "nav.home", href: "#home" },
  { key: "nav.services", href: "#services" },
  { key: "nav.whyDigital", href: "#why-digital" },
  { key: "nav.portfolio", href: "#portfolio" },
  { key: "nav.contact", href: "#contact" },
] as const;

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "py-3 backdrop-blur-xl bg-background/60 border-b border-border/40"
          : "py-5 bg-transparent"
      )}
    >
      <div className="container flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 group">
          <span className="relative inline-flex h-10 w-10 items-center justify-center">
            <img
              src={logo40}
              srcSet={`${logo40} 1x, ${logo80} 2x, ${logo120} 3x`}
              sizes="40px"
              alt="Flow Studio logo"
              width={40}
              height={40}
              decoding="async"
              fetchPriority="high"
              loading="eager"
              className="h-full w-full object-contain drop-shadow-[0_0_10px_hsl(var(--primary)/0.5)]"
            />
          </span>
          <span className="font-display text-xl font-bold tracking-tight">
            Flow <span className="text-gradient-primary">Studio</span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-1">
          {linkDefs.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors after:content-[''] after:absolute after:left-4 after:right-4 after:bottom-1 after:h-px after:scale-x-0 after:bg-gradient-primary after:transition-transform hover:after:scale-x-100"
            >
              {t(l.key)}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <LanguageToggle />
          <Button variant="hero" size="sm" asChild>
            <a href="#contact">{t("nav.cta")}</a>
          </Button>
        </div>

        <div className="md:hidden flex items-center gap-2">
          <LanguageToggle />
          <button
            className="p-2 text-foreground"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden mt-3 mx-4 rounded-2xl glass-strong p-4 animate-fade-in">
          <nav className="flex flex-col gap-1">
            {linkDefs.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="px-3 py-2 rounded-lg text-foreground/90 hover:bg-primary/10"
              >
                {t(l.key)}
              </a>
            ))}
            <Button variant="hero" className="mt-2" asChild>
              <a href="#contact" onClick={() => setOpen(false)}>{t("nav.cta")}</a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};