import { defineConfig } from "tsdown"

export default defineConfig({
  entry: [
    "src/components/*.tsx",
    "src/lib/utils.ts",
    "src/lib/theme.tsx",
    "src/hooks/*.ts",
  ],
  format: "esm",
  outDir: "dist",
  unbundle: true,
  dts: true,
  clean: true,
  platform: "neutral",
  tsconfig: "tsconfig.json",
  // Every component is interactive or composes something that is, so all of it
  // is safe to mark as a client module for React Server Components apps.
  outputOptions: { banner: '"use client";' },
})
