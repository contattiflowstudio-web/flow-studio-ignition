import { Asterisk } from "lucide-react";

const items = [
  "Web Design",
  "Brand Identity",
  "Social Strategy",
  "Content Creation",
  "SEO",
  "Paid Ads",
  "E-commerce",
  "Conversion Design",
];

export const Marquee = () => {
  return (
    <section aria-hidden="true" className="relative py-10 border-y border-border/50 bg-secondary/40 overflow-hidden">
      <div className="marquee-track">
        {[...items, ...items].map((it, i) => (
          <div key={i} className="flex items-center gap-8 whitespace-nowrap">
            <span className="font-display text-4xl md:text-6xl font-extrabold text-gradient tracking-tighter">
              {it}
            </span>
            <Asterisk className="h-8 w-8 md:h-10 md:w-10 text-primary-glow animate-spin-slow" />
          </div>
        ))}
      </div>
    </section>
  );
};