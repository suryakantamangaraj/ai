import { useState } from "react";
import { Search, Github, Star, Terminal, AppWindow, Puzzle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { prompts, promptCategories, industryTags } from "@/data/prompts";
import PromptCard from "@/components/PromptCard";
import { cn } from "@/lib/utils";

const galleryNav = ["Prompts", "Skills", "Taste", "Workflows", "Categories", "Tags"];

const PromptsGallery = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeNav, setActiveNav] = useState("Prompts");

  const filtered = prompts.filter((p) => {
    const matchesCat =
      activeCategory === "All" || p.category === activeCategory;
    const matchesSearch =
      !searchQuery ||
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="min-h-[calc(100vh-4rem)]">
      {/* Sub nav */}
      <div className="border-b border-border/50 bg-background/50 backdrop-blur-sm">
        <div className="container flex items-center gap-1 overflow-x-auto py-2">
          {galleryNav.map((item) => (
            <button
              key={item}
              onClick={() => setActiveNav(item)}
              className={cn(
                "px-4 py-2 rounded-md text-sm font-medium whitespace-nowrap transition-colors",
                activeNav === item
                  ? "text-primary bg-primary/10"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <div className="container py-12">
        {/* Hero */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            The Free Platform for{" "}
            <span className="text-gradient-purple">AI Prompts</span>
          </h1>
          <p className="text-muted-foreground mb-6">
            Discover, share, and use the best prompts for any AI model.
          </p>

          {/* Search */}
          <div className="relative max-w-lg mx-auto mb-8">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              placeholder="Search prompts..."
              className="pl-12 h-12 rounded-xl bg-secondary border-border"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* Industry tags */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {industryTags.map((tag) => (
              <Badge
                key={tag}
                variant="outline"
                className="px-3 py-1.5 cursor-pointer hover:bg-secondary transition-colors"
              >
                {tag}
              </Badge>
            ))}
          </div>

          {/* Client buttons */}
          <div className="flex justify-center gap-3 mb-8">
            <Button variant="outline" size="sm" className="gap-2">
              <Terminal className="h-4 w-4" /> Command Line
            </Button>
            <Button variant="outline" size="sm" className="gap-2">
              <AppWindow className="h-4 w-4" /> App Store
            </Button>
            <Button variant="outline" size="sm" className="gap-2">
              <Puzzle className="h-4 w-4" /> Extension
            </Button>
          </div>

          {/* Sponsor bar */}
          <div className="flex items-center justify-center gap-6 text-muted-foreground text-xs">
            <span>Trusted by creators worldwide</span>
            <span className="flex items-center gap-1">
              <Github className="h-3.5 w-3.5" />
              <Star className="h-3 w-3 fill-current" /> 12.4k
            </span>
          </div>
        </div>

        {/* Category filter */}
        <div className="flex gap-2 overflow-x-auto pb-4 mb-6">
          {promptCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "px-4 py-1.5 rounded-full text-sm whitespace-nowrap transition-colors",
                activeCategory === cat
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-muted-foreground hover:text-foreground"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Prompt list */}
        <div className="space-y-4 max-w-3xl mx-auto">
          {filtered.map((prompt) => (
            <PromptCard key={prompt.id} prompt={prompt} />
          ))}
          {filtered.length === 0 && (
            <p className="text-center text-muted-foreground py-12">
              No prompts found. Try a different search or category.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default PromptsGallery;
