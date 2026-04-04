"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { User, MessageSquare, Copy, Check } from "lucide-react";
import { useState } from "react";

interface ChatMessageProps {
  role: "user" | "assistant";
  content: string;
}

export function ChatMessage({ role, content }: ChatMessageProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(content);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy!", err);
    }
  };

  return (
    <div
      className={`flex flex-col gap-3 p-6 rounded-3xl transition-all ${
        role === "user"
          ? "bg-white/5 border border-white/10"
          : "glass border border-brand/20 bg-brand/5 shadow-inner"
      }`}
    >
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-3">
          <div
            className={`flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br ${
              role === "user"
                ? "from-blue-500 to-indigo-600"
                : "from-brand to-secondary"
            } text-white shadow-lg`}
          >
            {role === "user" ? (
              <User className="h-4 w-4" />
            ) : (
              <MessageSquare className="h-4 w-4" />
            )}
          </div>
          <span className="text-xs font-bold uppercase tracking-widest text-muted">
            {role === "user" ? "You" : "Surya AI"}
          </span>
        </div>
        <button
          onClick={copyToClipboard}
          className="p-1.5 rounded-lg bg-white/5 text-muted hover:text-white transition-all"
        >
          {copied ? (
            <Check className="h-4 w-4 text-emerald-400" />
          ) : (
            <Copy className="h-4 w-4" />
          )}
        </button>
      </div>

      <div className="prose prose-invert prose-brand max-w-none prose-sm leading-relaxed text-foreground/90">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
      </div>
    </div>
  );
}
