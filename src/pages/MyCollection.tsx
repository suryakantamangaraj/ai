import { useState } from "react";
import { Bookmark, BookOpen, Star, Trash2, Search, FolderOpen } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { prompts } from "@/data/prompts";
import PromptCard from "@/components/PromptCard";
import { Link } from "react-router-dom";

const tabs = [
  { id: "prompts", label: "Saved Prompts", icon: Bookmark },
  { id: "learning", label: "Learning Items", icon: BookOpen },
  { id: "favorites", label: "Favorites", icon: Star },
];

// Mock saved data
const savedPromptIds = ["1", "4", "8", "11"];
const savedLearningIds = ["introduction", "basics", "chain-of-thought"];

const MyCollection = () => {
  const [activeTab, setActiveTab] = useState("prompts");
  const [searchQuery, setSearchQuery] = useState("");

  const savedPrompts = prompts.filter((p) => savedPromptIds.includes(p.id));
  const filteredPrompts = savedPrompts.filter(
    (p) =>
      !searchQuery ||
      p.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="flex items-center gap-3 mb-6">
        <FolderOpen className="h-7 w-7 text-primary" />
        <h1 className="text-2xl font-bold text-foreground">My Collection</h1>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-1 border-b border-border/50 mb-6">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={cn(
              "flex items-center gap-2 px-4 py-3 text-sm font-medium border-b-2 transition-colors -mb-px",
              activeTab === tab.id
                ? "border-primary text-primary"
                : "border-transparent text-muted-foreground hover:text-foreground"
            )}
          >
            <tab.icon className="h-4 w-4" />
            {tab.label}
          </button>
        ))}
      </div>

      {/* Search */}
      <div className="relative max-w-md mb-6">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search your collection..."
          className="pl-9 bg-secondary border-border"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {activeTab === "prompts" && (
        <div>
          {filteredPrompts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
              {filteredPrompts.map((prompt) => (
                <div key={prompt.id} className="relative group">
                  <Link to={`/prompt/${prompt.id}`}>
                    <PromptCard prompt={prompt} />
                  </Link>
                  <button className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 p-1.5 rounded-md bg-destructive/10 text-destructive hover:bg-destructive/20 transition-all">
                    <Trash2 className="h-3.5 w-3.5" />
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <Bookmark className="h-12 w-12 text-muted-foreground/30 mx-auto mb-4" />
              <p className="text-muted-foreground">No saved prompts yet.</p>
              <Button variant="outline" size="sm" className="mt-4" asChild>
                <Link to="/prompts-gallery">Browse Prompts</Link>
              </Button>
            </div>
          )}
        </div>
      )}

      {activeTab === "learning" && (
        <div className="space-y-3">
          {savedLearningIds.map((id) => (
            <div
              key={id}
              className="glass-card-glow rounded-xl p-4 flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <BookOpen className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-sm font-medium text-foreground capitalize">
                    {id.replace(/-/g, " ")}
                  </p>
                  <p className="text-xs text-muted-foreground">Saved from Learn section</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="secondary" className="text-xs">Learning</Badge>
                <button className="p-1.5 rounded-md text-muted-foreground hover:text-destructive hover:bg-destructive/10 transition-colors">
                  <Trash2 className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {activeTab === "favorites" && (
        <div className="text-center py-16">
          <Star className="h-12 w-12 text-muted-foreground/30 mx-auto mb-4" />
          <p className="text-muted-foreground">No favorites yet. Like prompts to see them here.</p>
        </div>
      )}
    </div>
  );
};

export default MyCollection;
