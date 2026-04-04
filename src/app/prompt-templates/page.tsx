"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Lightbulb, ArrowLeft, Search, Filter, Sparkles } from "lucide-react";
import { PromptCard } from "@/components/prompts/PromptCard";
import promptsData from "@/data/prompts.json";
import { PromptTemplate, PromptCategory } from "@/types";

const prompts = promptsData as PromptTemplate[];
const categories: PromptCategory[] = [
  "Writing",
  "Programming",
  "Analysis",
  "Creative",
  "Business",
  "Marketing",
  "Academic",
  "Personal",
];

export default function PromptTemplatesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<PromptCategory | "All">("All");

  const filteredPrompts = useMemo(() => {
    return prompts.filter((prompt) => {
      const matchesSearch =
        prompt.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        prompt.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        prompt.tags?.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      
      const matchesCategory = selectedCategory === "All" || prompt.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className="relative z-10 min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <Link
              href="/prompts"
              className="inline-flex items-center gap-2 text-sm text-muted hover:text-foreground transition-colors mb-6 group"
            >
              <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
              Back to Prompts
            </Link>
            <h1 className="text-4xl font-extrabold mb-4 bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent flex items-center gap-3">
              <Lightbulb className="h-8 w-8 text-amber-400" />
              Prompt Templates
            </h1>
            <p className="text-muted max-w-2xl">
              Browse our curated collection of high-performance AI prompts. Copy, customize, and execute with one click to get the best results from any LLM.
            </p>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-brand/10 border border-brand/20 rounded-full text-brand text-xs font-bold uppercase tracking-widest">
            <Sparkles className="h-4 w-4" />
            {prompts.length} Curated Templates
          </div>
        </div>

        {/* Controls */}
        <div className="flex flex-col lg:flex-row gap-6 mb-12">
          <div className="relative flex-grow">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted" />
            <input
              type="text"
              placeholder="Search templates by title, description, or tags..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:border-brand/50 focus:ring-1 focus:ring-brand/50 transition-all text-sm"
            />
          </div>
          <div className="flex overflow-x-auto pb-2 lg:pb-0 gap-2 no-scrollbar">
            <button
              onClick={() => setSelectedCategory("All")}
              className={`px-4 py-2 rounded-xl text-sm font-medium whitespace-nowrap transition-all ${
                selectedCategory === "All"
                  ? "bg-brand text-white shadow-glow"
                  : "bg-white/5 text-muted hover:bg-white/10"
              }`}
            >
              All Categories
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-xl text-sm font-medium whitespace-nowrap transition-all ${
                  selectedCategory === category
                    ? "bg-brand text-white shadow-glow"
                    : "bg-white/5 text-muted hover:bg-white/10"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        {filteredPrompts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPrompts.map((prompt) => (
              <PromptCard key={prompt.id} template={prompt} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-32 glass rounded-3xl border border-white/5 text-center">
            <div className="h-16 w-16 bg-white/5 rounded-2xl flex items-center justify-center mb-6">
              <Filter className="h-8 w-8 text-muted/50" />
            </div>
            <h3 className="text-xl font-bold mb-2">No templates found</h3>
            <p className="text-muted max-w-xs mx-auto">
              We couldn&apos;t find any templates matching your current search or filters.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("All");
              }}
              className="mt-6 text-brand font-semibold hover:underline"
            >
              Clear all filters
            </button>
          </div>
        )}

        {/* Footer Info */}
        <div className="mt-16 pt-8 border-t border-white/5 text-center">
           <p className="text-sm text-muted">
              Don&apos;t see what you need? <Link href="/chat" className="text-brand hover:underline font-medium">Use our AI Chat</Link> to generate custom prompts.
           </p>
        </div>
      </div>
    </div>
  );
}
