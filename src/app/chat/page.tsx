import Link from "next/link";
import { MessageSquare, ArrowLeft, Sparkles } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Chat",
  description:
    "Chat with open-source AI models through a unified interface. Switch between Llama, Mixtral, DeepSeek and more. Free, fast, and private.",
};

export default function ChatPage() {
  return (
    <div className="relative z-10 min-h-screen pt-24 pb-16 px-4">
      <div className="mx-auto max-w-4xl">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-muted hover:text-foreground transition-colors mb-6"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>

        <div className="flex flex-col items-center justify-center py-24 text-center glass rounded-2xl">
          <div className="relative mb-6">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 animate-pulse-glow">
              <MessageSquare className="h-8 w-8 text-white" />
            </div>
            <div className="absolute -top-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500">
              <Sparkles className="h-3 w-3 text-white" />
            </div>
          </div>
          <h1 className="text-3xl font-bold mb-3">AI Chat</h1>
          <p className="text-muted max-w-md mb-2">
            Our unified chat interface is launching soon. Chat with Llama,
            Mixtral, DeepSeek, and more — all free.
          </p>
          <p className="text-xs text-muted/60 mb-6">
            Powered by Groq LPU for near-instant responses.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand to-secondary px-6 py-2.5 text-sm font-semibold text-white hover:shadow-glow transition-all"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
