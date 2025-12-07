import { Link } from "react-router-dom";
import { BlogPost } from "@/data/blogPosts";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, User } from "lucide-react";

interface BlogCardProps {
  post: BlogPost;
  index: number;
}

const BlogCard = ({ post, index }: BlogCardProps) => {
  return (
    <article 
      className="group bg-card rounded-xl overflow-hidden shadow-soft hover:shadow-hover transition-all duration-300 animate-fade-up"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <Link to={`/blog/${post.id}`} className="block">
        <div className="relative overflow-hidden aspect-[16/10]">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 bg-primary/90 text-primary-foreground text-xs font-semibold rounded-full">
              {post.category}
            </span>
          </div>
        </div>
      </Link>

      <div className="p-6">
        <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
          <span className="flex items-center gap-1">
            <User className="h-3 w-3" />
            {post.author}
          </span>
          <span className="flex items-center gap-1">
            <Calendar className="h-3 w-3" />
            {post.date}
          </span>
        </div>

        <Link to={`/blog/${post.id}`}>
          <h3 className="font-display text-xl font-semibold mb-2 text-card-foreground group-hover:text-primary transition-colors line-clamp-2">
            {post.title}
          </h3>
        </Link>

        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {post.excerpt}
        </p>

        <Link to={`/blog/${post.id}`}>
          <Button variant="ghost" className="group/btn p-0 h-auto font-semibold text-primary hover:bg-transparent">
            Read More 
            <ArrowRight className="h-4 w-4 ml-1 transition-transform group-hover/btn:translate-x-1" />
          </Button>
        </Link>
      </div>
    </article>
  );
};

export default BlogCard;
