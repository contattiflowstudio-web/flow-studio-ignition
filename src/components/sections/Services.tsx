import { Globe, Instagram, TrendingUp, ArrowUpRight } from "lucide-react";
import { useRef } from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import type { TranslationKey } from "@/i18n/translations";

const serviceDefs = [
  {
    icon: Globe,
    titleKey: "services.1.title",
    descKey: "services.1.desc",
    featureKeys: ["services.1.f1", "services.1.f2", "services.1.f3"],
  },
  {
    icon: Instagram,
    titleKey: "services.2.title",
    descKey: "services.2.desc",
    featureKeys: ["services.2.f1", "services.2.f2", "services.2.f3"],
  },
  {
    icon: TrendingUp,
    titleKey: "services.3.title",
    descKey: "services.3.desc",
    featureKeys: ["services.3.f1", "services.3.f2", "services.3.f3"],
  },
] as const satisfies ReadonlyArray<{
  icon: typeof Globe;
  titleKey: TranslationKey;
  descKey: TranslationKey;
  featureKeys: ReadonlyArray<TranslationKey>;
}>;

export const Services = () => {
  const { t } = useLanguage();
  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
  };

  return (
    <section id="services" className="relative py-28 md:py-36 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary/10 blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />

      <div className="container relative">
        <div className="max-w-2xl mb-16 reveal">
          <span className="inline-block text-xs uppercase tracking-[0.2em] text-primary-glow mb-4">{t("services.eyebrow")}</span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            {t("services.title.1")}<br />
            <span className="text-gradient">{t("services.title.2")}</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            {t("services.intro")}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {serviceDefs.map((s, i) => (
            <div
              key={s.titleKey}
              onMouseMove={onMove}
              className="reveal spotlight group relative glass rounded-3xl p-8 hover:-translate-y-2 transition-all duration-500 hover:shadow-glow overflow-hidden"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="absolute -top-20 -right-20 w-48 h-48 rounded-full bg-primary/0 group-hover:bg-primary/30 blur-3xl transition-all duration-700" />
              <span className="absolute top-6 right-6 font-display text-xs text-muted-foreground/60 tracking-widest">0{i + 1}</span>

              <div className="relative">
                <div className="relative inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-primary shadow-glow-soft mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                  <s.icon className="h-7 w-7 text-primary-foreground" />
                  <span className="absolute -inset-2 rounded-2xl bg-primary-glow/30 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="font-display text-2xl font-bold mb-3">{t(s.titleKey)}</h3>
                <p className="text-muted-foreground leading-relaxed">{t(s.descKey)}</p>

                <ul className="mt-6 space-y-2">
                  {s.featureKeys.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-foreground/80">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary-glow" />
                      {t(f)}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 inline-flex items-center gap-1 text-sm text-primary-glow opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-500">
                  {t("services.learnMore")} <ArrowUpRight className="h-4 w-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};