import { useEffect, useRef } from "react";
import { Globe, Instagram, TrendingUp, Sparkles, Palette } from "lucide-react";

/**
 * Animated hero visual:
 * - Parallax mouse-tracking blobs
 * - Animated SVG flow lines with traveling dashes
 * - Floating service "chips" orbiting the headline
 * - Twinkling stars + light particles
 */
export const HeroVisual = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    let tx = 0, ty = 0, cx = 0, cy = 0;

    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      tx = ((e.clientX - r.left) / r.width - 0.5) * 2;
      ty = ((e.clientY - r.top) / r.height - 0.5) * 2;
    };

    const tick = () => {
      cx += (tx - cx) * 0.06;
      cy += (ty - cy) * 0.06;
      el.style.setProperty("--px", cx.toFixed(3));
      el.style.setProperty("--py", cy.toFixed(3));
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  // Floating chip definitions: angle (deg), radius (px), delay
  const chips = [
    { Icon: Globe, label: "Web", angle: -20, top: "18%", left: "8%", delay: "0s", depth: 24 },
    { Icon: Instagram, label: "Social", angle: 12, top: "22%", right: "10%", delay: "1.2s", depth: -28 },
    { Icon: TrendingUp, label: "+248%", angle: -8, bottom: "32%", left: "6%", delay: "2.4s", depth: 18 },
    { Icon: Sparkles, label: "Brand", angle: 14, bottom: "28%", right: "8%", delay: "0.6s", depth: -20 },
    { Icon: Palette, label: "Design", angle: 6, top: "45%", left: "3%", delay: "3.2s", depth: 14 },
  ];

  return (
    <div ref={ref} className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
      {/* Parallax color orbs */}
      <div
        className="absolute top-[12%] left-[8%] w-[28rem] h-[28rem] bg-primary/35 blur-3xl animate-blob animate-float-slow"
        style={{ transform: "translate3d(calc(var(--px,0) * 30px), calc(var(--py,0) * 30px), 0)" }}
      />
      <div
        className="absolute bottom-[8%] right-[6%] w-[34rem] h-[34rem] bg-primary-glow/30 blur-3xl animate-blob animate-float-slow"
        style={{ animationDelay: "2s", transform: "translate3d(calc(var(--px,0) * -40px), calc(var(--py,0) * -40px), 0)" }}
      />
      <div
        className="absolute top-[40%] left-[45%] w-56 h-56 bg-accent/40 blur-2xl animate-blob"
        style={{ transform: "translate3d(calc(var(--px,0) * 20px), calc(var(--py,0) * -20px), 0)" }}
      />

      {/* Animated SVG flow lines */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
      >
        <defs>
          <linearGradient id="flowGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="hsl(271 91% 70%)" stopOpacity="0" />
            <stop offset="50%" stopColor="hsl(271 91% 70%)" stopOpacity="0.9" />
            <stop offset="100%" stopColor="hsl(287 91% 65%)" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="flowGrad2" x1="1" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="hsl(252 91% 65%)" stopOpacity="0" />
            <stop offset="50%" stopColor="hsl(252 91% 65%)" stopOpacity="0.7" />
            <stop offset="100%" stopColor="hsl(287 91% 75%)" stopOpacity="0" />
          </linearGradient>
          <radialGradient id="dot" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="hsl(287 91% 80%)" />
            <stop offset="100%" stopColor="hsl(271 91% 60%)" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Flowing path 1 */}
        <path
          d="M -50 720 Q 280 540, 520 640 T 980 520 T 1500 380"
          stroke="url(#flowGrad)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeDasharray="4 12"
          className="animate-dash"
        />
        {/* Flowing path 2 */}
        <path
          d="M -50 220 Q 320 360, 600 280 T 1080 380 T 1500 220"
          stroke="url(#flowGrad2)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeDasharray="2 14"
          className="animate-dash"
          style={{ animationDuration: "5s", animationDirection: "reverse" }}
        />
        {/* Solid faint guide path */}
        <path
          d="M -50 460 Q 360 420, 720 480 T 1500 440"
          stroke="hsl(271 91% 70% / 0.18)"
          strokeWidth="1"
          strokeDasharray="600 1200"
          strokeDashoffset="0"
        />

        {/* Glowing dots along the path */}
        {[
          { cx: 220, cy: 600, r: 4, d: "0s" },
          { cx: 560, cy: 320, r: 3, d: "1.2s" },
          { cx: 880, cy: 540, r: 5, d: "0.6s" },
          { cx: 1180, cy: 280, r: 3, d: "2s" },
          { cx: 380, cy: 200, r: 2.5, d: "1.6s" },
          { cx: 1320, cy: 620, r: 4, d: "0.3s" },
          { cx: 720, cy: 700, r: 2, d: "2.4s" },
        ].map((p, i) => (
          <g key={i} style={{ transformOrigin: `${p.cx}px ${p.cy}px`, animation: `twinkle 3.6s ease-in-out ${p.d} infinite` }}>
            <circle cx={p.cx} cy={p.cy} r={p.r * 5} fill="url(#dot)" opacity="0.6" />
            <circle cx={p.cx} cy={p.cy} r={p.r} fill="hsl(287 91% 85%)" />
          </g>
        ))}
      </svg>

      {/* Floating service chips with parallax depth */}
      {chips.map((c, i) => {
        const { Icon } = c;
        return (
          <div
            key={i}
            className="hidden md:flex absolute items-center gap-2 px-3 py-2 rounded-2xl glass-strong shadow-glow-soft animate-float"
            style={{
              top: c.top,
              left: c.left,
              right: c.right,
              bottom: c.bottom,
              animationDelay: c.delay,
              animationDuration: `${6 + (i % 3)}s`,
              transform: `translate3d(calc(var(--px,0) * ${c.depth}px), calc(var(--py,0) * ${c.depth}px), 0) rotate(${c.angle}deg)`,
              transition: "transform 0.2s ease-out",
            }}
          >
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-primary">
              <Icon className="h-3.5 w-3.5 text-primary-foreground" />
            </span>
            <span className="text-xs font-medium text-foreground whitespace-nowrap">{c.label}</span>
          </div>
        );
      })}

      {/* Twinkling stars */}
      {[
        { top: "14%", left: "30%", d: "0s", s: 6 },
        { top: "28%", left: "70%", d: "0.8s", s: 4 },
        { top: "60%", left: "20%", d: "1.4s", s: 5 },
        { top: "70%", left: "82%", d: "0.4s", s: 3 },
        { top: "8%", left: "88%", d: "2s", s: 4 },
        { top: "85%", left: "55%", d: "1s", s: 5 },
      ].map((s, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-primary-glow animate-twinkle"
          style={{
            top: s.top,
            left: s.left,
            width: s.s,
            height: s.s,
            animationDelay: s.d,
            boxShadow: "0 0 12px hsl(287 91% 75%)",
          }}
        />
      ))}

      {/* Orbiting concentric rings */}
      <div className="hidden lg:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vmin] h-[120vmin]">
        <div className="absolute inset-0 rounded-full border border-primary-glow/10 animate-spin-slow" />
        <div
          className="absolute inset-[8%] rounded-full border border-primary-glow/15 animate-spin-slow"
          style={{ animationDirection: "reverse", animationDuration: "20s" }}
        />
        <div className="absolute inset-[18%] rounded-full border border-primary-glow/10" />
      </div>
    </div>
  );
};