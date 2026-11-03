import * as React from "react"
import { ArrowUpRightIcon } from "lucide-react"

import { Badge } from "@/components/badge"
import { Button } from "@/components/button"
import { Skeleton } from "@/components/skeleton"
import { Code } from "~/components/code"
import { Example } from "~/components/example"
import { PageHeader } from "~/components/page-header"
import type { ComponentDoc } from "~/nav"

type DemoModule = Record<string, unknown>

const demoModules = import.meta.glob<DemoModule>("../demos/*.tsx")
const demoSources = import.meta.glob<string>("../demos/*.tsx", {
  query: "?raw",
  import: "default",
})

type Demo = { name: string; title: string; code: string; Component: React.ComponentType; bare: boolean }
type Loaded = { demos: Demo[]; imports: string; notes: string | null }

/** Published import paths, so the code on the page can be copied straight into an app. */
function publicImports(source: string) {
  return source
    .replaceAll("@/components/", "@eric-minassian/design/")
    .replace("@/lib/utils", "@eric-minassian/design/utils")
    .replace("@/lib/theme", "@eric-minassian/design/theme")
    .replace("@/hooks/use-mobile", "@eric-minassian/design/use-mobile")
    .replace("@/hooks/use-highlighted-code", "@eric-minassian/design/use-highlighted-code")
}

function titleFromName(name: string) {
  const words = name.replace(/([a-z0-9])([A-Z])/g, "$1 $2").toLowerCase()
  return words.charAt(0).toUpperCase() + words.slice(1)
}

/**
 * Each `export function` in a demo file becomes one example, in source order.
 * Its code panel is that function's own text, plus any types and data declared
 * above it, so the docs cannot drift from what is rendering.
 */
function parseDemos(source: string, module: DemoModule): Loaded {
  const matches = [...source.matchAll(/^export function (\w+)/gm)]
  // Where the module's own setup starts: just past its last import.
  const importLines = [...source.matchAll(/^import (?:\{[^}]*\}|[^"{}\n]+) from "[^"]+"$/gm)]
  const lastImport = importLines.at(-1)
  let cursor = lastImport ? lastImport.index + lastImport[0].length : 0

  const demos = matches.map((match) => {
    const name = match[1]!
    const closing = source.indexOf("\n}\n", match.index)
    const end = closing === -1 ? source.length : closing + 2
    // Types, data and helpers above a demo are part of what it takes to write it.
    const setup = source
      .slice(cursor, match.index)
      .replace(/^export const (?:notes|bare)\b[\s\S]*?\n(?=\n|$)/gm, "")
      .replace(/^export (?=const|type)/gm, "")
      .trim()
    const body = source.slice(match.index, end).replace(/^export function/, "function")
    cursor = end
    return {
      name,
      title: titleFromName(name),
      code: publicImports(setup ? `${setup}\n\n${body}` : body),
      Component: module[name] as React.ComponentType,
      bare: Array.isArray(module.bare) && module.bare.includes(name),
    }
  })
  const imports = [...source.matchAll(/^import (?:\{[^}]*\}|[^"{}\n]+) from "@\/[^"]+"$/gm)]
    .map((match) => match[0])
    .join("\n")
  const notes = typeof module.notes === "string" ? module.notes : null
  return { demos, imports: publicImports(imports), notes }
}

/** Components and patterns share this page: both are a list of live examples from a demo file. */
export function ComponentPage({
  doc,
  eyebrow,
  file,
}: {
  doc: ComponentDoc
  eyebrow: string
  file: string
}) {
  const slug = file
  const [loaded, setLoaded] = React.useState<{ slug: string; value: Loaded | null } | null>(null)

  React.useEffect(() => {
    let cancelled = false
    const key = `../demos/${slug}.tsx`
    const loadModule = demoModules[key]
    const loadSource = demoSources[key]
    if (!loadModule || !loadSource) {
      setLoaded({ slug, value: null })
      return
    }
    void Promise.all([loadModule(), loadSource()]).then(([module, source]) => {
      if (!cancelled) setLoaded({ slug, value: parseDemos(source, module) })
    })
    return () => {
      cancelled = true
    }
  }, [slug])

  const current = loaded?.slug === slug ? loaded : null

  return (
    <>
      <PageHeader
        eyebrow={eyebrow}
        title={doc.title}
        description={doc.description}
        actions={
          doc.baseUi ? (
            <Button
              render={
                <a href={`https://base-ui.com/react/components/${doc.baseUi}`} rel="noreferrer" target="_blank" />
              }
              nativeButton={false}
              size="compact"
              variant="outline"
            >
              Base UI
              <ArrowUpRightIcon />
            </Button>
          ) : undefined
        }
      />
      {!current ? (
        <div className="flex flex-col gap-4">
          <Skeleton className="h-52" shape="card" />
          <Skeleton className="h-52" shape="card" />
        </div>
      ) : !current.value ? (
        <Badge variant="warning">No examples yet</Badge>
      ) : (
        <div className="flex flex-col gap-8">
          {current.value.notes && <p className="text-muted-foreground text-sm">{current.value.notes}</p>}
          {current.value.imports && (
            <div className="overflow-hidden rounded-xl border">
              <Code code={current.value.imports} />
            </div>
          )}
          {current.value.demos.map((demo) => (
            <Example key={demo.name} bare={demo.bare} code={demo.code} title={demo.title}>
              <demo.Component />
            </Example>
          ))}
        </div>
      )}
    </>
  )
}
