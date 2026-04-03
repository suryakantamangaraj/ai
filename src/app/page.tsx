import Link from "next/link";
import {
  Wrench,
  BookOpen,
  MessageSquare,
  Sparkles,
  ArrowRight,
  Zap,
  Globe,
  Shield,
  Code,
  Layers,
  Brain,
  Star,
  GitFork,
  Users,
} from "lucide-react";
import { GithubIcon } from "@/components/icons";

const features = [
  {
    icon: Wrench,
    title: "AI Tools",
    href: "/tools",
    description:
      "Discover and use the best AI tools, curated and categorized. From text and image generation to code assistance — all in one searchable directory.",
    gradient: "from-violet-500 to-purple-600",
    tags: ["Text", "Image", "Code", "Audio", "Video"],
  },
  {
    icon: BookOpen,
    title: "Prompts",
    href: "/prompts",
    description:
      "Master prompt engineering with structured learning paths, ready-to-use templates, and interactive execution. Save and customize your prompts.",
    gradient: "from-cyan-500 to-blue-600",
    tags: ["Learn", "Templates", "Execute", "Save"],
  },
  {
    icon: MessageSquare,
    title: "Chat",
    href: "/chat",
    description:
      "Chat with open-source AI models through a unified interface. Switch models, refine your input with AI assistance, and get streaming responses.",
    gradient: "from-amber-500 to-orange-600",
    tags: ["Llama", "Mixtral", "DeepSeek", "Streaming"],
  },
];

const whyItems = [
  { icon: Zap, title: "Lightning Fast", description: "Powered by Groq LPU for near-instant AI responses." },
  { icon: Shield, title: "100% Free & Open", description: "No paywalls, no hidden costs. MIT licensed, forever." },
  { icon: Globe, title: "Unified Experience", description: "Tools, prompts, and chat — one platform, no context switching." },
  { icon: Code, title: "Developer Friendly", description: "Built with Next.js, TypeScript, and modern best practices." },
  { icon: Layers, title: "Multi-Model", description: "Switch between Llama, Mixtral, DeepSeek, and more." },
  { icon: Brain, title: "Smart Refinement", description: "AI-powered input enhancement before you even send." },
];

const stats = [
  { icon: Wrench, value: "50+", label: "AI Tools", color: "text-violet-400" },
  { icon: BookOpen, value: "30+", label: "Prompt Templates", color: "text-cyan-400" },
  { icon: Layers, value: "5+", label: "AI Models", color: "text-amber-400" },
  { icon: Star, value: "MIT", label: "Licensed", color: "text-emerald-400" },
];

