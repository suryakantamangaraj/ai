"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useState, useEffect } from "react";
import { Search } from "lucide-react";
import type { ToolCategory } from "@/types";

const categories: (ToolCategory | 'All')[] = [
  'All',
  'Text',
  'Image',
  'Video',
  'Code',
  'Audio',
  'Productivity',
  'Research',
  'Data'
];

export function ToolFilters() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const currentCategory = searchParams.get('category') || 'All';
  const currentSearch = searchParams.get('q') || '';

  const [search, setSearch] = useState(currentSearch);

  // Debounce search update
  useEffect(() => {
    const timer = setTimeout(() => {
      createQueryString('q', search);
    }, 400);
    return () => clearTimeout(timer);
  }, [search]);

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      if (value && value !== 'All') {
        params.set(name, value);
      } else {
        params.delete(name);
      }
      router.push(pathname + '?' + params.toString(), { scroll: false });
    },
    [searchParams, pathname, router]
  );

  return (
    <div className="sticky top-16 z-40 -mx-6 px-6 lg:-mx-12 lg:px-12 py-6 mb-12 space-y-8 bg-zinc-950/80 backdrop-blur-2xl border-b border-white/5 shadow-2xl shadow-black/50">
      {/* Premium Search Bar */}
      <div className="relative max-w-3xl mx-auto group z-20">
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/40 to-indigo-600/40 rounded-[2.5rem] blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="relative flex items-center bg-zinc-950/90 rounded-full border border-white/10 shadow-[0_0_40px_rgba(59,130,246,0.15)] backdrop-blur-2xl">
          <div className="pl-6 flex items-center justify-center">
            <Search className="h-6 w-6 text-zinc-400 group-focus-within:text-blue-400 transition-colors" />
          </div>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-transparent py-5 pl-4 pr-8 text-lg text-white placeholder-zinc-500 focus:outline-none"
            placeholder="Search AI tools (e.g., ChatGPT, Midjourney)..."
          />
        </div>
      </div>

      {/* Category Pills */}
      <div className="flex flex-wrap items-center justify-center gap-4 px-4">
        {categories.map((category) => {
          const isActive = currentCategory === category;
          return (
            <button
              key={category}
              onClick={() => createQueryString('category', category)}
              className={`relative rounded-full px-6 py-2.5 text-sm font-medium transition-all duration-300 overflow-hidden ${
                isActive 
                  ? 'text-white' 
                  : 'bg-transparent text-zinc-400 hover:bg-white/5 hover:text-white border border-transparent hover:border-white/10'
              }`}
            >
              {isActive && (
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-indigo-600/90 layer-0 border border-white/10" />
              )}
              {isActive && (
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-400 opacity-0 transition-opacity" />
              )}
              <span className="relative z-10 tracking-wide">{category}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
