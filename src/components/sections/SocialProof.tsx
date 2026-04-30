import { Star } from "lucide-react";
import a1 from "@/assets/avatar-1.jpg";
import a2 from "@/assets/avatar-2.jpg";
import a3 from "@/assets/avatar-3.jpg";
import { useLanguage } from "@/i18n/LanguageContext";
import type { TranslationKey } from "@/i18n/translations";

const logos = ["NOVARA", "PULSE", "HALCYON", "NORTHWIND", "VANTA", "ECLYPSE", "AXIOM", "LUMEN"];

const testimonialDefs: { name: string; roleKey: TranslationKey; quoteKey: TranslationKey; avatar: string }[] = [
  { name: "Maya Chen", roleKey: "social.t1.role", quoteKey: "social.t1.quote", avatar: a1 },
  { name: "Daniel Rivera", roleKey: "social.t2.role", quoteKey: "social.t2.quote", avatar: a2 },
  { name: "Sophie Laurent", roleKey: "social.t3.role", quoteKey: "social.t3.quote", avatar: a3 },
];

export const SocialProof = () => {
  const { t } = useLanguage();
  return (
    <section className="relative py-24">
      <div className="container">
        <p className="text-center text-sm uppercase tracking-[0.25em] text-muted-foreground mb-10 reveal">
          {t("social.kicker")}
        </p>

        <div className="relative overflow-hidden mask-fade reveal">
          <div className="flex gap-12 animate-marquee whitespace-nowrap">
            {[...logos, ...logos].map((l, i) => (
              <span
                key={i}
                className="font-display text-2xl md:text-3xl font-bold text-foreground/40 hover:text-foreground transition-colors tracking-widest"
              >
                {l}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-20 grid md:grid-cols-3 gap-6">
          {testimonialDefs.map((td, i) => (
            <figure
              key={td.name}
              className="reveal glass rounded-3xl p-7 flex flex-col"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="flex gap-1 text-primary-glow mb-4">
                {Array.from({ length: 5 }).map((_, k) => (
                  <Star key={k} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="text-foreground/90 leading-relaxed flex-1">"{t(td.quoteKey)}"</blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <img
                  src={td.avatar}
                  alt={td.name}
                  loading="lazy"
                  width={48}
                  height={48}
                  className="h-12 w-12 rounded-full object-cover ring-2 ring-primary-glow/40"
                />
                <div>
                  <div className="font-semibold">{td.name}</div>
                  <div className="text-sm text-muted-foreground">{t(td.roleKey)}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};