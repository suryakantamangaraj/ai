"use client";

import { useState } from "react";
import { Copy, Check, Terminal, ExternalLink } from "lucide-react";
import { PromptTemplate } from "@/types";

interface PromptCardProps {
  template: PromptTemplate;
}

export function PromptCard({ template }: PromptCardProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(template.prompt);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy!", err);
    }
  };

  const difficultyColors = {
    Beginner: "text-emerald-400 bg-emerald-400/10",
    Intermediate: "text-amber-400 bg-amber-400/10",
    Advanced: "text-rose-400 bg-rose-400/10",
  };

  return (
    <div className="group relative flex flex-col p-6 glass rounded-2xl border border-white/5 hover:border-brand/30 transition-all duration-300">
      <div className="flex items-start justify-between mb-4">
        <span
          className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${
            difficultyColors[template.difficulty]
          }`}
        >
          {template.difficulty}
        </span>
        <div className="flex gap-2">
          <button
            onClick={copyToClipboard}
            className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-muted hover:text-foreground transition-all"
            title="Copy prompt"
          >
            {copied ? (
              <Check className="h-4 w-4 text-emerald-400" />
            ) : (
              <Copy className="h-4 w-4" />
            )}
          </button>
        </div>
      </div>

      <h3 className="text-lg font-bold mb-2 group-hover:text-brand transition-colors">
        {template.title}
      </h3>
      <p className="text-sm text-muted mb-6 flex-grow ">
        {template.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-6">
        <span className="px-2 py-0.5 rounded-md bg-brand/5 border border-brand/10 text-[10px] uppercase tracking-wider text-brand font-semibold">
          {template.category}
        </span>
        {template.tags?.map((tag) => (
          <span
            key={tag}
            className="px-2 py-0.5 rounded-md bg-white/5 text-[10px] text-muted-foreground font-medium"
          >
            #{tag}
          </span>
        ))}
      </div>

      <div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between">
        <button
          onClick={copyToClipboard}
          className="flex items-center gap-2 text-sm font-semibold text-foreground hover:text-brand transition-colors"
        >
          <Terminal className="h-4 w-4" />
          Copy Prompt
        </button>
        <button className="text-muted hover:text-brand transition-colors">
          <ExternalLink className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
