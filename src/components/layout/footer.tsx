import Link from "next/link";
import { Sparkles, Heart } from "lucide-react";
import { GithubIcon, TwitterIcon } from "@/components/icons";

const footerLinks = {
  Product: [
    { href: "/tools", label: "AI Tools" },
    { href: "/prompts", label: "Prompts" },
    { href: "/chat", label: "Chat" },
    { href: "/learn-prompt", label: "Learn Prompting" },
  ],
  Resources: [
    { href: "/prompt-templates", label: "Prompt Templates" },
    {
      href: "https://github.com/suryakantamangaraj/ai",
      label: "Source Code",
      external: true,
    },
    {
      href: "https://github.com/suryakantamangaraj/ai/issues",
      label: "Report Bug",
      external: true,
    },
  ],
  Connect: [
    { href: "https://suryaraj.com", label: "Portfolio", external: true },
    {
      href: "https://github.com/suryakantamangaraj",
      label: "GitHub",
      external: true,
    },
    { href: "https://twitter.com/suryaraj", label: "Twitter", external: true },
  ],
};

export function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid var(--border)",
        background: "rgba(24,24,27,0.5)",
      }}
    >
      <div
        style={{
          maxWidth: "1120px",
          margin: "0 auto",
          padding: "0 24px",
        }}
      >
        {/* Main Footer Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.5fr 1fr 1fr 1fr",
            gap: "48px",
            padding: "48px 0",
          }}
        >
          {/* Brand Column */}
          <div>
            <Link
              href="/"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                textDecoration: "none",
                marginBottom: "16px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "32px",
                  height: "32px",
                  borderRadius: "8px",
                  background: "linear-gradient(135deg, #7c3aed, #06b6d4)",
                }}
              >
                <Sparkles
                  style={{ width: "16px", height: "16px", color: "white" }}
                />
              </div>
              <span style={{ fontSize: "18px", fontWeight: 700 }}>
                <span className="gradient-text">Surya</span>{" "}
                <span className="text-foreground">Singularity</span>
              </span>
            </Link>
            <p
              className="text-muted"
              style={{
                marginTop: "16px",
                fontSize: "14px",
                lineHeight: 1.6,
                maxWidth: "280px",
              }}
            >
              One place for all AI solutions. Open-source hub combining tools,
              prompts, and chat — built for everyone.
            </p>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                marginTop: "16px",
              }}
            >
              <a
                href="https://github.com/suryakantamangaraj/ai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "36px",
                  height: "36px",
                  borderRadius: "8px",
                  transition: "all 0.2s ease",
                }}
                aria-label="GitHub"
              >
                <GithubIcon style={{ width: "16px", height: "16px" }} />
              </a>
              <a
                href="https://twitter.com/suryaraj"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "36px",
                  height: "36px",
                  borderRadius: "8px",
                  transition: "all 0.2s ease",
                }}
                aria-label="Twitter"
              >
                <TwitterIcon style={{ width: "16px", height: "16px" }} />
              </a>
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3
                className="text-foreground"
                style={{
                  fontSize: "14px",
                  fontWeight: 600,
                  marginBottom: "16px",
                }}
              >
                {title}
              </h3>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {links.map((link) => (
                  <li key={link.href} style={{ marginBottom: "12px" }}>
                    {"external" in link && link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted link-underline"
                        style={{
                          fontSize: "14px",
                          textDecoration: "none",
                          transition: "color 0.2s ease",
                        }}
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-muted link-underline"
                        style={{
                          fontSize: "14px",
                          textDecoration: "none",
                          transition: "color 0.2s ease",
                        }}
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "16px",
            borderTop: "1px solid var(--border)",
            padding: "24px 0",
          }}
        >
          <p className="text-muted" style={{ fontSize: "12px" }}>
            © {new Date().getFullYear()} Surya Singularity. MIT License.
          </p>
          <p
            className="text-muted"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "4px",
              fontSize: "12px",
            }}
          >
            Built with{" "}
            <Heart
              style={{
                width: "12px",
                height: "12px",
                color: "#ef4444",
                fill: "#ef4444",
              }}
            />{" "}
            by{" "}
            <a
              href="https://suryaraj.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground"
              style={{ textDecoration: "none", transition: "color 0.2s ease" }}
            >
              Surya Raj
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
