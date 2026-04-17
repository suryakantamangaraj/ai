import { useState } from "react";
import { Rss, Tag, Layers, TrendingUp, Clock, Bell } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { prompts } from "@/data/prompts";
import PromptCard from "@/components/PromptCard";
import { Link } from "react-router-dom";

const feedTabs = [
  { id: "all", label: "All", icon: Rss },
  { id: "trending", label: "Trending", icon: TrendingUp },
  { id: "recent", label: "Recent", icon: Clock },
];

// Mock subscribed categories and tags
const subscribedCategories = ["Coding", "Creative", "Marketing"];
const subscribedTags = ["JavaScript", "AI Art", "SEO", "Flutter"];

const Feed = () => {
  const [activeTab, setActiveTab] = useState("all");

  const feedPrompts = prompts.filter((p) => {
    if (activeTab === "trending") return p.likes > 800;
    if (activeTab === "recent") return true;
    return (
      subscribedCategories.includes(p.category) ||
      p.tags?.some((t) => subscribedTags.includes(t))
    );
  });

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <Rss className="h-7 w-7 text-primary" />
          <h1 className="text-2xl font-bold text-foreground">Feed</h1>
        </div>
        <Button variant="outline" size="sm" className="gap-2">
          <Bell className="h-4 w-4" />
          Manage Subscriptions
        </Button>
      </div>

      {/* Subscribed tags/categories */}
      <div className="glass-card-glow rounded-xl p-4 mb-6">
        <div className="flex items-center gap-2 mb-3">
          <Tag className="h-4 w-4 text-muted-foreground" />
          <span className="text-sm font-medium text-foreground">Your Subscriptions</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {subscribedCategories.map((cat) => (
            <Badge key={cat} variant="secondary" className="gap-1">
              <Layers className="h-3 w-3" />
              {cat}
            </Badge>
          ))}
          {subscribedTags.map((tag) => (
            <Badge key={tag} className="bg-primary/20 text-primary border-0 gap-1">
              <Tag className="h-3 w-3" />
              {tag}
            </Badge>
          ))}
        </div>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-1 mb-6">
        {feedTabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={cn(
              "flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-colors",
              activeTab === tab.id
                ? "text-primary bg-primary/10"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            <tab.icon className="h-4 w-4" />
            {tab.label}
          </button>
        ))}
      </div>

      {/* Feed grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {feedPrompts.map((prompt) => (
          <Link key={prompt.id} to={`/prompt/${prompt.id}`}>
            <PromptCard prompt={prompt} />
          </Link>
        ))}
        {feedPrompts.length === 0 && (
          <div className="col-span-full text-center py-16">
            <Rss className="h-12 w-12 text-muted-foreground/30 mx-auto mb-4" />
            <p className="text-muted-foreground">No feed items yet. Subscribe to categories and tags to see content here.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Feed;
