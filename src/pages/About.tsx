import { motion } from "framer-motion";
import {
  Download,
  MapPin,
  Mail,
  GraduationCap,
  Briefcase,
  Code,
  Shield,
  Network,
  Award,
} from "lucide-react";

const skills = {
  languages: ["Python", "JavaScript", "Bash", "SQL", "C#", "HTML/CSS", "Typescript", "PowerShell","React"],
  tools: ["Burp Suite", "Wireshark", "Nmap", "Zapier", "N8N", "Postman" , "OWASP ZAP","Azure", "GitHub"],
  networking: ["TCP/IP", "DNS", "VPN", "Firewallconfiguratie", "Netwerksegmentatie"],
};

const fade = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const About = () => (
  <div className="py-20">
    <div className="container mx-auto px-6 max-w-4xl">
      {/* Header */}
      <motion.div {...fade} className="mb-16">
        <p className="font-mono text-sm text-primary mb-2 tracking-widest">// over_mij</p>
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Fullstack Developper - Student programmeren
        </h1>
        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-6">
          <span className="flex items-center gap-1"><MapPin size={14} /> Op afstand / Op locatie</span>
          <span className="flex items-center gap-1"><Mail size={14} /> gregoire.intwali@student.ap.be</span>
        </div>
        <p className="text-muted-foreground leading-relaxed max-w-2xl">
          Gepassioneerde fullstack developper-student met praktijkervaring in SaaS-platformen bouwen,
          penetratietesten en dreigingsinformatie. Momenteel stagiair bij een cybersecurity
          startup waar ik bijdraag aan beveiligingsmonitoring, kwetsbaarheidsbeoordelingen en
          automatiseringsprojecten.
        </p>
      </motion.div>

      {/* Opleiding */}
      <motion.section {...fade} className="mb-14">
        <div className="flex items-center gap-2 mb-6">
          <GraduationCap size={18} className="text-primary" />
          <h2 className="font-mono text-sm text-primary tracking-widest">// opleiding</h2>
        </div>
        <div className="rounded-lg border border-border bg-card p-6">
          <h3 className="font-semibold text-foreground">Graduaat Programmeren</h3>
          <p className="text-sm text-muted-foreground mt-1">Artesis Plantijn Hogeschool — 2024–2026</p>
        </div>
      </motion.section>

      {/* Vaardigheden */}
      <motion.section {...fade} className="mb-14">
        <div className="flex items-center gap-2 mb-6">
          <Code size={18} className="text-primary" />
          <h2 className="font-mono text-sm text-primary tracking-widest">// technische_vaardigheden</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: "Talen", icon: Code, items: skills.languages },
            { title: "Tools", icon: Shield, items: skills.tools },
            { title: "Netwerken", icon: Network, items: skills.networking },
          ].map((group) => (
            <div key={group.title} className="rounded-lg border border-border bg-card p-5">
              <div className="flex items-center gap-2 mb-3">
                <group.icon size={14} className="text-accent" />
                <h3 className="text-sm font-semibold text-foreground">{group.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="px-2 py-1 rounded text-xs font-mono bg-secondary text-secondary-foreground"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Ervaring */}
      <motion.section {...fade} className="mb-14">
        <div className="flex items-center gap-2 mb-6">
          <Briefcase size={18} className="text-primary" />
          <h2 className="font-mono text-sm text-primary tracking-widest">// ervaring</h2>
        </div>
          <div className="rounded-lg border border-border bg-card p-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
              <h3 className="font-semibold text-foreground">Cybersecurity Stagiair</h3>
              <span className="text-xs font-mono text-muted-foreground">Jan 2025 — Heden</span>
            </div>
            <p className="text-sm text-accent mb-3">Xpose Security</p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex gap-2">
                <span className="text-primary mt-1">▹</span>
                Meegewerkt aan de ontwikkeling van een eigen SaaS-platform gericht op cybersecurity, uitgewerkt op vraag van klanten
              </li>
              <li className="flex gap-2">
                <span className="text-primary mt-1">▹</span>
                Opgeleid in een breed scala aan cybersecuritytechnieken, met verdieping in persoonlijke specialisaties
              </li>
              <li className="flex gap-2">
                <span className="text-primary mt-1">▹</span>
                Basiservaring opgedaan met pentestingtools zoals Burp Suite, Nmap en OWASP ZAP, met focus op OWASP Top 10 kwetsbaarheden
              </li>
              <li className="flex gap-2">
                <span className="text-primary mt-1">▹</span>
                Gewerkt met Linux-omgevingen, command-line tools en webtechnologieën (HTTP, API's, React, TypeScript)
              </li>
            </ul>
            <div className="flex flex-wrap gap-2 mt-4">
              {["Python", "TypeScript", "React", "Linux", "Burp Suite", "Nmap", "OWASP ZAP", "Azure"].map((t) => (
                <span key={t} className="px-2 py-0.5 rounded text-xs font-mono bg-secondary text-primary">
                  {t}
                </span>
              ))}
            </div>
          </div>
      </motion.section>
{/* 
      Certificeringen
      <motion.section {...fade} className="mb-14">
        <div className="flex items-center gap-2 mb-6">
          <Award size={18} className="text-primary" />
          <h2 className="font-mono text-sm text-primary tracking-widest">// certificeringen</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            "CompTIA Security+ (In Voorbereiding)",
            "Google Cybersecurity Certificaat",
          ].map((cert) => (
            <div key={cert} className="rounded-lg border border-border bg-card p-4 text-sm text-foreground">
              {cert}
            </div>
          ))}
        </div>
      </motion.section> */}

      {/* CV Downloaden */}
      <motion.div {...fade} className="text-center">
        <a
            href="/Gregoire_Intwali_CV.pdf"
            download="Gregoire_Intwali_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-primary text-primary-foreground font-mono text-sm font-semibold hover:opacity-90 transition-opacity glow-border"
          >
          <Download size={16} />
          CV Downloaden (PDF)
        </a>
      </motion.div>
          </div>
        </div>
);

export default About;
