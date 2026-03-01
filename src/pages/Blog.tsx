import { useState } from "react";
import { motion } from "framer-motion";
import { blogPosts, categories, allTags } from "@/data/blogPosts";
import BlogCard from "@/components/BlogCard";

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const filtered = blogPosts.filter((p) => {
    if (selectedCategory && p.category !== selectedCategory) return false;
    if (selectedTag && !p.tags.includes(selectedTag)) return false;
    return true;
  });

  return (
    <div className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <p className="font-mono text-sm text-primary mb-2 tracking-widest">// blog</p>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground">
            Alle Berichten
          </h1>
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_280px] gap-10">
          {/* Berichten */}
          <div className="grid sm:grid-cols-2 gap-6">
            {filtered.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
            {filtered.length === 0 && (
              <p className="text-muted-foreground font-mono text-sm col-span-2">
                Geen berichten gevonden met de geselecteerde filters.
              </p>
            )}
          </div>

          {/* Zijbalk */}
          <aside className="space-y-8">
            {/* Categorieën */}
            <div className="rounded-lg border border-border bg-card p-5">
              <h3 className="font-mono text-sm text-primary mb-4">Categorieën</h3>
              <div className="space-y-2">
                <button
                  onClick={() => setSelectedCategory(null)}
                  className={`block text-sm font-mono transition-colors ${
                    !selectedCategory ? "text-primary" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  Alles
                </button>
                {categories.map((c) => (
                  <button
                    key={c}
                    onClick={() => setSelectedCategory(c === selectedCategory ? null : c)}
                    className={`block text-sm font-mono transition-colors ${
                      selectedCategory === c ? "text-primary" : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>

            {/* Tags */}
            <div className="rounded-lg border border-border bg-card p-5">
              <h3 className="font-mono text-sm text-primary mb-4">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {allTags.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setSelectedTag(tag === selectedTag ? null : tag)}
                    className={`px-2 py-1 rounded text-xs font-mono transition-colors ${
                      selectedTag === tag
                        ? "bg-primary text-primary-foreground"
                        : "bg-secondary text-secondary-foreground hover:bg-primary/20"
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>

            {/* Recent */}
            <div className="rounded-lg border border-border bg-card p-5">
              <h3 className="font-mono text-sm text-primary mb-4">Recent</h3>
              <div className="space-y-3">
                {blogPosts.slice(0, 4).map((p) => (
                  <a
                    key={p.id}
                    href={`/blog/${p.id}`}
                    className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {p.title}
                  </a>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default Blog;
