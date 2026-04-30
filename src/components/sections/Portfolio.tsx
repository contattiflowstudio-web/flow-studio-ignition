import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import p1 from "@/assets/portfolio-1.jpg";
import p2 from "@/assets/portfolio-2.jpg";
import p3 from "@/assets/portfolio-3.jpg";
import p4 from "@/assets/portfolio-4.jpg";
import p5 from "@/assets/portfolio-5.jpg";
import p6 from "@/assets/portfolio-6.jpg";
import { useLanguage } from "@/i18n/LanguageContext";
import type { TranslationKey } from "@/i18n/translations";

type Cat = "All" | "Websites" | "Social Media" | "Branding";

const projects: { title: string; cat: Exclude<Cat, "All">; img: string; tagKey: TranslationKey }[] = [
  { title: "Lumen Analytics", cat: "Websites", img: p1, tagKey: "portfolio.tag.saas" },
  { title: "Maison Velvet", cat: "Social Media", img: p2, tagKey: "portfolio.tag.fashion" },
  { title: "Peemnorz Couture", cat: "Branding", img: p3, tagKey: "portfolio.tag.brand" },
  { title: "Atelier Boutique", cat: "Websites", img: p4, tagKey: "portfolio.tag.ecom" },
  { title: "Glow App Launch", cat: "Social Media", img: p5, tagKey: "portfolio.tag.launch" },
  { title: "Sirethei's Restaurant", cat: "Websites", img: p6, tagKey: "portfolio.tag.hospitality" },
];

const filters: { value: Cat; labelKey: TranslationKey }[] = [
  { value: "All", labelKey: "portfolio.filter.all" },
  { value: "Websites", labelKey: "portfolio.filter.websites" },
  { value: "Social Media", labelKey: "portfolio.filter.social" },
  { value: "Branding", labelKey: "portfolio.filter.branding" },
];

export const Portfolio = () => {
  const { t } = useLanguage();
  const [active, setActive] = useState<Cat>("All");
  const visible = active === "All" ? projects : projects.filter((p) => p.cat === active);

  return (
    <section id="portfolio" className="relative py-28 md:py-36">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 reveal">
          <div className="max-w-2xl">
            <span className="inline-block text-xs uppercase tracking-[0.2em] text-primary-glow mb-4">{t("portfolio.eyebrow")}</span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              {t("portfolio.title.a")}<span className="text-gradient">{t("portfolio.title.b")}</span>
            </h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f.value}
                onClick={() => setActive(f.value)}
                className={`px-4 py-2 text-sm rounded-full border transition-all ${
                  active === f.value
                    ? "bg-gradient-primary text-primary-foreground border-transparent shadow-glow-soft"
                    : "border-border text-muted-foreground hover:text-foreground hover:border-primary-glow/50"
                }`}
              >
                {t(f.labelKey)}
              </button>
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-6 auto-rows-[18rem] gap-6">
          {visible.map((p, i) => {
            // Bento layout: feature first item large
            const span =
              active === "All" && i === 0
                ? "lg:col-span-4 lg:row-span-2"
                : active === "All" && i === 3
                ? "lg:col-span-4"
                : "lg:col-span-2";
            return (
            <article
              key={p.title}
              className={`reveal group relative rounded-3xl overflow-hidden glass cursor-pointer ${span}`}
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <img
                src={p.img}
                alt={p.title}
                loading="lazy"
                width={1024}
                height={768}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/0 via-transparent to-primary-glow/0 group-hover:from-primary/30 group-hover:to-primary-glow/20 transition-all duration-700" />

              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <span className="inline-block w-fit text-xs uppercase tracking-wider px-3 py-1 rounded-full bg-primary/30 backdrop-blur-md border border-primary-glow/40 text-foreground mb-3">
                  {p.cat}
                </span>
                <h3 className="font-display text-2xl font-bold">{p.title}</h3>
                <p className="text-sm text-muted-foreground">{t(p.tagKey)}</p>

                <div className="mt-4 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                  <Button variant="hero" size="sm">
                    {t("portfolio.viewProject")}
                    <ArrowUpRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* corner badge */}
              <div className="absolute top-5 right-5 h-10 w-10 rounded-full glass-strong inline-flex items-center justify-center opacity-0 group-hover:opacity-100 -translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                <ArrowUpRight className="h-4 w-4 text-foreground" />
              </div>
            </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};