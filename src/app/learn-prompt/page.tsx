import Link from "next/link";
import { BookOpen, ArrowLeft } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Learn Prompt Engineering",
  description:
    "Master prompt engineering from basics to advanced techniques. Interactive learning path with examples, quizzes, and hands-on practice.",
};

export default function LearnPromptPage() {
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
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 mb-6">
            <BookOpen className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold mb-3">Learn Prompt Engineering</h1>
          <p className="text-muted max-w-md mb-6">
            Our interactive learning path is being crafted. You&apos;ll soon be
            mastering everything from basic prompting to advanced techniques.
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
