import { prisma } from '@/lib/prisma';
import { auth } from '@/auth';
import { ToolCard } from '@/components/tools/ToolCard';
import type { ToolCategory } from '@/types';
import { Heart, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { redirect } from 'next/navigation';

export const metadata = {
  title: 'My Saved AI Tools - Surya Singularity',
  description: 'Your personal collection of saved AI tools across various categories.',
};

export default async function SavedToolsPage() {
  const session = await auth();
  
  if (!session?.user?.id) {
    redirect('/api/auth/signin?callbackUrl=/tools/saved');
  }

  const userId = session.user.id;

  const favorites = await prisma.favorite.findMany({
    where: { userId },
    include: {
      tool: true
    },
    orderBy: { tool: { name: 'asc' } }
  });

  const tools = favorites.map((f: any) => ({
    ...f.tool,
    id: f.tool.slug,
    categories: JSON.parse(f.tool.categories) as ToolCategory[],
  }));

  return (
    <div className="min-h-screen pb-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="pt-12 mb-12">
          <Link href="/tools" className="inline-flex items-center gap-2 text-sm font-medium text-zinc-400 hover:text-white transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" />
            Back to Directory
          </Link>
          <div className="flex items-center gap-4">
            <div className="flex items-center justify-center p-3 rounded-xl bg-pink-500/10 border border-pink-500/20">
              <Heart className="h-6 w-6 text-pink-500 fill-pink-500" />
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight text-white drop-shadow-sm">
              My Saved Tools
            </h1>
          </div>
          <p className="mt-4 text-lg text-zinc-400 max-w-2xl">
            Your personal collection of favorite AI tools, carefully curated by you for immediate access.
          </p>
        </div>

        {tools.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tools.map((tool: any) => (
              <ToolCard 
                key={tool.id} 
                tool={tool} 
                isFavorited={true} 
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-24 bg-white/5 rounded-3xl border border-white/10 max-w-xl mx-auto mt-12">
            <Heart className="w-16 h-16 text-zinc-600 mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-white mb-3">No tools saved yet</h3>
            <p className="text-zinc-400 mb-8 max-w-sm mx-auto">
              Explore our directory and click the heart icon on any tool you want to save to your personal collection.
            </p>
            <Link 
              href="/tools"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-white text-zinc-950 font-semibold hover:bg-zinc-200 transition-colors"
            >
              Explore Tools
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
