import { prisma } from '@/lib/prisma';
import { auth } from '@/auth';
import type { Tool } from '@prisma/client';
import { ToolCard } from '@/components/tools/ToolCard';
import { ToolFilters } from '@/components/tools/ToolFilters';
import { AnimatedToolGrid, AnimatedToolCardWrapper } from '@/components/tools/AnimatedToolGrid';
import type { ToolCategory } from '@/types';
import { Layers } from 'lucide-react';

export const metadata = {
  title: 'AI Tools Directory - Surya Singularity',
  description: 'A curated list of the best Artificial Intelligence tools across various categories including text, image, code, and more.',
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

  if (query) {
    filteredTools = filteredTools.filter(
      (tool: any) => 
        tool.name.toLowerCase().includes(query) || 
        tool.description.toLowerCase().includes(query)
    );
  }

  if (category && category !== 'All') {
    filteredTools = filteredTools.filter((tool: any) => 
      tool.categories.includes(category as ToolCategory)
    );
  }

  return (

    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-20 pt-12">
          <div className="inline-flex items-center justify-center p-4 rounded-2xl bg-zinc-900 border border-white/5 mb-8 mx-auto shadow-[0_0_30px_rgba(59,130,246,0.15)] ring-1 ring-white/10">
            <Layers className="h-8 w-8 text-blue-400" />
          </div>
          <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60 mb-6 drop-shadow-sm">
            AI Tools Directory
          </h1>
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto leading-relaxed">
            Discover and explore the best Artificial Intelligence tools curated for your workflow. Find what you need to boost your productivity.
          </p>
        </div>

        <ToolFilters />

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
          <div className="text-center py-20 bg-white/5 rounded-2xl border border-white/10">
            <h3 className="text-xl font-semibold text-white mb-2">No tools found</h3>
            <p className="text-zinc-400">
              Try adjusting your search or category filters.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
