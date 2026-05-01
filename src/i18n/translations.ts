export type Lang = "it" | "en";

const dict = {
  // Navbar
  "nav.home": { it: "Home", en: "Home" },
  "nav.services": { it: "Servizi", en: "Services" },
  "nav.whyDigital": { it: "Perché Digitale", en: "Why Digital" },
  "nav.portfolio": { it: "Portfolio", en: "Portfolio" },
  "nav.contact": { it: "Contatti", en: "Contact" },
  "nav.cta": { it: "Inizia il tuo progetto", en: "Start Your Project" },

  // Hero
  "hero.badge": { it: "Scelto da oltre 120 brand ambiziosi", en: "Trusted by 120+ ambitious brands" },
  "hero.title.line1": { it: "Creiamo Esperienze", en: "We Build Digital" },
  "hero.title.line2": { it: "Digitali che", en: "Experiences That" },
  "hero.word.1": { it: "Convertono", en: "Convert" },
  "hero.word.2": { it: "Ispirano", en: "Inspire" },
  "hero.word.3": { it: "Crescono", en: "Scale" },
  "hero.word.4": { it: "Spiccano", en: "Stand Out" },
  "hero.subtitle": {
    it: "Web design, gestione social e marketing digitale — tutto in un unico studio. Trasformiamo i pixel in pipeline e le idee in crescita misurabile.",
    en: "Web design, social media management and digital marketing — all in one studio. We turn pixels into pipeline and ideas into measurable growth.",
  },
  "hero.cta.primary": { it: "Vedi i nostri lavori", en: "See Our Work" },
  "hero.cta.secondary": { it: "Parliamone", en: "Talk to Us" },
  "hero.stat.1.k": { it: "120+", en: "120+" },
  "hero.stat.1.v": { it: "Progetti realizzati", en: "Projects shipped" },
  "hero.stat.2.k": { it: "4.9/5", en: "4.9/5" },
  "hero.stat.2.v": { it: "Valutazione clienti", en: "Client rating" },
  "hero.stat.3.k": { it: "2.8x", en: "2.8x" },
  "hero.stat.3.v": { it: "Aumento medio ROI", en: "Avg. ROI lift" },
  "hero.scroll": { it: "Scorri", en: "Scroll" },

  // Marquee
  "marquee.1": { it: "Web Design", en: "Web Design" },
  "marquee.2": { it: "Brand Identity", en: "Brand Identity" },
  "marquee.3": { it: "Strategia Social", en: "Social Strategy" },
  "marquee.4": { it: "Creazione Contenuti", en: "Content Creation" },
  "marquee.5": { it: "SEO", en: "SEO" },
  "marquee.6": { it: "Annunci a Pagamento", en: "Paid Ads" },
  "marquee.7": { it: "E-commerce", en: "E-commerce" },
  "marquee.8": { it: "Conversion Design", en: "Conversion Design" },

  // Services
  "services.eyebrow": { it: "Cosa facciamo", en: "What we do" },
  "services.title.1": { it: "Tre discipline.", en: "Three disciplines." },
  "services.title.2": { it: "Un unico motore di crescita.", en: "One growth engine." },
  "services.intro": {
    it: "Uniamo design, contenuti e performance marketing in un unico flusso — così ogni touchpoint fa crescere il tuo business.",
    en: "We blend design, content and performance marketing into a single workflow — so every touchpoint moves your business forward.",
  },
  "services.1.title": { it: "Creazione Siti Web", en: "Website Creation" },
  "services.1.desc": {
    it: "Siti su misura, velocissimi e curati nei dettagli, pensati per impressionare i visitatori e trasformarli in clienti.",
    en: "Custom, lightning-fast and pixel-perfect websites engineered to impress visitors and convert them into customers.",
  },
  "services.1.f1": { it: "Design su misura", en: "Custom design" },
  "services.1.f2": { it: "Orientato alla conversione", en: "Conversion-focused" },
  "services.1.f3": { it: "Velocità estrema", en: "Lightning fast" },
  "services.2.title": { it: "Gestione Social Media", en: "Social Media Management" },
  "services.2.desc": {
    it: "Strategia, creazione contenuti e crescita della community su Instagram, TikTok, LinkedIn e oltre — sempre in linea con la tua voce.",
    en: "Strategy, content creation and community growth across Instagram, TikTok, LinkedIn and beyond — built around your brand voice.",
  },
  "services.2.f1": { it: "Strategia editoriale", en: "Content strategy" },
  "services.2.f2": { it: "Pubblicazioni quotidiane", en: "Daily posting" },
  "services.2.f3": { it: "Crescita audience", en: "Audience growth" },
  "services.3.title": { it: "Digital Marketing", en: "Digital Marketing" },
  "services.3.desc": {
    it: "SEO, advertising e campagne integrate che trasformano l'attenzione in fatturato. Ottimizziamo per ciò che conta davvero: i risultati.",
    en: "SEO, paid ads and integrated campaigns that turn attention into revenue. We optimize for the metric that actually matters: results.",
  },
  "services.3.f1": { it: "SEO e contenuti", en: "SEO & content" },
  "services.3.f2": { it: "Acquisizione a pagamento", en: "Paid acquisition" },
  "services.3.f3": { it: "Analisi performance", en: "Performance tracking" },
  "services.learnMore": { it: "Scopri di più", en: "Learn more" },

  // WhyDigital
  "why.eyebrow": { it: "Perché è importante", en: "Why it matters" },
  "why.title.a": { it: "Il tuo business ha bisogno di un'", en: "Your business needs a " },
  "why.title.b": { it: "identità digitale", en: "digital identity" },
  "why.title.c": { it: " — da ieri.", en: " — yesterday." },
  "why.p1.a": { it: "Nel 2025 il tuo sito e i tuoi canali social ", en: "In 2025, your website and social channels " },
  "why.p1.b": { it: "sono", en: "are" },
  "why.p1.c": {
    it: " la tua vetrina. Sono la prima impressione, la presentazione e il segnale di fiducia — tutto in uno.",
    en: " your storefront. They're the first impression, the sales pitch and the trust signal — all rolled into one.",
  },
  "why.p2": {
    it: "Una presenza digitale strategica non è più un \"nice to have\". È la differenza tra un'azienda che cresce in automatico e una che dipende dalla fortuna.",
    en: "A strategic digital presence is no longer a \"nice to have.\" It's the difference between a business that grows on autopilot and one that depends on luck.",
  },
  "why.box.a": { it: "Non essere invisibile online.", en: "Don't be invisible online." },
  "why.box.b": { it: "Cambiamo le cose insieme.", en: "Let's change that." },
  "why.box.cta": { it: "Prenota una consulenza gratuita", en: "Book a free strategy call" },
  "why.stat.1.l": {
    it: "degli utenti giudica la credibilità di un'azienda dal design del sito.",
    en: "of users judge a company's credibility based on its website design.",
  },
  "why.stat.2.l": {
    it: "crescita più rapida per le aziende con una forte presenza digitale rispetto alle altre.",
    en: "faster growth for businesses with a strong digital presence vs. those without.",
  },
  "why.stat.3.l": {
    it: "delle esperienze online inizia da un motore di ricerca. Se non sei visibile, non esisti.",
    en: "of online experiences begin with a search engine. If you're not visible, you don't exist.",
  },
  "why.stat.4.l": {
    it: "di persone attive sui social — i tuoi prossimi clienti stanno scrollando proprio ora.",
    en: "people active on social media — your next customers are scrolling right now.",
  },

  // Process
  "process.eyebrow": { it: "Come lavoriamo", en: "How we work" },
  "process.title.1": { it: "Un processo di studio costruito", en: "A studio process built" },
  "process.title.2": { it: "per generare slancio.", en: "for momentum." },
  "process.s1.title": { it: "Scoperta", en: "Discover" },
  "process.s1.desc": {
    it: "Approfondiamo brand, pubblico e obiettivi per individuare le opportunità a maggior impatto.",
    en: "We dive into your brand, audience and goals to map the highest-leverage opportunities.",
  },
  "process.s2.title": { it: "Design", en: "Design" },
  "process.s2.desc": {
    it: "Visual d'impatto, messaggi chiari e layout orientati alla conversione, costruiti attorno alla tua storia.",
    en: "Bold visuals, sharp messaging and conversion-driven layouts crafted around your story.",
  },
  "process.s3.title": { it: "Lancio", en: "Launch" },
  "process.s3.desc": {
    it: "Andiamo online velocemente, poi ottimizziamo — monitorando le metriche che fanno crescere il business.",
    en: "We ship fast, then iterate — tracking the metrics that move your business forward.",
  },
  "process.s4.title": { it: "Crescita", en: "Grow" },
  "process.s4.desc": {
    it: "Ottimizzazione continua, contenuti e advertising che fanno crescere i risultati mese dopo mese.",
    en: "Ongoing optimization, content and ads that compound results month over month.",
  },

  // Portfolio
  "portfolio.eyebrow": { it: "Lavori selezionati", en: "Selected work" },
  "portfolio.title.a": { it: "I nostri lavori ", en: "Our work " },
  "portfolio.title.b": { it: "parlano da soli.", en: "speaks for itself." },
  "portfolio.filter.all": { it: "Tutti", en: "All" },
  "portfolio.filter.websites": { it: "Siti Web", en: "Websites" },
  "portfolio.filter.social": { it: "Social Media", en: "Social Media" },
  "portfolio.filter.branding": { it: "Branding", en: "Branding" },
  "portfolio.tag.saas": { it: "Piattaforma SaaS", en: "SaaS Platform" },
  "portfolio.tag.fashion": { it: "Campagna Fashion", en: "Fashion Campaign" },
  "portfolio.tag.brand": { it: "Brand Identity", en: "Brand Identity" },
  "portfolio.tag.ecom": { it: "E-commerce", en: "E-commerce" },
  "portfolio.tag.launch": { it: "Lancio Prodotto", en: "Product Launch" },
  "portfolio.tag.hospitality": { it: "Ristorazione", en: "Hospitality" },
  "portfolio.viewProject": { it: "Vedi Progetto", en: "View Project" },

  // SocialProof
  "social.kicker": { it: "Scelto dai brand che vogliono crescere", en: "Trusted by brands that want to grow" },
  "social.t1.role": { it: "Founder, Lumen Analytics", en: "Founder, Lumen Analytics" },
  "social.t1.quote": {
    it: "Flow Studio ha rifatto il nostro sito e il funnel è raddoppiato in 90 giorni. Non si limitano a fare design — pensano come growth operator.",
    en: "Flow Studio rebuilt our site and our funnel doubled in 90 days. They don't just design — they think like growth operators.",
  },
  "social.t2.role": { it: "CEO, Northwind Goods", en: "CEO, Northwind Goods" },
  "social.t2.quote": {
    it: "Il team ha gestito web, social e ads dall'inizio alla fine. Finalmente abbiamo un partner che muove davvero il fatturato.",
    en: "The team handled web, social and ads end-to-end. We finally have one partner who actually moves the revenue needle.",
  },
  "social.t3.role": { it: "Direttrice Creativa, Maison Velvet", en: "Creative Director, Maison Velvet" },
  "social.t3.quote": {
    it: "Bello, preciso, in linea con il brand. Hanno colto la nostra voce meglio di agenzie il doppio più grandi — e a doppia velocità.",
    en: "Beautiful, sharp, on-brand. They captured our voice better than agencies twice their size — and shipped twice as fast.",
  },

  // CTA
  "cta.badge": { it: "Prenotazioni aperte — Q3 2025", en: "Now booking — Q3 2025" },
  "cta.title": { it: "Pronto a far crescere il tuo brand?", en: "Ready to elevate your brand?" },
  "cta.subtitle": {
    it: "Costruiamo qualcosa di grande insieme. Raccontaci il tuo progetto e ti rispondiamo entro un giorno lavorativo.",
    en: "Let's build something great together. Tell us about your project and we'll come back within one business day.",
  },
  "cta.primary": { it: "Richiedi una consulenza gratuita", en: "Get a Free Consultation" },
  "cta.secondary": { it: "oppure guarda i nostri lavori →", en: "or browse our work →" },

  // Footer
  "footer.tagline": {
    it: "Uno studio creativo-tech che progetta siti, presenza social e marketing digitale per brand che fanno sul serio.",
    en: "A creative-tech studio designing websites, social presence and digital marketing for brands that mean business.",
  },
  "footer.studio": { it: "Studio", en: "Studio" },
  "footer.contact": { it: "Contattaci", en: "Get in touch" },
  "footer.location": { it: "Lago di Garda, IT · Remoto in tutto il mondo", en: "Lake Garda, IT · Remote worldwide" },
  "footer.copyright": { it: "© 2025 Flow Studio. Tutti i diritti riservati.", en: "© 2025 Flow Studio. All rights reserved." },
  "footer.crafted": { it: "Realizzato con cura — pensato per convertire.", en: "Crafted with intent — designed to convert." },

  // Language toggle
  "lang.switch": { it: "Lingua", en: "Language" },
} as const;

export type TranslationKey = keyof typeof dict;

export const translations: Record<Lang, Record<TranslationKey, string>> = {
  it: Object.fromEntries(
    (Object.keys(dict) as TranslationKey[]).map((k) => [k, dict[k].it])
  ) as Record<TranslationKey, string>,
  en: Object.fromEntries(
    (Object.keys(dict) as TranslationKey[]).map((k) => [k, dict[k].en])
  ) as Record<TranslationKey, string>,
};