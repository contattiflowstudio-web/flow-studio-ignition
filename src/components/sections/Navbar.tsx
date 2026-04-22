import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import logo from "@/assets/flow-logo.png";

const links = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Why Digital", href: "#why-digital" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

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
            <img src={logo} alt="Flow Studio logo" className="h-full w-full object-contain drop-shadow-[0_0_10px_hsl(var(--primary)/0.5)]" />
          </span>
          <span className="font-display text-xl font-bold tracking-tight">
            Flow <span className="text-gradient-primary">Studio</span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors after:content-[''] after:absolute after:left-4 after:right-4 after:bottom-1 after:h-px after:scale-x-0 after:bg-gradient-primary after:transition-transform hover:after:scale-x-100"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button variant="hero" size="sm" asChild>
            <a href="#contact">Start Your Project</a>
          </Button>
        </div>

        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden mt-3 mx-4 rounded-2xl glass-strong p-4 animate-fade-in">
          <nav className="flex flex-col gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="px-3 py-2 rounded-lg text-foreground/90 hover:bg-primary/10"
              >
                {l.label}
              </a>
            ))}
            <Button variant="hero" className="mt-2" asChild>
              <a href="#contact" onClick={() => setOpen(false)}>Start Your Project</a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};