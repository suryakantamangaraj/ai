import { BookOpen, Clock, ChevronRight } from "lucide-react";
import { LearnModule } from "@/types";

interface ModuleCardProps {
  module: LearnModule;
}

export function ModuleCard({ module }: ModuleCardProps) {
  const difficultyColors = {
    Beginner: "text-emerald-400 bg-emerald-400/10",
    Intermediate: "text-amber-400 bg-amber-400/10",
    Advanced: "text-rose-400 bg-rose-400/10",
  };

  return (
    <div className="group relative flex flex-col p-6 glass rounded-2xl border border-white/5 hover:border-brand/30 transition-all duration-300">
      <div className="flex items-center justify-between mb-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand/10 text-brand">
          <BookOpen className="h-5 w-5" />
        </div>
        <span
          className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${
            difficultyColors[module.difficulty]
          }`}
        >
          {module.difficulty}
        </span>
      </div>

      <h3 className="text-lg font-bold mb-2 group-hover:text-brand transition-colors">
        {module.order}. {module.title}
      </h3>
      <p className="text-sm text-muted mb-6">
        {module.description}
      </p>

      <div className="flex items-center gap-3 mb-6">
        <div className="flex items-center gap-1 text-xs text-muted font-medium">
          <Clock className="h-4 w-4" />
          {module.duration}
        </div>
        <div className="h-3 w-px bg-white/10" />
        <div className="flex flex-wrap gap-1">
          {module.topics.slice(0, 2).map((topic) => (
            <span key={topic} className="text-[10px] text-muted-foreground uppercase tracking-tight">
              • {topic}
            </span>
          ))}
          {module.topics.length > 2 && (
            <span className="text-[10px] text-muted-foreground">+{module.topics.length - 2} more</span>
          )}
        </div>
      </div>

      <button className="w-full mt-auto py-2.5 rounded-xl bg-white/5 group-hover:bg-brand group-hover:text-white text-sm font-semibold text-foreground transition-all flex items-center justify-center gap-2">
        Start Module
        <ChevronRight className="h-4 w-4" />
      </button>
    </div>
  );
}
