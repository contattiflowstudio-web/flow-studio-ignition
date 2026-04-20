import { Compass, Palette, Rocket, LineChart } from "lucide-react";

const steps = [
  { icon: Compass, title: "Discover", desc: "We dive into your brand, audience and goals to map the highest-leverage opportunities." },
  { icon: Palette, title: "Design", desc: "Bold visuals, sharp messaging and conversion-driven layouts crafted around your story." },
  { icon: Rocket, title: "Launch", desc: "We ship fast, then iterate — tracking the metrics that move your business forward." },
  { icon: LineChart, title: "Grow", desc: "Ongoing optimization, content and ads that compound results month over month." },
];

export const Process = () => {
  return (
    <section className="relative py-28 md:py-36 overflow-hidden">
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[60rem] h-[60rem] bg-primary/10 blur-3xl rounded-full pointer-events-none" />

      <div className="container relative">
        <div className="text-center max-w-2xl mx-auto mb-16 reveal">
          <span className="inline-block text-xs uppercase tracking-[0.2em] text-primary-glow mb-4">How we work</span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            A studio process built<br />
            <span className="text-gradient">for momentum.</span>
          </h2>
        </div>

        <div className="relative">
          {/* connecting line */}
          <div className="hidden lg:block absolute top-10 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-primary-glow/40 to-transparent" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s, i) => (
              <div
                key={s.title}
                className="reveal relative glass rounded-2xl p-6 hover:-translate-y-2 transition-all duration-500 hover:shadow-glow-soft"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="flex items-center justify-between mb-5">
                  <div className="relative h-12 w-12 rounded-xl bg-gradient-primary shadow-glow-soft inline-flex items-center justify-center">
                    <s.icon className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <span className="font-display text-3xl font-extrabold text-foreground/10">0{i + 1}</span>
                </div>
                <h3 className="font-display text-xl font-bold mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};