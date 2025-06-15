'use client'

import { motion } from "framer-motion"
import { ReactNode } from "react"

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
  delay?: number
  direction?: "up" | "down" | "left" | "right"
  id?: string
}

export function AnimatedSection({ 
  children, 
  className = "", 
  delay = 0,
  direction = "up",
  id
}: AnimatedSectionProps) {
  const variants = {
    hidden: {
      opacity: 0,
      y: direction === "up" ? 20 : direction === "down" ? -20 : 0,
      x: direction === "left" ? 20 : direction === "right" ? -20 : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: 0.5,
        delay,
        ease: "easeOut",
      },
    },
  }

  return (
    <motion.div
      id={id}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  )
}

interface AnimatedElementProps {
  children: ReactNode
  className?: string
  delay?: number
}

export function AnimatedElement({ 
  children, 
  className = "", 
  delay = 0 
}: AnimatedElementProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.2, delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
} 