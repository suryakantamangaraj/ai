import { useState, useRef } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Star, GitFork, ExternalLink, Github, Share2, Globe, Tag, Search, ChevronDown, ChevronLeft, ChevronRight, Users, Send, Upload, AlertTriangle, Flag, MessageSquarePlus, X } from "lucide-react";
import * as LucideIcons from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { tools, toolCategories } from "@/data/tools";
import ToolCard from "@/components/ToolCard";
import { cn } from "@/lib/utils";
import { useAuth } from "@/contexts/AuthContext";

// Sample reviews data
interface Review {
  id: string;
  username: string;
  rating: number;
  date: string;
  comment: string;
}

const sampleReviews: Record<string, Review[]> = {
  "1": [
    { id: "r1", username: "devsmith", rating: 5, date: "2026-04-10", comment: "Cursor has completely transformed my workflow. The AI code completion is incredibly accurate and saves me hours every day." },
    { id: "r2", username: "codequeen", rating: 4, date: "2026-04-08", comment: "Great editor overall. The multi-file editing is a game changer. Would love better Vim keybinding support though." },
    { id: "r3", username: "techguru99", rating: 5, date: "2026-04-05", comment: "Best AI code editor I've used. The codebase understanding is phenomenal." },
    { id: "r4", username: "devops_fan", rating: 4, date: "2026-04-01", comment: "Solid tool for pair programming with AI. Terminal integration could be smoother." },
    { id: "r5", username: "frontend_dev", rating: 3, date: "2026-03-28", comment: "Good but sometimes the AI suggestions are repetitive. Getting better with each update." },
  ],
};

// Default reviews for tools without specific reviews
const defaultReviews: Review[] = [
  { id: "dr1", username: "aiexplorer", rating: 5, date: "2026-04-12", comment: "Amazing tool! Exactly what I was looking for. The interface is intuitive and the results are impressive." },
  { id: "dr2", username: "productivitypro", rating: 4, date: "2026-04-09", comment: "Very useful app. Works well for most use cases. A few minor UI improvements would make it perfect." },
  { id: "dr3", username: "techenthusiast", rating: 4, date: "2026-04-06", comment: "Solid tool with great features. The team seems responsive to feedback and keeps improving it." },
  { id: "dr4", username: "digital_creator", rating: 5, date: "2026-04-03", comment: "Can't imagine my workflow without this now. Highly recommend to anyone in tech." },
  { id: "dr5", username: "newbie_coder", rating: 3, date: "2026-03-30", comment: "Works okay for basic tasks. Would appreciate more documentation and tutorials." },
];

// Placeholder preview images using gradient colors (these would be real screenshots in production)
const previewPlaceholders = [
  { bg: "from-violet-600/30 to-blue-600/30", label: "Dashboard View" },
  { bg: "from-cyan-600/30 to-teal-600/30", label: "Editor Interface" },
  { bg: "from-rose-600/30 to-orange-600/30", label: "Settings Panel" },
  { bg: "from-emerald-600/30 to-lime-600/30", label: "Output Preview" },
];

const INITIAL_REVIEWS_SHOWN = 3;

const ToolDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const tool = tools.find((t) => t.id === id);
  const { isLoggedIn, username } = useAuth();

  const [searchQuery, setSearchQuery] = useState("");
  const [communityOpen, setCommunityOpen] = useState(false);
  const [requestOpen, setRequestOpen] = useState(false);
  const [publishOpen, setPublishOpen] = useState(false);
  const [showAllReviews, setShowAllReviews] = useState(false);
  const [reviewDialogOpen, setReviewDialogOpen] = useState(false);
  const [loginPromptOpen, setLoginPromptOpen] = useState(false);
  const [newReview, setNewReview] = useState({ rating: 0, comment: "" });
  const [hoverRating, setHoverRating] = useState(0);
  const [currentPreviewIndex, setCurrentPreviewIndex] = useState(0);
  const previewRef = useRef<HTMLDivElement>(null);

  if (!tool) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4">
        <h1 className="text-2xl font-bold text-foreground">Tool not found</h1>
        <Link to="/tools">
          <Button variant="outline">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Tools
          </Button>
        </Link>
      </div>
    );
  }

  const categoryLabel = toolCategories.find((c) => c.id === tool.category)?.label || tool.category;

  // Related apps based on similar tags (not just category)
  const relatedTools = tools
    .filter((t) => t.id !== tool.id)
    .map((t) => ({
      tool: t,
      matchScore: t.tags.filter((tag) => tool.tags.includes(tag)).length,
    }))
    .filter((item) => item.matchScore > 0)
    .sort((a, b) => b.matchScore - a.matchScore)
    .slice(0, 4)
    .map((item) => item.tool);

  const developerTools = tools.filter((t) => t.author === tool.author && t.id !== tool.id);

  const filteredCategories = toolCategories.filter(c => c.id !== "all").filter(c =>
    !searchQuery || c.label.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const reviews = sampleReviews[tool.id] || defaultReviews;
  const displayedReviews = showAllReviews ? reviews : reviews.slice(0, INITIAL_REVIEWS_SHOWN);
  const avgRating = reviews.length > 0
    ? (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1)
    : "0";

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
  };

  const handleAddReview = () => {
    if (!isLoggedIn) {
      setLoginPromptOpen(true);
      return;
    }
    setReviewDialogOpen(true);
  };

  const handleSubmitReview = () => {
    // In a real app, this would save to a database
    setReviewDialogOpen(false);
    setNewReview({ rating: 0, comment: "" });
  };

  const previews = tool.screenshots && tool.screenshots.length > 0
    ? tool.screenshots.map((url, i) => ({ type: "image" as const, url, label: `Screenshot ${i + 1}` }))
    : previewPlaceholders.map((p) => ({ type: "placeholder" as const, ...p }));

  const handlePrevPreview = () => {
    setCurrentPreviewIndex((prev) => (prev === 0 ? previews.length - 1 : prev - 1));
  };

  const handleNextPreview = () => {
    setCurrentPreviewIndex((prev) => (prev === previews.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="flex min-h-[calc(100vh-4rem)]">
      {/* Sidebar - same as /tools */}
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
          <Link
            to="/tools"
            className="flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors text-left w-full text-muted-foreground hover:text-foreground hover:bg-secondary"
          >
            {(() => { const IC = (LucideIcons as any)["Grid3X3"]; return IC ? <IC className="h-4 w-4" /> : null; })()}
            All Apps
          </Link>
        </div>

        {/* Scrollable categories */}
        <div className="flex-1 overflow-y-auto min-h-0 px-4 py-1 gap-0.5 flex flex-col">
          {filteredCategories.map((cat) => {
            const IconComp = (LucideIcons as any)[cat.icon];
            return (
              <Link
                key={cat.id}
                to={`/tools?category=${cat.id}`}
                className={cn(
                  "flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors text-left shrink-0",
                  tool.category === cat.id
                    ? "bg-primary/10 text-primary font-medium"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                )}
              >
                {IconComp && <IconComp className="h-4 w-4" />}
                {cat.label}
              </Link>
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

      {/* Main content */}
      <div className="flex-1 p-6 lg:p-8 overflow-auto">
        {/* Back */}
        <Link
          to="/tools"
          className="inline-flex items-center gap-1.5 text-sm text-primary hover:text-primary/80 transition-colors mb-6"
        >
          <ArrowLeft className="h-4 w-4" />
          Back
        </Link>

        {/* Header */}
        <div className="flex items-start gap-6 mb-6">
          <div className="text-5xl w-20 h-20 flex items-center justify-center rounded-2xl bg-secondary shrink-0">
            {tool.icon}
          </div>
          <div className="flex-1 min-w-0">
            <h1 className="text-3xl font-bold text-foreground">{tool.name}</h1>
            <p className="text-muted-foreground mt-1">
              by{" "}
              <Link
                to={`/tools?author=${encodeURIComponent(tool.author)}`}
                className="text-primary hover:underline cursor-pointer"
              >
                {tool.author}
              </Link>
            </p>
            <div className="flex items-center gap-3 mt-4 flex-wrap">
              {tool.website && (
                <a href={tool.website} target="_blank" rel="noopener noreferrer">
                  <Button>
                    <Globe className="h-4 w-4 mr-2" />
                    Visit Website
                  </Button>
                </a>
              )}
              {tool.github ? (
                <a href={tool.github} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline">
                    <Github className="h-4 w-4 mr-2" />
                    View on GitHub
                  </Button>
                </a>
              ) : (
                <Button variant="outline" disabled className="opacity-50 cursor-not-allowed">
                  <Github className="h-4 w-4 mr-2" />
                  View on GitHub
                </Button>
              )}
              <Button variant="ghost" size="icon" onClick={handleShare}>
                <Share2 className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="flex items-center gap-8 py-4 mb-6 border-y border-border/50">
          <div className="text-center">
            <div className="flex items-center gap-1 text-lg font-bold text-foreground">
              <Star className="h-4 w-4 fill-primary text-primary" />
              {tool.stars.toLocaleString()}
            </div>
            <p className="text-xs text-muted-foreground uppercase tracking-wide">Stars</p>
          </div>
          {tool.forks && (
            <div className="text-center">
              <div className="flex items-center gap-1 text-lg font-bold text-foreground">
                <GitFork className="h-4 w-4 text-muted-foreground" />
                {tool.forks.toLocaleString()}
              </div>
              <p className="text-xs text-muted-foreground uppercase tracking-wide">Forks</p>
            </div>
          )}
          <div className="text-center">
            <p className="text-lg font-bold text-foreground">{tool.price}</p>
            <p className="text-xs text-muted-foreground uppercase tracking-wide">Price</p>
          </div>
          <div className="text-center">
            <p className="text-lg font-bold text-foreground">{tool.platform}</p>
            <p className="text-xs text-muted-foreground uppercase tracking-wide">Platform</p>
          </div>
          {tool.language && (
            <div className="text-center">
              <p className="text-lg font-bold text-foreground">{tool.language}</p>
              <p className="text-xs text-muted-foreground uppercase tracking-wide">Language</p>
            </div>
          )}
        </div>

        {/* Tags */}
        <div className="flex items-center gap-2 flex-wrap mb-8">
          <Tag className="h-4 w-4 text-muted-foreground" />
          {tool.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
          <Badge variant="outline" className="text-xs">
            {categoryLabel}
          </Badge>
        </div>

        {/* Preview Images Section */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-foreground mb-3">Preview</h2>
          <div className="flex gap-3 overflow-x-auto pb-2 -mx-1 px-1 scrollbar-thin">
            {previews.map((p, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-48 h-32 rounded-xl overflow-hidden border border-border/50 bg-secondary/30 hover:border-primary/40 transition-all hover:scale-[1.02] cursor-pointer"
              >
                {"url" in p ? (
                  <img
                    src={(p as any).url}
                    alt={(p as any).label}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className={`w-full h-full bg-gradient-to-br ${(p as any).bg} flex flex-col items-center justify-center gap-1.5 p-2`}>
                    <div className="text-2xl">{tool.icon}</div>
                    <p className="text-[10px] text-muted-foreground font-medium text-center leading-tight">
                      {(p as any).label}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Description */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-foreground mb-3">Description</h2>
          <p className="text-muted-foreground leading-relaxed">
            {tool.longDescription || tool.description}
          </p>
        </section>

        {/* What's New */}
        {tool.whatsNew && tool.whatsNew.length > 0 && (
          <section className="mb-8">
            <h2 className="text-xl font-bold text-foreground mb-3">What's New</h2>
            <ul className="space-y-2">
              {tool.whatsNew.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-muted-foreground">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Ratings & Reviews */}
        <section className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-foreground">Ratings & Reviews</h2>
            <Button
              variant="outline"
              size="sm"
              className="gap-1.5 text-primary border-primary/30 hover:bg-primary/10"
              onClick={handleAddReview}
            >
              <MessageSquarePlus className="h-4 w-4" />
              Add Review
            </Button>
          </div>

          {/* Rating summary */}
          <div className="flex items-start gap-6 mb-6 p-4 rounded-xl bg-secondary/30 border border-border/50">
            <div className="text-center">
              <p className="text-4xl font-bold text-foreground">{avgRating}</p>
              <div className="flex items-center gap-0.5 mt-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={cn(
                      "h-4 w-4",
                      star <= Math.round(Number(avgRating))
                        ? "fill-primary text-primary"
                        : "text-muted-foreground/30"
                    )}
                  />
                ))}
              </div>
              <p className="text-xs text-muted-foreground mt-1">{reviews.length} reviews</p>
            </div>
            <div className="flex-1 space-y-1.5">
              {[5, 4, 3, 2, 1].map((star) => {
                const count = reviews.filter((r) => r.rating === star).length;
                const percentage = reviews.length > 0 ? (count / reviews.length) * 100 : 0;
                return (
                  <div key={star} className="flex items-center gap-2">
                    <span className="text-xs text-muted-foreground w-3">{star}</span>
                    <Star className="h-3 w-3 fill-primary text-primary" />
                    <div className="flex-1 h-2 rounded-full bg-secondary overflow-hidden">
                      <div
                        className="h-full rounded-full bg-primary transition-all"
                        style={{ width: `${percentage}%` }}
                      />
                    </div>
                    <span className="text-xs text-muted-foreground w-6 text-right">{count}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Reviews list */}
          <div className="space-y-4">
            {displayedReviews.map((review) => (
              <div key={review.id} className="p-4 rounded-lg bg-secondary/20 border border-border/30">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-primary/20 flex items-center justify-center">
                      <span className="text-xs font-bold text-primary">
                        {review.username.charAt(0).toUpperCase()}
                      </span>
                    </div>
                    <span className="text-sm font-medium text-foreground">@{review.username}</span>
                  </div>
                  <span className="text-xs text-muted-foreground">{review.date}</span>
                </div>
                <div className="flex items-center gap-0.5 mb-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className={cn(
                        "h-3.5 w-3.5",
                        star <= review.rating
                          ? "fill-primary text-primary"
                          : "text-muted-foreground/30"
                      )}
                    />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{review.comment}</p>
              </div>
            ))}
          </div>

          {/* Expand/Collapse button */}
          {reviews.length > INITIAL_REVIEWS_SHOWN && (
            <Button
              variant="ghost"
              size="sm"
              className="mt-4 text-primary hover:text-primary/80 hover:bg-primary/10 w-full"
              onClick={() => setShowAllReviews(!showAllReviews)}
            >
              <ChevronDown className={cn("h-4 w-4 mr-1 transition-transform", showAllReviews && "rotate-180")} />
              {showAllReviews ? "Show less" : `Read all ${reviews.length} reviews`}
            </Button>
          )}
        </section>

        {/* Disclaimer */}
        <section className="mb-8">
          <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-4">
            <div className="flex items-start gap-3">
              <AlertTriangle className="h-5 w-5 text-yellow-500 shrink-0 mt-0.5" />
              <div>
                <h3 className="text-sm font-semibold text-foreground mb-1">Disclaimer</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Please do your due diligence before installing any app. Though we continuously strive to add safe apps,
                  we can never guarantee what may happen in the latest updates. If you notice anything wrong here,
                  please{" "}
                  <a
                    href="https://github.com/your-repo/issues/new?template=flag-issue.md"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-primary hover:underline"
                  >
                    raise a flag/issue
                    <Flag className="h-3 w-3" />
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Developer's other apps */}
        {developerTools.length > 0 && (
          <>
            <Separator className="my-8" />
            <section className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-foreground">
                  More by {tool.author}
                </h2>
                <Link to={`/tools?author=${encodeURIComponent(tool.author)}`}>
                  <Button variant="ghost" size="sm" className="text-primary">
                    View all
                  </Button>
                </Link>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {developerTools.slice(0, 4).map((t) => (
                  <Link key={t.id} to={`/tool/${t.id}`}>
                    <ToolCard tool={t} />
                  </Link>
                ))}
              </div>
            </section>
          </>
        )}

        <Separator className="my-8" />

        {/* Related Tools (by tags) */}
        {relatedTools.length > 0 && (
          <section>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-foreground">
                Related Apps
              </h2>
              <div className="flex items-center gap-1 text-xs text-muted-foreground">
                <Tag className="h-3 w-3" />
                Based on similar tags
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {relatedTools.map((t) => (
                <Link key={t.id} to={`/tool/${t.id}`}>
                  <ToolCard tool={t} />
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

      {/* Add Review Dialog (for logged-in users) */}
      <Dialog open={reviewDialogOpen} onOpenChange={setReviewDialogOpen}>
        <DialogContent className="max-w-md bg-background border-border">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold text-foreground flex items-center gap-2">
              <MessageSquarePlus className="h-5 w-5 text-primary" />
              Add Your Review
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <p className="text-sm text-muted-foreground mb-2">Your rating</p>
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    onMouseEnter={() => setHoverRating(star)}
                    onMouseLeave={() => setHoverRating(0)}
                    onClick={() => setNewReview((prev) => ({ ...prev, rating: star }))}
                    className="p-1 transition-transform hover:scale-110"
                  >
                    <Star
                      className={cn(
                        "h-7 w-7 transition-colors",
                        star <= (hoverRating || newReview.rating)
                          ? "fill-primary text-primary"
                          : "text-muted-foreground/30"
                      )}
                    />
                  </button>
                ))}
                {newReview.rating > 0 && (
                  <span className="text-sm text-muted-foreground ml-2">
                    {newReview.rating} / 5
                  </span>
                )}
              </div>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-2">Your review</p>
              <Textarea
                placeholder="Share your experience with this tool..."
                value={newReview.comment}
                onChange={(e) => setNewReview((prev) => ({ ...prev, comment: e.target.value }))}
                className="min-h-[100px] bg-secondary border-border"
              />
            </div>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <span>Posting as</span>
              <Badge variant="secondary" className="text-xs">@{username}</Badge>
            </div>
            <Button
              className="w-full"
              disabled={newReview.rating === 0 || !newReview.comment.trim()}
              onClick={handleSubmitReview}
            >
              Submit Review
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Login Prompt Dialog (for non-logged-in users trying to review) */}
      <Dialog open={loginPromptOpen} onOpenChange={setLoginPromptOpen}>
        <DialogContent className="max-w-sm bg-background border-border">
          <DialogHeader>
            <DialogTitle className="text-lg font-bold text-foreground text-center">
              Login Required
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4 text-center">
            <p className="text-sm text-muted-foreground">
              You need to be logged in to add a review. Please log in to continue.
            </p>
            <div className="flex gap-3 justify-center">
              <Button
                onClick={() => {
                  setLoginPromptOpen(false);
                  // Trigger the login dialog in the Header by navigating or using a shared state
                  // For now, we just close this dialog - the user can use the header login button
                }}
                variant="outline"
              >
                Cancel
              </Button>
              <Button
                onClick={() => {
                  setLoginPromptOpen(false);
                  // Redirect to trigger login - we'll click the header login button
                  const loginBtn = document.querySelector('[title="Logout"]')?.parentElement?.querySelector('button') ||
                    document.querySelector('header button:last-of-type');
                  if (loginBtn) (loginBtn as HTMLElement).click();
                }}
              >
                Go to Login
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ToolDetail;
