import { Button } from "@/components/ui/button";
import { ArrowRight, Eye, Search, Zap, Users } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import type { TranslationKey } from "@/i18n/translations";

const statDefs: { icon: typeof Eye; value: string; labelKey: TranslationKey }[] = [
  { icon: Eye, value: "75%", labelKey: "why.stat.1.l" },
  { icon: Zap, value: "2x", labelKey: "why.stat.2.l" },
  { icon: Search, value: "93%", labelKey: "why.stat.3.l" },
  { icon: Users, value: "4.9B", labelKey: "why.stat.4.l" },
];

export const WhyDigital = () => {
  const { t } = useLanguage();
  return (
    <section id="why-digital" className="relative py-28 md:py-36">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div className="reveal">
            <span className="inline-block text-xs uppercase tracking-[0.2em] text-primary-glow mb-4">{t("why.eyebrow")}</span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              {t("why.title.a")}<span className="text-gradient">{t("why.title.b")}</span>{t("why.title.c")}
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              {t("why.p1.a")}<strong className="text-foreground">{t("why.p1.b")}</strong>{t("why.p1.c")}
            </p>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              {t("why.p2")}
            </p>

            <div className="mt-10 p-6 rounded-2xl glass">
              <p className="font-display text-xl md:text-2xl">
                {t("why.box.a")} <span className="text-gradient-primary">{t("why.box.b")}</span>
              </p>
              <Button variant="hero" className="mt-5" asChild>
                <a href="#contact">
                  {t("why.box.cta")}
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {statDefs.map((s, i) => (
              <div
                key={s.value}
                className="reveal glass rounded-2xl p-6 hover:shadow-glow-soft hover:-translate-y-1 transition-all duration-500"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/15 border border-primary-glow/30 mb-4">
                  <s.icon className="h-5 w-5 text-primary-glow" />
                </div>
                <div className="font-display text-4xl font-extrabold text-gradient-primary">{s.value}</div>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{t(s.labelKey)}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};