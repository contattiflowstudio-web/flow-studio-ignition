import { Instagram, Linkedin } from "lucide-react";
import logo from "@/assets/flow-logo.png";

const Behance = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M7.42 7.32c.66 0 1.27.07 1.81.2.54.13 1 .35 1.39.65.38.3.68.69.89 1.17.21.48.31 1.07.31 1.77 0 .76-.17 1.39-.51 1.9-.34.5-.85.92-1.52 1.24.92.27 1.6.73 2.06 1.4.45.66.68 1.46.68 2.39 0 .76-.15 1.41-.45 1.96-.3.55-.7.99-1.21 1.34-.5.34-1.08.6-1.74.76-.65.16-1.32.24-2.01.24H0V7.32h7.42m-.41 5.36c.55 0 1-.13 1.36-.39.36-.26.54-.69.54-1.27 0-.33-.06-.6-.18-.81-.12-.21-.28-.37-.49-.49-.21-.12-.45-.2-.71-.24-.27-.04-.55-.06-.84-.06H3.32v3.26h3.69m.21 5.61c.31 0 .61-.03.89-.09.28-.06.53-.16.74-.31.21-.15.38-.34.51-.59.13-.25.19-.57.19-.95 0-.75-.21-1.29-.63-1.61-.42-.32-.98-.49-1.68-.49H3.32v4.04h3.9M17.1 17.46c.43.43 1.05.65 1.86.65.58 0 1.08-.15 1.5-.44.42-.29.68-.6.78-.94h2.82c-.45 1.4-1.14 2.4-2.07 3-.93.6-2.06.89-3.38.89-.92 0-1.75-.15-2.49-.44-.74-.29-1.37-.71-1.88-1.25-.51-.54-.91-1.18-1.19-1.93-.28-.74-.42-1.57-.42-2.46 0-.87.14-1.68.43-2.42.29-.74.7-1.39 1.22-1.93.52-.54 1.15-.97 1.88-1.27.73-.31 1.55-.46 2.45-.46 1.01 0 1.89.2 2.65.58.76.39 1.39.91 1.88 1.55.49.65.85 1.39 1.07 2.22.22.83.3 1.7.24 2.6h-8.76c0 .92.31 1.65.74 2.05M19.97 7.5h-6.21V6h6.21v1.5m.62 4.85c-.34-.38-.91-.57-1.61-.57-.46 0-.84.08-1.14.23-.3.15-.55.34-.74.56-.18.21-.31.45-.39.69-.07.24-.11.45-.13.65h5.04c-.07-.79-.34-1.39-.69-1.78l-.34.22"/>
  </svg>
);

export const Footer = () => {
  return (
    <footer className="relative border-t border-border/50 pt-16 pb-8">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-2">
            <a href="#home" className="flex items-center gap-2">
              <span className="inline-flex h-10 w-10 items-center justify-center">
                <img src={logo} alt="Flow Studio logo" className="h-full w-full object-contain drop-shadow-[0_0_10px_hsl(var(--primary)/0.5)]" />
              </span>
              <span className="font-display text-xl font-bold">
                Flow <span className="text-gradient-primary">Studio</span>
              </span>
            </a>
            <p className="mt-4 text-muted-foreground max-w-sm">
              A creative-tech studio designing websites, social presence and digital marketing for brands that mean business.
            </p>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4">Studio</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#services" className="hover:text-foreground transition-colors">Services</a></li>
              <li><a href="#why-digital" className="hover:text-foreground transition-colors">Why Digital</a></li>
              <li><a href="#portfolio" className="hover:text-foreground transition-colors">Portfolio</a></li>
              <li><a href="#contact" className="hover:text-foreground transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4">Get in touch</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="mailto:hello@flowstudio.co" className="hover:text-foreground transition-colors">hello@flowstudio.co</a></li>
              <li>Lisbon · Remote worldwide</li>
            </ul>
            <div className="mt-5 flex items-center gap-3">
              {[
                { Icon: Instagram, href: "#", label: "Instagram" },
                { Icon: Linkedin, href: "#", label: "LinkedIn" },
                { Icon: Behance, href: "#", label: "Behance" },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="h-10 w-10 inline-flex items-center justify-center rounded-xl glass hover:shadow-glow-soft hover:-translate-y-0.5 transition-all"
                >
                  <Icon className="h-4 w-4 text-foreground" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© 2025 Flow Studio. All rights reserved.</p>
          <p>Crafted with intent — designed to convert.</p>
        </div>
      </div>
    </footer>
  );
};