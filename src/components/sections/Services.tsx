import { Globe, Instagram, TrendingUp } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Website Creation",
    desc: "Custom, lightning-fast and pixel-perfect websites engineered to impress visitors and convert them into customers.",
    features: ["Custom design", "Conversion-focused", "Lightning fast"],
  },
  {
    icon: Instagram,
    title: "Social Media Management",
    desc: "Strategy, content creation and community growth across Instagram, TikTok, LinkedIn and beyond — built around your brand voice.",
    features: ["Content strategy", "Daily posting", "Audience growth"],
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing",
    desc: "SEO, paid ads and integrated campaigns that turn attention into revenue. We optimize for the metric that actually matters: results.",
    features: ["SEO & content", "Paid acquisition", "Performance tracking"],
  },
];

export const Services = () => {
  return (
    <section id="services" className="relative py-28 md:py-36 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary/10 blur-3xl pointer-events-none" />

      <div className="container relative">
        <div className="max-w-2xl mb-16 reveal">
          <span className="inline-block text-xs uppercase tracking-[0.2em] text-primary-glow mb-4">What we do</span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Three disciplines.<br />
            <span className="text-gradient">One growth engine.</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            We blend design, content and performance marketing into a single workflow — so every touchpoint moves your business forward.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div
              key={s.title}
              className="reveal group relative glass rounded-3xl p-8 hover:-translate-y-2 transition-all duration-500 hover:shadow-glow overflow-hidden"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="absolute -top-20 -right-20 w-48 h-48 rounded-full bg-primary/0 group-hover:bg-primary/30 blur-3xl transition-all duration-700" />

              <div className="relative">
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-primary shadow-glow-soft mb-6">
                  <s.icon className="h-7 w-7 text-primary-foreground" />
                </div>
                <h3 className="font-display text-2xl font-bold mb-3">{s.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{s.desc}</p>

                <ul className="mt-6 space-y-2">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-foreground/80">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary-glow" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};