import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen } from "lucide-react";
import { blogPosts } from "@/data/blogPosts";
import TerminalIntro from "@/components/TerminalIntro";
import BlogCard from "@/components/BlogCard";
import SystemLog from "@/components/SystemLog";

const Index = () => {
  const latestPosts = blogPosts.slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center grid-overlay">
        <div className="absolute inset-0 scanline" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <p className="font-mono text-sm text-primary mb-4 tracking-widest uppercase">
                // Gregoire's Blog
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                <span className="text-foreground">Cybersecurity</span>
                <br />
                <span className="text-primary text-glow">Werkplekleren Blog</span>
              </h1>
              <p className="text-muted-foreground text-lg mb-8 max-w-md">
                Het documenteren van mijn reis in een cybersecurity startup — van SaaS Apps bouwen tot penetratietesten.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/blog"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-primary text-primary-foreground font-mono text-sm font-semibold hover:opacity-90 transition-opacity glow-border"
                >
                  <BookOpen size={16} />
                  Lees Mijn Blog
                </Link>
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-md border border-border text-foreground font-mono text-sm font-semibold hover:border-primary/50 transition-colors"
                >
                  Over Mij
                  <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="hidden lg:block"
            >
              <TerminalIntro />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 border-t border-border">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl">
            <h2 className="font-mono text-sm text-primary mb-2 tracking-widest">
              // over_deze_blog
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Ik ben een fullstack developper die studeert en tech-enthousiasteling die momenteel stage loopt
              bij een cybersecurity startup. Deze blog documenteert mijn leerreis — van
              technische verdiepingen en praktijkprojecten tot reflecties over professionele
              groei in de infosec-industrie.
            </p>
          </div>
        </div>
      </section>

      {/* Latest Posts */}
      <section className="py-20 border-t border-border">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between mb-10">
            <h2 className="font-mono text-sm text-primary tracking-widest">
              // laatste_berichten
            </h2>
            <Link
              to="/blog"
              className="text-sm text-muted-foreground hover:text-primary font-mono transition-colors flex items-center gap-1"
            >
              Bekijk alles <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {latestPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>

      {/* System Log */}
      <section className="py-20 border-t border-border">
        <div className="container mx-auto px-6">
          <h2 className="font-mono text-sm text-primary tracking-widest mb-8">
            // systeem_log
          </h2>
          <div className="max-w-md">
            <SystemLog posts={blogPosts} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
