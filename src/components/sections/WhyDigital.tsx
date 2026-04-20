import { Button } from "@/components/ui/button";
import { ArrowRight, Eye, Search, Zap, Users } from "lucide-react";

const stats = [
  {
    icon: Eye,
    value: "75%",
    label: "of users judge a company's credibility based on its website design.",
  },
  {
    icon: Zap,
    value: "2x",
    label: "faster growth for businesses with a strong digital presence vs. those without.",
  },
  {
    icon: Search,
    value: "93%",
    label: "of online experiences begin with a search engine. If you're not visible, you don't exist.",
  },
  {
    icon: Users,
    value: "4.9B",
    label: "people active on social media — your next customers are scrolling right now.",
  },
];

export const WhyDigital = () => {
  return (
    <section id="why-digital" className="relative py-28 md:py-36">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div className="reveal">
            <span className="inline-block text-xs uppercase tracking-[0.2em] text-primary-glow mb-4">Why it matters</span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Your business needs a <span className="text-gradient">digital identity</span> — yesterday.
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              In 2025, your website and social channels <strong className="text-foreground">are</strong> your storefront. They're the first impression, the sales pitch and the trust signal — all rolled into one.
            </p>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              A strategic digital presence is no longer a "nice to have." It's the difference between a business that grows on autopilot and one that depends on luck.
            </p>

            <div className="mt-10 p-6 rounded-2xl glass">
              <p className="font-display text-xl md:text-2xl">
                Don't be invisible online. <span className="text-gradient-primary">Let's change that.</span>
              </p>
              <Button variant="hero" className="mt-5" asChild>
                <a href="#contact">
                  Book a free strategy call
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {stats.map((s, i) => (
              <div
                key={s.value}
                className="reveal glass rounded-2xl p-6 hover:shadow-glow-soft hover:-translate-y-1 transition-all duration-500"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/15 border border-primary-glow/30 mb-4">
                  <s.icon className="h-5 w-5 text-primary-glow" />
                </div>
                <div className="font-display text-4xl font-extrabold text-gradient-primary">{s.value}</div>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};