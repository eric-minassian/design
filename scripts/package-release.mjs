// Assembles the installable package in .release/. CI pushes that directory to
// the `release` branch, which is what apps install: built output, no build step.
import { cpSync, mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs"

const pkg = JSON.parse(readFileSync("package.json", "utf8"))
const out = ".release"

rmSync(out, { recursive: true, force: true })
mkdirSync(out)
cpSync("dist", `${out}/dist`, { recursive: true })
cpSync("src/styles", `${out}/dist/styles`, { recursive: true })
for (const file of ["README.md", "DESIGN.md", "LICENSE"]) cpSync(file, `${out}/${file}`)

const entry = (path) => ({ types: `./dist/${path}.d.ts`, default: `./dist/${path}.js` })

const manifest = {
  name: pkg.name,
  version: pkg.version,
  description: pkg.description,
  license: pkg.license,
  type: pkg.type,
  sideEffects: pkg.sideEffects,
  repository: "github:eric-minassian/design",
  exports: {
    "./styles.css": "./dist/styles/index.css",
    "./utils": entry("lib/utils"),
    "./theme": entry("lib/theme"),
    "./use-mobile": entry("hooks/use-mobile"),
    "./use-highlighted-code": entry("hooks/use-highlighted-code"),
    "./DESIGN.md": "./DESIGN.md",
    "./*": entry("components/*"),
  },
  peerDependencies: pkg.peerDependencies,
  dependencies: pkg.dependencies,
}

writeFileSync(`${out}/package.json`, `${JSON.stringify(manifest, null, 2)}\n`)
console.log(`Packaged ${pkg.name}@${pkg.version} in ${out}/`)