export default function Home() {
  return (
    <main>
      {/* ── Background Effects ── */}
      <div
        className="pointer-events-none fixed inset-0"
        style={{ zIndex: 0 }}
        aria-hidden="true"
      >
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div
          className="absolute left-1/2 rounded-full"
          style={{
            top: "-160px",
            width: "800px",
            height: "600px",
            transform: "translateX(-50%)",
            background: "rgba(124, 58, 237, 0.08)",
            filter: "blur(120px)",
          }}
        />
      </div>

      {/* ════════════  HERO  ════════════ */}
      <section
        id="hero"
        className="relative flex flex-col items-center justify-center text-center"
        style={{
          zIndex: 1,
          minHeight: "100vh",
          paddingTop: "96px",
          paddingBottom: "80px",
          paddingLeft: "24px",
          paddingRight: "24px",
        }}
      >
        {/* Badge */}
        <div style={{ marginBottom: "32px" }}>
          <span
            className="inline-flex items-center gap-2 rounded-full border border-border text-muted"
            style={{
              background: "rgba(24,24,27,0.8)",
              backdropFilter: "blur(8px)",
              padding: "6px 16px",
              fontSize: "12px",
              fontWeight: 500,
            }}
          >
            <span
              className="rounded-full bg-emerald-500"
              style={{ width: "8px", height: "8px", display: "inline-block" }}
            />
            Open Source &amp; Free Forever
          </span>
        </div>

        {/* Heading */}
        <h1
          style={{
            maxWidth: "800px",
            fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
            fontWeight: 800,
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
          }}
        >
          One Place for{" "}
          <span className="gradient-text-hero">All AI Solutions</span>
        </h1>

        {/* Subtitle */}
        <p
          className="text-muted"
          style={{
            maxWidth: "600px",
            marginTop: "24px",
            fontSize: "clamp(1rem, 2vw, 1.25rem)",
            lineHeight: 1.6,
          }}
        >
          Discover curated AI tools, master prompt engineering, and chat with
          open-source models — all unified in a single, beautiful platform.
        </p>

        {/* CTA Buttons */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center"
          style={{ marginTop: "40px", gap: "16px" }}
        >
          <Link
            href="/chat"
            id="hero-cta-primary"
            className="group inline-flex items-center justify-center gap-2 rounded-full text-white"
            style={{
              background: "linear-gradient(135deg, #7c3aed, #06b6d4)",
              padding: "14px 32px",
              fontSize: "14px",
              fontWeight: 600,
              transition: "all 0.25s ease",
              boxShadow: "0 4px 16px rgba(124,58,237,0.3)",
            }}
          >
            <MessageSquare style={{ width: "16px", height: "16px" }} />
            Start Chatting — Free
            <ArrowRight
              style={{ width: "16px", height: "16px" }}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
          <Link
            href="/tools"
            id="hero-cta-secondary"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-border text-foreground"
            style={{
              background: "rgba(24,24,27,0.8)",
              backdropFilter: "blur(8px)",
              padding: "14px 32px",
              fontSize: "14px",
              fontWeight: 600,
              transition: "all 0.25s ease",
            }}
          >
            <Wrench style={{ width: "16px", height: "16px" }} />
            Explore AI Tools
          </Link>
        </div>

        {/* Scroll Indicator */}
        <div
          className="flex flex-col items-center text-muted"
          style={{ marginTop: "80px", opacity: 0.4, gap: "8px" }}
        >
          <span style={{ fontSize: "11px" }}>Scroll to explore</span>
          <div
            style={{
              width: "1px",
              height: "32px",
              background: "linear-gradient(to bottom, var(--muted), transparent)",
            }}
          />
        </div>
      </section>

      {/* ════════════  FEATURES  ════════════ */}
      <section
        id="features"
        style={{ position: "relative", zIndex: 1, padding: "96px 24px" }}
      >
        <div style={{ maxWidth: "1120px", margin: "0 auto" }}>
          {/* Section Header */}
          <div style={{ textAlign: "center", marginBottom: "64px" }}>
            <span
              className="text-brand-light"
              style={{
                display: "inline-block",
                marginBottom: "16px",
                fontSize: "13px",
                fontWeight: 600,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
              }}
            >
              What We Offer
            </span>
            <h2
              style={{
                fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                fontWeight: 700,
                letterSpacing: "-0.01em",
              }}
            >
              Three Pillars of AI{" "}
              <span className="gradient-text">Excellence</span>
            </h2>
            <p
              className="text-muted"
              style={{
                maxWidth: "520px",
                margin: "16px auto 0",
                fontSize: "15px",
              }}
            >
              Everything you need to leverage AI effectively — discover, learn,
              and create.
            </p>
          </div>

          {/* Feature Cards Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "24px",
            }}
          >
            {features.map((feature) => (
              <Link
                key={feature.title}
                href={feature.href}
                id={`feature-${feature.title.toLowerCase().replace(/\s/g, "-")}`}
                className="group glass glass-hover"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  padding: "32px",
                  borderRadius: "16px",
                  textDecoration: "none",
                  transition: "transform 0.25s ease",
                }}
              >
                {/* Icon */}
                <div
                  className={`bg-gradient-to-br ${feature.gradient}`}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "56px",
                    height: "56px",
                    borderRadius: "12px",
                    marginBottom: "24px",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
                  }}
                >
                  <feature.icon
                    style={{ width: "28px", height: "28px", color: "white" }}
                  />
                </div>

                {/* Title */}
                <h3
                  className="text-foreground"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    fontSize: "20px",
                    fontWeight: 700,
                    marginBottom: "12px",
                  }}
                >
                  {feature.title}
                  <ArrowRight
                    className="transition-all group-hover:opacity-100 group-hover:translate-x-0"
                    style={{
                      width: "16px",
                      height: "16px",
                      opacity: 0,
                      transform: "translateX(-8px)",
                    }}
                  />
                </h3>

                {/* Description */}
                <p
                  className="text-muted"
                  style={{
                    fontSize: "14px",
                    lineHeight: 1.7,
                    marginBottom: "20px",
                    flex: 1,
                  }}
                >
                  {feature.description}
                </p>

                {/* Tags */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  {feature.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        padding: "4px 12px",
                        borderRadius: "9999px",
                        background: "var(--surface-elevated)",
                        fontSize: "12px",
                        fontWeight: 500,
                        color: "var(--muted)",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════  STATS  ════════════ */}
      <section
        id="stats"
        style={{ position: "relative", zIndex: 1, padding: "64px 24px" }}
      >
        <div
          className="glass"
          style={{
            maxWidth: "900px",
            margin: "0 auto",
            borderRadius: "16px",
            padding: "48px 32px",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "32px",
            }}
          >
            {stats.map((stat) => (
              <div
                key={stat.label}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <stat.icon
                  className={stat.color}
                  style={{ width: "24px", height: "24px", marginBottom: "12px" }}
                />
                <span
                  className="text-foreground"
                  style={{ fontSize: "30px", fontWeight: 800 }}
                >
                  {stat.value}
                </span>
                <span
                  className="text-muted"
                  style={{ marginTop: "4px", fontSize: "14px" }}
                >
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════  WHY SINGULARITY  ════════════ */}
      <section
        id="why"
        style={{ position: "relative", zIndex: 1, padding: "96px 24px" }}
      >
        <div style={{ maxWidth: "1120px", margin: "0 auto" }}>
          {/* Section Header */}
          <div style={{ textAlign: "center", marginBottom: "64px" }}>
            <span
              className="text-secondary-light"
              style={{
                display: "inline-block",
                marginBottom: "16px",
                fontSize: "13px",
                fontWeight: 600,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
              }}
            >
              Why Singularity
            </span>
            <h2
              style={{
                fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                fontWeight: 700,
                letterSpacing: "-0.01em",
              }}
            >
              Built Different,{" "}
              <span className="gradient-text">Built Better</span>
            </h2>
          </div>

          {/* Why Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "24px",
            }}
          >
            {whyItems.map((item) => (
              <div
                key={item.title}
                className="group glass glass-hover"
                style={{
                  padding: "24px",
                  borderRadius: "12px",
                  transition: "all 0.25s ease",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "40px",
                    height: "40px",
                    borderRadius: "8px",
                    background: "var(--surface-elevated)",
                    marginBottom: "16px",
                    transition: "background 0.25s ease",
                  }}
                  className="group-hover:!bg-brand/10"
                >
                  <item.icon
                    className="text-brand-light"
                    style={{ width: "20px", height: "20px" }}
                  />
                </div>
                <h3
                  className="text-foreground"
                  style={{
                    fontSize: "16px",
                    fontWeight: 600,
                    marginBottom: "8px",
                  }}
                >
                  {item.title}
                </h3>
                <p
                  className="text-muted"
                  style={{ fontSize: "14px", lineHeight: 1.6 }}
                >
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════  OPEN SOURCE CTA  ════════════ */}
      <section
        id="open-source"
        style={{ position: "relative", zIndex: 1, padding: "96px 24px" }}
      >
        <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
          <div
            className="glass"
            style={{
              borderRadius: "16px",
              padding: "64px 32px",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Background gradient overlay */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(135deg, rgba(124,58,237,0.15), rgba(6,182,212,0.08), rgba(245,158,11,0.06))",
                backgroundSize: "200% 200%",
                animation: "gradient-shift 8s ease infinite",
                zIndex: 0,
              }}
            />

            <div style={{ position: "relative", zIndex: 1 }}>
              {/* Icon */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginBottom: "24px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "64px",
                    height: "64px",
                    borderRadius: "16px",
                    background: "linear-gradient(135deg, #7c3aed, #06b6d4)",
                  }}
                >
                  <Sparkles
                    style={{ width: "32px", height: "32px", color: "white" }}
                  />
                </div>
              </div>

              <h2
                style={{
                  fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                  fontWeight: 700,
                  marginBottom: "16px",
                  letterSpacing: "-0.01em",
                }}
              >
                Open Source &amp;{" "}
                <span className="gradient-text">Community Driven</span>
              </h2>

              <p
                className="text-muted"
                style={{
                  maxWidth: "480px",
                  margin: "0 auto 32px",
                  fontSize: "15px",
                  lineHeight: 1.6,
                }}
              >
                Surya Singularity is MIT licensed and built in the open. Star the
                repo, contribute features, or fork it to build your own AI hub.
              </p>

              {/* Buttons */}
              <div
                className="flex flex-col sm:flex-row items-center justify-center"
                style={{ gap: "16px" }}
              >
                <a
                  href="https://github.com/suryakantamangaraj/ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  id="oss-github-cta"
                  className="group inline-flex items-center justify-center"
                  style={{
                    gap: "8px",
                    padding: "12px 24px",
                    borderRadius: "9999px",
                    background: "var(--foreground)",
                    color: "var(--background)",
                    fontSize: "14px",
                    fontWeight: 600,
                    transition: "transform 0.25s ease",
                    textDecoration: "none",
                  }}
                >
                  <GithubIcon style={{ width: "16px", height: "16px" }} />
                  Star on GitHub
                  <Star
                    className="transition-transform group-hover:scale-125"
                    style={{ width: "16px", height: "16px" }}
                  />
                </a>
                <a
                  href="https://github.com/suryakantamangaraj/ai/fork"
                  target="_blank"
                  rel="noopener noreferrer"
                  id="oss-fork-cta"
                  className="inline-flex items-center justify-center border border-border text-foreground"
                  style={{
                    gap: "8px",
                    padding: "12px 24px",
                    borderRadius: "9999px",
                    fontSize: "14px",
                    fontWeight: 600,
                    transition: "all 0.25s ease",
                    textDecoration: "none",
                  }}
                >
                  <GitFork style={{ width: "16px", height: "16px" }} />
                  Fork Project
                </a>
              </div>

              {/* Contributors hint */}
              <div
                className="text-muted"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                  marginTop: "32px",
                  fontSize: "12px",
                }}
              >
                <Users style={{ width: "14px", height: "14px" }} />
                <span>Join the community of contributors</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════  FINAL CTA  ════════════ */}
      <section
        id="final-cta"
        style={{
          position: "relative",
          zIndex: 1,
          padding: "80px 24px",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "clamp(1.5rem, 3vw, 2rem)",
            fontWeight: 700,
            marginBottom: "16px",
          }}
        >
          Ready to explore the{" "}
          <span className="gradient-text">AI universe</span>?
        </h2>
        <p
          className="text-muted"
          style={{
            maxWidth: "420px",
            margin: "0 auto 32px",
            fontSize: "15px",
          }}
        >
          No sign-up required. Start discovering, learning, and chatting — right
          now.
        </p>
        <Link
          href="/chat"
          id="final-cta-button"
          className="group inline-flex items-center justify-center text-white"
          style={{
            gap: "8px",
            padding: "16px 32px",
            borderRadius: "9999px",
            background: "linear-gradient(135deg, #7c3aed, #06b6d4)",
            fontSize: "16px",
            fontWeight: 600,
            transition: "all 0.25s ease",
            boxShadow: "0 4px 16px rgba(124,58,237,0.3)",
            textDecoration: "none",
          }}
        >
          Launch Singularity
          <ArrowRight
            className="transition-transform group-hover:translate-x-1"
            style={{ width: "20px", height: "20px" }}
          />
        </Link>
      </section>
    </main>
  );
}
