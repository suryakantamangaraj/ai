"use client"

import { useState } from "react"
import { Heart } from "lucide-react"
import { toggleFavorite } from "@/actions/tools"

export function FavoriteButton({ 
  toolId, 
  initialFavorited 
}: { 
  toolId: string, 
  initialFavorited: boolean 
}) {
  const [isFavorited, setIsFavorited] = useState(initialFavorited)
  const [isPending, setIsPending] = useState(false)

  const handleToggle = async () => {
    setIsPending(true)
    // Optimistic UI update
    setIsFavorited(!isFavorited)
    try {
      const result = await toggleFavorite(toolId)
      setIsFavorited(result)
    } catch (e) {
      // Revert if error
      setIsFavorited(isFavorited)
      // Ideally show a toast notification here
      alert("Please log in to save tools!")
    } finally {
      setIsPending(false)
    }
  }

  return (
    <button
      onClick={handleToggle}
      disabled={isPending}
      className="group relative flex h-9 w-9 items-center justify-center rounded-full bg-zinc-900 border border-white/5 shadow-sm transition-all hover:border-pink-500/50 hover:bg-pink-500/10 focus:outline-none focus:ring-2 focus:ring-pink-500/50"
      aria-label="Add to favorites"
    >
      <Heart 
        className={`h-4 w-4 transition-all duration-300 ${
          isFavorited 
            ? "fill-pink-500 text-pink-500 scale-110 drop-shadow-[0_0_10px_rgba(236,72,153,0.5)]" 
            : "text-zinc-400 group-hover:text-pink-400"
        }`} 
      />
    </button>
  )
}
