import { useState } from "react";
import { Github, Twitter, Linkedin, Youtube, Instagram, Sparkles, GitPullRequest } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const Footer = () => {
  const [aboutOpen, setAboutOpen] = useState(false);

  return (
    <footer className="border-t border-border/50 bg-background/50 backdrop-blur-sm w-full relative z-10">
      <div className="w-full px-4 md:px-8 py-6">
        {/* Bottom bar: About + Contribute left, copyright center, socials right */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setAboutOpen(true)}
              className="text-muted-foreground hover:text-foreground text-xs"
            >
              About
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => window.open("https://github.com", "_blank")}
              className="text-muted-foreground hover:text-foreground text-xs gap-1"
            >
              <GitPullRequest className="h-3.5 w-3.5" />
              Contribute
            </Button>
          </div>

          <p className="text-xs text-muted-foreground">
            © 2026 AIverse. All rights reserved.
          </p>

          <div className="flex items-center gap-3">
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors"><Github className="h-4 w-4" /></a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors"><Twitter className="h-4 w-4" /></a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors"><Linkedin className="h-4 w-4" /></a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors"><Youtube className="h-4 w-4" /></a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors"><Instagram className="h-4 w-4" /></a>
          </div>
        </div>
      </div>

      {/* About Dialog — centered on page */}
      <Dialog open={aboutOpen} onOpenChange={setAboutOpen}>
        <DialogContent className="sm:max-w-lg glass-card-glow top-[50%]">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-xl">
              <Sparkles className="h-5 w-5 text-primary" />
              <span className="text-gradient-purple">AIverse</span>
            </DialogTitle>
            <DialogDescription className="text-muted-foreground pt-2">
              Your expert-curated AI tools directory.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 text-sm text-foreground/80">
            <p>
              AIverse is a comprehensive platform for discovering, comparing, and mastering
              the best AI tools available. We curate hundreds of tools across categories
              like development, design, writing, and productivity.
            </p>
            <p>
              Whether you're a developer, designer, or content creator — AIverse helps you
              find the right AI tool for every task, along with expert prompts and guides
              to get the most out of them.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">AI Tools</span>
              <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">Prompt Engineering</span>
              <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">Curated Directory</span>
              <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">Free to Use</span>
            </div>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-primary hover:underline pt-2"
            >
              <Github className="h-4 w-4" />
              View on GitHub
            </a>
          </div>
        </DialogContent>
      </Dialog>
    </footer>
  );
};

export default Footer;
