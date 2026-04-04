"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useState, useEffect } from "react";
import { Search } from "lucide-react";
import { motion } from "framer-motion";
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
    <div className="sticky top-20 z-40 mb-12 space-y-10">
      {/* Search Bar - Modern & Centered */}
      <div className="relative max-w-2xl mx-auto group">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/0 via-blue-500/10 to-blue-500/0 rounded-[1.25rem] blur-xl opacity-0 group-focus-within:opacity-100 transition-opacity duration-700" />
        <div className="relative flex items-center bg-zinc-900 border border-white/5 rounded-2xl shadow-2xl transition-all duration-300 group-focus-within:border-blue-500/30 group-focus-within:bg-zinc-900/80">
          <div className="pl-6 flex items-center">
            <Search className="h-5 w-5 text-zinc-500 group-focus-within:text-blue-400 transition-colors" />
          </div>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-transparent py-5 pl-4 pr-8 text-lg text-white placeholder-zinc-600 focus:outline-none font-medium"
            placeholder="Search AI tools..."
          />
        </div>
      </div>

      {/* Category Tabs - Clean & Minimalist */}
      <div className="flex flex-wrap items-center justify-center gap-3">
        {categories.map((category) => {
          const isActive = currentCategory === category;
          return (
            <button
              key={category}
              onClick={() => createQueryString('category', category)}
              className={`relative px-6 py-2.5 rounded-full text-sm font-bold tracking-tight transition-all duration-300 ${
                isActive 
                  ? 'text-white bg-blue-500/20 border border-blue-500/30 shadow-[0_0_15px_rgba(59,130,246,0.2)]' 
                  : 'text-zinc-500 hover:text-zinc-200 bg-white/5 border border-transparent hover:border-white/10'
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>
    </div>
  );
}
