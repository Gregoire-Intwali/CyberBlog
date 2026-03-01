import type { BlogPost } from "@/data/blogPosts";
import { Terminal } from "lucide-react";

const SystemLog = ({ posts }: { posts: BlogPost[] }) => (
  <div className="rounded-lg border border-border bg-card p-6">
    <div className="flex items-center gap-2 mb-4 font-mono text-sm text-primary">
      <Terminal size={16} />
      <span>systeem.log — Tijdlijn</span>
    </div>
    <div className="relative pl-4 border-l border-border space-y-6">
      {posts.map((post) => (
        <div key={post.id} className="relative">
          <span className="absolute -left-[21px] top-1 w-2.5 h-2.5 rounded-full bg-primary" />
          <p className="text-xs font-mono text-muted-foreground mb-1">
            {new Date(post.date).toLocaleDateString("nl-NL", {
              month: "short",
              day: "numeric",
            })}
          </p>
          <p className="text-sm text-foreground">{post.title}</p>
        </div>
      ))}
    </div>
  </div>
);

export default SystemLog;
