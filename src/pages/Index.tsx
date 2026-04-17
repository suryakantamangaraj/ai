import { useState } from "react";
import { Search, ArrowRight, Sparkles, Heart, Users, Globe, Zap, Mail, ExternalLink } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { tools } from "@/data/tools";
import ToolCard from "@/components/ToolCard";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const suggestions = [
  "Create Website",
  "Make A Logo",
  "Write Blog",
  "Generate Code",
  "Design UI",
  "Analyze Data",
];

const sponsorTiers = [
  { name: "Gold Sponsor", price: "$500/mo", perks: ["Logo on homepage & README", "Priority support channel", "Dedicated blog post", "Social media shoutout"] },
  { name: "Silver Sponsor", price: "$200/mo", perks: ["Logo on homepage", "README mention", "Social media shoutout"] },
  { name: "Bronze Sponsor", price: "$50/mo", perks: ["Name on sponsors page", "README mention"] },
];

const Index = () => {
  const featuredTools = tools.filter((t) => t.featured);
  const [sponsorOpen, setSponsorOpen] = useState(false);

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

      {/* Sponsored By */}
      <section className="container pb-16 text-center">
        <h4 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">Sponsored By</h4>
        <div className="flex flex-wrap justify-center gap-6 text-muted-foreground/60 mb-4">
          {/* Placeholder sponsor logos would go here */}
          <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary/30 border border-border/30">
            <span className="text-lg">🏢</span>
            <span className="text-sm text-muted-foreground">Your Company Here</span>
          </div>
        </div>
        <div className="flex items-center justify-center gap-3">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setSponsorOpen(true)}
            className="gap-1.5 border-primary/30 text-primary hover:bg-primary/10"
          >
            <Heart className="h-3.5 w-3.5" />
            Become a Sponsor
          </Button>
          <Link to="/sponsors">
            <Button
              variant="ghost"
              size="sm"
              className="gap-1.5 text-muted-foreground hover:text-foreground"
            >
              View All Sponsors
              <ArrowRight className="h-3.5 w-3.5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Sponsor Dialog */}
      <Dialog open={sponsorOpen} onOpenChange={setSponsorOpen}>
        <DialogContent className="sm:max-w-2xl max-h-[85vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-2xl">
              <Heart className="h-6 w-6 text-primary" />
              Sponsor <span className="text-gradient-purple">AIverse</span>
            </DialogTitle>
            <DialogDescription>
              Support open-source development and get your brand in front of thousands of AI enthusiasts.
            </DialogDescription>
          </DialogHeader>

          {/* Why Sponsor */}
          <div className="space-y-6 pt-2">
            <div>
              <h3 className="text-sm font-semibold text-foreground mb-3">Why Sponsor AIverse?</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { icon: Globe, title: "Reach", desc: "Thousands of monthly visitors from the AI community" },
                  { icon: Users, title: "Audience", desc: "Developers, designers & tech decision-makers" },
                  { icon: Zap, title: "Impact", desc: "Fund open-source tools that help everyone" },
                  { icon: Sparkles, title: "Visibility", desc: "Logo placement on site, README & socials" },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-3 p-3 rounded-lg bg-secondary/50 border border-border/50">
                    <item.icon className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-foreground">{item.title}</p>
                      <p className="text-xs text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tiers */}
            <div>
              <h3 className="text-sm font-semibold text-foreground mb-3">Sponsorship Tiers</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {sponsorTiers.map((tier) => (
                  <div key={tier.name} className="p-4 rounded-lg border border-border/50 bg-secondary/30 space-y-2">
                    <p className="text-sm font-semibold text-foreground">{tier.name}</p>
                    <p className="text-lg font-bold text-primary">{tier.price}</p>
                    <ul className="space-y-1">
                      {tier.perks.map((perk) => (
                        <li key={perk} className="text-xs text-muted-foreground flex items-start gap-1.5">
                          <span className="text-primary mt-0.5">✓</span> {perk}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* How to Sponsor */}
            <div>
              <h3 className="text-sm font-semibold text-foreground mb-3">How to Sponsor</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>You can sponsor AIverse through the following channels:</p>
                <div className="flex flex-wrap gap-2 pt-1">
                  <Button variant="outline" size="sm" className="gap-1.5 text-xs" onClick={() => window.open("https://github.com/sponsors", "_blank")}>
                    <ExternalLink className="h-3 w-3" /> GitHub Sponsors
                  </Button>
                  <Button variant="outline" size="sm" className="gap-1.5 text-xs" onClick={() => window.open("https://opencollective.com", "_blank")}>
                    <ExternalLink className="h-3 w-3" /> Open Collective
                  </Button>
                  <Button variant="outline" size="sm" className="gap-1.5 text-xs" onClick={() => window.open("mailto:sponsor@aiverse.dev", "_blank")}>
                    <Mail className="h-3 w-3" /> Email Us
                  </Button>
                </div>
              </div>
            </div>

            <p className="text-xs text-muted-foreground text-center pt-2 border-t border-border/50">
              All sponsorship funds go directly toward maintaining and improving AIverse for the community.
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;
