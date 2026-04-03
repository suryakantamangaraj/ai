"use client"

import { motion, AnimatePresence } from "framer-motion"

export function AnimatedToolGrid({ children }: { children: React.ReactNode }) {
  return (
    <motion.div 
      layout
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
    >
      <AnimatePresence mode="popLayout">
        {children}
      </AnimatePresence>
    </motion.div>
  )
}

export function AnimatedToolCardWrapper({ children, id }: { children: React.ReactNode, id: string }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ opacity: { duration: 0.2 }, layout: { type: "spring", bounce: 0.3 } }}
      key={id}
      className="h-full flex"
    >
      <div className="w-full flex-1">
        {children}
      </div>
    </motion.div>
  )
}
