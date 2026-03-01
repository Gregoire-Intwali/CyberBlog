import { motion } from "framer-motion";
import {
  Shield,
  MapPin,
  Globe,
  Target,
  Zap,
  Lock,
  Eye,
  Code,
  ExternalLink,
} from "lucide-react";
import About from "./About";

const services = [
  {
    icon: Target,
    title: "Penetratietesten",
    description:
      "APT-niveau ethisch hacken waarbij echte aanvalspaden worden blootgelegd. We benaderen je organisatie zoals een echte hacker dat zou doen.",
  },
  {
    icon: Eye,
    title: "Dark Web Monitoring",
    description:
      "24/7 bewaking van het dark web op gelekte credentials, bedrijfsdata en dreigingen gericht op jouw organisatie.",
  },
  {
    icon: Lock,
    title: "Blockchain Security",
    description:
      "Gespecialiseerde beveiligingsaudits voor blockchain-platformen en crypto-infrastructuur.",
  },
  {
    icon: Code,
    title: "SaaS-platform",
    description:
      "Een eigen cybersecurity SaaS-platform dat standaarden en procedures integreert in één naadloos platform voor proactieve beveiliging.",
  },
  {
    icon: Zap,
    title: "Dreigingsinformatie",
    description:
      "Proactieve monitoring en analyse van dreigingen zodat organisaties cyberaanvallen voor kunnen blijven.",
  },
  {
    icon: Shield,
    title: "Compliance & Advies",
    description:
      "Begeleiding bij compliancevereisten en strategisch cybersecurityadvies voor financiële instellingen en overheidsinstanties.",
  },
];

