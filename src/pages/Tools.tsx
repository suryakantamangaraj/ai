import { useState } from "react";
import { Search, Star } from "lucide-react";
import * as LucideIcons from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { tools, toolCategories, featuredLabels } from "@/data/tools";
import ToolCard from "@/components/ToolCard";
import { cn } from "@/lib/utils";

const Tools = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFeatured, setActiveFeatured] = useState(0);

  const filtered = tools.filter((t) => {
    const matchesCategory =
      activeCategory === "all" || t.category === activeCategory;
    const matchesSearch =
      !searchQuery ||
      t.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredTools = tools.filter((t) => t.featured);
  const newTools = tools.filter((t) => t.isNew);
  const paidTools = tools.filter((t) => t.price !== "Free");

  return (
    <div className="flex min-h-[calc(100vh-4rem)]">
      {/* Sidebar */}
      <aside className="hidden lg:flex flex-col w-64 border-r border-border/50 bg-background/50 backdrop-blur-sm p-4 gap-1">
        <div className="relative mb-4">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search categories..."
            className="pl-9 h-9 bg-secondary border-border text-sm"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        {toolCategories.map((cat) => {
          const IconComp = (LucideIcons as any)[cat.icon];
          return (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={cn(
                "flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors text-left",
                activeCategory === cat.id
                  ? "bg-primary/10 text-primary font-medium"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary"
              )}
            >
              {IconComp && <IconComp className="h-4 w-4" />}
              {cat.label}
            </button>
          );
        })}
      </aside>

      {/* Main */}
      <div className="flex-1 p-6 lg:p-8 overflow-auto">
        {/* Featured carousel */}
        <div className="mb-8">
          <div className="flex gap-2 mb-4">
            {featuredLabels.map((label, i) => (
              <button
                key={label}
                onClick={() => setActiveFeatured(i)}
                className={cn(
                  "px-4 py-1.5 rounded-full text-sm transition-colors",
                  activeFeatured === i
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-muted-foreground hover:text-foreground"
                )}
              >
                {label}
              </button>
            ))}
          </div>
          {featuredTools[activeFeatured] && (
            <div className="glass-card cosmic-glow rounded-xl p-6 flex items-center gap-6">
              <div className="text-5xl w-16 h-16 flex items-center justify-center rounded-xl bg-secondary">
                {featuredTools[activeFeatured].icon}
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-foreground">
                  {featuredTools[activeFeatured].name}
                </h3>
                <p className="text-muted-foreground text-sm mt-1">
                  {featuredTools[activeFeatured].description}
                </p>
                <div className="flex items-center gap-2 mt-2">
                  <Badge variant="secondary">{featuredTools[activeFeatured].platform}</Badge>
                  <span className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Star className="h-3.5 w-3.5 fill-primary text-primary" />
                    {featuredTools[activeFeatured].stars.toLocaleString()}
                  </span>
                </div>
              </div>
              <Button>View</Button>
            </div>
          )}
        </div>

        {/* Mobile category filter */}
        <div className="lg:hidden flex gap-2 overflow-x-auto pb-4 mb-4 -mx-2 px-2">
          {toolCategories.slice(0, 6).map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={cn(
                "px-3 py-1.5 rounded-full text-xs whitespace-nowrap transition-colors",
                activeCategory === cat.id
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-muted-foreground"
              )}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Best New Apps */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-foreground mb-4">
            {activeCategory === "all" ? "Best New Apps" : toolCategories.find(c => c.id === activeCategory)?.label}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {(activeCategory === "all" ? newTools : filtered).map((tool) => (
              <ToolCard key={tool.id} tool={tool} />
            ))}
          </div>
        </section>

        {/* Best Paid Apps */}
        {activeCategory === "all" && (
          <section>
            <h2 className="text-xl font-bold text-foreground mb-4">Best Paid Apps</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {paidTools.map((tool) => (
                <ToolCard key={tool.id} tool={tool} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default Tools;
