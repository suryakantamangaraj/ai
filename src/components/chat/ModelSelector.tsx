"use client";

import { Check, ChevronDown, Zap, Cpu, BrainIcon } from "lucide-react";
import { useState } from "react";

export const MODELS = [
  {
    id: "llama-3.3-70b-versatile",
    name: "Llama 3.3 70B",
    description: "Versatile, high-reasoning model for complex tasks.",
    icon: BrainIcon,
    tag: "Most Popular",
  },
  {
    id: "mixtral-8x7b-32768",
    name: "Mixtral 8x7B",
    description: "MoE architecture, great for general purpose.",
    icon: Cpu,
    tag: "High Context",
  },
  {
    id: "deepseek-r1-distill-llama-70b",
    name: "DeepSeek R1",
    description: "Reasoning specialized model with Llama 70B.",
    icon: Zap,
    tag: "Fast Reasoning",
  },
];

interface ModelSelectorProps {
  selectedModelId: string;
  onSelect: (id: string) => void;
}

export function ModelSelector({ selectedModelId, onSelect }: ModelSelectorProps) {
  const [isOpen, setIsOpen] = useState(false);
  const selectedModel = MODELS.find((m) => m.id === selectedModelId) || MODELS[0];

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-3 px-4 py-2 glass border border-white/5 rounded-xl hover:border-brand/30 transition-all text-left min-w-[200px]"
      >
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand/10 text-brand">
          <selectedModel.icon className="h-4 w-4" />
        </div>
        <div className="flex-grow">
          <p className="text-xs font-bold text-white">{selectedModel.name}</p>
          <p className="text-[10px] text-muted truncate max-w-[120px]">
            {selectedModel.description}
          </p>
        </div>
        <ChevronDown className={`h-4 w-4 text-muted transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-20"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute top-full mt-2 w-72 glass border border-white/10 rounded-2xl shadow-2xl z-30 p-2 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
            <p className="px-3 py-2 text-[10px] font-bold text-muted uppercase tracking-widest">
              Select AI Model
            </p>
            {MODELS.map((model) => (
              <button
                key={model.id}
                onClick={() => {
                  onSelect(model.id);
                  setIsOpen(false);
                }}
                className={`w-full flex items-start gap-3 p-3 rounded-xl transition-all ${
                  selectedModelId === model.id
                    ? "bg-brand/10 border border-brand/20"
                    : "hover:bg-white/5 border border-transparent"
                }`}
              >
                <div className={`flex h-8 w-8 items-center justify-center rounded-lg ${
                   selectedModelId === model.id ? "bg-brand text-white" : "bg-white/5 text-muted"
                }`}>
                  <model.icon className="h-4 w-4" />
                </div>
                <div className="flex-grow text-left">
                   <div className="flex items-center gap-2 mb-0.5">
                      <p className="text-xs font-bold text-white">{model.name}</p>
                      {model.tag && (
                        <span className="text-[8px] px-1.5 py-0.5 rounded-full bg-white/5 text-muted font-bold uppercase tracking-wider">
                           {model.tag}
                        </span>
                      )}
                   </div>
                   <p className="text-[10px] text-muted leading-relaxed">
                      {model.description}
                   </p>
                </div>
                {selectedModelId === model.id && (
                  <Check className="h-4 w-4 text-brand shrink-0 mt-2" />
                )}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
