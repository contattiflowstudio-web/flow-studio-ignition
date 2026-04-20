import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import p1 from "@/assets/portfolio-1.jpg";
import p2 from "@/assets/portfolio-2.jpg";
import p3 from "@/assets/portfolio-3.jpg";
import p4 from "@/assets/portfolio-4.jpg";
import p5 from "@/assets/portfolio-5.jpg";
import p6 from "@/assets/portfolio-6.jpg";

type Cat = "All" | "Websites" | "Social Media" | "Branding";

const projects: { title: string; cat: Exclude<Cat, "All">; img: string; tag: string }[] = [
  { title: "Lumen Analytics", cat: "Websites", img: p1, tag: "SaaS Platform" },
  { title: "Maison Velvet", cat: "Social Media", img: p2, tag: "Fashion Campaign" },
  { title: "Peemnorz Couture", cat: "Branding", img: p3, tag: "Brand Identity" },
  { title: "Atelier Boutique", cat: "Websites", img: p4, tag: "E-commerce" },
  { title: "Glow App Launch", cat: "Social Media", img: p5, tag: "Product Launch" },
  { title: "Sirethei's Restaurant", cat: "Websites", img: p6, tag: "Hospitality" },
];

const filters: Cat[] = ["All", "Websites", "Social Media", "Branding"];

export const Portfolio = () => {
  const [active, setActive] = useState<Cat>("All");
  const visible = active === "All" ? projects : projects.filter((p) => p.cat === active);

  return (
    <section id="portfolio" className="relative py-28 md:py-36">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 reveal">
          <div className="max-w-2xl">
            <span className="inline-block text-xs uppercase tracking-[0.2em] text-primary-glow mb-4">Selected work</span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Our work <span className="text-gradient">speaks for itself.</span>
            </h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`px-4 py-2 text-sm rounded-full border transition-all ${
                  active === f
                    ? "bg-gradient-primary text-primary-foreground border-transparent shadow-glow-soft"
                    : "border-border text-muted-foreground hover:text-foreground hover:border-primary-glow/50"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {visible.map((p, i) => (
            <article
              key={p.title}
              className="reveal group relative rounded-3xl overflow-hidden glass aspect-[4/3] cursor-pointer"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <img
                src={p.img}
                alt={p.title}
                loading="lazy"
                width={1024}
                height={768}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <span className="inline-block w-fit text-xs uppercase tracking-wider px-3 py-1 rounded-full bg-primary/30 backdrop-blur-md border border-primary-glow/40 text-foreground mb-3">
                  {p.cat}
                </span>
                <h3 className="font-display text-2xl font-bold">{p.title}</h3>
                <p className="text-sm text-muted-foreground">{p.tag}</p>

                <div className="mt-4 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                  <Button variant="hero" size="sm">
                    View Project
                    <ArrowUpRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};