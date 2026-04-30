import { useLanguage } from "@/i18n/LanguageContext";
import { cn } from "@/lib/utils";

export const LanguageToggle = ({ className }: { className?: string }) => {
  const { lang, setLang } = useLanguage();

  return (
    <div
      role="group"
      aria-label="Language switcher"
      className={cn(
        "inline-flex items-center rounded-full border border-border/60 bg-background/40 backdrop-blur-md p-0.5 text-xs",
        className
      )}
    >
      {(["it", "en"] as const).map((l) => (
        <button
          key={l}
          type="button"
          onClick={() => setLang(l)}
          aria-pressed={lang === l}
          className={cn(
            "px-2.5 py-1 rounded-full font-semibold uppercase tracking-wider transition-all",
            lang === l
              ? "bg-gradient-primary text-primary-foreground shadow-glow-soft"
              : "text-muted-foreground hover:text-foreground"
          )}
        >
          {l}
        </button>
      ))}
    </div>
  );
};