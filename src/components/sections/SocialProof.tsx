import { Star } from "lucide-react";
import a1 from "@/assets/avatar-1.jpg";
import a2 from "@/assets/avatar-2.jpg";
import a3 from "@/assets/avatar-3.jpg";

const logos = ["NOVARA", "PULSE", "HALCYON", "NORTHWIND", "VANTA", "ECLYPSE", "AXIOM", "LUMEN"];

const testimonials = [
  {
    name: "Maya Chen",
    role: "Founder, Lumen Analytics",
    avatar: a1,
    quote:
      "Flow Studio rebuilt our site and our funnel doubled in 90 days. They don't just design — they think like growth operators.",
  },
  {
    name: "Daniel Rivera",
    role: "CEO, Northwind Goods",
    avatar: a2,
    quote:
      "The team handled web, social and ads end-to-end. We finally have one partner who actually moves the revenue needle.",
  },
  {
    name: "Sophie Laurent",
    role: "Creative Director, Maison Velvet",
    avatar: a3,
    quote:
      "Beautiful, sharp, on-brand. They captured our voice better than agencies twice their size — and shipped twice as fast.",
  },
];

export const SocialProof = () => {
  return (
    <section className="relative py-24">
      <div className="container">
        <p className="text-center text-sm uppercase tracking-[0.25em] text-muted-foreground mb-10 reveal">
          Trusted by brands that want to grow
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
          {testimonials.map((t, i) => (
            <figure
              key={t.name}
              className="reveal glass rounded-3xl p-7 flex flex-col"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="flex gap-1 text-primary-glow mb-4">
                {Array.from({ length: 5 }).map((_, k) => (
                  <Star key={k} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="text-foreground/90 leading-relaxed flex-1">"{t.quote}"</blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt={t.name}
                  loading="lazy"
                  width={48}
                  height={48}
                  className="h-12 w-12 rounded-full object-cover ring-2 ring-primary-glow/40"
                />
                <div>
                  <div className="font-semibold">{t.name}</div>
                  <div className="text-sm text-muted-foreground">{t.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};