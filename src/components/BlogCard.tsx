import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import type { BlogPost } from "@/data/blogPosts";

const BlogCard = ({ post }: { post: BlogPost }) => (
  <Link
    to={`/blog/${post.id}`}
    className="group block rounded-lg border border-border bg-card p-6 transition-all hover:border-primary/40 hover:glow-border"
  >
    <div className="flex flex-wrap gap-2 mb-3">
      {post.tags.map((tag) => (
        <span
          key={tag}
          className="px-2 py-0.5 rounded text-xs font-mono bg-secondary text-primary"
        >
          {tag}
        </span>
      ))}
    </div>

    <h3 className="font-mono text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
      {post.title}
    </h3>

    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
      {post.excerpt}
    </p>

    <div className="flex items-center justify-between text-xs text-muted-foreground">
      <div className="flex items-center gap-3">
        <span className="flex items-center gap-1">
          <Calendar size={12} />
          {new Date(post.date).toLocaleDateString("nl-NL", {
            month: "short",
            day: "numeric",
            year: "numeric",
          })}
        </span>
        <span className="flex items-center gap-1">
          <Clock size={12} />
          {post.readTime}
        </span>
      </div>
      <ArrowRight
        size={14}
        className="text-primary opacity-0 group-hover:opacity-100 transition-opacity"
      />
    </div>
  </Link>
);

export default BlogCard;
