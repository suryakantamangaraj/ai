import { Link } from "react-router-dom";
import { Sparkles, Github, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border/50 bg-background/50 backdrop-blur-sm">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-primary" />
              <span className="text-lg font-bold text-gradient-purple">AIverse</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Your expert-curated AI tools directory. Discover, compare, and master the best AI tools.
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-foreground">Explore</h4>
            <div className="flex flex-col gap-2">
              <Link to="/tools" className="text-sm text-muted-foreground hover:text-foreground transition-colors">AI Tools</Link>
              <Link to="/prompts" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Prompts</Link>
              <Link to="/chat" className="text-sm text-muted-foreground hover:text-foreground transition-colors">AI Chat</Link>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-foreground">Resources</h4>
            <div className="flex flex-col gap-2">
              <Link to="/prompts-learn" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Prompt Guide</Link>
              <Link to="/prompts-gallery" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Prompt Gallery</Link>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-foreground">Community</h4>
            <div className="flex gap-3">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border/50 text-center">
          <p className="text-sm text-muted-foreground">
            © 2026 AIverse. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
