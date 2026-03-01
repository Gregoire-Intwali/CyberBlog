import { Github, Linkedin, Shield } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border bg-muted/30">
    <div className="container mx-auto px-6 py-12">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2 font-mono text-sm text-primary">
          <Shield size={16} />
          <span>Gregoire's Blog</span>
        </div>

        <p className="text-sm text-muted-foreground font-mono">
          © 2025 Cybersecurity Werkplekleren Blog. Alle rechten voorbehouden.
        </p>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/Gregoire-Intwali"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Github size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/gregoire-intwali-495baa1b3/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Linkedin size={20} />
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
