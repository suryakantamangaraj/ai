import { useState } from "react";
import { Search, ChevronDown, Users, Bug, Plus } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { prompts, promptCategories, industryTags, promptTypes, categorySubItems } from "@/data/prompts";
import PromptCard from "@/components/PromptCard";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

const galleryNav = ["Prompts", "Skills", "Taste", "Workflows", "Categories", "Tags"];

const PromptsGallery = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeNav, setActiveNav] = useState("Prompts");
  const [sortBy, setSortBy] = useState("newest");
  const [typeFilter, setTypeFilter] = useState("all");
  const [tagSearch, setTagSearch] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [communityOpen, setCommunityOpen] = useState(false);
  const [categorySearch, setCategorySearch] = useState("");

  const filteredTags = industryTags.filter((tag) =>
    tag.toLowerCase().includes(tagSearch.toLowerCase())
  );

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const filtered = prompts.filter((p) => {
    const matchesCat = activeCategory === "All" || p.category === activeCategory;
    const matchesSearch =
      !searchQuery ||
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTags =
      selectedTags.length === 0 || selectedTags.some((t) => p.tags?.includes(t));
    const matchesType =
      typeFilter === "all" || p.type === typeFilter;
    return matchesCat && matchesSearch && matchesTags && matchesType;
  });

  // Filter categories for the dropdown search
  const filteredCategories = promptCategories.filter((cat) =>
    cat.toLowerCase().includes(categorySearch.toLowerCase())
  );

  return (
    <div className="flex min-h-[calc(100vh-4rem)]">
      {/* Sidebar */}
      <aside className="hidden lg:flex flex-col w-72 border-r border-border/50 bg-background/50 backdrop-blur-sm h-[calc(100vh-4rem)] sticky top-16">
        {/* Fixed: Search */}
        <div className="shrink-0 p-4 border-b border-border/50">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search prompts..."
              className="pl-9 h-9 bg-secondary border-border text-sm"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Scrollable: Type, Category, Sort, Tags */}
        <div className="flex-1 overflow-y-auto min-h-0 p-4 space-y-5">
          {/* Type */}
          <div>
            <h3 className="text-xs font-semibold text-foreground mb-2">Type</h3>
            <Select value={typeFilter} onValueChange={setTypeFilter}>
              <SelectTrigger className="bg-secondary border-border">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {promptTypes.map((t) => (
                  <SelectItem key={t.value} value={t.value}>{t.label}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Category with search + subcategories */}
          <div>
            <h3 className="text-xs font-semibold text-foreground mb-2">Category</h3>
            <div className="relative mb-2">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground" />
              <Input
                placeholder="Search categories..."
                className="pl-9 h-8 bg-secondary border-border text-xs"
                value={categorySearch}
                onChange={(e) => setCategorySearch(e.target.value)}
              />
            </div>
            <div className="space-y-0.5 max-h-48 overflow-y-auto">
              {filteredCategories.map((cat) => (
                <div key={cat}>
                  <button
                    onClick={() => setActiveCategory(cat)}
                    className={cn(
                      "w-full text-left px-3 py-1.5 rounded-md text-sm transition-colors",
                      activeCategory === cat
                        ? "text-primary bg-primary/10"
                        : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                    )}
                  >
                    {cat}
                  </button>
                  {/* Subcategories */}
                  {activeCategory === cat && cat !== "All" && categorySubItems[cat] && (
                    <div className="ml-4 mt-0.5 space-y-0.5">
                      {categorySubItems[cat].map((sub) => (
                        <button
                          key={sub}
                          className="w-full text-left px-2 py-1 rounded text-xs text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-colors"
                        >
                          {sub}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Sort by */}
          <div>
            <h3 className="text-xs font-semibold text-foreground mb-2">Sort by</h3>
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="bg-secondary border-border">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="newest">Newest</SelectItem>
                <SelectItem value="popular">Most Popular</SelectItem>
                <SelectItem value="alphabetical">Alphabetical</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Tags */}
          <div>
            <h3 className="text-xs font-semibold text-foreground mb-2">Tags</h3>
            <div className="relative mb-3">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground" />
              <Input
                placeholder="Search tags..."
                className="pl-9 h-8 bg-secondary border-border text-xs"
                value={tagSearch}
                onChange={(e) => setTagSearch(e.target.value)}
              />
            </div>
            <div className="flex flex-wrap gap-1.5 max-h-40 overflow-y-auto">
              {filteredTags.map((tag) => (
                <Badge
                  key={tag}
                  variant="outline"
                  onClick={() => toggleTag(tag)}
                  className={cn(
                    "px-2 py-0.5 text-xs cursor-pointer transition-colors",
                    selectedTags.includes(tag)
                      ? "bg-primary/20 border-primary/50 text-primary"
                      : "hover:bg-secondary"
                  )}
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        {/* Fixed: Community + Contribute */}
        <div className="shrink-0 p-4 pt-2 border-t border-border/50 space-y-2">
          <Collapsible open={communityOpen} onOpenChange={setCommunityOpen}>
            <CollapsibleTrigger asChild>
              <Button variant="ghost" className="w-full justify-between text-sm text-muted-foreground hover:text-foreground">
                <span className="flex items-center gap-2"><Users className="h-4 w-4" /> Community</span>
                <ChevronDown className={cn("h-4 w-4 transition-transform", communityOpen && "rotate-180")} />
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent className="mt-1 space-y-1">
              <button className="flex items-center gap-2 w-full px-3 py-2 rounded-md text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors">
                <Bug className="h-4 w-4" /> Report an Issue
              </button>
              <button className="flex items-center gap-2 w-full px-3 py-2 rounded-md text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors">
                <Plus className="h-4 w-4" /> Contribute
              </button>
            </CollapsibleContent>
          </Collapsible>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-1 p-6 lg:p-8 overflow-auto">
        {/* Sub nav */}
        <div className="flex items-center gap-1 overflow-x-auto mb-8">
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

        {/* Prompt grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 max-w-6xl">
          {filtered.map((prompt) => (
            <Link key={prompt.id} to={`/prompt/${prompt.id}`}>
              <PromptCard prompt={prompt} />
            </Link>
          ))}
          {filtered.length === 0 && (
            <p className="text-center text-muted-foreground py-12 col-span-full">
              No prompts found. Try a different search or category.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default PromptsGallery;
