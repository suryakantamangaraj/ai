import { Copy, Heart, Play } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { PromptItem } from "@/data/prompts";
import { useState } from "react";
import { cn } from "@/lib/utils";

const typeColors: Record<string, string> = {
  text: "bg-muted text-muted-foreground",
  image: "bg-primary/20 text-primary",
  video: "bg-accent/20 text-accent-foreground",
  audio: "bg-secondary text-secondary-foreground",
  code: "bg-primary/10 text-primary",
};

const PromptCard = ({ prompt }: { prompt: PromptItem }) => {
  const [copied, setCopied] = useState(false);
  const [likes, setLikes] = useState(prompt.likes);
  const [liked, setLiked] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(prompt.prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleLike = () => {
    setLiked(!liked);
    setLikes((prev) => (liked ? prev - 1 : prev + 1));
  };

  const promptType = prompt.type || "text";

  return (
    <div className="glass-card-glow rounded-xl p-5 transition-all flex flex-col h-full">
      {/* Header: title + type badge */}
      <div className="flex items-start justify-between mb-2">
        <h3 className="font-semibold text-foreground text-sm leading-tight flex-1 mr-2">
          {prompt.title}
        </h3>
        <Badge className={cn("text-[10px] px-2 py-0.5 rounded-md font-medium shrink-0 capitalize", typeColors[promptType])}>
          {promptType}
        </Badge>
      </div>

      {/* Description */}
      <p className="text-xs text-muted-foreground mb-3 line-clamp-2">
        {prompt.description}
      </p>

      {/* Prompt preview block */}
      <div className="bg-secondary/80 rounded-lg p-3 mb-3 flex-1 min-h-0">
        <p className="text-xs text-muted-foreground font-mono line-clamp-4 whitespace-pre-wrap">
          {prompt.prompt}
        </p>
      </div>

      {/* Tags */}
      <div className="flex gap-1.5 flex-wrap mb-3">
        {prompt.tags.slice(0, 3).map((tag) => (
          <Badge key={tag} variant="outline" className="text-[10px] px-2 py-0 text-primary border-primary/30">
            {tag}
          </Badge>
        ))}
      </div>

      {/* Footer: author + actions */}
      <div className="flex items-center justify-between pt-2 border-t border-border/30">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-[9px] text-primary-foreground font-bold">
            {prompt.author?.[0]?.toUpperCase() || "A"}
          </div>
          <span className="text-xs text-muted-foreground">@{prompt.author || "anonymous"}</span>
        </div>
        <div className="flex items-center gap-1">
          <button
            onClick={handleLike}
            className={cn(
              "flex items-center gap-1 text-xs px-1.5 py-1 rounded hover:bg-secondary transition-colors",
              liked ? "text-primary" : "text-muted-foreground"
            )}
          >
            <Heart className={cn("h-3.5 w-3.5", liked && "fill-primary")} />
            {likes}
          </button>
          <button
            onClick={handleCopy}
            className="text-muted-foreground hover:text-foreground p-1 rounded hover:bg-secondary transition-colors"
            title={copied ? "Copied!" : "Copy prompt"}
          >
            <Copy className="h-3.5 w-3.5" />
          </button>
          <button
            className="text-muted-foreground hover:text-foreground p-1 rounded hover:bg-secondary transition-colors"
            title="Run prompt"
          >
            <Play className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PromptCard;
