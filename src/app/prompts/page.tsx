import Link from "next/link";
import { BookOpen, Lightbulb, ArrowLeft } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Prompts",
  description:
    "Master prompt engineering with structured learning paths, ready-to-use templates, and interactive execution. Learn, create, and save your prompts.",
};

export default function PromptsPage() {
  return (
    <div className="relative z-10 min-h-screen pt-24 pb-16 px-4">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-12">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted hover:text-foreground transition-colors mb-6"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
          <div className="flex items-center gap-4 mb-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600">
              <BookOpen className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">Prompts</h1>
              <p className="text-muted">
                Learn prompt engineering and explore templates.
              </p>
            </div>
          </div>
        </div>

        {/* Prompt Sections */}
        <div className="grid gap-6 md:grid-cols-2">
          <Link
            href="/learn-prompt"
            className="group glass glass-hover rounded-2xl p-8 transition-all hover:scale-[1.02]"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600">
              <BookOpen className="h-6 w-6 text-white" />
            </div>
            <h2 className="text-xl font-bold mb-2">Learn Prompting</h2>
            <p className="text-sm text-muted">
              Structured learning path from basics to advanced techniques like
              Chain-of-Thought, Tree-of-Thought, and more.
            </p>
            <span className="mt-4 inline-block text-sm font-medium text-brand-light">
              Coming Soon →
            </span>
          </Link>

          <Link
            href="/prompt-templates"
            className="group glass glass-hover rounded-2xl p-8 transition-all hover:scale-[1.02]"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-amber-500 to-orange-600">
              <Lightbulb className="h-6 w-6 text-white" />
            </div>
            <h2 className="text-xl font-bold mb-2">Prompt Templates</h2>
            <p className="text-sm text-muted">
              Ready-to-use prompt templates with variable slots. Copy, customize,
              and execute in Chat with one click.
            </p>
            <span className="mt-4 inline-block text-sm font-medium text-brand-light">
              Coming Soon →
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
