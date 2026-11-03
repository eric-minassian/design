"use client"

import * as React from "react"

export type Theme = "system" | "light" | "dark"
export type Accent = "indigo" | "rose" | "grove" | "ocean" | "ember" | "iris"

export const ACCENTS: readonly Accent[] = ["indigo", "rose", "grove", "ocean", "ember", "iris"]

const THEME_KEY = "design:theme"
const ACCENT_KEY = "design:accent"

function read<T extends string>(key: string, fallback: T): T {
  try {
    return (window.localStorage.getItem(key) as T | null) ?? fallback
  } catch {
    return fallback
  }
}

function write(key: string, value: string) {
  try {
    window.localStorage.setItem(key, value)
  } catch {
    // Storage can be blocked; the choice still applies for this page view.
  }
}

function systemIsDark() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches
}

function applyTheme(theme: Theme) {
  const root = document.documentElement
  const dark = theme === "dark" || (theme === "system" && systemIsDark())
  root.classList.add("no-transitions")
  root.classList.toggle("dark", dark)
  window.requestAnimationFrame(() => root.classList.remove("no-transitions"))
}

function applyAccent(accent: Accent) {
  const root = document.documentElement
  if (accent === "indigo") root.removeAttribute("data-accent")
  else root.setAttribute("data-accent", accent)
}

/**
 * Inline this in <head> before anything paints to avoid a flash of the wrong
 * theme: <script dangerouslySetInnerHTML={{ __html: themeScript }} />
 */
export const themeScript = `(function(){try{var d=document.documentElement,t=localStorage.getItem(${JSON.stringify(
  THEME_KEY
)})||"system",a=localStorage.getItem(${JSON.stringify(
  ACCENT_KEY
)});if(t==="dark"||(t==="system"&&matchMedia("(prefers-color-scheme: dark)").matches))d.classList.add("dark");if(a&&a!=="indigo")d.setAttribute("data-accent",a)}catch(e){}})()`

type ThemeContextValue = {
  theme: Theme
  resolvedTheme: "light" | "dark"
  setTheme: (theme: Theme) => void
  accent: Accent
  setAccent: (accent: Accent) => void
}

const ThemeContext = React.createContext<ThemeContextValue | null>(null)

/**
 * Light, dark or system, plus the app's accent, persisted to localStorage.
 * Pass `defaultAccent` to give an app its own color out of the box.
 */
function ThemeProvider({
  defaultTheme = "system",
  defaultAccent = "indigo",
  children,
}: {
  defaultTheme?: Theme
  defaultAccent?: Accent
  children: React.ReactNode
}) {
  const [theme, setThemeState] = React.useState<Theme>(defaultTheme)
  const [accent, setAccentState] = React.useState<Accent>(defaultAccent)
  const [systemDark, setSystemDark] = React.useState(false)

  React.useEffect(() => {
    const storedTheme = read<Theme>(THEME_KEY, defaultTheme)
    const storedAccent = read<Accent>(ACCENT_KEY, defaultAccent)
    setThemeState(storedTheme)
    setAccentState(storedAccent)
    setSystemDark(systemIsDark())
    applyTheme(storedTheme)
    applyAccent(storedAccent)
  }, [defaultTheme, defaultAccent])

  React.useEffect(() => {
    const query = window.matchMedia("(prefers-color-scheme: dark)")
    const onChange = () => {
      setSystemDark(query.matches)
      if (read<Theme>(THEME_KEY, defaultTheme) === "system") applyTheme("system")
    }
    query.addEventListener("change", onChange)
    return () => query.removeEventListener("change", onChange)
  }, [defaultTheme])

  const value = React.useMemo<ThemeContextValue>(
    () => ({
      theme,
      resolvedTheme: theme === "system" ? (systemDark ? "dark" : "light") : theme,
      setTheme: (next) => {
        write(THEME_KEY, next)
        setThemeState(next)
        applyTheme(next)
      },
      accent,
      setAccent: (next) => {
        write(ACCENT_KEY, next)
        setAccentState(next)
        applyAccent(next)
      },
    }),
    [theme, systemDark, accent]
  )

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

function useTheme() {
  const value = React.useContext(ThemeContext)
  if (!value) throw new Error("useTheme must be used within a ThemeProvider")
  return value
}

export { ThemeProvider, useTheme }
