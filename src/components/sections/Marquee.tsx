import { Asterisk } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const itemKeys = [
  "marquee.1",
  "marquee.2",
  "marquee.3",
  "marquee.4",
  "marquee.5",
  "marquee.6",
  "marquee.7",
  "marquee.8",
] as const;

export const Marquee = () => {
  const { t } = useLanguage();
  const items = itemKeys.map((k) => t(k));
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