const fade = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const AboutXPose = () => (
  <div className="py-20">
    <div className="container mx-auto px-6 max-w-4xl">

      {/* Header */}
      <motion.div {...fade} className="mb-16">
        <p className="font-mono text-sm text-primary mb-2 tracking-widest">// stagebedrijf</p>
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          XPOSE Security
        </h1>
        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-6">
          <span className="flex items-center gap-1">
            <MapPin size={14} /> Houthalen-Helchteren, België
          </span>
          <span className="flex items-center gap-1">
            <Globe size={14} />
            <a
              href="https://xposesecurity.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              xposesecurity.com
            </a>
          </span>
        </div>
        <p className="text-muted-foreground leading-relaxed max-w-2xl">
          XPOSE Security is een Belgisch cybersecuritybedrijf gebouwd op een eenvoudig principe:
          organisaties verdienen duidelijke, eerlijke en praktische bescherming — zonder de ruis,
          overcomplexiteit of corporate theatrics die de industrie domineren. Ze benaderen
          beveiliging vanuit een aanvallersmindset: geen jargon, geen excuses, enkel helderheid.
        </p>
      </motion.div>

      {/* Over het bedrijf */}
      <motion.section {...fade} className="mb-14">
        <div className="flex items-center gap-2 mb-6">
          <Shield size={18} className="text-primary" />
          <h2 className="font-mono text-sm text-primary tracking-widest">// over_xpose</h2>
        </div>
        <div className="rounded-lg border border-border bg-card p-6 space-y-4 text-sm text-muted-foreground leading-relaxed">
          <p>
            XPOSE Security werd opgericht in 2023 door <span className="text-foreground font-medium">Niels Aerts</span>,
            een 25-jarige Belgische ethische hacker die gespecialiseerd is in offensieve cybersecurity,
            APT-stijl breach simulaties en cloudexploitatieanalyse. Vanuit zijn passie voor hacken bouwde
            hij één van de meest geavanceerde offensieve cybersecuritybedrijven van Europa.
          </p>
          <p>
            Het bedrijf is actief in België en het Midden-Oosten (Dubai) en bedient klanten in
            hoog-vertrouwens- en hoog-impactomgevingen: financiële instellingen, overheidsinstanties,
            digitale bankingplatformen en ambitieuze techbedrijven. XPOSE groeit snel via mond-tot-mondreclame
            en een sterke reputatie voor resultaten zonder typische corporate complexiteit.
          </p>
          <p>
            Wat XPOSE onderscheidt is de betrokkenheid van de oprichter bij elk project, een lean
            operationele aanpak die snelheid en kwaliteit prioriteert, en oplossingen die werken
            in de praktijk — niet alleen op papier.
          </p>
        </div>
      </motion.section>

      {/* Diensten */}
      <motion.section {...fade} className="mb-14">
        <div className="flex items-center gap-2 mb-6">
          <Target size={18} className="text-primary" />
          <h2 className="font-mono text-sm text-primary tracking-widest">// diensten</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-lg border border-border bg-card p-5"
            >
              <div className="flex items-center gap-2 mb-2">
                <service.icon size={14} className="text-accent" />
                <h3 className="text-sm font-semibold text-foreground">{service.title}</h3>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Kernwaarden */}
      <motion.section {...fade} className="mb-14">
        <div className="flex items-center gap-2 mb-6">
          <Zap size={18} className="text-primary" />
          <h2 className="font-mono text-sm text-primary tracking-widest">// kernwaarden</h2>
        </div>
        <div className="rounded-lg border border-border bg-card p-6">
          <ul className="space-y-3 text-sm text-muted-foreground">
            {[
              "Geen jargon. Geen excuses. Enkel helderheid en eerlijkheid.",
              "Lean operaties die snelheid en kwaliteit boven alles stellen.",
              "De oprichter blijft persoonlijk betrokken bij elk engagement.",
              "Oplossingen die werken in de realiteit, niet alleen op papier.",
              "Cybersecurity is geen dienst — het is een verantwoordelijkheid.",
            ].map((value) => (
              <li key={value} className="flex gap-2">
                <span className="text-primary mt-0.5">▹</span>
                {value}
              </li>
            ))}
          </ul>
        </div>
      </motion.section>

      {/* Mijn stage */}
      <motion.section {...fade} className="mb-14">
        <div className="flex items-center gap-2 mb-6">
          <Code size={18} className="text-primary" />
          <h2 className="font-mono text-sm text-primary tracking-widest">// mijn_bijdrage</h2>
        </div>
        <div className="rounded-lg border border-border bg-card p-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
            <h3 className="font-semibold text-foreground">Cybersecurity Stagiair</h3>
            <span className="text-xs font-mono text-muted-foreground">Jan 2025 — Heden</span>
          </div>
          <ul className="space-y-2 text-sm text-muted-foreground mb-4">
            {[
              "Meegewerkt aan de ontwikkeling van het eigen SaaS-platform gericht op cybersecurity, uitgewerkt op vraag van klanten.",
              "Opgeleid in een breed scala aan cybersecuritytechnieken, met verdieping in persoonlijke specialisaties.",
              "Basiservaring opgedaan met pentestingtools zoals Burp Suite, Nmap en OWASP ZAP, met focus op OWASP Top 10 kwetsbaarheden.",
              "Gewerkt met Linux-omgevingen, command-line tools en webtechnologieën (HTTP, API's, React, TypeScript).",
            ].map((item) => (
              <li key={item} className="flex gap-2">
                <span className="text-primary mt-0.5">▹</span>
                {item}
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-2">
            {["Python", "TypeScript", "React", "Linux", "Burp Suite", "Nmap", "OWASP ZAP", "Azure"].map((t) => (
              <span key={t} className="px-2 py-0.5 rounded text-xs font-mono bg-secondary text-primary">
                {t}
              </span>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA */}
      <motion.div {...fade} className="text-center">
        <a
          href="https://xposesecurity.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-primary text-primary-foreground font-mono text-sm font-semibold hover:opacity-90 transition-opacity glow-border"
        >
          <ExternalLink size={16} />
          Bezoek XPOSE Security
        </a>
      </motion.div>

    </div>
  </div>
);

export default AboutXPose;