import Link from 'next/link';
import { ArrowRight, Bot, Book, BookOpen, Code, Code2, FileText, Film, Headphones, Image, ImageIcon, Layers, MessageSquare, Mic, MonitorPlay, Music, Presentation, Search, Terminal, Video, Star } from 'lucide-react';
import type { AITool } from '@/types';

const iconMap: Record<string, React.ElementType> = {
  ArrowRight, Bot, Book, BookOpen, Code, Code2, FileText, Film, Headphones,
  Image, ImageIcon, Layers, MessageSquare, Mic, MonitorPlay, Music,
  Presentation, Search, Terminal, Video
};

import { FavoriteButton } from './FavoriteButton';

export function ToolCard({ tool, isFavorited = false }: { tool: AITool, isFavorited?: boolean }) {
  const Icon = tool.icon && iconMap[tool.icon] ? iconMap[tool.icon] : Bot;

  const getGradient = (category: string) => {
    switch (category) {
      case 'Text': return 'from-blue-500 to-indigo-600';
      case 'Image': return 'from-cyan-500 to-blue-600';
      case 'Code': return 'from-emerald-500 to-teal-600';
      case 'Video': return 'from-violet-500 to-purple-600';
      case 'Audio': return 'from-pink-500 to-rose-600';
      default: return 'from-zinc-500 to-zinc-700';
    }
  };

  const primaryCategory = tool.categories[0] || 'All';
  const gradientClass = getGradient(primaryCategory as string);

  return (
    <div className="group relative flex items-center gap-6 bg-zinc-900/40 border border-white/5 rounded-3xl p-5 transition-all duration-500 hover:bg-zinc-900/60 hover:border-blue-500/20 hover:shadow-[0_0_30px_rgba(37,99,235,0.1)] overflow-hidden">
      {/* Background Glow on Hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

      {/* Icon Section - Left */}
      <div className={`relative shrink-0 flex h-20 w-20 items-center justify-center rounded-[1.5rem] bg-gradient-to-br ${gradientClass} shadow-2xl transition-transform duration-700 group-hover:scale-105 group-hover:rotate-2`}>
        <Icon className="h-10 w-10 text-white" />
      </div>

      {/* Content Section - Middle */}
      <div className="flex-1 min-w-0 z-10">
        <div className="flex items-center gap-3 mb-1">
          <h3 className="text-xl font-bold text-white truncate group-hover:text-blue-400 transition-colors duration-300">
            {tool.name}
          </h3>
          <span className={`px-2 py-0.5 rounded-lg border text-[10px] font-black uppercase tracking-widest ${
            tool.pricing.toLowerCase() === 'free' 
              ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400' 
              : tool.pricing.toLowerCase() === 'paid'
              ? 'bg-amber-500/10 border-amber-500/20 text-amber-400'
              : 'bg-blue-500/10 border-blue-500/20 text-blue-400'
          }`}>
            {tool.pricing}
          </span>
        </div>
        
        <p className="text-sm text-zinc-400 line-clamp-2 leading-relaxed mb-3 pr-4">
          {tool.description}
        </p>

        <div className="flex items-center gap-4 text-[11px] font-bold text-zinc-500">
          <div className="flex items-center gap-1.5 px-2 py-1 bg-white/5 rounded-md hover:bg-white/10 transition-colors">
            <Layers className="h-3 w-3" />
            <span>{primaryCategory}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Star className="h-3 w-3 text-amber-500" />
            <span>Top Pick</span>
          </div>
        </div>
      </div>

      {/* Action Section - Right */}
      <div className="flex flex-col gap-2 shrink-0 z-10">
        <div className="flex justify-end mb-2">
          <FavoriteButton toolId={tool.id} initialFavorited={isFavorited} />
        </div>
        <a 
          href={tool.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-2.5 text-xs font-black text-black hover:bg-blue-500 hover:text-white transition-all duration-300 uppercase tracking-tighter"
        >
          Visit Site
          <ArrowRight className="h-3 w-3" />
        </a>
        <Link 
          href={`/tools/${tool.id}`}
          className="flex items-center justify-center rounded-xl bg-white/5 border border-white/10 px-5 py-2.5 text-xs font-black text-white hover:bg-white/10 transition-all duration-300 uppercase tracking-tighter"
        >
          Details
        </Link>
      </div>
    </div>
  );
}
