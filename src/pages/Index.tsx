import { Search, ArrowRight, Sparkles, Zap, Globe, Code, Palette, PenTool } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { tools } from "@/data/tools";
import ToolCard from "@/components/ToolCard";

const suggestions = [
  "Create Website",
  "Make A Logo",
  "Write Blog",
  "Generate Code",
  "Design UI",
  "Analyze Data",
];

const categories = [
  { icon: Globe, label: "Web Apps", count: 124 },
  { icon: Code, label: "Developer Tools", count: 89 },
  { icon: Palette, label: "Design", count: 67 },
  { icon: PenTool, label: "Writing", count: 54 },
  { icon: Zap, label: "Productivity", count: 98 },
  { icon: Sparkles, label: "AI Assistants", count: 156 },
];

const Index = () => {
  const featuredTools = tools.filter((t) => t.featured);

  return (
    <div className="relative">
      {/* Hero */}
      <section className="container pt-20 pb-16 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <Badge
            variant="secondary"
            className="bg-primary/10 text-primary border-primary/20 px-4 py-1.5"
          >
            <Sparkles className="h-3.5 w-3.5 mr-1.5" />
            Expert-Curated AI Directory
          </Badge>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            Discover the Best{" "}
            <span className="text-gradient-purple">AI Tools</span>
          </h1>

          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Explore our curated collection of the most powerful AI tools,
            prompts, and resources to supercharge your workflow.
          </p>

          {/* Search */}
          <div className="relative max-w-xl mx-auto cosmic-glow-strong rounded-xl">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              placeholder="Search AI tools, prompts, resources..."
              className="pl-12 h-14 rounded-xl bg-secondary border-border text-base"
            />
          </div>

          {/* Chips */}
          <div className="flex flex-wrap justify-center gap-2">
            {suggestions.map((s) => (
              <Badge
                key={s}
                variant="outline"
                className="px-3 py-1.5 cursor-pointer hover:bg-secondary transition-colors"
              >
                {s}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Tools */}
      <section className="container pb-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-foreground">Featured Tools</h2>
          <Link
            to="/tools"
            className="flex items-center gap-1 text-sm text-primary hover:underline"
          >
            View all <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {featuredTools.map((tool) => (
            <ToolCard key={tool.id} tool={tool} />
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="container pb-20">
        <h2 className="text-2xl font-bold text-foreground mb-6">
          Browse Categories
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((cat) => (
            <Link
              key={cat.label}
              to="/tools"
              className="glass-card-glow rounded-lg p-5 text-center transition-all group cursor-pointer"
            >
              <cat.icon className="h-8 w-8 mx-auto mb-3 text-primary group-hover:scale-110 transition-transform" />
              <p className="font-medium text-foreground text-sm">{cat.label}</p>
              <p className="text-xs text-muted-foreground mt-1">
                {cat.count} tools
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container pb-20">
        <div className="glass-card-glow cosmic-glow-strong rounded-2xl p-10 text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Ready to explore?
          </h2>
          <p className="text-muted-foreground mb-6">
            Dive into our curated collection of AI tools and prompts.
          </p>
          <div className="flex gap-3 justify-center">
            <Button asChild>
              <Link to="/tools">Browse Tools</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link to="/prompts">Explore Prompts</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
