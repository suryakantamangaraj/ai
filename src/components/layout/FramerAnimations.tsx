"use client"

import { motion, type HTMLMotionProps } from "framer-motion"

export function FadeIn({ children, ...props }: HTMLMotionProps<"div">) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export function FadeInH1({ children, ...props }: HTMLMotionProps<"h1">) {
  return (
    <motion.h1
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
      {...props}
    >
      {children}
    </motion.h1>
  )
}

export function FadeInP({ children, ...props }: HTMLMotionProps<"p">) {
  return (
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
      {...props}
    >
      {children}
    </motion.p>
  )
}
