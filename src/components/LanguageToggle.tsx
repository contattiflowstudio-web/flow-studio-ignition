import { Check, Globe } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import type { Lang } from "@/i18n/translations";

const LANGS: { code: Lang; label: string; native: string }[] = [
  { code: "it", label: "Italian", native: "Italiano" },
  { code: "en", label: "English", native: "English" },
];

type Props = {
  className?: string;
  /** "segmented" (desktop pill), "dropdown" (mobile menu), or "auto" (responsive) */
  variant?: "segmented" | "dropdown" | "auto";
};

export const LanguageToggle = ({ className, variant = "auto" }: Props) => {
  const { lang, setLang } = useLanguage();
  const active = LANGS.find((l) => l.code === lang) ?? LANGS[0];

  const Segmented = (
    <div
      role="group"
      aria-label="Language switcher"
      className={cn(
        "inline-flex items-center rounded-full border border-border/60 bg-background/40 backdrop-blur-md p-0.5 text-xs",
        className
      )}
    >
      {LANGS.map(({ code }) => {
        const isActive = lang === code;
        return (
          <button
            key={code}
            type="button"
            onClick={() => setLang(code)}
            aria-pressed={isActive}
            aria-label={`Switch to ${code === "it" ? "Italian" : "English"}`}
            className={cn(
              "px-2.5 py-1 rounded-full font-semibold uppercase tracking-wider transition-all",
              isActive
                ? "bg-gradient-primary text-primary-foreground shadow-glow-soft"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            {code}
          </button>
        );
      })}
    </div>
  );

  const Dropdown = (
    <DropdownMenu>
      <DropdownMenuTrigger
        aria-label={`Current language: ${active.label}. Change language`}
        className={cn(
          "inline-flex items-center gap-1.5 rounded-full border border-border/60 bg-background/40 backdrop-blur-md px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-foreground hover:border-primary/50 hover:bg-primary/10 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
          className
        )}
      >
        <Globe className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
        <span>{active.code}</span>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-[10rem] glass-strong">
        <DropdownMenuLabel className="text-xs uppercase tracking-wider text-muted-foreground">
          Language
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        {LANGS.map(({ code, native, label }) => {
          const isActive = lang === code;
          return (
            <DropdownMenuItem
              key={code}
              onSelect={() => setLang(code)}
              aria-current={isActive ? "true" : undefined}
              className={cn(
                "flex items-center justify-between gap-3 cursor-pointer",
                isActive && "bg-primary/10 text-foreground"
              )}
            >
              <span className="flex items-center gap-2">
                <span className="text-[10px] font-bold uppercase tracking-wider text-primary w-6">
                  {code}
                </span>
                <span className="text-sm">{native}</span>
              </span>
              {isActive && <Check className="h-4 w-4 text-primary" aria-hidden="true" />}
              <span className="sr-only">{label}</span>
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );

  if (variant === "segmented") return Segmented;
  if (variant === "dropdown") return Dropdown;

  // Responsive: dropdown on mobile, segmented on md+
  return (
    <>
      <div className="md:hidden">{Dropdown}</div>
      <div className="hidden md:block">{Segmented}</div>
    </>
  );
};