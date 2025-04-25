"use client"

import { useState, useEffect } from "react"
import { useTheme } from "next-themes"

export function useThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  return {
    theme: mounted ? theme : undefined,
    toggleTheme,
    mounted,
  }
}
