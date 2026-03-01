import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const lines = [
  "$ ssh gregoire.intwali@student.ap.be",
  "[+] Verbinding opgezet...",
  "[+] Authenticeren...",
  "[✓] Toegang verleend.",
  "[>] Werkplekleren Blog laden...",
  "[✓] Welkom, stagiair.",
];

const TerminalIntro = () => {
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    if (visibleLines < lines.length) {
      const timer = setTimeout(() => setVisibleLines((v) => v + 1), 400);
      return () => clearTimeout(timer);
    }
  }, [visibleLines]);

  return (
    <div className="rounded-lg border border-border bg-muted/50 p-5 font-mono text-sm max-w-lg">
      <div className="flex items-center gap-2 mb-3">
        <span className="w-3 h-3 rounded-full bg-destructive/60" />
        <span className="w-3 h-3 rounded-full bg-primary/40" />
        <span className="w-3 h-3 rounded-full bg-primary/80" />
      </div>
      <div className="space-y-1">
        {lines.slice(0, visibleLines).map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className={
              line.includes("✓")
                ? "text-primary"
                : line.includes(">")
                ? "text-accent"
                : "text-muted-foreground"
            }
          >
            {line}
          </motion.div>
        ))}
        {visibleLines < lines.length && (
          <span className="inline-block w-2 h-4 bg-primary animate-blink" />
        )}
      </div>
    </div>
  );
};

export default TerminalIntro;
