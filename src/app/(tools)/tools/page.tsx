import { prisma } from '@/lib/prisma';
import { auth } from '@/auth';
import type { Tool } from '@prisma/client';
import { ToolCard } from '@/components/tools/ToolCard';
import { ToolFilters } from '@/components/tools/ToolFilters';
import { AnimatedToolGrid, AnimatedToolCardWrapper } from '@/components/tools/AnimatedToolGrid';
import { FadeIn, FadeInH1, FadeInP } from '@/components/layout/FramerAnimations';
import type { ToolCategory } from '@/types';
import { LibraryBig, Search, Bot } from 'lucide-react';
import Link from 'next/link';
import Fuse from 'fuse.js';

export const metadata = {
  title: 'Curated AI Library - Surya Singularity',
  description: 'Explore our premium selection of top-tier AI tools curated for your workflow.',
};

// Fetch tools from database
async function getTools() {
  const tools = await prisma.tool.findMany({
    orderBy: { featured: 'desc' },
  });
  
  return tools.map((t: Tool) => ({
    ...t,
    id: t.slug,
    categories: JSON.parse(t.categories) as ToolCategory[],
    tags: t.tags ? JSON.parse(t.tags) : undefined,
  }));
}

export default async function ToolsDirectoryPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const tools = await getTools();
  const params = await searchParams;
  
  const session = await auth();
  const userId = session?.user?.id;
  
  let favoriteToolIds = new Set<string>();
  
  if (userId) {
    const favorites = await prisma.favorite.findMany({
      where: { userId },
      select: { tool: { select: { slug: true } } }
    });
    favoriteToolIds = new Set(favorites.map((f: { tool: { slug: string } }) => f.tool.slug));
  }

  const query = typeof params.q === 'string' ? params.q.toLowerCase() : '';
  const category = typeof params.category === 'string' ? params.category : 'All';

  let filteredTools = tools;

  if (category && category !== 'All') {
    filteredTools = filteredTools.filter((tool: any) => 
      tool.categories.includes(category as ToolCategory)
    );
  }

  if (query) {
    const fuse = new Fuse(filteredTools, {
      keys: ['name', 'description', 'categories', 'tags'],
      threshold: 0.3,
      distance: 100,
    });
    filteredTools = fuse.search(query).map(result => result.item);
  }

  return (
    <div className="min-h-screen bg-zinc-950 selection:bg-blue-500/30">
      {/* Premium Hero Section with Featured Card */}
      <div className="relative pt-32 pb-20 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto">
        <div className="flex flex-col gap-12">
          {/* Header */}
          <div className="max-w-3xl">
            <FadeIn className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6 transition-all duration-300 hover:bg-blue-500/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              <span className="text-[10px] font-bold tracking-widest uppercase text-blue-400">Discover AI Tools</span>
            </FadeIn>
            <FadeInH1 
              transition={{ delay: 0.1 }}
              className="text-5xl sm:text-7xl font-black tracking-tight text-white mb-6 leading-[1] [text-wrap:balance]"
            >
              The Next Frontier <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-violet-400">of Intelligence</span>
            </FadeInH1>
            <FadeInP 
              transition={{ delay: 0.2 }}
              className="text-lg sm:text-xl text-zinc-400 leading-relaxed font-medium max-w-2xl"
            >
              A curated directory of bleeding-edge AI tools to amplify your human potential. Exploratory, powerful, and built for the future.
            </FadeInP>
          </div>

          {/* Featured Carousel-style Card */}
          {tools.find(t => t.featured) && (
            <FadeIn transition={{ delay: 0.3 }} className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-violet-600 rounded-[2.5rem] blur opacity-25 transition-all duration-700 group-hover:opacity-40" />
              <div className="relative overflow-hidden bg-zinc-900/90 border border-white/10 rounded-[2.5rem] p-8 sm:p-12 backdrop-blur-xl">
                <div className="flex flex-col lg:flex-row items-center gap-10">
                  {/* Image/Icon section */}
                  <div className="w-full lg:w-1/2 relative aspect-[16/9] rounded-3xl overflow-hidden bg-zinc-950 border border-white/5 group-hover:border-blue-500/30 transition-all duration-500">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-transparent" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="h-24 w-24 rounded-[2rem] bg-gradient-to-br from-blue-500 to-indigo-600 shadow-2xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-700">
                        <Bot className="h-12 w-12 text-white" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Content section */}
                  <div className="flex-1 space-y-6">
                    <div className="inline-flex items-center gap-2 text-blue-400 font-bold text-xs tracking-widest uppercase">
                      <span className="h-px w-6 bg-blue-400/50" />
                      Editor's Pick
                    </div>
                    <h2 className="text-4xl sm:text-5xl font-black text-white group-hover:text-blue-400 transition-colors duration-300">
                      {tools.find(t => t.featured)?.name}
                    </h2>
                    <p className="text-xl text-zinc-400 leading-relaxed max-w-xl">
                      {tools.find(t => t.featured)?.description}
                    </p>
                    <div className="flex flex-wrap gap-4 pt-4">
                      <a 
                        href={tools.find(t => t.featured)?.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-8 py-4 rounded-full bg-white text-black font-black text-sm hover:bg-blue-400 hover:text-white transition-all duration-300 uppercase tracking-tighter"
                      >
                        Try Now
                      </a>
                      <Link 
                        href={`/tools/${tools.find(t => t.featured)?.id}`}
                        className="px-8 py-4 rounded-full bg-white/5 text-white border border-white/10 font-black text-sm hover:bg-white/10 transition-all duration-300 uppercase tracking-tighter"
                      >
                        Explore Details
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          )}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative -top-12 z-20">
        <ToolFilters />

        <div className="mt-16 pb-32">
          {filteredTools.length > 0 ? (
            <AnimatedToolGrid>
              {filteredTools.map((tool: any) => (
                <AnimatedToolCardWrapper key={tool.id} id={tool.id}>
                  <ToolCard 
                    tool={tool} 
                    isFavorited={favoriteToolIds.has(tool.id)} 
                  />
                </AnimatedToolCardWrapper>
              ))}
            </AnimatedToolGrid>
          ) : (
            <FadeIn className="text-center py-32 px-8 glass-premium rounded-[3rem] border border-white/10 mt-12">
              <div className="inline-flex items-center justify-center p-6 rounded-full bg-zinc-900 border border-white/5 mb-6">
                <Search className="h-10 w-10 text-zinc-600" />
              </div>
              <h3 className="text-3xl font-black text-white mb-4">No tools found</h3>
              <p className="text-zinc-400 text-lg max-w-md mx-auto">
                We couldn't find any tools matching your search or filters. Try adjusting them to explore more.
              </p>
            </FadeIn>
          )}
        </div>
      </div>
    </div>
  );
}
