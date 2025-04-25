"use client"

import { Moon, Sun } from "lucide-react"
import { motion } from "framer-motion"
import { useThemeToggle } from "../hooks/use-them-toggle"

export function ThemeToggle() {
  const { theme, toggleTheme } = useThemeToggle()

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
      <button
        onClick={toggleTheme}
        className="p-2 rounded-full bg-zinc-800 hover:bg-zinc-700 transition-colors"
        aria-label="Toggle theme"
      >
        <motion.div initial={{ scale: 0.8 }} animate={{ scale: 1 }} transition={{ duration: 0.2 }} key={theme}>
          {theme === "dark" ? <Moon className="h-5 w-5 text-zinc-400" /> : <Sun className="h-5 w-5 text-amber-500" />}
        </motion.div>
      </button>
    </motion.div>
  )
}
