import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { ArrowUp, Download, Share2, Copy, Play, Flag, Bookmark, GitPullRequest, ChevronLeft } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { prompts } from "@/data/prompts";
import { cn } from "@/lib/utils";
import PromptCard from "@/components/PromptCard";

const PromptDetail = () => {
  const { id } = useParams();
  const prompt = prompts.find((p) => p.id === id);
  const [activeTab, setActiveTab] = useState<"content" | "versions">("content");
  const [votes, setVotes] = useState(prompt?.likes || 0);
  const [voted, setVoted] = useState(false);
  const [copied, setCopied] = useState(false);

  if (!prompt) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <p className="text-muted-foreground">Prompt not found.</p>
      </div>
    );
  }

  const handleVote = () => {
    setVoted(!voted);
    setVotes((v) => (voted ? v - 1 : v + 1));
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(prompt.prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const relatedPrompts = prompts
    .filter((p) => p.id !== prompt.id && p.category === prompt.category)
    .slice(0, 3);

  const promptType = prompt.type || "text";

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Back link */}
      <Link
        to="/prompts-gallery"
        className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-6 transition-colors"
      >
        <ChevronLeft className="h-4 w-4" />
        Back to Prompts
      </Link>

      {/* Header */}
      <div className="flex items-start gap-4 mb-4">
        {/* Upvote */}
        <button
          onClick={handleVote}
          className={cn(
            "flex flex-col items-center gap-1 px-3 py-2 rounded-lg border transition-colors shrink-0",
            voted
              ? "border-primary bg-primary/10 text-primary"
              : "border-border text-muted-foreground hover:border-primary/50"
          )}
        >
          <ArrowUp className="h-5 w-5" />
          <span className="text-sm font-semibold">{votes}</span>
        </button>

        <div className="flex-1 min-w-0">
          <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
            {prompt.title}
          </h1>
          <div className="flex items-center gap-3 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-xs text-primary-foreground font-bold">
                {prompt.author?.[0]?.toUpperCase() || "A"}
              </div>
              <span>@{prompt.author || "anonymous"}</span>
            </div>
            <span>•</span>
            <span>about 2 hours ago</span>
          </div>
        </div>
      </div>

      {/* Tags */}
      <div className="flex items-center gap-2 mb-6 flex-wrap">
        <Badge variant="secondary" className="text-xs">{prompt.category}</Badge>
        <span className="text-muted-foreground">•</span>
        {prompt.tags.map((tag) => (
          <Badge key={tag} className="bg-primary/20 text-primary border-0 text-xs">
            {tag}
          </Badge>
        ))}
        <Badge variant="outline" className="capitalize text-xs">{promptType}</Badge>
      </div>

      {/* Tabs + Actions */}
      <div className="flex items-center justify-between mb-4 border-b border-border/50 pb-3">
        <div className="flex items-center gap-1">
          <button
            onClick={() => setActiveTab("content")}
            className={cn(
              "px-4 py-2 rounded-md text-sm font-medium transition-colors",
              activeTab === "content"
                ? "bg-secondary text-foreground"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            Content
          </button>
          <button
            onClick={() => setActiveTab("versions")}
            className={cn(
              "px-4 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-2",
              activeTab === "versions"
                ? "bg-secondary text-foreground"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            Versions
            <span className="bg-muted px-1.5 py-0.5 rounded text-xs">1</span>
          </button>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="gap-2">
            <Bookmark className="h-4 w-4" />
            Add to Collection
          </Button>
          <Button size="sm" className="gap-2 bg-emerald-600 hover:bg-emerald-700 text-white">
            <GitPullRequest className="h-4 w-4" />
            Propose Changes
          </Button>
        </div>
      </div>

      {/* Content */}
      {activeTab === "content" && (
        <div>
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-lg font-semibold text-foreground">Content</h2>
            <div className="flex items-center gap-1">
              <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-foreground">
                <Download className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-foreground">
                <Share2 className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 text-muted-foreground hover:text-foreground"
                onClick={handleCopy}
                title={copied ? "Copied!" : "Copy"}
              >
                <Copy className="h-4 w-4" />
              </Button>
              <Button size="sm" className="gap-2 bg-primary hover:bg-primary/90">
                <Play className="h-4 w-4" />
                Run
              </Button>
            </div>
          </div>

          <div className="bg-secondary/60 rounded-xl p-6 border border-border/30">
            <pre className="text-sm text-muted-foreground font-mono whitespace-pre-wrap leading-relaxed">
              {prompt.prompt}
            </pre>
          </div>

          <div className="flex justify-end mt-4">
            <button className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors">
              <Flag className="h-3.5 w-3.5" />
              Report
            </button>
          </div>
        </div>
      )}

      {activeTab === "versions" && (
        <div className="bg-secondary/60 rounded-xl p-6 border border-border/30">
          <div className="flex items-center justify-between py-3 border-b border-border/30">
            <div>
              <p className="text-sm font-medium text-foreground">Version 1 (Current)</p>
              <p className="text-xs text-muted-foreground">Created by @{prompt.author || "anonymous"} • 2 hours ago</p>
            </div>
            <Badge variant="secondary" className="text-xs">Latest</Badge>
          </div>
          <p className="text-sm text-muted-foreground mt-4">No previous versions available.</p>
        </div>
      )}

      {/* Related Prompts */}
      {relatedPrompts.length > 0 && (
        <div className="mt-12">
          <h2 className="text-xl font-bold text-foreground mb-4">Related Prompts</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {relatedPrompts.map((rp) => (
              <Link key={rp.id} to={`/prompt/${rp.id}`}>
                <PromptCard prompt={rp} />
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default PromptDetail;
