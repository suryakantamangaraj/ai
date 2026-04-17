import { Link } from "react-router-dom";
import { BookOpen, LayoutGrid, ArrowRight, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Prompts = () => {
  return (
    <div className="container py-20">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <Badge
          variant="secondary"
          className="bg-primary/10 text-primary border-primary/20 px-4 py-1.5 mb-6"
        >
          <Sparkles className="h-3.5 w-3.5 mr-1.5" />
          Prompt Resources
        </Badge>
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
          AI <span className="text-gradient-purple">Prompts</span>
        </h1>
        <p className="text-lg text-muted-foreground">
          Master the art of prompt engineering. Learn techniques, explore curated
          prompts, and level up your AI interactions.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
        {/* Learn Card */}
        <Link
          to="/prompts-learn"
          className="glass-card-glow cosmic-glow-strong rounded-xl p-8 transition-all group"
        >
          <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
            <BookOpen className="h-7 w-7 text-primary" />
          </div>
          <h2 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
            Learn Prompting
          </h2>
          <p className="text-muted-foreground text-sm mb-4">
            A comprehensive guide to prompt engineering. Learn everything from
            basics to advanced techniques like Chain-of-Thought and
            Tree-of-Thoughts.
          </p>
          <span className="flex items-center gap-1 text-sm text-primary font-medium">
            Start learning <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </span>
        </Link>

        {/* Gallery Card */}
        <Link
          to="/prompts-gallery"
          className="glass-card-glow cosmic-glow-strong rounded-xl p-8 transition-all group"
        >
          <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
            <LayoutGrid className="h-7 w-7 text-primary" />
          </div>
          <h2 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
            Prompt Gallery
          </h2>
          <p className="text-muted-foreground text-sm mb-4">
            Browse a curated collection of ready-to-use prompts for any use
            case. Copy, customize, and use them with your favorite AI models.
          </p>
          <span className="flex items-center gap-1 text-sm text-primary font-medium">
            Browse prompts <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Prompts;
