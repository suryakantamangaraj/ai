import { Copy, Heart } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { PromptItem } from "@/data/prompts";
import { useState } from "react";

const PromptCard = ({ prompt }: { prompt: PromptItem }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(prompt.prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="glass-card-glow rounded-lg p-5 transition-all">
      <div className="flex items-start justify-between mb-3">
        <h3 className="font-semibold text-foreground">{prompt.title}</h3>
        <div className="flex items-center gap-1 text-muted-foreground text-sm">
          <Heart className="h-3.5 w-3.5" />
          {prompt.likes}
        </div>
      </div>
      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
        {prompt.description}
      </p>
      <div className="flex items-center justify-between">
        <div className="flex gap-1.5 flex-wrap">
          {prompt.tags.slice(0, 3).map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
        <Button
          variant="ghost"
          size="sm"
          onClick={handleCopy}
          className="text-muted-foreground hover:text-primary"
        >
          <Copy className="h-4 w-4 mr-1" />
          {copied ? "Copied!" : "Copy"}
        </Button>
      </div>
    </div>
  );
};

export default PromptCard;
