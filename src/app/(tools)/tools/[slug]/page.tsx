import fs from 'fs';
import path from 'path';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, CheckCircle2, ShieldCheck, Sparkles, Zap } from 'lucide-react';
import type { AITool } from '@/types';
import { Metadata } from 'next';

// Helper to fetch tools
async function getTools(): Promise<AITool[]> {
  const filePath = path.join(process.cwd(), 'src/data/tools.json');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(fileContents);
}

// Helper to fetch a specific tool
async function getTool(slug: string): Promise<AITool | undefined> {
  const tools = await getTools();
  return tools.find((t) => t.id === slug);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const resolvedParams = await params;
  const tool = await getTool(resolvedParams.slug);
  
  if (!tool) {
    return {
      title: 'Tool Not Found - Surya Singularity',
    };
  }

  return {
    title: `${tool.name} - AI Tools - Surya Singularity`,
    description: tool.description,
  };
}

export async function generateStaticParams() {
  const tools = await getTools();
  return tools.map((tool) => ({
    slug: tool.id,
  }));
}

export default async function ToolDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const resolvedParams = await params;
  const tool = await getTool(resolvedParams.slug);

  if (!tool) {
    notFound();
  }

  // Find related tools (same category, excluding this one)
  const allTools = await getTools();
  const relatedTools = allTools
    .filter((t) => t.id !== tool.id && t.categories.some(c => tool.categories.includes(c)))
    .slice(0, 3);

  return (
    <div className="min-h-screen pb-24 pt-16">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <Link 
          href="/tools" 
          className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to directory
        </Link>

        {/* Hero Section */}
        <div className="relative overflow-hidden rounded-[2.5rem] bg-zinc-900/50 p-8 sm:p-14 mb-12 border border-white/5 shadow-2xl backdrop-blur-3xl">
          {/* Subtle background glow */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10" />
          <div className="pointer-events-none absolute -top-40 -right-40 h-96 w-96 rounded-full bg-blue-500/20 blur-[100px]" />
          
          <div className="relative z-10 flex flex-col lg:flex-row gap-10 lg:gap-16 items-start justify-between">
            <div className="flex-1">
              <div className="flex flex-wrap gap-2.5 mb-8">
                <span className="rounded-full bg-blue-500/10 text-blue-400 font-bold px-4 py-1.5 text-xs border border-blue-500/20 tracking-wide uppercase shadow-[0_0_15px_rgba(59,130,246,0.2)]">
                  {tool.pricing}
                </span>
                {tool.categories.map(cat => (
                  <span key={cat} className="rounded-full bg-zinc-800/80 text-zinc-300 font-medium px-4 py-1.5 text-xs border border-white/10 shadow-sm">
                    {cat}
                  </span>
                ))}
              </div>
              <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white mb-6 drop-shadow-sm">
                {tool.name}
              </h1>
              <p className="text-lg sm:text-xl text-zinc-300 leading-relaxed max-w-3xl mb-10 font-medium">
                {tool.description}
              </p>
              
              <div className="flex flex-wrap items-center gap-4">
                <a 
                  href={tool.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-white text-zinc-950 font-bold hover:bg-zinc-100 transition-all shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:shadow-[0_0_60px_rgba(255,255,255,0.5)] hover:-translate-y-0.5"
                >
                  Visit Website 
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 border-white" />
                </a>
              </div>
            </div>

            {/* Quick Stats/Features Panel */}
            <div className="w-full lg:w-[380px] shrink-0 bg-zinc-950/50 rounded-3xl p-8 border border-white/10 backdrop-blur-md shadow-inner relative overflow-hidden">
              <div className="absolute top-0 right-0 p-32 bg-white/5 blur-[80px] rounded-full pointer-events-none" />
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-blue-400" />
                Highlights
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <ShieldCheck className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-white">Trusted Solution</p>
                    <p className="text-xs text-zinc-400">Widely adopted in the community</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Zap className="h-5 w-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-white">High Performance</p>
                    <p className="text-xs text-zinc-400">Fast and reliable infrastructure</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Sparkles className="h-5 w-5 text-blue-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-white">State of the Art</p>
                    <p className="text-xs text-zinc-400">Powered by advanced AI models</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Details & Related */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-12">
            <section>
              <h2 className="text-2xl font-bold text-white mb-6">About {tool.name}</h2>
              <div className="prose prose-invert max-w-none text-zinc-300">
                <p>
                  {tool.name} is a powerful AI tool categorized under {tool.categories.join(' and ')}. 
                  It provides state-of-the-art capabilities tailored for users looking to enhance their workflow 
                  with {tool.description.toLowerCase()}.
                </p>
                <p>
                  Whether you are a professional or an enthusiast, {tool.name} offers tools designed to be accessible 
                  and efficient. With its {tool.pricing.toLowerCase()} tier, you can explore the platform's features 
                  before committing.
                </p>
              </div>
            </section>
          </div>

          <div>
            <h3 className="text-xl font-bold text-white mb-6">Related Tools</h3>
            {relatedTools.length > 0 ? (
              <div className="space-y-4">
                {relatedTools.map(related => (
                  <Link 
                    key={related.id} 
                    href={`/tools/${related.id}`}
                    className="block p-4 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors group"
                  >
                    <h4 className="font-semibold text-white group-hover:text-blue-400 transition-colors">{related.name}</h4>
                    <p className="text-sm text-zinc-400 mt-1 line-clamp-2">{related.description}</p>
                  </Link>
                ))}
              </div>
            ) : (
              <p className="text-zinc-500 text-sm">No related tools found.</p>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
