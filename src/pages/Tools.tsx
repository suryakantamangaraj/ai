import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Search, Star, ChevronDown, Users, Send, Upload, ExternalLink, Github } from "lucide-react";
import * as LucideIcons from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { tools, toolCategories, featuredLabels } from "@/data/tools";
import ToolCard from "@/components/ToolCard";
import { cn } from "@/lib/utils";

const Tools = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const authorFilter = searchParams.get("author") || "";
  const categoryParam = searchParams.get("category") || "all";

  const [activeCategory, setActiveCategory] = useState(categoryParam);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFeatured, setActiveFeatured] = useState(0);
  const [communityOpen, setCommunityOpen] = useState(false);
  const [requestOpen, setRequestOpen] = useState(false);
  const [publishOpen, setPublishOpen] = useState(false);

  const filtered = tools.filter((t) => {
    const matchesCategory =
      activeCategory === "all" || t.category === activeCategory;
    const matchesSearch =
      !searchQuery ||
      t.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesAuthor = !authorFilter || t.author === authorFilter;
    return matchesCategory && matchesSearch && matchesAuthor;
  });

  const featuredTools = tools.filter((t) => t.featured);
  const newTools = authorFilter ? filtered : tools.filter((t) => t.isNew);
  const paidTools = tools.filter((t) => t.price !== "Free");

  const handleCategoryChange = (catId: string) => {
    setActiveCategory(catId);
    if (authorFilter) {
      setSearchParams({});
    }
  };

  return (
    <div className="flex min-h-[calc(100vh-4rem)]">
      {/* Sidebar */}
      <aside className="hidden lg:flex flex-col w-64 border-r border-border/50 bg-background/50 backdrop-blur-sm h-[calc(100vh-4rem)] sticky top-16">
        {/* Fixed search */}
        <div className="shrink-0 p-4 pb-2 border-b border-border/50">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search categories..."
              className="pl-9 h-9 bg-secondary border-border text-sm"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Fixed All Apps button */}
        <div className="shrink-0 px-4 pt-2">
          <button
            onClick={() => handleCategoryChange("all")}
            className={cn(
              "flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors text-left w-full",
              activeCategory === "all" && !authorFilter
                ? "bg-primary/10 text-primary font-medium"
                : "text-muted-foreground hover:text-foreground hover:bg-secondary"
            )}
          >
            {(() => { const IC = (LucideIcons as any)["Grid3X3"]; return IC ? <IC className="h-4 w-4" /> : null; })()}
            All Apps
          </button>
        </div>

        {/* Scrollable categories */}
        <div className="flex-1 overflow-y-auto min-h-0 px-4 py-1 gap-0.5 flex flex-col">
          {toolCategories.filter(c => c.id !== "all").map((cat) => {
            const IconComp = (LucideIcons as any)[cat.icon];
            return (
              <button
                key={cat.id}
                onClick={() => handleCategoryChange(cat.id)}
                className={cn(
                  "flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors text-left shrink-0",
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
        </div>

        {/* Fixed Community button */}
        <div className="shrink-0 p-4 pt-2 border-t border-border/50">
          <Collapsible open={communityOpen} onOpenChange={setCommunityOpen}>
            <CollapsibleTrigger asChild>
              <Button
                variant="ghost"
                className="w-full justify-between text-sm text-muted-foreground hover:text-foreground"
              >
                <span className="flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  Community
                </span>
                <ChevronDown className={cn("h-4 w-4 transition-transform", communityOpen && "rotate-180")} />
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent className="mt-1 space-y-1">
              <button
                onClick={() => setRequestOpen(true)}
                className="flex items-center gap-2 w-full px-3 py-2 rounded-md text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
              >
                <Send className="h-4 w-4" />
                Request an App
              </button>
              <button
                onClick={() => setPublishOpen(true)}
                className="flex items-center gap-2 w-full px-3 py-2 rounded-md text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
              >
                <Upload className="h-4 w-4" />
                Publish an App
              </button>
            </CollapsibleContent>
          </Collapsible>
        </div>
      </aside>

      {/* Main */}
      <div className="flex-1 p-6 lg:p-8 overflow-auto">
        {/* Author filter banner */}
        {authorFilter && (
          <div className="mb-6 p-4 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-between">
            <p className="text-sm text-foreground">
              Showing apps by <span className="font-semibold text-primary">{authorFilter}</span>
            </p>
            <Link to="/tools">
              <Button variant="ghost" size="sm" className="text-primary">
                Clear filter
              </Button>
            </Link>
          </div>
        )}

        {/* Featured carousel */}
        {!authorFilter && (
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
                <Link to={`/tool/${featuredTools[activeFeatured].id}`}>
                  <Button>View</Button>
                </Link>
              </div>
            )}
          </div>
        )}

        {/* Mobile category filter */}
        <div className="lg:hidden flex gap-2 overflow-x-auto pb-4 mb-4 -mx-2 px-2">
          {toolCategories.slice(0, 6).map((cat) => (
            <button
              key={cat.id}
              onClick={() => handleCategoryChange(cat.id)}
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

        {/* Tools grid */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-foreground mb-4">
            {authorFilter
              ? `Apps by ${authorFilter}`
              : activeCategory === "all"
              ? "Best New Apps"
              : toolCategories.find(c => c.id === activeCategory)?.label}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {(authorFilter ? filtered : activeCategory === "all" ? newTools : filtered).map((tool) => (
              <Link key={tool.id} to={`/tool/${tool.id}`}>
                <ToolCard tool={tool} />
              </Link>
            ))}
          </div>
        </section>

        {/* Best Paid Apps */}
        {activeCategory === "all" && !authorFilter && (
          <section>
            <h2 className="text-xl font-bold text-foreground mb-4">Best Paid Apps</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {paidTools.map((tool) => (
                <Link key={tool.id} to={`/tool/${tool.id}`}>
                  <ToolCard tool={tool} />
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>

      {/* Request an App Dialog */}
      <Dialog open={requestOpen} onOpenChange={setRequestOpen}>
        <DialogContent className="max-w-lg bg-background border-border">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold text-foreground flex items-center gap-2">
              <Send className="h-5 w-5 text-primary" />
              Request an App
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <p className="text-muted-foreground text-sm">
              Have an idea for a great AI tool that should be listed here? Submit a request and help the community discover new apps!
            </p>
            <div className="space-y-3">
              <div className="p-3 rounded-lg bg-secondary/50">
                <h4 className="text-sm font-semibold text-foreground mb-1">💡 How to request</h4>
                <p className="text-xs text-muted-foreground">
                  Open a GitHub issue with the app name, description, category, and why it should be featured. Use the "App Request" issue template.
                </p>
              </div>
              <div className="p-3 rounded-lg bg-secondary/50">
                <h4 className="text-sm font-semibold text-foreground mb-1">✅ What makes a good request</h4>
                <ul className="text-xs text-muted-foreground space-y-1">
                  <li>• The app is AI-powered or AI-related</li>
                  <li>• It's actively maintained and publicly available</li>
                  <li>• It provides value to developers or creators</li>
                  <li>• It's not already listed in the directory</li>
                </ul>
              </div>
            </div>
            <div className="flex gap-3 pt-2">
              <a
                href="https://github.com/your-repo/issues/new?template=app-request.md"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1"
              >
                <Button className="w-full">
                  <Send className="h-4 w-4 mr-2" />
                  Submit Request
                </Button>
              </a>
              <a
                href="https://github.com/your-repo/issues?q=is%3Aissue+label%3Aapp-request"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1"
              >
                <Button variant="outline" className="w-full">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  View All Requests
                </Button>
              </a>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Publish an App Dialog */}
      <Dialog open={publishOpen} onOpenChange={setPublishOpen}>
        <DialogContent className="max-w-lg bg-background border-border">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold text-foreground flex items-center gap-2">
              <Upload className="h-5 w-5 text-primary" />
              Publish an App
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <p className="text-muted-foreground text-sm">
              Want to add your AI tool to the directory? Follow these guidelines to submit your app for review.
            </p>
            <div className="space-y-3">
              <div className="p-3 rounded-lg bg-secondary/50">
                <h4 className="text-sm font-semibold text-foreground mb-1">📋 Submission Guidelines</h4>
                <ul className="text-xs text-muted-foreground space-y-1">
                  <li>• Your app must be AI-powered or AI-related</li>
                  <li>• Provide a clear name, description, and category</li>
                  <li>• Include a working website or demo link</li>
                  <li>• Add relevant tags for discoverability</li>
                  <li>• Include pricing information (Free, Freemium, Paid)</li>
                </ul>
              </div>
              <div className="p-3 rounded-lg bg-secondary/50">
                <h4 className="text-sm font-semibold text-foreground mb-1">📝 How to publish</h4>
                <p className="text-xs text-muted-foreground">
                  Fork the repository, add your tool data following the contribution guide format, and submit a pull request. Our team will review and merge within 48 hours.
                </p>
              </div>
              <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
                <h4 className="text-sm font-semibold text-primary mb-1">⚡ Quick checklist</h4>
                <ul className="text-xs text-muted-foreground space-y-1">
                  <li>☐ App name and emoji icon</li>
                  <li>☐ Short and long descriptions</li>
                  <li>☐ Category and tags</li>
                  <li>☐ Website URL and GitHub (if open source)</li>
                  <li>☐ Features list (at least 3)</li>
                </ul>
              </div>
            </div>
            <div className="flex gap-3 pt-2">
              <a
                href="https://github.com/your-repo/blob/main/CONTRIBUTING.md"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1"
              >
                <Button className="w-full">
                  <Github className="h-4 w-4 mr-2" />
                  Contribution Guide
                </Button>
              </a>
              <a
                href="https://github.com/your-repo/issues?q=is%3Aissue+label%3Aapp-request"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1"
              >
                <Button variant="outline" className="w-full">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  View All Requests
                </Button>
              </a>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Tools;
