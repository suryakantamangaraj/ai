import Link from "next/link";
import { Lightbulb, ArrowLeft } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Prompt Templates",
  description:
    "Browse ready-to-use AI prompt templates for writing, coding, analysis, creativity, and more. Copy, customize, and execute with one click.",
};

export default function PromptTemplatesPage() {
  return (
    <div className="relative z-10 min-h-screen pt-24 pb-16 px-4">
      <div className="mx-auto max-w-4xl">
        <Link
          href="/prompts"
          className="inline-flex items-center gap-2 text-sm text-muted hover:text-foreground transition-colors mb-6"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Prompts
        </Link>

        <div className="flex flex-col items-center justify-center py-24 text-center glass rounded-2xl">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 mb-6">
            <Lightbulb className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold mb-3">Prompt Templates</h1>
          <p className="text-muted max-w-md mb-6">
            Our template gallery is being curated. Soon you&apos;ll have access
            to ready-to-use prompts across every category.
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
