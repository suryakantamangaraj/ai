"use client";

import Link from "next/link";
import { useState } from "react";
import {
  Sparkles,
  Wrench,
  MessageSquare,
  BookOpen,
  Menu,
  X,
  LogOut,
  User,
  Heart
} from "lucide-react";
import { GithubIcon } from "@/components/icons";
import { useSession, signIn, signOut } from "next-auth/react";

const navLinks = [
  { href: "/tools", label: "AI Tools", icon: Wrench },
  { href: "/prompts", label: "Prompts", icon: BookOpen },
  { href: "/chat", label: "Chat", icon: MessageSquare },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { data: session } = useSession();

  return (
    <header
      className="glass"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
      }}
    >
      <div
        style={{
          maxWidth: "1120px",
          margin: "0 auto",
          padding: "0 24px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: "64px",
          }}
        >
          {/* Logo */}
          <Link
            href="/"
            id="nav-logo"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              textDecoration: "none",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "36px",
                height: "36px",
                borderRadius: "8px",
                background: "linear-gradient(135deg, #7c3aed, #06b6d4)",
              }}
            >
              <Sparkles
                style={{ width: "20px", height: "20px", color: "white" }}
              />
            </div>
            <span style={{ fontSize: "18px", fontWeight: 700 }}>
              <span className="gradient-text">Surya</span>{" "}
              <span className="text-foreground">Singularity</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav
            id="nav-desktop"
            className="hidden md:flex"
            style={{ alignItems: "center", gap: "4px" }}
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                id={`nav-${link.label.toLowerCase().replace(/\s/g, "-")}`}
                className="text-muted hover:text-foreground hover:bg-surface-elevated"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "8px 16px",
                  borderRadius: "8px",
                  fontSize: "14px",
                  fontWeight: 500,
                  textDecoration: "none",
                  transition: "all 0.2s ease",
                }}
              >
                <link.icon style={{ width: "16px", height: "16px" }} />
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right Actions */}
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <a
              href="https://github.com/suryakantamangaraj/ai"
              target="_blank"
              rel="noopener noreferrer"
              id="nav-github"
              className="hidden sm:flex text-muted hover:text-foreground hover:bg-surface-elevated"
              style={{
                alignItems: "center",
                gap: "8px",
                padding: "8px 12px",
                borderRadius: "8px",
                fontSize: "14px",
                fontWeight: 500,
                textDecoration: "none",
                transition: "all 0.2s ease",
              }}
            >
              <GithubIcon style={{ width: "16px", height: "16px" }} />
              <span className="hidden lg:inline">GitHub</span>
            </a>
            <Link
              href="/chat"
              id="nav-cta"
              className="hidden sm:flex text-white"
              style={{
                alignItems: "center",
                gap: "8px",
                padding: "8px 16px",
                borderRadius: "9999px",
                background: "linear-gradient(135deg, #7c3aed, #06b6d4)",
                fontSize: "14px",
                fontWeight: 600,
                textDecoration: "none",
                transition: "all 0.25s ease",
              }}
            >
              <MessageSquare style={{ width: "16px", height: "16px" }} />
              Start Chatting
            </Link>

            {/* Auth Button */}
            {session ? (
              <div className="hidden sm:flex items-center gap-4 ml-2 pl-4 border-l border-white/10">
                <div className="flex items-center gap-2 group cursor-pointer relative">
                  <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-purple-500 to-cyan-500 flex items-center justify-center p-[2px]">
                    <div className="h-full w-full bg-zinc-900 rounded-full flex items-center justify-center overflow-hidden">
                      {session.user?.image ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img src={session.user.image} alt="User" className="h-full w-full object-cover" />
                      ) : (
                        <User className="h-4 w-4 text-zinc-400" />
                      )}
                    </div>
                  </div>
                  
                  {/* Dropdown Menu directly implemented with group-hover */}
                  <div className="absolute right-0 top-[calc(100%+0.5rem)] w-48 rounded-xl border border-white/10 bg-zinc-950/90 p-2 shadow-xl backdrop-blur-xl transition-all opacity-0 invisible group-hover:opacity-100 group-hover:visible translate-y-2 group-hover:translate-y-0">
                    <p className="px-3 py-2 text-xs font-semibold text-zinc-500 truncate">{session.user?.email}</p>
                    <Link
                      href="/tools/saved"
                      className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-zinc-300 hover:bg-white/5 hover:text-white transition-colors"
                    >
                      <Heart className="h-4 w-4" />
                      Saved Tools
                    </Link>
                    <button
                      onClick={() => signOut()}
                      className="mt-1 flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-red-400 hover:bg-red-500/10 hover:text-red-300 transition-colors"
                    >
                      <LogOut className="h-4 w-4" />
                      Sign Out
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <button
                onClick={() => signIn()}
                className="hidden sm:flex text-sm font-semibold text-zinc-300 hover:text-white ml-2 pl-4 border-l border-white/10 transition-colors"
              >
                Sign In
              </button>
            )}

            {/* Mobile Toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="flex md:hidden text-muted hover:text-foreground hover:bg-surface-elevated items-center justify-center"
              style={{
                padding: "8px",
                borderRadius: "8px",
                border: "none",
                background: "transparent",
                cursor: "pointer",
                transition: "all 0.2s ease",
              }}
              aria-label="Toggle menu"
              id="nav-mobile-toggle"
            >
              {mobileOpen ? (
                <X style={{ width: "20px", height: "20px" }} />
              ) : (
                <Menu style={{ width: "20px", height: "20px" }} />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          style={{
            borderTop: "1px solid var(--border)",
            background: "rgba(24,24,27,0.95)",
            backdropFilter: "blur(20px)",
          }}
        >
          <nav
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "4px",
              padding: "16px",
            }}
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-muted hover:text-foreground hover:bg-surface-elevated"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  padding: "12px 16px",
                  borderRadius: "8px",
                  fontSize: "14px",
                  fontWeight: 500,
                  textDecoration: "none",
                  transition: "all 0.2s ease",
                }}
              >
                <link.icon style={{ width: "20px", height: "20px" }} />
                {link.label}
              </Link>
            ))}
            <hr
              style={{
                border: "none",
                borderTop: "1px solid var(--border)",
                margin: "8px 0",
              }}
            />
            <a
              href="https://github.com/suryakantamangaraj/ai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-foreground hover:bg-surface-elevated"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                padding: "12px 16px",
                borderRadius: "8px",
                fontSize: "14px",
                fontWeight: 500,
                textDecoration: "none",
                transition: "all 0.2s ease",
              }}
            >
              <GithubIcon style={{ width: "20px", height: "20px" }} />
              GitHub
            </a>
            <Link
              href="/chat"
              onClick={() => setMobileOpen(false)}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
                marginTop: "8px",
                padding: "12px 16px",
                borderRadius: "9999px",
                background: "linear-gradient(135deg, #7c3aed, #06b6d4)",
                color: "white",
                fontSize: "14px",
                fontWeight: 600,
                textDecoration: "none",
              }}
            >
              <MessageSquare style={{ width: "16px", height: "16px" }} />
              Start Chatting
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
