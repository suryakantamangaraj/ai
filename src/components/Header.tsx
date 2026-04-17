import { Link, useLocation } from "react-router-dom";
import { Sparkles, Menu, X, User, Sun, Moon, LogOut, FolderOpen, Rss } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Switch } from "@/components/ui/switch";
import { useTheme } from "@/contexts/ThemeContext";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const baseNavLinks = [
  { label: "Home", path: "/" },
  { label: "Tools", path: "/tools" },
  { label: "Prompts", path: "/prompts" },
  { label: "Chat", path: "/chat" },
];

const authNavLinks = [
  { label: "My Collection", path: "/my-collection" },
  { label: "Feed", path: "/feed" },
];

const Header = () => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { isLoggedIn, username, login, logout } = useAuth();
  const [loginOpen, setLoginOpen] = useState(false);

  const navLinks = isLoggedIn ? [...baseNavLinks, ...authNavLinks] : baseNavLinks;

  const handleOAuthLogin = (provider: string) => {
    window.location.href = `/auth/${provider}`;
  };

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl w-full">
        <div className="w-full px-4 md:px-8 flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <Sparkles className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold text-gradient-purple">AIverse</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "px-4 py-2 rounded-md text-sm font-medium transition-colors",
                  location.pathname === link.path
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <div className="flex items-center gap-2">
              {theme === "dark" ? (
                <Moon className="h-4 w-4 text-muted-foreground" />
              ) : (
                <Sun className="h-4 w-4 text-muted-foreground" />
              )}
              <Switch checked={theme === "light"} onCheckedChange={toggleTheme} />
            </div>

            {isLoggedIn ? (
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">@{username}</span>
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full border border-border"
                  onClick={logout}
                  title="Logout"
                >
                  <LogOut className="h-4 w-4" />
                </Button>
              </div>
            ) : (
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full border border-border"
                onClick={() => setLoginOpen(true)}
              >
                <User className="h-5 w-5" />
              </Button>
            )}
          </div>

          <button
            className="md:hidden text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {mobileOpen && (
          <div className="md:hidden border-t border-border/50 bg-background/95 backdrop-blur-xl">
            <nav className="px-4 py-4 flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    "px-4 py-3 rounded-md text-sm font-medium transition-colors",
                    location.pathname === link.path
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex items-center gap-2 px-4 py-3">
                {theme === "dark" ? (
                  <Moon className="h-4 w-4 text-muted-foreground" />
                ) : (
                  <Sun className="h-4 w-4 text-muted-foreground" />
                )}
                <Switch checked={theme === "light"} onCheckedChange={toggleTheme} />
                <span className="text-sm text-muted-foreground">
                  {theme === "dark" ? "Dark" : "Light"} Mode
                </span>
              </div>
              <div className="px-4 pt-2">
                {isLoggedIn ? (
                  <Button variant="outline" size="sm" className="w-full" onClick={() => { setMobileOpen(false); logout(); }}>
                    <LogOut className="h-4 w-4 mr-2" />
                    Logout (@{username})
                  </Button>
                ) : (
                  <Button variant="outline" size="sm" className="w-full" onClick={() => { setMobileOpen(false); setLoginOpen(true); }}>
                    <User className="h-4 w-4 mr-2" />
                    Login
                  </Button>
                )}
              </div>
            </nav>
          </div>
        )}
      </header>

      <Dialog open={loginOpen} onOpenChange={setLoginOpen}>
        <DialogContent className="sm:max-w-md bg-background border-border">
          <DialogHeader className="text-center items-center">
            <DialogTitle className="text-2xl font-bold text-foreground">Login</DialogTitle>
            <DialogDescription className="text-muted-foreground">
              Sign in with your account to continue
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-3 mt-4">
            <button
              onClick={() => handleOAuthLogin("github")}
              className="flex items-center justify-center gap-3 w-full px-4 py-3 rounded-lg border border-border hover:bg-secondary transition-colors text-foreground"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
              Sign in with GitHub
            </button>
            <button
              onClick={() => handleOAuthLogin("google")}
              className="flex items-center justify-center gap-3 w-full px-4 py-3 rounded-lg border border-border hover:bg-secondary transition-colors text-foreground"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              Sign in with Google
            </button>
            <button
              onClick={() => handleOAuthLogin("apple")}
              className="flex items-center justify-center gap-3 w-full px-4 py-3 rounded-lg border border-border hover:bg-secondary transition-colors text-foreground"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
              </svg>
              Sign in with Apple
            </button>
          </div>
          <p className="text-center text-xs text-muted-foreground mt-4">
            Sign in with GitHub to link your contributions to the Open Source Community
          </p>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Header;
