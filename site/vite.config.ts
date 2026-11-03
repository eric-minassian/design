import { fileURLToPath } from "node:url"

import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

const fromRoot = (path: string) => fileURLToPath(new URL(path, import.meta.url))

export default defineConfig({
  root: fromRoot("."),
  base: "/design/",
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": fromRoot("../src"),
      "~": fromRoot("./src"),
    },
  },
  build: {
    outDir: fromRoot("../dist-site"),
    emptyOutDir: true,
    chunkSizeWarningLimit: 1500,
  },
  server: { port: 5199, strictPort: true },
})
