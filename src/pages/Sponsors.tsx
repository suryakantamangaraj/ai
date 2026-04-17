import { Heart, ExternalLink, Mail, ArrowLeft, Crown, Award, Medal, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const sponsorTiers = [
  {
    name: "Gold Sponsor",
    icon: Crown,
    price: "$500/mo",
    color: "from-yellow-500/20 to-amber-500/10",
    borderColor: "border-yellow-500/30",
    iconColor: "text-yellow-500",
    badgeColor: "bg-yellow-500/10 text-yellow-600 border-yellow-500/20",
    perks: [
      "Logo on homepage & README",
      "Priority support channel",
      "Dedicated blog post",
      "Social media shoutout",
      "Featured placement in newsletter",
    ],
    sponsors: [
      { name: "Your Company Here", url: "#", logo: "🏢" },
    ],
  },
  {
    name: "Silver Sponsor",
    icon: Award,
    price: "$200/mo",
    color: "from-slate-400/20 to-gray-500/10",
    borderColor: "border-slate-400/30",
    iconColor: "text-slate-400",
    badgeColor: "bg-slate-400/10 text-slate-500 border-slate-400/20",
    perks: [
      "Logo on homepage",
      "README mention",
      "Social media shoutout",
      "Quarterly impact report",
    ],
    sponsors: [
      { name: "Your Company Here", url: "#", logo: "🏢" },
    ],
  },
  {
    name: "Bronze Sponsor",
    icon: Medal,
    price: "$50/mo",
    color: "from-orange-700/20 to-amber-800/10",
    borderColor: "border-orange-700/30",
    iconColor: "text-orange-700",
    badgeColor: "bg-orange-700/10 text-orange-600 border-orange-700/20",
    perks: [
      "Name on sponsors page",
      "README mention",
      "Community recognition badge",
    ],
    sponsors: [
      { name: "Your Company Here", url: "#", logo: "🏢" },
    ],
  },
];

const pastSponsors = [
  { name: "TechCorp", period: "Jan 2025 – Dec 2025", tier: "Gold", logo: "🔶" },
  { name: "AI Innovations", period: "Mar 2025 – Sep 2025", tier: "Silver", logo: "🔷" },
  { name: "DevStudio", period: "Jun 2025 – Dec 2025", tier: "Bronze", logo: "🟤" },
  { name: "CloudFirst", period: "Feb 2025 – Aug 2025", tier: "Gold", logo: "☁️" },
  { name: "DataMinds", period: "Apr 2025 – Oct 2025", tier: "Silver", logo: "📊" },
  { name: "CodeCraft Labs", period: "Jan 2025 – Jun 2025", tier: "Bronze", logo: "🛠️" },
  { name: "Neural Systems", period: "May 2025 – Nov 2025", tier: "Silver", logo: "🧠" },
  { name: "PixelForge", period: "Jul 2025 – Dec 2025", tier: "Bronze", logo: "🎨" },
  { name: "AutoScale Inc.", period: "Aug 2025 – Feb 2026", tier: "Gold", logo: "📈" },
  { name: "LogicHub", period: "Sep 2025 – Mar 2026", tier: "Silver", logo: "⚙️" },
  { name: "ByteWorks", period: "Oct 2025 – Dec 2025", tier: "Bronze", logo: "💾" },
  { name: "VisionAI", period: "Nov 2025 – Jan 2026", tier: "Gold", logo: "👁️" },
];

const tierColorMap: Record<string, string> = {
  Gold: "text-yellow-500",
  Silver: "text-slate-400",
  Bronze: "text-orange-700",
};

const Sponsors = () => {
  return (
    <div className="min-h-[calc(100vh-4rem)]">
      {/* Header */}
      <div className="container pt-8 pb-6">
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 text-sm text-primary hover:text-primary/80 transition-colors mb-6"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>
        <div className="text-center mb-8">
          <Badge
            variant="secondary"
            className="bg-primary/10 text-primary border-primary/20 px-4 py-1.5 mb-4"
          >
            <Heart className="h-3.5 w-3.5 mr-1.5" />
            Community Powered
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-3">
            Our <span className="text-gradient-purple">Sponsors</span>
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            AIverse is made possible by the generous support of our sponsors.
            Join them in supporting the open-source AI community.
          </p>
        </div>
      </div>

      {/* 70-30 Layout */}
      <div className="container pb-16">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* 70% - Current Sponsor Tiers */}
          <div className="lg:w-[70%] space-y-8">
            {sponsorTiers.map((tier) => {
              const TierIcon = tier.icon;
              return (
                <section key={tier.name}>
                  <div className="flex items-center gap-3 mb-4">
                    <TierIcon className={`h-6 w-6 ${tier.iconColor}`} />
                    <h2 className="text-2xl font-bold text-foreground">{tier.name}</h2>
                    <Badge variant="outline" className={tier.badgeColor}>
                      {tier.price}
                    </Badge>
                  </div>

                  <div className={`rounded-xl border ${tier.borderColor} bg-gradient-to-br ${tier.color} p-6`}>
                    {/* Perks */}
                    <div className="mb-6">
                      <h3 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wider">Perks</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {tier.perks.map((perk) => (
                          <div key={perk} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <span className="text-primary">✓</span>
                            {perk}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Current sponsors in this tier */}
                    <div>
                      <h3 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wider">
                        Current Sponsors
                      </h3>
                      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                        {tier.sponsors.map((sponsor, i) => (
                          <a
                            key={i}
                            href={sponsor.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 p-3 rounded-lg bg-background/60 border border-border/50 hover:border-primary/30 transition-all hover:scale-[1.02]"
                          >
                            <span className="text-2xl">{sponsor.logo}</span>
                            <span className="text-sm font-medium text-foreground truncate">
                              {sponsor.name}
                            </span>
                          </a>
                        ))}
                        {/* Placeholder for becoming a sponsor */}
                        <a
                          href="mailto:sponsor@aiverse.dev"
                          className="flex items-center justify-center gap-2 p-3 rounded-lg border-2 border-dashed border-border/50 hover:border-primary/40 transition-all text-muted-foreground hover:text-primary cursor-pointer"
                        >
                          <Heart className="h-4 w-4" />
                          <span className="text-sm">Be a sponsor</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </section>
              );
            })}

            {/* How to Sponsor */}
            <section className="rounded-xl border border-border/50 bg-secondary/30 p-6">
              <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                <Heart className="h-5 w-5 text-primary" />
                How to Sponsor
              </h2>
              <p className="text-sm text-muted-foreground mb-4">
                You can sponsor AIverse through the following channels:
              </p>
              <div className="flex flex-wrap gap-3">
                <Button
                  variant="outline"
                  size="sm"
                  className="gap-1.5"
                  onClick={() => window.open("https://github.com/sponsors", "_blank")}
                >
                  <ExternalLink className="h-3.5 w-3.5" />
                  GitHub Sponsors
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="gap-1.5"
                  onClick={() => window.open("https://opencollective.com", "_blank")}
                >
                  <ExternalLink className="h-3.5 w-3.5" />
                  Open Collective
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="gap-1.5"
                  onClick={() => window.open("mailto:sponsor@aiverse.dev", "_blank")}
                >
                  <Mail className="h-3.5 w-3.5" />
                  Email Us
                </Button>
              </div>
            </section>
          </div>

          {/* 30% - Past Sponsors */}
          <div className="lg:w-[30%]">
            <div className="sticky top-20">
              <div className="flex items-center gap-2 mb-4">
                <Clock className="h-5 w-5 text-muted-foreground" />
                <h2 className="text-lg font-bold text-foreground">Past Sponsors</h2>
              </div>
              <div className="rounded-xl border border-border/50 bg-secondary/20 overflow-hidden">
                <div className="max-h-[calc(100vh-12rem)] overflow-y-auto p-4 space-y-3">
                  {pastSponsors.map((sponsor, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 p-3 rounded-lg bg-background/60 border border-border/30 hover:border-border/60 transition-colors"
                    >
                      <span className="text-xl mt-0.5">{sponsor.logo}</span>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-foreground truncate">
                          {sponsor.name}
                        </p>
                        <p className="text-xs text-muted-foreground">{sponsor.period}</p>
                        <span className={`text-xs font-medium ${tierColorMap[sponsor.tier] || "text-muted-foreground"}`}>
                          {sponsor.tier}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <p className="text-xs text-muted-foreground text-center mt-3">
                Thank you to all our past supporters! 💜
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
