import Link from 'next/link';
import { ArrowRight, Bot, Book, BookOpen, Code, Code2, FileText, Film, Headphones, Image, ImageIcon, Layers, MessageSquare, Mic, MonitorPlay, Music, Presentation, Search, Terminal, Video } from 'lucide-react';
import type { AITool } from '@/types';

const iconMap: Record<string, React.ElementType> = {
  ArrowRight, Bot, Book, BookOpen, Code, Code2, FileText, Film, Headphones,
  Image, ImageIcon, Layers, MessageSquare, Mic, MonitorPlay, Music,
  Presentation, Search, Terminal, Video
};

import { FavoriteButton } from './FavoriteButton';

export function ToolCard({ tool, isFavorited = false }: { tool: AITool, isFavorited?: boolean }) {
  const Icon = tool.icon && iconMap[tool.icon] ? iconMap[tool.icon] : Bot;

  return (
    <div className="group relative flex flex-col justify-between overflow-hidden rounded-[2rem] border border-white/5 bg-zinc-950 p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(59,130,246,0.3)]">
      
      {/* Outer Glow Border Effect */}
      <div className="absolute inset-0 rounded-[2rem] border border-white/5 group-hover:border-blue-500/30 transition-colors duration-500" />
      
      {/* Inner Top Edge Glow */}
      <div className="absolute inset-x-0 -top-px h-px w-1/2 mx-auto bg-gradient-to-r from-transparent via-blue-500/50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      
      {/* Background glow on hover */}
      <div className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{ background: 'radial-gradient(circle at 50% 0%, rgba(59,130,246,0.1) 0%, transparent 70%)' }} />

      <div className="relative z-10">
        <div className="mb-5 flex items-center justify-between">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-800/80 shadow-inner ring-1 ring-white/10 group-hover:ring-white/20 transition-all">
            <Icon className="h-6 w-6 text-zinc-100" />
          </div>
          <div className="flex items-center gap-2">
            <span className="rounded-full bg-blue-500/10 border border-blue-500/20 px-3 py-1 text-[10px] font-bold tracking-wider uppercase text-blue-400">
              {tool.pricing}
            </span>
            <FavoriteButton toolId={tool.id} initialFavorited={isFavorited} />
          </div>
        </div>
        
        <h3 className="mb-2 text-xl font-bold text-white transition-colors group-hover:text-blue-400">{tool.name}</h3>
        <p className="mb-5 text-sm leading-relaxed text-zinc-400 line-clamp-3">{tool.description}</p>
        
        <div className="mb-6 flex flex-wrap gap-2">
          {tool.categories.map((category) => (
            <span 
              key={category} 
              className="rounded-lg bg-white/5 px-2.5 py-1 text-xs font-medium text-zinc-300 ring-1 ring-white/10"
            >
              {category}
            </span>
          ))}
        </div>
      </div>

      <div className="relative z-10 flex items-center justify-between pt-4 border-t border-white/10">
        <Link 
          href={`/tools/${tool.id}`}
          className="text-sm font-medium text-zinc-400 hover:text-white transition-colors flex items-center gap-1.5"
        >
          View Details
        </Link>
        <a 
          href={tool.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors"
        >
          Visit Site 
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </a>
      </div>
    </div>
  );
}
