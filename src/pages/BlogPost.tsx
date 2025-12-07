import { useParams, Link } from "react-router-dom";
import { blogPosts } from "@/data/blogPosts";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, User, Facebook, Twitter, Linkedin, Link2, Share2 } from "lucide-react";
import BlogCard from "@/components/blog/BlogCard";
import { useToast } from "@/hooks/use-toast";

const BlogPost = () => {
  const { id } = useParams();
  const { toast } = useToast();
  
  const post = blogPosts.find((p) => p.id === id);
  const relatedPosts = blogPosts.filter((p) => p.id !== id && p.category === post?.category).slice(0, 3);
  const otherPosts = relatedPosts.length < 3 
    ? [...relatedPosts, ...blogPosts.filter((p) => p.id !== id && p.category !== post?.category).slice(0, 3 - relatedPosts.length)]
    : relatedPosts;

  if (!post) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-3xl font-bold mb-4">Post Not Found</h1>
          <Link to="/">
            <Button variant="outline">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Blog
            </Button>
          </Link>
        </div>
      </main>
    );
  }

  const shareUrl = window.location.href;
  const shareTitle = post.title;

  const handleShare = (platform: string) => {
    let url = "";
    switch (platform) {
      case "facebook":
        url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;
        break;
      case "twitter":
        url = `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareTitle)}`;
        break;
      case "linkedin":
        url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`;
        break;
      case "copy":
        navigator.clipboard.writeText(shareUrl);
        toast({
          title: "Link copied!",
          description: "The article link has been copied to your clipboard.",
        });
        return;
    }
    window.open(url, "_blank", "width=600,height=400");
  };

  // Generate full article content based on the post
  const fullContent = `
    <p class="text-lg leading-relaxed mb-6">${post.excerpt}</p>
    
    <h2 class="font-display text-2xl font-bold mb-4 text-foreground">Understanding the Basics</h2>
    <p class="mb-6">When it comes to ${post.category.toLowerCase()}, there's a wealth of knowledge that every pet owner should possess. Whether you're a first-time pet parent or a seasoned animal lover, staying informed about the latest care techniques and best practices is essential for ensuring the health and happiness of your furry, feathered, or scaled companions.</p>
    
    <p class="mb-6">Our team of veterinary experts and animal behaviorists have compiled comprehensive insights to help you navigate the wonderful journey of pet ownership. From nutrition tips to behavioral guidance, we cover everything you need to know.</p>
    
    <h2 class="font-display text-2xl font-bold mb-4 text-foreground">Key Takeaways</h2>
    <ul class="list-disc list-inside mb-6 space-y-2">
      <li>Regular veterinary check-ups are crucial for early detection of health issues</li>
      <li>Proper nutrition tailored to your pet's specific needs promotes longevity</li>
      <li>Mental stimulation and physical exercise are equally important</li>
      <li>Creating a safe and comfortable environment reduces stress and anxiety</li>
      <li>Understanding your pet's unique personality helps strengthen your bond</li>
    </ul>
    
    <h2 class="font-display text-2xl font-bold mb-4 text-foreground">Expert Recommendations</h2>
    <p class="mb-6">According to leading animal health experts, the foundation of exceptional pet care lies in consistency and attention to detail. Small daily habits, such as regular grooming, scheduled feeding times, and dedicated play sessions, contribute significantly to your pet's overall well-being.</p>
    
    <blockquote class="border-l-4 border-primary pl-6 py-2 my-8 italic text-muted-foreground bg-muted/30 rounded-r-lg">
      "The bond between humans and animals is one of nature's most beautiful relationships. Nurturing this connection through proper care and understanding creates a lifetime of joy and companionship."
    </blockquote>
    
    <h2 class="font-display text-2xl font-bold mb-4 text-foreground">Moving Forward</h2>
    <p class="mb-6">As you continue your journey as a pet owner, remember that every animal is unique. What works for one pet may not work for another. Take the time to observe, learn, and adapt your care routine to meet the specific needs of your beloved companion.</p>
    
    <p>We hope this guide has provided valuable insights into ${post.category.toLowerCase()}. Stay tuned for more expert advice and heartwarming stories from the PetHaven community!</p>
  `;

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative">
        <div className="h-[400px] md:h-[500px] relative overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        </div>
        
        <div className="container mx-auto px-4 relative -mt-48 z-10">
          <div className="max-w-3xl mx-auto">
            <Link to="/" className="inline-flex items-center text-primary-foreground/80 hover:text-primary-foreground mb-6 transition-colors">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Blog
            </Link>
            
            <span className="inline-block px-4 py-1.5 bg-primary text-primary-foreground text-sm font-semibold rounded-full mb-4">
              {post.category}
            </span>
            
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
              <span className="flex items-center gap-2">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <User className="h-5 w-5 text-primary" />
                </div>
                <span className="font-medium">{post.author}</span>
              </span>
              <span className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                {post.date}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Social Sharing */}
            <div className="flex items-center gap-4 mb-8 pb-8 border-b border-border">
              <span className="flex items-center gap-2 text-sm text-muted-foreground">
                <Share2 className="h-4 w-4" />
                Share:
              </span>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  className="h-9 w-9 rounded-full hover:bg-[#1877F2] hover:text-white hover:border-[#1877F2] transition-colors"
                  onClick={() => handleShare("facebook")}
                >
                  <Facebook className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="h-9 w-9 rounded-full hover:bg-[#1DA1F2] hover:text-white hover:border-[#1DA1F2] transition-colors"
                  onClick={() => handleShare("twitter")}
                >
                  <Twitter className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="h-9 w-9 rounded-full hover:bg-[#0A66C2] hover:text-white hover:border-[#0A66C2] transition-colors"
                  onClick={() => handleShare("linkedin")}
                >
                  <Linkedin className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="h-9 w-9 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
                  onClick={() => handleShare("copy")}
                >
                  <Link2 className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Article Content */}
            <article 
              className="prose prose-lg max-w-none text-foreground"
              dangerouslySetInnerHTML={{ __html: fullContent }}
            />

            {/* Bottom Share */}
            <div className="flex items-center justify-center gap-4 mt-12 pt-8 border-t border-border">
              <span className="text-muted-foreground">Enjoyed this article? Share it!</span>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="rounded-full"
                  onClick={() => handleShare("facebook")}
                >
                  <Facebook className="h-4 w-4 mr-2" />
                  Share
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="rounded-full"
                  onClick={() => handleShare("twitter")}
                >
                  <Twitter className="h-4 w-4 mr-2" />
                  Tweet
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {otherPosts.length > 0 && (
        <section className="py-12 md:py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-center mb-8">
              Related Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {otherPosts.map((relatedPost, index) => (
                <BlogCard key={relatedPost.id} post={relatedPost} index={index} />
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
};

export default BlogPost;