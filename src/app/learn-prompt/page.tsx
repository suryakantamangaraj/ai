import Link from "next/link";
import { BookOpen, ArrowLeft, GraduationCap, Trophy, Sparkles } from "lucide-react";
import type { Metadata } from "next";
import { ModuleCard } from "@/components/prompts/ModuleCard";
import modulesData from "@/data/modules.json";
import { LearnModule } from "@/types";

const modules = modulesData as LearnModule[];

export const metadata: Metadata = {
  title: "Learn Prompt Engineering | Surya Singularity",
  description:
    "Master prompt engineering from basics to advanced techniques. Interactive learning path with examples, quizzes, and hands-on practice.",
};

export default function LearnPromptPage() {
  return (
    <div className="relative z-10 min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Breadcrumb */}
        <div className="flex items-center gap-4 mb-8">
          <Link
            href="/prompts"
            className="flex items-center gap-2 text-sm text-muted hover:text-foreground transition-colors group"
          >
            <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            Back to Prompts
          </Link>
          <div className="h-4 w-px bg-white/10" />
          <span className="text-sm text-muted">Education</span>
        </div>

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand/10 text-brand text-xs font-bold mb-6 tracking-wide uppercase border border-brand/20">
              <GraduationCap className="h-4 w-4" />
              Interactive Learning Path
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
              Master the Art of <span className="text-brand">Prompt Engineering</span>
            </h1>
            <p className="text-lg text-muted max-w-xl leading-relaxed mb-8">
              Unlock the full potential of Large Language Models. From basic structured inputs to complex reasoning chains and orchestration.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 px-4 py-2 glass rounded-xl text-sm font-medium border border-white/5">
                <Trophy className="h-4 w-4 text-amber-400" />
                5 Comprehensive Modules
              </div>
              <div className="flex items-center gap-2 px-4 py-2 glass rounded-xl text-sm font-medium border border-white/5">
                <Sparkles className="h-4 w-4 text-brand" />
                Certificate of Completion
              </div>
            </div>
          </div>
          <div className="hidden lg:block relative">
             <div className="absolute -inset-4 bg-brand/20 blur-3xl rounded-full" />
             <div className="relative glass p-8 rounded-3xl border border-white/10 shadow-2xl">
                <div className="flex items-center gap-3 mb-6">
                   <div className="h-3 w-3 rounded-full bg-rose-500" />
                   <div className="h-3 w-3 rounded-full bg-amber-500" />
                   <div className="h-3 w-3 rounded-full bg-emerald-500" />
                </div>
                <div className="space-y-4">
                   <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                      <p className="text-xs text-brand mb-2 font-mono uppercase tracking-widest">Input Prompt</p>
                      <p className="text-sm font-mono text-white/80 line-clamp-2 italic">Determine the sentiment of this review and provide a structured JSON output with confidence score...</p>
                   </div>
                   <div className="p-4 bg-brand/5 rounded-xl border border-brand/20">
                      <p className="text-xs text-emerald-400 mb-2 font-mono uppercase tracking-widest">Model Response</p>
                      <p className="text-sm font-mono text-emerald-400/80">{"{ \"sentiment\": \"positive\", \"score\": 0.98 }"}</p>
                   </div>
                </div>
             </div>
          </div>
        </div>

        {/* Modules Grid */}
        <div className="mb-20">
           <div className="flex items-end justify-between mb-8">
              <div>
                 <h2 className="text-2xl font-bold mb-2">Curriculum</h2>
                 <p className="text-sm text-muted">Follow the path from beginner to expert architect.</p>
              </div>
              <div className="text-sm font-semibold text-brand px-3 py-1 rounded-lg bg-brand/10">
                 0% Complete
              </div>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {modules.map((module) => (
                <ModuleCard key={module.id} module={module} />
              ))}
           </div>
        </div>

        {/* CTA Section */}
        <div className="relative rounded-3xl overflow-hidden glass border border-white/10 p-12 text-center group">
           <div className="absolute inset-0 bg-gradient-to-br from-brand/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
           <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold mb-4 italic">Ready to become a Prompt Engineer?</h2>
              <p className="text-muted mb-8 italic">Join 1,000+ others mastering the skills that define the future of AI interaction.</p>
              <button className="px-8 py-3 rounded-full bg-brand text-white font-bold hover:shadow-glow transition-all">
                Enroll in full course — Free
              </button>
           </div>
        </div>
      </div>
    </div>
  );
}
