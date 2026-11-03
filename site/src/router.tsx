import * as React from "react"

/** Hash routing: every deep link works on GitHub Pages without a 404 fallback. */
function currentPath() {
  const hash = window.location.hash.replace(/^#/, "")
  return hash === "" ? "/" : hash
}

function subscribe(callback: () => void) {
  window.addEventListener("hashchange", callback)
  return () => window.removeEventListener("hashchange", callback)
}

export function usePath() {
  return React.useSyncExternalStore(subscribe, currentPath)
}

export function navigate(path: string) {
  window.location.hash = path
}

export function href(path: string) {
  return `#${path}`
}
